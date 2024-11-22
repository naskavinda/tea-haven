import React from 'react';
import { Globe, Leaf, Star } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[500px] bg-cover bg-center" style={{backgroundImage: "url('/hero-section.jpg')"}}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl font-serif mb-4">Savor the Moment with Our Curated Teas</h1>
        <p className="text-xl mb-8">Discover our curated collection of premium teas from around the world</p>
        <div className="flex justify-center items-center space-x-8 mb-8">
          <div className="flex flex-col items-center">
            <Globe className="w-8 h-8 mb-2" />
            <p className="text-2xl font-bold">50+</p>
            <p className="text-sm">Countries</p>
          </div>
          <div className="flex flex-col items-center">
            <Leaf className="w-8 h-8 mb-2" />
            <p className="text-2xl font-bold">9</p>
            <p className="text-sm">Tea Categories</p>
          </div>
          <div className="flex flex-col items-center">
            <Star className="w-8 h-8 mb-2" />
            <p className="text-2xl font-bold">10,000+</p>
            <p className="text-sm">Reviews</p>
          </div>
        </div>
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

