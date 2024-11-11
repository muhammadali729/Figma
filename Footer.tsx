// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-black text-white p-4 mt-8">
    <div className="text-center">
      <p>&copy; 2024 E-Store. All Rights Reserved.</p>
    </div>
    <div className="flex justify-center space-x-4 mt-4">
      <a href="#facebook" className="text-gray-400 hover:text-white">Facebook</a>
      <a href="#twitter" className="text-gray-400 hover:text-white">Twitter</a>
      <a href="#instagram" className="text-gray-400 hover:text-white">Instagram</a>
    </div>
  </footer>
);

export default Footer;
