import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../pages/auth/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Product {
    id: number;
    name: string;
    price: number;
    image?: string;
    description?: string;
    stock?: number;
}

export default function Order() {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [quantity, setQuantity] = useState<number>(1);
    const { user, token } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        // Ambil produk yang dipilih dari localStorage
        const storedProduct = localStorage.getItem("selectedProduct");
        if (storedProduct) {
            setSelectedProduct(JSON.parse(storedProduct));
        } else {
            // Jika tidak ada produk, kembali ke halaman produk
            navigate("/");
        }
    }, [navigate]);

    const handleConfirmOrder = async () => {
        if (!selectedProduct) return;
        if (!user) {
            alert("Silakan login terlebih dahulu");
            navigate("/login");
            return;
        }

        const totalPrice = selectedProduct.price * quantity;

        // Data order yang akan dikirim ke backend
        const orderData = {
            total_price: totalPrice,
            order_items: [
                {
                    product_id: selectedProduct.id,
                    quantity: quantity,
                    price_per_unit: selectedProduct.price,
                    total_price: totalPrice,
                },
            ],
        };

        try {
            await axios.post("http://127.0.0.1:8001/api/orders", orderData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            alert("Pesanan berhasil dibuat!");
            localStorage.removeItem("selectedProduct"); // Hapus produk dari localStorage setelah order dibuat
            navigate("/"); // Redirect ke halaman utama atau ke halaman konfirmasi order
        } catch (error) {
            console.error("Gagal membuat pesanan:", error);
            alert("Terjadi kesalahan saat membuat pesanan.");
        }
    };

    if (!selectedProduct) return <p>Memuat detail pesanan...</p>;

    return (
        <>
            <Navbar />
            <section className="container mx-auto px-4 py-10 min-h-screen mt-[80px]">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Konfirmasi Pesanan</h1>
                <div className="bg-white shadow-lg rounded-xl p-6">
                    <div className="flex flex-col md:flex-row items-center">
                        <img
                            src={
                                selectedProduct.image
                                    ? `http://127.0.0.1:8001/storage/${selectedProduct.image}`
                                    : "default.jpg"
                            }
                            alt={selectedProduct.name}
                            className="w-full md:w-1/3 object-cover rounded-lg"
                        />
                        <div className="md:ml-6 mt-4 md:mt-0">
                            <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
                            <p className="mt-2 text-gray-700">{selectedProduct.description}</p>
                            <p className="mt-2 text-gray-600">
                                Harga per unit: Rp {selectedProduct.price.toLocaleString()}
                            </p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <label htmlFor="quantity" className="block text-gray-700 font-medium">
                            Jumlah:
                        </label>
                        <input
                            id="quantity"
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                            className="mt-1 border px-3 py-2 rounded"
                        />
                    </div>
                    <div className="mt-4">
                        <p className="text-lg">
                            Total Harga:{" "}
                            <span className="font-semibold">
                                Rp {(selectedProduct.price * quantity).toLocaleString()}
                            </span>
                        </p>
                    </div>
                    <button
                        onClick={handleConfirmOrder}
                        className="mt-6 bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300"
                    >
                        Konfirmasi Pesanan
                    </button>
                </div>
            </section>
            <Footer />
        </>
    );
}
