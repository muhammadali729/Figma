// pages/index.tsx

'use client';

import React, { useState, useEffect } from 'react';
import Header from '../app/components/Header';
import ProductCard from '../app/components/ProductCard';
import CategoryFilter from '../app/components/CategoryFilter';
import Banner from '../app/components/Banner';
import Footer from '../app/components/Footer';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category?: string;
}

const products: Product[] = [
  { id: 1, name: 'iPhone 14 Pro', price: 999, image: '/i.jpg', category: 'Phones' },
  { id: 2, name: 'MacBook Air', price: 1199, image: '/macbook.jpg', category: 'Laptops' },
  { id: 3, name: 'iPhone 15 Pro Max 512GB Gold', price: 1437, image: '/iphone-15-pro-max-gold.jpg', category: 'Smartphones' },
  { id: 4, name: 'iPhone 15 128GB White', price: 950, image: '/iphone-15-white.jpeg', category: 'Smartphones' },
  { id: 5, name: 'iPhone 15 Pro Max 1TB Gold', price: 1499, image: '/iphone-15-pro-max-1tb-gold.jpg', category: 'Smartphones' },
  { id: 6, name: 'iPhone 15 Pro Max 256GB Deep Purple', price: 1600, image: '/iphone-15-deep-purple.jpeg', category: 'Smartphones' },
  // Add more products as needed
];

const categories = ['All', 'Phones', 'Laptops', 'Smartphones'];

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    setFilteredProducts(
      selectedCategory === 'All'
        ? products
        : products.filter((p) => p.category === selectedCategory)
    );
  }, [selectedCategory]);

  return (
    <div>
      {/* Header Section */}
      <Header />

      {/* Banner Section */}
      <Banner title="Big Summer Sale" subtitle="Up to 50% off on select items" image="/sale-banner.png" />

      {/* Category Filter Section */}
      <CategoryFilter categories={categories} onSelect={setSelectedCategory} />

      {/* Product Listing Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
