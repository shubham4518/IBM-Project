
'use client';

import Link from 'next/link';

const restaurants = [
  {
    id: 1,
    name: 'Bella Italia',
    cuisine: 'Italian',
    rating: 4.8,
    deliveryTime: '25-35 min',
    deliveryFee: 2.99,
    image: 'https://readdy.ai/api/search-image?query=Cozy%20Italian%20restaurant%20interior%20with%20warm%20lighting%2C%20rustic%20wooden%20tables%2C%20pizza%20ovens%20in%20background%2C%20professional%20photography%20with%20inviting%20atmosphere%2C%20clean%20simple%20background%20focusing%20on%20restaurant%20ambiance&width=400&height=300&seq=rest1&orientation=landscape',
    featured: true
  },
  {
    id: 2,
    name: 'Sushi Master',
    cuisine: 'Japanese',
    rating: 4.9,
    deliveryTime: '20-30 min',
    deliveryFee: 3.99,
    image: 'https://readdy.ai/api/search-image?query=Modern%20Japanese%20sushi%20restaurant%20interior%20with%20clean%20design%2C%20sushi%20counter%20with%20fresh%20ingredients%2C%20professional%20photography%20with%20minimalist%20aesthetic%2C%20clean%20simple%20background%20focusing%20on%20restaurant%20atmosphere&width=400&height=300&seq=rest2&orientation=landscape',
    featured: true
  },
  {
    id: 3,
    name: 'Burger Palace',
    cuisine: 'American',
    rating: 4.7,
    deliveryTime: '15-25 min',
    deliveryFee: 1.99,
    image: 'https://readdy.ai/api/search-image?query=Modern%20burger%20restaurant%20interior%20with%20industrial%20design%2C%20grill%20kitchen%20in%20background%2C%20casual%20dining%20atmosphere%2C%20professional%20photography%20with%20vibrant%20colors%2C%20clean%20simple%20background%20focusing%20on%20restaurant%20setting&width=400&height=300&seq=rest3&orientation=landscape',
    featured: false
  },
  {
    id: 4,
    name: 'Dragon Kitchen',
    cuisine: 'Chinese',
    rating: 4.6,
    deliveryTime: '30-40 min',
    deliveryFee: 2.49,
    image: 'https://readdy.ai/api/search-image?query=Traditional%20Chinese%20restaurant%20interior%20with%20red%20lanterns%2C%20wooden%20furniture%2C%20authentic%20decor%2C%20professional%20photography%20with%20warm%20ambient%20lighting%2C%20clean%20simple%20background%20focusing%20on%20restaurant%20ambiance&width=400&height=300&seq=rest4&orientation=landscape',
    featured: false
  },
  {
    id: 5,
    name: 'Taco Fiesta',
    cuisine: 'Mexican',
    rating: 4.5,
    deliveryTime: '20-30 min',
    deliveryFee: 2.99,
    image: 'https://readdy.ai/api/search-image?query=Vibrant%20Mexican%20restaurant%20interior%20with%20colorful%20decorations%2C%20traditional%20tiles%2C%20festive%20atmosphere%2C%20professional%20photography%20with%20bright%20colors%2C%20clean%20simple%20background%20focusing%20on%20restaurant%20setting&width=400&height=300&seq=rest5&orientation=landscape',
    featured: false
  },
  {
    id: 6,
    name: 'Green Garden',
    cuisine: 'Healthy',
    rating: 4.8,
    deliveryTime: '25-35 min',
    deliveryFee: 3.49,
    image: 'https://readdy.ai/api/search-image?query=Modern%20healthy%20restaurant%20interior%20with%20plants%2C%20natural%20lighting%2C%20fresh%20ingredients%20displayed%2C%20professional%20photography%20with%20clean%20aesthetic%2C%20clean%20simple%20background%20focusing%20on%20restaurant%20atmosphere&width=400&height=300&seq=rest6&orientation=landscape',
    featured: true
  }
];

export default function PopularRestaurants() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Popular Restaurants</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Order from the most loved restaurants in your neighborhood
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant) => (
            <Link 
              key={restaurant.id} 
              href={`/restaurants/${restaurant.id}`}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border cursor-pointer"
            >
              {restaurant.featured && (
                <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  Featured
                </div>
              )}
              
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{restaurant.name}</h3>
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-star-fill text-yellow-400"></i>
                    </div>
                    <span className="text-sm font-semibold text-gray-700">{restaurant.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{restaurant.cuisine}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-time-line"></i>
                    </div>
                    <span>{restaurant.deliveryTime}</span>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-truck-line"></i>
                    </div>
                    <span>${restaurant.deliveryFee}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/restaurants" className="bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-700 whitespace-nowrap cursor-pointer">
            View All Restaurants
          </Link>
        </div>
      </div>
    </section>
  );
}
