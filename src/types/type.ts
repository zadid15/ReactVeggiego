export interface Product {
    id: number;
    name: string;
    category_id: Category['id'];
    price: number;
    stock: number;
    unit: string;
    description: string;
    image: string;
}

interface Category {
    id: number;
    name: string;
}