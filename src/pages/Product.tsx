import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
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
                {loading && (
                    <p className="text-center text-gray-600 text-lg animate-pulse">
                        Memuat produk...
                    </p>
                )}

                {error && (
                    <p className="text-center text-red-500 text-lg">
                        Error loading data: {error}
                    </p>
                )}

                {!loading && products.length === 0 && (
                    <p className="text-center text-gray-600 text-lg">
                        Produk tidak ditemukan
                    </p>
                )}

                {!loading && !error && products.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} baseURL={baseURL} />
                        ))}
                    </div>
                )}
            </section>

            <Footer />
        </>
    );
}
