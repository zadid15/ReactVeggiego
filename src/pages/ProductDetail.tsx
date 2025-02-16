import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import apiClient from "../service/apiService";
import type { Product } from "../types/type";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../pages/auth/AuthContext";

export default function ProductDetail() {
    const { slug } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    const { user } = useAuth();

    useEffect(() => {
        apiClient
            .get(`/product/${slug}`)
            .then((response) => {
                setProduct(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, [slug]);

    const handleBuyNow = () => {
        if (!product) return;

        // Jika user belum login, redirect ke halaman login
        if (!user) {
            alert("Silakan login terlebih dahulu untuk membeli produk.");
            navigate("/login");
            return;
        }

        // Simpan produk yang dipilih ke localStorage untuk diakses di halaman Order
        localStorage.setItem("selectedProduct", JSON.stringify(product));

        // Redirect ke halaman Order untuk konfirmasi pembelian
        navigate("/order");
    };

    if (loading)
        return <p className="text-center text-gray-600">Memuat produk...</p>;
    if (error)
        return <p className="text-center text-red-500">Error: {error}</p>;
    if (!product)
        return <p className="text-center text-gray-600">Produk tidak ditemukan</p>;

    return (
        <>
            <Navbar />
            <section className="container mx-auto px-4 py-10 min-h-screen mt-[80px]">
                {/* Tombol Kembali */}
                <Link to="/list-products">
                    <button className="mb-5 bg-green-500 text-white py-2 px-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition duration-300">
                        Kembali
                    </button>
                </Link>
                <div className="bg-white shadow-lg rounded-xl p-6">
                    {/* Nama Produk */}
                    <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>

                    {/* Gambar Full-Width */}
                    <div className="mt-4">
                        <img
                            src={
                                product.image
                                    ? `http://127.0.0.1:8001/storage/${product.image}`
                                    : "default.jpg"
                            }
                            alt={product.name}
                            className="w-full border-3 border-gray-300 max-h-[400px] object-cover rounded-lg"
                        />
                    </div>

                    {/* Deskripsi & Informasi Produk */}
                    <div className="mt-6 space-y-2">
                        <p className="text-gray-700 text-lg">{product.description}</p>
                        <p className="text-gray-600 text-lg">
                            Stok: <span className="font-semibold">{product.stock}</span>
                        </p>
                        <p className="text-gray-800 text-3xl font-bold">
                            Rp {product.price?.toLocaleString() ?? "Loading..."}
                        </p>
                    </div>

                    {/* Tombol Beli */}
                    <button
                        onClick={handleBuyNow}
                        className="mt-6 bg-green-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-green-600 transition duration-300"
                    >
                        Beli Sekarang
                    </button>
                </div>
            </section>
            <Footer />
        </>
    );
}
