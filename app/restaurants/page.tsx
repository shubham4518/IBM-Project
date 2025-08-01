
'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function RestaurantsPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filters = [
    { id: 'all', name: 'All Restaurants' },
    { id: 'featured', name: 'Featured' },
    { id: 'fast-delivery', name: 'Fast Delivery' },
    { id: 'high-rated', name: 'Top Rated' }
  ];

  const restaurants = [
    {
      id: 1,
      name: 'Mama Mia Pizza',
      cuisine: 'Italian',
      rating: 4.8,
      deliveryTime: '25-35',
      deliveryFee: 2.99,
      minOrder: 15,
      featured: true,
      image: 'https://readdy.ai/api/search-image?query=Cozy%20Italian%20restaurant%20interior%20with%20warm%20lighting%2C%20checkered%20tablecloths%2C%20wine%20bottles%20on%20shelves%2C%20and%20authentic%20pizza%20oven%20in%20background%2C%20inviting%20atmosphere%20with%20rustic%20wooden%20elements&width=400&height=250&seq=rest1&orientation=landscape',
      tags: ['Pizza', 'Pasta', 'Italian'],
      address: '123 Main Street, Downtown'
    },
    {
      id: 2,
      name: 'Burger Junction',
      cuisine: 'American',
      rating: 4.6,
      deliveryTime: '15-25',
      deliveryFee: 1.99,
      minOrder: 12,
      featured: true,
      image: 'https://readdy.ai/api/search-image?query=Modern%20American%20burger%20restaurant%20with%20industrial%20design%2C%20exposed%20brick%20walls%2C%20neon%20signs%2C%20and%20open%20kitchen%20showing%20grills%2C%20contemporary%20urban%20dining%20atmosphere&width=400&height=250&seq=rest2&orientation=landscape',
      tags: ['Burgers', 'Fries', 'Shakes'],
      address: '456 Oak Avenue, Midtown'
    },
    {
      id: 3,
      name: 'Sakura Sushi',
      cuisine: 'Japanese',
      rating: 4.9,
      deliveryTime: '30-40',
      deliveryFee: 3.99,
      minOrder: 25,
      featured: false,
      image: 'https://readdy.ai/api/search-image?query=Elegant%20Japanese%20sushi%20restaurant%20with%20minimalist%20design%2C%20bamboo%20elements%2C%20sushi%20counter%20with%20fresh%20fish%20display%2C%20zen-like%20atmosphere%20with%20soft%20lighting%20and%20natural%20materials&width=400&height=250&seq=rest3&orientation=landscape',
      tags: ['Sushi', 'Ramen', 'Tempura'],
      address: '789 Cherry Lane, Eastside'
    },
    {
      id: 4,
      name: 'Golden Dragon',
      cuisine: 'Chinese',
      rating: 4.5,
      deliveryTime: '20-30',
      deliveryFee: 2.49,
      minOrder: 18,
      featured: false,
      image: 'https://readdy.ai/api/search-image?query=Traditional%20Chinese%20restaurant%20with%20red%20lanterns%2C%20golden%20decorations%2C%20ornate%20wooden%20furniture%2C%20and%20authentic%20Asian%20architectural%20elements%2C%20warm%20and%20welcoming%20atmosphere&width=400&height=250&seq=rest4&orientation=landscape',
      tags: ['Dim Sum', 'Noodles', 'Stir Fry'],
      address: '321 Dragon Street, Chinatown'
    },
    {
      id: 5,
      name: 'Taco Fiesta',
      cuisine: 'Mexican',
      rating: 4.7,
      deliveryTime: '18-28',
      deliveryFee: 1.99,
      minOrder: 10,
      featured: true,
      image: 'https://readdy.ai/api/search-image?query=Vibrant%20Mexican%20restaurant%20with%20colorful%20decorations%2C%20papel%20picado%20banners%2C%20wooden%20tables%2C%20cacti%20plants%2C%20and%20traditional%20Mexican%20artwork%2C%20festive%20and%20lively%20atmosphere&width=400&height=250&seq=rest5&orientation=landscape',
      tags: ['Tacos', 'Burritos', 'Nachos'],
      address: '567 Fiesta Boulevard, Westside'
    },
    {
      id: 6,
      name: 'Café Parisien',
      cuisine: 'French',
      rating: 4.4,
      deliveryTime: '35-45',
      deliveryFee: 4.99,
      minOrder: 30,
      featured: false,
      image: 'https://readdy.ai/api/search-image?query=Charming%20French%20bistro%20with%20vintage%20furniture%2C%20chalkboard%20menu%2C%20wine%20racks%2C%20elegant%20table%20settings%2C%20and%20Parisian-style%20d%C3%A9cor%20with%20soft%20romantic%20lighting&width=400&height=250&seq=rest6&orientation=landscape',
      tags: ['Pastries', 'Croissants', 'Coffee'],
      address: '890 Paris Avenue, Arts District'
    }
  ];

  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesFilter = selectedFilter === 'all' || 
      (selectedFilter === 'featured' && restaurant.featured) ||
      (selectedFilter === 'fast-delivery' && parseInt(restaurant.deliveryTime.split('-')[0]) <= 20) ||
      (selectedFilter === 'high-rated' && restaurant.rating >= 4.7);
    
    const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="bg-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Restaurants</h1>
          <p className="text-xl text-orange-100">Discover amazing restaurants in your area</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search restaurants or cuisines..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 flex items-center justify-center">
                <i className="ri-search-line text-gray-400"></i>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-3 rounded-lg font-medium whitespace-nowrap cursor-pointer transition-colors text-sm ${
                  selectedFilter === filter.id
                    ? 'bg-orange-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-orange-50 border border-gray-200'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <div key={restaurant.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover object-top"
                />
                {restaurant.featured && (
                  <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                  <div className="w-3 h-3 flex items-center justify-center">
                    <i className="ri-star-fill text-yellow-400 text-sm"></i>
                  </div>
                  <span className="text-sm font-medium">{restaurant.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">{restaurant.name}</h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {restaurant.cuisine}
                  </span>
                </div>
                
                <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-time-line"></i>
                    </div>
                    <span>{restaurant.deliveryTime} min</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-truck-line"></i>
                    </div>
                    <span>${restaurant.deliveryFee}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-wallet-line"></i>
                    </div>
                    <span>Min ${restaurant.minOrder}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1 mb-3 text-sm text-gray-500">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-map-pin-line"></i>
                  </div>
                  <span>{restaurant.address}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {restaurant.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 font-medium whitespace-nowrap cursor-pointer transition-colors">
                  View Menu
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredRestaurants.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <i className="ri-restaurant-line text-gray-400 text-2xl"></i>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No restaurants found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
