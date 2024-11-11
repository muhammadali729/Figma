// components/Header.js
import React from 'react';

const Header = () => (
  <header className="flex justify-between items-center p-4 bg-black text-white">
    <h1 className="text-lg font-bold">E-Store</h1>
    <nav>
      <a href="#home" className="mr-4">Home</a>
      <a href="#products" className="mr-4">Products</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
);

export default Header;
