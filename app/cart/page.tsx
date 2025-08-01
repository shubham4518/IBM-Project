
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const cartData = localStorage.getItem('cartData');
    if (cartData) {
      setCartItems(JSON.parse(cartData));
    }
  }, []);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      const updatedItems = cartItems.filter(item => item.id !== id);
      setCartItems(updatedItems);
      localStorage.setItem('cartData', JSON.stringify(updatedItems));
      
      const cartCounts = JSON.parse(localStorage.getItem('cartItems') || '{}');
      delete cartCounts[id];
      localStorage.setItem('cartItems', JSON.stringify(cartCounts));
    } else {
      const updatedItems = cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      );
      setCartItems(updatedItems);
      localStorage.setItem('cartData', JSON.stringify(updatedItems));
      
      const cartCounts = JSON.parse(localStorage.getItem('cartItems') || '{}');
      cartCounts[id] = newQuantity;
      localStorage.setItem('cartItems', JSON.stringify(cartCounts));
    }
    
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = cartItems.length > 0 ? 49 : 0;
  const gst = cartItems.length > 0 ? Math.round(subtotal * 0.18) : 0;
  const total = subtotal + deliveryFee + gst;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Your Cart</h1>
          <Link href="/menu" className="text-orange-600 hover:text-orange-700 font-medium cursor-pointer">
            Continue Shopping
          </Link>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 text-gray-400">
              <i className="ri-shopping-cart-line text-6xl"></i>
            </div>
            <h2 className="text-2xl font-medium text-gray-600 mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Start adding items from our delicious menu!</p>
            <Link href="/menu" className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 whitespace-nowrap cursor-pointer">
              Browse Menu
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-6">Order Items</h2>
                  
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 py-4 border-b last:border-b-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover object-top"
                      />
                      
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-800">{item.name}</h3>
                        <p className="text-orange-600 font-semibold">₹{item.price}</p>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 cursor-pointer"
                        >
                          <i className="ri-subtract-line text-sm"></i>
                        </button>
                        
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 cursor-pointer"
                        >
                          <i className="ri-add-line text-sm"></i>
                        </button>
                      </div>
                      
                      <button
                        onClick={() => updateQuantity(item.id, 0)}
                        className="w-8 h-8 flex items-center justify-center text-red-500 hover:bg-red-50 rounded-full cursor-pointer"
                      >
                        <i className="ri-delete-bin-line"></i>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
                <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span className="font-medium">₹{deliveryFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">GST (18%)</span>
                    <span className="font-medium">₹{gst}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-orange-600">₹{total}</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="w-full bg-orange-600 text-white py-3 rounded-lg font-medium hover:bg-orange-700 whitespace-nowrap cursor-pointer mb-4 text-center block"
                >
                  Proceed to Checkout
                </Link>
                
                <div className="text-sm text-gray-500 text-center">
                  <div className="w-4 h-4 flex items-center justify-center inline-block mr-1">
                    <i className="ri-shield-check-line"></i>
                  </div>
                  Safe and secure payment
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
