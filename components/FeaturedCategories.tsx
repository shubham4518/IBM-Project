
'use client';

import Link from 'next/link';

const categories = [
  {
    id: 1,
    name: 'Pizza',
    image: 'https://readdy.ai/api/search-image?query=Delicious%20pizza%20with%20melted%20cheese%20and%20fresh%20toppings%20on%20wooden%20background%2C%20professional%20food%20photography%20with%20warm%20lighting%20and%20appetizing%20presentation%2C%20simple%20clean%20background%20highlighting%20the%20pizza&width=400&height=300&seq=cat1&orientation=landscape',
    restaurants: 45
  },
  {
    id: 2,
    name: 'Burgers',
    image: 'https://readdy.ai/api/search-image?query=Gourmet%20burger%20with%20fresh%20lettuce%2C%20tomatoes%20and%20cheese%20on%20wooden%20background%2C%20professional%20food%20photography%20with%20warm%20lighting%20and%20appetizing%20presentation%2C%20simple%20clean%20background%20highlighting%20the%20burger&width=400&height=300&seq=cat2&orientation=landscape',
    restaurants: 32
  },
  {
    id: 3,
    name: 'Sushi',
    image: 'https://readdy.ai/api/search-image?query=Fresh%20sushi%20rolls%20with%20salmon%20and%20avocado%20on%20wooden%20background%2C%20professional%20food%20photography%20with%20warm%20lighting%20and%20appetizing%20presentation%2C%20simple%20clean%20background%20highlighting%20the%20sushi&width=400&height=300&seq=cat3&orientation=landscape',
    restaurants: 28
  },
  {
    id: 4,
    name: 'Italian',
    image: 'https://readdy.ai/api/search-image?query=Creamy%20pasta%20dish%20with%20fresh%20herbs%20and%20parmesan%20on%20wooden%20background%2C%20professional%20food%20photography%20with%20warm%20lighting%20and%20appetizing%20presentation%2C%20simple%20clean%20background%20highlighting%20the%20pasta&width=400&height=300&seq=cat4&orientation=landscape',
    restaurants: 38
  },
  {
    id: 5,
    name: 'Chinese',
    image: 'https://readdy.ai/api/search-image?query=Chinese%20stir-fried%20noodles%20with%20vegetables%20and%20sauce%20on%20wooden%20background%2C%20professional%20food%20photography%20with%20warm%20lighting%20and%20appetizing%20presentation%2C%20simple%20clean%20background%20highlighting%20the%20noodles&width=400&height=300&seq=cat5&orientation=landscape',
    restaurants: 41
  },
  {
    id: 6,
    name: 'Desserts',
    image: 'https://readdy.ai/api/search-image?query=Chocolate%20cake%20slice%20with%20berries%20and%20cream%20on%20wooden%20background%2C%20professional%20food%20photography%20with%20warm%20lighting%20and%20appetizing%20presentation%2C%20simple%20clean%20background%20highlighting%20the%20dessert&width=400&height=300&seq=cat6&orientation=landscape',
    restaurants: 25
  }
];

export default function FeaturedCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Popular Categories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our wide variety of cuisines from the best restaurants in your area
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              href={`/menu?category=${category.name.toLowerCase()}`}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{category.name}</h3>
                <p className="text-gray-600">
                  {category.restaurants} restaurants available
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
