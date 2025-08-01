'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function CheckoutPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [orderPlaced, setOrderPlaced] = useState(false);
  
  const orderDetails = {
    orderId: 'FH' + Math.random().toString(36).substr(2, 9).toUpperCase(),
    items: [
      { name: 'Margherita Pizza', quantity: 2, price: 649 },
      { name: 'Pav Bhaji', quantity: 1, price: 89 },
      { name: 'Chicken Biryani', quantity: 1, price: 299 }
    ],
    subtotal: 1687,
    deliveryFee: 49,
    gst: 304,
    total: 2040,
    estimatedDelivery: '25-30 minutes'
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setOrderPlaced(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-orange-600 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Processing Your Order</h2>
            <p className="text-gray-600">Please wait while we confirm your order...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-8 text-white text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-check-line text-4xl text-white"></i>
            </div>
            <h1 className="text-3xl font-bold mb-2">Thank You for Your Order!</h1>
            <p className="text-green-100 text-lg">Your delicious meal is on its way</p>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Order Details</h2>
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-600">Order ID:</span>
                    <span className="font-bold text-orange-600">#{orderDetails.orderId}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-600">Estimated Delivery:</span>
                    <span className="font-semibold text-green-600">{orderDetails.estimatedDelivery}</span>
                  </div>
                </div>

                <h3 className="font-semibold mb-3 text-gray-800">Items Ordered:</h3>
                <div className="space-y-3">
                  {orderDetails.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200">
                      <div>
                        <span className="font-medium text-gray-800">{item.name}</span>
                        <span className="text-gray-500 ml-2">x{item.quantity}</span>
                      </div>
                      <span className="font-semibold text-orange-600">₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Payment Summary</h2>
                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">₹{orderDetails.subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span className="font-medium">₹{orderDetails.deliveryFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">GST (18%)</span>
                    <span className="font-medium">₹{orderDetails.gst}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total Paid</span>
                      <span className="text-green-600">₹{orderDetails.total}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-start">
                    <div className="w-5 h-5 flex items-center justify-center mt-0.5 mr-3">
                      <i className="ri-information-line text-blue-500"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-1">Order Status Updates</h4>
                      <p className="text-blue-700 text-sm">You'll receive SMS and email updates about your order status and delivery progress.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/menu" 
                  className="bg-orange-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-700 text-center whitespace-nowrap cursor-pointer"
                >
                  Order Again
                </Link>
                <Link 
                  href="/restaurants" 
                  className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-200 text-center whitespace-nowrap cursor-pointer"
                >
                  Browse Restaurants
                </Link>
                <Link 
                  href="/" 
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 text-center whitespace-nowrap cursor-pointer"
                >
                  Back to Home
                </Link>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center space-x-2 text-gray-600">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-customer-service-line"></i>
                </div>
                <span className="text-sm">Need help? Contact us at +91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}