
'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section 
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Professional%20food%20photography%20showcase%20featuring%20diverse%20international%20cuisines%20including%20pasta%2C%20sushi%2C%20burgers%2C%20and%20salads%20arranged%20beautifully%20on%20wooden%20tables%20with%20warm%20ambient%20lighting%2C%20clean%20white%20background%20with%20subtle%20food%20elements%2C%20restaurant%20quality%20presentation%20with%20vibrant%20colors%20and%20appetizing%20details&width=1920&height=1080&seq=hero1&orientation=landscape')`
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex items-center">
          <div className="w-1/2 text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Delicious Food
              <span className="block text-orange-500">Delivered Fresh</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 max-w-lg">
              Discover amazing flavors from your favorite restaurants. Order online and get fresh, hot meals delivered right to your door in minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/menu" className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 whitespace-nowrap cursor-pointer text-center">
                Order Now
              </Link>
              <Link href="/restaurants" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-800 whitespace-nowrap cursor-pointer text-center">
                Browse Restaurants
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
