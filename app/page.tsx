
'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedCategories from '@/components/FeaturedCategories';
import PopularRestaurants from '@/components/PopularRestaurants';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedCategories />
      <PopularRestaurants />
      <Footer />
    </div>
  );
}
