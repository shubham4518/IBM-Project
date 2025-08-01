
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cartData = localStorage.getItem('cartItems');
      if (cartData) {
        const items = JSON.parse(cartData);
        const totalItems = (Object.values(items) as number[]).reduce((sum, count) => sum + count, 0);
        setCartItems(totalItems);
      }
    };

    updateCartCount();
    
    window.addEventListener('storage', updateCartCount);
    window.addEventListener('cartUpdated', updateCartCount);
    
    return () => {
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-pacifico text-orange-600">FoodieHub</div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-orange-600 font-medium">Home</Link>
            <Link href="/menu" className="text-gray-700 hover:text-orange-600 font-medium">Menu</Link>
            <Link href="/restaurants" className="text-gray-700 hover:text-orange-600 font-medium">Restaurants</Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-600 font-medium">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-orange-600 font-medium">Contact</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative p-2 text-gray-700 hover:text-orange-600 cursor-pointer">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-shopping-cart-line text-xl"></i>
              </div>
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </Link>
            
            <Link href="/login" className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 whitespace-nowrap cursor-pointer">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}