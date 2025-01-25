import React from 'react';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    title: 'From 100K to 1M Views in India',
    description: 'How we helped a lifestyle vlogger capture the Indian market',
    videoUrl: 'https://youtu.be/5bevi_0v6wU',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=450&fit=crop',
    results: [
      'Reached 1M+ views consistently',
      '200% increase in Indian audience',
      'Generated $50K+ in additional revenue'
    ]
  },
  {
    title: '500% Engagement Boost with Spanish Dubs',
    description: 'Breaking into the Latin American market',
    videoUrl: 'https://youtu.be/S1bI0O7FiY0',
    image: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=800&h=450&fit=crop',
    results: [
      '500% increase in engagement',
      'Doubled Spanish-speaking subscribers',
      '3X increase in ad revenue'
    ]
  },
  {
    title: 'MrBeast-Style Growth for a Cooking Channel',
    description: 'Scaling a cooking channel globally',
    videoUrl: 'https://youtu.be/xTbcUuoXWCs',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=450&fit=crop',
    results: [
      'Reached 5M+ subscribers',
      'Tripled Brazilian viewership',
      '400% increase in merchandise sales'
    ]
  }
];

export function CaseStudies() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">
          How We Helped Creators Dominate Global Audiences
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16">
          Real results from real creators
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video bg-gray-100 relative">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <a
                    href={study.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FF3B3B] text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 transition-colors flex items-center"
                  >
                    Watch Case Study
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{study.title}</h3>
                <p className="text-gray-600 mb-6">{study.description}</p>
                <ul className="space-y-3">
                  {study.results.map((result, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-[#FF3B3B] rounded-full mr-3" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}