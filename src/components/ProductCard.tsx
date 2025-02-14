import type { Product } from "../types/type";

interface ProductCardProps {
    product: Product;
    baseURL: string;
}

export default function ProductCard({ product, baseURL }: ProductCardProps) {
    return (
        <div className="bg-white p-4 rounded-xl shadow-md">
            <img
                src={product.image ? `${baseURL}/${product.image}` : "default.jpg"}
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
