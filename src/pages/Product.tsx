import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Product() {
    return (
        <>
        <Navbar />
            {/* Hero Section */}
            <section className="mt-[150px] pb-10 text-center">
                <h1 className="text-4xl font-bold text-gray-800">Daftar Produk</h1>
                <p className="text-gray-600 mt-2">
                    Temukan sayuran segar terbaik untuk Anda!
                </p>
            </section>
            {/* Produk Grid */}
            <section className="container mx-auto px-4 py-10 min-h-screen">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {/* Produk Card */}
                    <div className="bg-white p-4 rounded-xl shadow-md">
                        <img
                            src="brokoli.jpg"
                            alt="Brokoli"
                            className="w-full h-40 object-cover rounded-lg"
                        />
                        <h3 className="text-lg font-semibold mt-2">Brokoli Segar</h3>
                        <p className="text-gray-600">Rp 15.000/kg</p>
                        <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
                            Beli
                        </button>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-md">
                        <img
                            src="wortel.jpg"
                            alt="Wortel"
                            className="w-full h-40 object-cover rounded-lg"
                        />
                        <h3 className="text-lg font-semibold mt-2">Wortel Manis</h3>
                        <p className="text-gray-600">Rp 10.000/kg</p>
                        <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
                            Beli
                        </button>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-md">
                        <img
                            src="tomat.jpg"
                            alt="Tomat"
                            className="w-full h-40 object-cover rounded-lg"
                        />
                        <h3 className="text-lg font-semibold mt-2">Tomat Merah</h3>
                        <p className="text-gray-600">Rp 12.000/kg</p>
                        <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
                            Beli
                        </button>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-md">
                        <img
                            src="bayam.jpg"
                            alt="Bayam"
                            className="w-full h-40 object-cover rounded-lg"
                        />
                        <h3 className="text-lg font-semibold mt-2">Bayam Organik</h3>
                        <p className="text-gray-600">Rp 8.000/ikat</p>
                        <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
                            Beli
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}