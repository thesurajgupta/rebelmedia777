import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Luke Davidson',
    handle: '@lukedavidson',
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop',
    text: "RebelMedia's dubbing made my videos blow up in Mexico. It's like I'm fluent in Spanish!",
    platform: 'YouTube'
  },
  {
    name: 'Sarah Chen',
    handle: '@sarahchen',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    text: 'Their growth strategy doubled my ad revenue. Worth every penny!',
    platform: 'Instagram'
  },
  {
    name: 'Alex Kumar',
    handle: '@alexkumar',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop',
    text: 'From 100K to 1M subscribers in just 6 months. RebelMedia knows their stuff!',
    platform: 'YouTube'
  }
];

const platforms = [
  'YouTube Trending',
  'Forbes India',
  'TechCrunch',
  'Social Media Week',
  'Creator Economy Expo'
];

export function Testimonials() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-16">Loved by Creators</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.handle}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700">{testimonial.text}</p>
                <p className="text-[#FF3B3B] mt-4 text-sm">via {testimonial.platform}</p>
              </div>
            ))}
          </div>
        </div>

        {/* As Seen On */}
        <div>
          <h3 className="text-center text-gray-600 mb-8">As Seen On</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {platforms.map((platform) => (
              <div
                key={platform}
                className="text-gray-400 font-medium text-lg opacity-0 animate-[fadeIn_1s_ease-in_forwards]"
                style={{
                  animationDelay: `${platforms.indexOf(platform) * 0.2}s`
                }}
              >
                {platform}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}