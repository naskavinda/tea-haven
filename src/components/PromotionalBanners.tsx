import React from 'react';

const PromotionalBanners: React.FC = () => {
  return (
    <section className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-green-100 p-8 rounded-lg">
          <h3 className="text-2xl font-serif mb-4">New Arrivals</h3>
          <p className="mb-4">Discover our latest collection of exotic teas</p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Shop New Arrivals
          </button>
        </div>
        <div className="bg-yellow-100 p-8 rounded-lg">
          <h3 className="text-2xl font-serif mb-4">Special Offer</h3>
          <p className="mb-4">Get 20% off on all herbal teas this week</p>
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
            Shop Herbal Teas
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanners;

