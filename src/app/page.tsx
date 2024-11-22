import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import PromotionalBanners from '../components/PromotionalBanners';
import CustomerTestimonials from '../components/CustomerTestimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedProducts />
        <PromotionalBanners />
        <CustomerTestimonials />
      </main>
      <Footer />
    </div>
  );
}