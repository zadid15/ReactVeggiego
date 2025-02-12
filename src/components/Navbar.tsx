export default function Navbar() {
    return (
        <>
            {/* Navbar */}
            <nav className="bg-[#C8C8C8]/50 p-4 shadow-md fixed top-0 left-0 right-0 z-10 backdrop-blur-md">
                <div className="container mx-auto flex justify-between items-center">
                    <a href="#" className="text-white text-2xl font-bold">
                        Vegg<span className="text-green-400">iego</span>.
                    </a>
                    {/* Menu */}
                    <ul className="hidden md:flex space-x-6 text-white font-medium">
                        <li>
                            <a href="/" className="hover:text-green-400">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/list-product" className="hover:text-green-400">
                                List Product
                            </a>
                        </li>
                    </ul>
                    {/* Tombol Register */}
                    <a
                        href="#"
                        className="hidden md:inline-block px-4 py-2 bg-white text-green-500 font-semibold rounded-lg hover:bg-green-500"
                    >
                        Register
                    </a>
                    {/* Hamburger Menu (Mobile) */}
                    <button
                        className="md:hidden text-black focus:outline-none"
                        id="menu-toggle"
                    >
                        ☰
                    </button>
                </div>
                {/* Dropdown Menu (Mobile) */}
                <ul
                    className="hidden flex-col bg-[#C8C8C8] text-white space-y-2 p-4 md:hidden"
                    id="nav-links"
                >
                    <li>
                        <a href="#" className="block py-2 hover:text-green-400">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 hover:text-green-400">
                            List Product
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 hover:text-green-400">
                            Register
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}