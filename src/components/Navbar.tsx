export default function Navbar() {
    return (
        <>
            {/* Navbar */}
            <nav className="bg-green-600/30 p-4 shadow-md fixed top-0 left-0 right-0 z-10 backdrop-blur-md">
                <div className="container mx-auto flex justify-between items-center">
                    <a href="#" className="text-white text-2xl font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                        Vegg<span className="text-green-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">iego</span>.
                    </a>
                    {/* Menu */}
                    <ul className="hidden md:flex space-x-6 text-white font-medium">
                        <li className="relative group">
                            <a href="/" className="hover:text-green-600 transition duration-500">
                                Home
                            </a>
                            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-800 origin-left"></span>
                        </li>
                        <li className="relative group">
                            <a href="/list-products" className="hover:text-green-600 transition duration-500">
                                List Products
                            </a>
                            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-800 origin-left"></span>
                        </li>
                    </ul>

                    {/* Tombol Register yang Lebih Keren */}
                    <a
                        href="/register"
                        className="hidden hover:bg-green-600 hover:text-white transition duration-300 md:inline-block px-6 py-2 text-green-600 font-semibold rounded-lg shadow-md 
                        bg-white"
                    >
                        Register
                    </a>
                    {/* Hamburger Menu (Mobile) */}
                    <button className="md:hidden text-black focus:outline-none">
                        ☰
                    </button>
                </div>
                {/* Dropdown Menu (Mobile) */}
                <ul className="hidden flex-col bg-[#C8C8C8] text-white space-y-2 p-4 md:hidden">
                    <li>
                        <a href="/" className="block py-2 hover:text-green-400 transition duration-300">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/list-products" className="block py-2 hover:text-green-400 transition duration-300">
                            List Products
                        </a>
                    </li>
                    <li>
                        <a
                            href="/register"
                            className="block py-2 font-semibold text-center bg-green-400 text-white rounded-lg 
                            hover:bg-green-500 transition duration-300"
                        >
                            Register
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}
