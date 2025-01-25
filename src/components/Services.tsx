import React from 'react';
import { Mic2, Languages, Users, Edit2, LineChart, MessageSquare, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

const processSteps = [
  { title: 'Content Analysis', description: 'We analyze your content and target markets' },
  { title: 'Script Adaptation', description: 'Cultural nuances and context preservation' },
  { title: 'Pro Voiceover', description: 'Netflix-trained native speakers record' },
  { title: 'Quality Check', description: 'Multi-layer review process' },
  { title: 'Fast Delivery', description: '48-hour turnaround guaranteed' }
];

const faqItems = [
  {
    question: 'How fast can you dub a 10-minute video?',
    answer: '48 hours, guaranteed. We work around the clock to ensure quick delivery.'
  },
  {
    question: 'Do I own the dubbed content?',
    answer: '100% yours. Always. You retain full rights to all dubbed versions.'
  },
  {
    question: 'What languages do you support?',
    answer: 'We support 50+ languages including all major markets worldwide.'
  }
];

export function Services() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-[#1A1A1A] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Why MrBeast Dubs Every Video Into
              <span className="text-[#FF3B3B]"> 10 Languages</span>
              <br />
              (And You Should Too)
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Tired of views plateauing? 85% of your potential audience isn't English-speaking.
              It's time to go global.
            </p>
            <button className="animate-pulse bg-[#FF3B3B] text-white px-8 py-4 rounded-lg font-medium hover:bg-red-600 transition-colors flex items-center mx-auto">
              Claim Your Free Global Strategy Session
              <span className="ml-2 text-sm">(Only 3 Spots Left)</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-[#FF3B3B] mr-2" />
              <span>SSL Secure</span>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 text-[#FF3B3B] mr-2" />
              <span>Netflix-Trained Artists</span>
            </div>
            <div className="flex items-center">
              <Languages className="h-5 w-5 text-[#FF3B3B] mr-2" />
              <span>70+ Languages Supported</span>
            </div>
          </div>
        </div>
      </div>

      {/* Process Timeline */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Process</h2>
          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#1A1A1A] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <span className="text-[#FF3B3B] font-bold text-xl">{index + 1}</span>
                  </div>
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {faqItems.map((item) => (
              <div key={item.question} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-4">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#1A1A1A] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Go Global?</h2>
          <button className="animate-pulse bg-[#FF3B3B] text-white px-8 py-4 rounded-lg font-medium hover:bg-red-600 transition-colors flex items-center mx-auto">
            Start Your Global Journey Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}