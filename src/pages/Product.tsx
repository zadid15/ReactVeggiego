import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import apiClient from "../service/apiService";
import type { Product } from "../types/type";

export default function Product() {
    const baseURL = "http://127.0.0.1:8001/storage";
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        apiClient
            .get(`/products`)
            .then((response) => {
                setProducts(response.data.data || []);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p className="text-center text-gray-600">Memuat produk...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">Error loading data: {error}</p>;
    }

    if (products.length === 0) {
        return <p className="text-center text-gray-600">Produk tidak ditemukan</p>;
    }

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
                    {products.map((product) => (
                        <div className="bg-white p-4 rounded-xl shadow-md" key={product.id}>
                            <img
                                src={product.image ? `${baseURL}/${product.image}` : "default.jpg"}
                                alt={product.name}
                                className="w-full h-40 object-cover rounded-lg"
                            />
                            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                            <p className="text-gray-600">Rp {product.price.toLocaleString()}</p>
                            <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
                                Beli
                            </button>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
}
