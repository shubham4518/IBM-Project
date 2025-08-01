
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-3xl font-pacifico text-orange-500 mb-4 block">
              FoodieHub
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Your favorite food delivery platform. Order from the best restaurants and get fresh, delicious meals delivered to your door.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                <i className="ri-facebook-fill"></i>
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                <i className="ri-twitter-fill"></i>
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                <i className="ri-instagram-fill"></i>
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                <i className="ri-linkedin-fill"></i>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/menu" className="text-gray-300 hover:text-orange-500 cursor-pointer">Menu</Link></li>
              <li><Link href="/restaurants" className="text-gray-300 hover:text-orange-500 cursor-pointer">Restaurants</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-orange-500 cursor-pointer">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-orange-500 cursor-pointer">Contact</Link></li>
              <li><Link href="/help" className="text-gray-300 hover:text-orange-500 cursor-pointer">Help Center</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-gray-300 hover:text-orange-500 cursor-pointer">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-orange-500 cursor-pointer">Terms of Service</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-orange-500 cursor-pointer">FAQ</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-orange-500 cursor-pointer">Careers</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              2025 FoodieHub. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-phone-line"></i>
                </div>
                <span className="text-sm">+91 1234567890</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-mail-line"></i>
                </div>
                <span className="text-sm">support@foodiehub.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
