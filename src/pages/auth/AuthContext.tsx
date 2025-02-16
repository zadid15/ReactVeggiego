import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
    user: any;
    token: string | null;
    login: (user: any, token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<any>(null);
    const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (user: any, token: string) => {
        setUser(user);
        setToken(token);
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
    };

    const logout = async () => {
        try {
            if (!token) {
                // Jika tidak ada token, langsung hapus data user di client
                setUser(null);
                setToken(null);
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                navigate("/login");
                return;
            }
    
            // Kirim request logout ke backend
            await axios.post(
                "http://127.0.0.1:8001/api/logout",
                {},
                {
                    headers: { Authorization: `Bearer ${token}` },
                    withCredentials: false, // Nonaktifkan, karena pakai token header, bukan cookie
                }
            );
    
            // Hapus user dari state dan localStorage setelah logout berhasil
            setUser(null);
            setToken(null);
            localStorage.removeItem("token");
            localStorage.removeItem("user");
    
            navigate("/login"); // Redirect ke halaman login setelah logout
        } catch (error: any) {
            console.error("Logout gagal", error);
    
            if (error.response) {
                console.error("Server Response:", error.response.data);
            } else if (error.request) {
                console.error("No Response from Server:", error.request);
            } else {
                console.error("Request Setup Error:", error.message);
            }
    
            alert("Terjadi kesalahan saat logout. Coba lagi nanti.");
        }
    };
    
    

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth harus digunakan dalam AuthProvider");
    return context;
};
