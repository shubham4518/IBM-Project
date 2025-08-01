
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      if (typeof window !== 'undefined') {
        window.location.href = '/';
      }
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      phone: ''
    });
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    resetForm();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <Link href="/" className="text-4xl font-pacifico text-orange-600 mb-8 block">
              FoodieHub
            </Link>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {isLogin ? 'Welcome Back!' : 'Join FoodieHub'}
            </h2>
            <p className="text-gray-600">
              {isLogin 
                ? 'Sign in to your account to start ordering' 
                : 'Create an account and discover amazing food'
              }
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex mb-8">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-3 px-4 text-center font-medium rounded-l-lg transition-colors whitespace-nowrap cursor-pointer ${
                  isLogin
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-3 px-4 text-center font-medium rounded-r-lg transition-colors whitespace-nowrap cursor-pointer ${
                  !isLogin
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Sign Up
              </button>
            </div>

            <form id={isLogin ? "signin-form" : "signup-form"} onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required={!isLogin}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
                    placeholder="Enter your full name"
                  />
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
                  placeholder="Enter your email address"
                />
              </div>

              {!isLogin && (
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required={!isLogin}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
                    placeholder="Enter your phone number"
                  />
                </div>
              )}

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className={showPassword ? 'ri-eye-off-line' : 'ri-eye-line'}></i>
                    </div>
                  </button>
                </div>
              </div>

              {!isLogin && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required={!isLogin}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
                    placeholder="Confirm your password"
                  />
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <Link href="/forgot-password" className="font-medium text-orange-600 hover:text-orange-500 cursor-pointer">
                      Forgot password?
                    </Link>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg font-medium whitespace-nowrap cursor-pointer transition-colors ${
                  isSubmitting
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : 'bg-orange-600 text-white hover:bg-orange-700'
                }`}
              >
                {isSubmitting ? 'Please wait...' : (isLogin ? 'Sign In' : 'Create Account')}
              </button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer transition-colors">
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-google-fill text-red-500"></i>
                  </div>
                  Google
                </button>

                <button className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer transition-colors">
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-facebook-fill text-blue-600"></i>
                  </div>
                  Facebook
                </button>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button
                  onClick={switchMode}
                  className="font-medium text-orange-600 hover:text-orange-500 cursor-pointer"
                >
                  {isLogin ? 'Sign up here' : 'Sign in here'}
                </button>
              </p>
            </div>

            {!isLogin && (
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">
                  By creating an account, you agree to our{' '}
                  <Link href="/terms" className="text-orange-600 hover:text-orange-500 cursor-pointer">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" className="text-orange-600 hover:text-orange-500 cursor-pointer">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
