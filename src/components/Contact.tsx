import React from 'react';
import { Phone, Mail, MapPin, ArrowRight, MessageSquare } from 'lucide-react';

export function Contact() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-[#1A1A1A] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Let's Make Your Content
              <br />
              <span className="text-[#FF3B3B]">Go Global</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to reach millions of new viewers? Our team is here to help you expand globally.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
            
            <div className="flex items-center space-x-4 group cursor-pointer hover:transform hover:translate-x-2 transition-transform">
              <div className="bg-[#1A1A1A] w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-[#FF3B3B] transition-colors">
                <MessageSquare className="h-8 w-8 text-[#FF3B3B] group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="font-medium text-lg">WhatsApp</p>
                <a href="https://wa.me/918840983876" className="text-[#FF3B3B] hover:text-red-600 text-lg">
                  +91 88409 83876
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 group cursor-pointer hover:transform hover:translate-x-2 transition-transform">
              <div className="bg-[#1A1A1A] w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-[#FF3B3B] transition-colors">
                <Mail className="h-8 w-8 text-[#FF3B3B] group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="font-medium text-lg">Email</p>
                <a href="mailto:business@rebelmedia.in" className="text-[#FF3B3B] hover:text-red-600 text-lg">
                  business@rebelmedia.in
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 group cursor-pointer hover:transform hover:translate-x-2 transition-transform">
              <div className="bg-[#1A1A1A] w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-[#FF3B3B] transition-colors">
                <MapPin className="h-8 w-8 text-[#FF3B3B] group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="font-medium text-lg">Location</p>
                <p className="text-gray-600 text-lg">Based in Mumbai, Serving Creators Worldwide</p>
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="bg-gray-50 p-6 rounded-2xl mt-12">
              <h4 className="font-bold text-lg mb-2">Quick Response Promise</h4>
              <p className="text-gray-600">We typically respond within 2 hours during business hours (IST).</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white p-8 rounded-2xl shadow-xl space-y-6">
            <h3 className="text-2xl font-bold mb-8">Book Your Strategy Call</h3>
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-[#FF3B3B] focus:border-[#FF3B3B] transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-[#FF3B3B] focus:border-[#FF3B3B] transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="channel" className="block text-sm font-medium text-gray-700 mb-2">
                YouTube Channel URL
              </label>
              <input
                type="url"
                id="channel"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-[#FF3B3B] focus:border-[#FF3B3B] transition-colors"
                placeholder="https://youtube.com/c/yourchannel"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Tell us about your goals
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-[#FF3B3B] focus:border-[#FF3B3B] transition-colors"
                placeholder="What languages do you want to reach? What are your growth goals?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#FF3B3B] text-white px-6 py-4 rounded-xl font-medium hover:bg-red-600 transition-colors flex items-center justify-center group"
            >
              Book Your Free Strategy Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Usually responds in 2 hours
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}