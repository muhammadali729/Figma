// components/ProductCard.tsx
import React from 'react';

interface Product {
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className="border p-4 rounded-lg shadow-md">
    <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
    <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
    <p className="text-gray-700 mt-1">${product.price}</p>
    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Buy Now</button>
  </div>
);

export default ProductCard;
