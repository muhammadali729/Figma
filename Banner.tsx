// components/Banner.tsx
import React from 'react';

interface BannerProps {
  title: string;
  subtitle: string;
  image: string;
}

const Banner: React.FC<BannerProps> = ({ title, subtitle, image }) => (
  <div className="relative h-64 bg-black text-white flex items-center justify-center">
    <img src={image} alt={title} className="absolute w-full h-full object-cover opacity-50" />
    <div className="relative text-center">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="mt-2">{subtitle}</p>
    </div>
  </div>
);

export default Banner;
