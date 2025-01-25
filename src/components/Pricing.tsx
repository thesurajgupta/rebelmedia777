import React from 'react';
import { Check, ArrowRight, MessageSquare } from 'lucide-react';

const features = [
  'Professional dubbing in any language',
  'Viral-worthy thumbnail design',
  'Full social media management',
  'Growth strategy consulting',
  'Priority support',
  'Custom analytics dashboard'
];

export function Pricing() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-[#1A1A1A] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tailored Solutions for
              <br />
              <span className="text-[#FF3B3B]">Your Global Growth</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              No one-size-fits-all plans. Get a custom solution that matches your exact needs and goals.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Custom Plan Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-shadow">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Tailored for Your Ambitions</h2>
              <p className="text-xl text-gray-600">
                Tell us what you need: Dubbing, Editing, or Full Social Media Management.
                We'll craft a 100% custom plan.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {features.map((feature) => (
                <div key={feature} className="flex items-center space-x-3">
                  <Check className="h-6 w-6 text-[#FF3B3B] flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center space-y-6">
              <a
                href="https://wa.me/918840983876"
                className="inline-flex items-center justify-center w-full md:w-auto bg-[#FF3B3B] text-white px-8 py-4 rounded-xl font-medium hover:bg-red-600 transition-colors group"
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                Chat with Our Team
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <p className="text-gray-500">
                Get your custom quote within 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-center mb-12">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-bold mb-2">How does pricing work?</h4>
              <p className="text-gray-600">
                We create custom packages based on your needs. Pricing varies depending on languages,
                video length, and services required.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-bold mb-2">What's included in the strategy call?</h4>
              <p className="text-gray-600">
                We'll analyze your channel, discuss target markets, and create a custom growth plan
                for your global expansion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}