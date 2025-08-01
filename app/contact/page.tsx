
'use client';

import React, { useState, ChangeEvent } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: 'ri-phone-line',
      title: 'Phone',
      details: '+91 1234567890',
      description: 'Available 24/7 for customer support'
    },
    {
      icon: 'ri-mail-line',
      title: 'Email',
      details: 'support@foodiehub.com',
      description: 'We respond within 2 hours'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Address',
      details: '123 Food Street, Connaught Place',
      description: 'New Delhi, Delhi 110001'
    },
    {
      icon: 'ri-time-line',
      title: 'Hours',
      details: '24/7 Service',
      description: 'Always here when you need us'
    }
  ];

  const faqItems = [
    {
      question: 'How long does delivery usually take?',
      answer: 'Delivery times vary by restaurant and location, but most orders arrive within 30-45 minutes. You can see estimated delivery times on each restaurant page.'
    },
    {
      question: 'What are your delivery fees?',
      answer: 'Delivery fees typically range from $1.99 to $4.99 depending on distance and restaurant. Many restaurants offer free delivery on orders above a certain amount.'
    },
    {
      question: 'Can I track my order?',
      answer: 'Yes! Once your order is confirmed, you can track it in real-time through our app or website. You\'ll receive notifications at each step of the process.'
    },
    {
      question: 'What if my order is incorrect?',
      answer: 'If there\'s an issue with your order, contact us immediately through the app or call our support line. We\'ll work with the restaurant to resolve the issue quickly.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="bg-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-orange-100">We're here to help with any questions or concerns</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-lg text-gray-700 mb-8">
              Have a question, feedback, or need support? We'd love to hear from you. 
              Send us a message and we'll respond as soon as possible.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                    <i className={`${info.icon} text-white text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                    <p className="text-orange-600 font-medium mb-1">{info.details}</p>
                    <p className="text-gray-600 text-sm">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-check-line text-green-600 text-2xl"></i>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h4>
                <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
              </div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
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
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
                    placeholder="Enter your full name"
                  />
                </div>

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

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
                  >
                    <option value="">Select a subject</option>
                    <option value="order-issue">Order Issue</option>
                    <option value="delivery-problem">Delivery Problem</option>
                    <option value="restaurant-feedback">Restaurant Feedback</option>
                    <option value="app-support">App Support</option>
                    <option value="partnership">Restaurant Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    maxLength={500}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm resize-none"
                    placeholder="Please describe your question or concern in detail"
                  ></textarea>
                  <div className="text-right text-sm text-gray-500 mt-1">
                    {formData.message.length}/500 characters
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-lg font-medium whitespace-nowrap cursor-pointer transition-colors ${
                    isSubmitting
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : 'bg-orange-600 text-white hover:bg-orange-700'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Find Us</h2>
          <p className="text-gray-700 text-center mb-8">
            Visit our headquarters or find us on the map
          </p>

          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1043261777167!2d77.21567831508236!3d28.635308282424768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd371e456c0b%3A0x3fb9b97e30b67b7b!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
