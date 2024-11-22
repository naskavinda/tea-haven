import React from 'react';
import Image from 'next/image';

const products = [
  { id: 1, name: 'Green Tea', price: 12.99, image: '/green-tea.jpg' },
  { id: 2, name: 'Earl Grey', price: 14.99, image: '/earl-grey.jpg' },
  { id: 3, name: 'Black tea', price: 11.99, image: '/black-tea.jpg' },
  { id: 4, name: 'Golden Tea', price: 16.99, image: '/golden-tea.jpg' },
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-serif mb-8 text-center">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
            <Image 
              src={product.image} 
              alt={product.name} 
              width={200}
              height={200}
              className="w-full h-48 object-cover mb-4 rounded" 
            />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;

