// components/CategoryFilter.tsx
import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  onSelect: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, onSelect }) => (
  <div className="flex space-x-4 my-4">
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => onSelect(category)}
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        {category}
      </button>
    ))}
  </div>
);

export default CategoryFilter;
