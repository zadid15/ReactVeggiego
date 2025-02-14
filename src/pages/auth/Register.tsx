import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
    const navigate = useNavigate(); // Untuk redirect ke halaman login
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        address: "",
        phone: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await axios.post("http://127.0.0.1:8001/api/register", form);
            navigate("/login"); // Redirect ke login setelah sukses
        } catch (err: any) {
            if (err.response) {
                setError(err.response.data.message || "Registrasi gagal, coba lagi.");
            } else {
                setError("Terjadi kesalahan, coba lagi.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 text-center">Register</h2>

                {error && <p className="text-center mt-4 text-sm text-red-500">{error}</p>}

                <form className="mt-6" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
                            placeholder="Masukkan nama anda"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
                            placeholder="Masukkan email anda"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
                            placeholder="Masukkan password anda"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={form.address}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
                            placeholder="Masukkan alamat anda"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
                            placeholder="Masukkan nomor telepon anda"
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-6 w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
                        disabled={loading}
                    >
                        {loading ? "Processing..." : "Register"}
                    </button>
                </form>
                <p className="mt-4 text-sm text-gray-600 text-center">
                    Sudah punya akun?{" "}
                    <Link to="/login" className="text-green-500 hover:underline">
                        Login disini
                    </Link>
                </p>
            </div>
        </div>
    );
}
