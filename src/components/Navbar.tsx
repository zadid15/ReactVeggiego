import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../pages/auth/AuthContext";

export default function Navbar() {
    const { user, logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Navbar */}
            <nav className="bg-green-600/30 p-4 shadow-md fixed top-0 left-0 right-0 z-10 backdrop-blur-md">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/" className="text-white text-2xl font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                        Vegg<span className="text-green-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">iego</span>.
                    </Link>

                    {/* Menu Desktop */}
                    <ul className="hidden md:flex space-x-6 text-white font-medium">
                        <li className="relative group">
                            <Link to="/" className="hover:text-green-600 transition duration-500">
                                Home
                            </Link>
                            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </li>
                        <li className="relative group">
                            <Link to="/list-products" className="hover:text-green-600 transition duration-500">
                                List Products
                            </Link>
                            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </li>
                    </ul>

                    {/* Register/Login/Logout */}
                    <div className="hidden md:flex space-x-4">
                        {!user ? (
                            <>
                                <Link
                                    to="/register"
                                    className="px-6 py-2 text-green-600 font-semibold rounded-lg shadow-md bg-white hover:bg-green-600 hover:text-white transition duration-300"
                                >
                                    Register
                                </Link>
                                <Link
                                    to="/login"
                                    className="px-6 py-2 text-white font-semibold rounded-lg bg-green-600 hover:bg-green-700 transition duration-300"
                                >
                                    Login
                                </Link>
                            </>
                        ) : (
                            <button
                                onClick={logout}
                                className="px-6 py-2 text-white font-semibold rounded-lg bg-red-500 hover:bg-red-600 transition duration-300"
                            >
                                Logout
                            </button>
                        )}
                    </div>

                    {/* Hamburger Menu (Mobile) */}
                    <button
                        className="md:hidden text-white text-2xl focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        ☰
                    </button>
                </div>

                {/* Dropdown Menu (Mobile) */}
                {isOpen && (
                    <ul className="flex flex-col bg-[#C8C8C8] text-white space-y-2 p-4 md:hidden">
                        <li>
                            <Link to="/" className="block py-2 hover:text-green-400 transition duration-300" onClick={() => setIsOpen(false)}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/list-products" className="block py-2 hover:text-green-400 transition duration-300" onClick={() => setIsOpen(false)}>
                                List Products
                            </Link>
                        </li>
                        {!user ? (
                            <>
                                <li>
                                    <Link
                                        to="/register"
                                        className="block py-2 font-semibold text-center bg-green-400 text-white rounded-lg hover:bg-green-500 transition duration-300"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Register
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/login"
                                        className="block py-2 font-semibold text-center bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Login
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <li>
                                <button
                                    onClick={() => {
                                        logout();
                                        setIsOpen(false);
                                    }}
                                    className="block w-full py-2 font-semibold text-center bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
                                >
                                    Logout
                                </button>
                            </li>
                        )}
                    </ul>
                )}
            </nav>
        </>
    );
}
