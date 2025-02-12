export default function Browse() {
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
                            <a href="#" className="hover:text-green-400">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-green-400">
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
            {/* Hero Section */}
            <section className="bg-[url('/assets/images/hero/hero.png')] bg-no-repeat bg-cover bg-center min-h-screen w-full">
                <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                    <h1 className="text-white text-3xl md:text-5xl lg:text-[64px] font-extrabold">
                        Belanja <span className="text-green-400">Sayur</span> Tanpa Ribet, <br />
                        Sehat Tanpa Batas!
                    </h1>
                </div>
            </section>
            {/* Keunggulan Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Kenapa Memilih{" "}
                        <span className="text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                            Vegg
                        </span>
                        <span className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] text-green-300">
                            iego?
                        </span>
                    </h2>
                    <p className="text-gray-600 mt-4 text-lg">
                        Kami menyediakan sayuran segar langsung dari petani dengan layanan
                        terbaik.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        {/* Card 1 */}
                        <div className="bg-gray-100 p-6 rounded-2xl shadow-md flex flex-col items-center">
                            <img src="/assets/images/icons/fresh.svg" alt="Segar" className="w-16 h-16 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-700">Sayuran Segar</h3>
                            <p className="text-gray-600 mt-2 text-center">
                                Dijamin fresh langsung dari petani pilihan.
                            </p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-gray-100 p-6 rounded-2xl shadow-md flex flex-col items-center">
                            <img
                                src="/assets/images/icons/express-delivery.svg"
                                alt="Cepat"
                                className="w-16 h-16 mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-700">
                                Pengiriman Cepat
                            </h3>
                            <p className="text-gray-600 mt-2 text-center">
                                Pesanan dikirim dalam waktu kurang dari 24 jam.
                            </p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-gray-100 p-6 rounded-2xl shadow-md flex flex-col items-center">
                            <img src="/assets/images/icons/organic.svg" alt="Organik" className="w-16 h-16 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-700">100% Organik</h3>
                            <p className="text-gray-600 mt-2 text-center">
                                Tanpa bahan kimia, sehat dan aman dikonsumsi.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Cara Kerja Section */}
            <section className="py-20 bg-green-500">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Cara{" "}
                        <span className="text-green-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                            Kerja
                        </span>{" "}
                        Kami
                    </h2>
                    <p className="text-white mt-4 text-lg">
                        Belanja sayur segar hanya dalam beberapa langkah mudah.
                    </p>
                    <div className="mt-12 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-white text-black flex items-center justify-center rounded-full text-2xl">
                                1
                            </div>
                            <h3 className="mt-4 text-xl text-white font-semibold">
                                Pilih Sayuran
                            </h3>
                            <p className="text-gray-200 max-w-xs">
                                Pilih sayur segar yang ingin Anda beli dari katalog kami.
                            </p>
                        </div>
                        {/* Step 2 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-white text-black flex items-center justify-center rounded-full text-2xl">
                                2
                            </div>
                            <h3 className="mt-4 text-xl text-white font-semibold">
                                Lakukan Pemesanan
                            </h3>
                            <p className="text-gray-200 max-w-xs">
                                Masukkan pesanan Anda dan pilih metode pembayaran.
                            </p>
                        </div>
                        {/* Step 3 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-white text-black flex items-center justify-center rounded-full text-2xl">
                                3
                            </div>
                            <h3 className="mt-4 text-xl text-white font-semibold">
                                Terima Pesanan
                            </h3>
                            <p className="text-gray-200 max-w-xs">
                                Sayur segar langsung dikirim ke rumah Anda dalam 24 jam.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Testimoni Pelanggan */}
            <section className="py-20 bg-white">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
                        Apa Kata <span className="text-green-400">Pelanggan?</span>
                    </h2>
                    <p className="text-gray-600 mt-4 text-center text-lg">
                        Lihat pengalaman pelanggan yang sudah berbelanja di Veggiego!
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                        {/* Testimoni 1 */}
                        <div className="bg-gray-100 p-6 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
                            <p className="text-gray-700 italic">
                                "Sayurnya segar banget! Pengirimannya juga cepat. Jadi langganan!"
                            </p>
                            <div className="mt-4 flex items-center">
                                <img
                                    src="marah.webp"
                                    className="w-12 h-12 rounded-full mr-3"
                                    alt="Pelanggan"
                                />
                                <h4 className="font-semibold text-green-600">Amanda, Jakarta</h4>
                            </div>
                        </div>
                        {/* Testimoni 2 */}
                        <div className="bg-gray-100 p-6 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
                            <p className="text-gray-700 italic">
                                "Baru pertama beli dan puas banget. Harga terjangkau &amp; organik!"
                            </p>
                            <div className="mt-4 flex items-center">
                                <img
                                    src="marah.webp"
                                    className="w-12 h-12 rounded-full mr-3"
                                    alt="Pelanggan"
                                />
                                <h4 className="font-semibold text-green-600">Budi, Bandung</h4>
                            </div>
                        </div>
                        {/* Testimoni 3 */}
                        <div className="bg-gray-100 p-6 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
                            <p className="text-gray-700 italic">
                                "Belanja sayur jadi lebih gampang! Ga perlu ke pasar lagi."
                            </p>
                            <div className="mt-4 flex items-center">
                                <img
                                    src="marah.webp"
                                    className="w-12 h-12 rounded-full mr-3"
                                    alt="Pelanggan"
                                />
                                <h4 className="font-semibold text-green-600">Siti, Surabaya</h4>
                            </div>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
                            <p className="text-gray-700 italic">
                                "Belanja sayur jadi lebih gampang! Ga perlu ke pasar lagi."
                            </p>
                            <div className="mt-4 flex items-center">
                                <img
                                    src="marah.webp"
                                    className="w-12 h-12 rounded-full mr-3"
                                    alt="Pelanggan"
                                />
                                <h4 className="font-semibold text-green-600">Siti, Surabaya</h4>
                            </div>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
                            <p className="text-gray-700 italic">
                                "Belanja sayur jadi lebih gampang! Ga perlu ke pasar lagi."
                            </p>
                            <div className="mt-4 flex items-center">
                                <img
                                    src="marah.webp"
                                    className="w-12 h-12 rounded-full mr-3"
                                    alt="Pelanggan"
                                />
                                <h4 className="font-semibold text-green-600">Siti, Surabaya</h4>
                            </div>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
                            <p className="text-gray-700 italic">
                                "Belanja sayur jadi lebih gampang! Ga perlu ke pasar lagi."
                            </p>
                            <div className="mt-4 flex items-center">
                                <img
                                    src="marah.webp"
                                    className="w-12 h-12 rounded-full mr-3"
                                    alt="Pelanggan"
                                />
                                <h4 className="font-semibold text-green-600">Siti, Surabaya</h4>
                            </div>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
                            <p className="text-gray-700 italic">
                                "Belanja sayur jadi lebih gampang! Ga perlu ke pasar lagi."
                            </p>
                            <div className="mt-4 flex items-center">
                                <img
                                    src="marah.webp"
                                    className="w-12 h-12 rounded-full mr-3"
                                    alt="Pelanggan"
                                />
                                <h4 className="font-semibold text-green-600">Siti, Surabaya</h4>
                            </div>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
                            <p className="text-gray-700 italic">
                                "Belanja sayur jadi lebih gampang! Ga perlu ke pasar lagi."
                            </p>
                            <div className="mt-4 flex items-center">
                                <img
                                    src="marah.webp"
                                    className="w-12 h-12 rounded-full mr-3"
                                    alt="Pelanggan"
                                />
                                <h4 className="font-semibold text-green-600">Siti, Surabaya</h4>
                            </div>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
                            <p className="text-gray-700 italic">
                                "Belanja sayur jadi lebih gampang! Ga perlu ke pasar lagi."
                            </p>
                            <div className="mt-4 flex items-center">
                                <img
                                    src="marah.webp"
                                    className="w-12 h-12 rounded-full mr-3"
                                    alt="Pelanggan"
                                />
                                <h4 className="font-semibold text-green-600">Siti, Surabaya</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Call to Action */}
            <section className="py-20 bg-green-600 text-white text-center">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Mulai Belanja Sayur Segar Hari Ini!
                    </h2>
                    <p className="mt-4 text-lg">
                        Pesan sekarang dan nikmati sayur segar langsung dari petani.
                    </p>
                    <a
                        href="#"
                        className="mt-6 inline-block px-8 py-3 bg-white text-green-500 font-semibold text-lg rounded-full shadow-md hover:bg-gray-200 transition"
                    >
                        Belanja Sekarang
                    </a>
                </div>
            </section>
            {/* Footer */}
            <footer className="bg-gray-900 text-white py-10">
                <div className="container mx-auto text-center">
                    <h3 className="text-2xl font-bold">
                        Vegg<span className="text-green-400">iego</span>.
                    </h3>
                    <p className="mt-2 text-gray-400">Belanja sayur segar tanpa ribet.</p>
                    <div className="flex justify-center space-x-6 mt-4">
                        <a href="#" className="hover:text-green-400">
                            Instagram
                        </a>
                        <a href="#" className="hover:text-green-400">
                            Facebook
                        </a>
                        <a href="#" className="hover:text-green-400">
                            WhatsApp
                        </a>
                    </div>
                    <p className="mt-6 text-gray-500 text-sm">
                        © 2025 Veggiego. All rights reserved.
                    </p>
                </div>
            </footer>
        </>

    )
}