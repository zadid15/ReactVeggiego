import { useNavigate } from "react-router-dom";
import { Product } from "../types/type";

export default function ProductCard({ product }: { product: Product }) {
    const navigate = useNavigate();

    console.log(product); // Debugging

    return (
        <div
            className="bg-white p-4 rounded-xl shadow-md cursor-pointer hover:shadow-lg transition"
            onClick={() => navigate(`/product/${product.slug}`)}
        >
            <img
                src={product.image ? `http://127.0.0.1:8001/storage/${product.image}` : "default.jpg"}
                alt={product.name}
                className="w-full h-40 object-cover rounded-lg border-3 border-gray-300"
            />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-600 mt-[5px]">Stok: {product.stock}</p>
            <p className="text-gray-600 font-bold mt-2">
                Rp {product.price.toLocaleString()}
            </p>
        </div>
    );
}
