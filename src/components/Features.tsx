import React from 'react';
import { Mic2, BarChart2, HeadphonesIcon } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: 'Professional Human Dubbing',
    description: 'Studio-quality voices by native speakers who preserve tone and sarcasm.',
    icon: 'Mic2'
  },
  {
    title: 'Full Social Media Management',
    description: 'Complete package: Video editing, content creation, thumbnails, SEO, and growth strategy.',
    icon: 'BarChart2'
  },
  {
    title: '24/7 Creator Support Team',
    description: 'Dedicated experts for dubbing and social media, always ready to help you succeed.',
    icon: 'HeadphonesIcon'
  }
];

const iconMap = {
  Mic2,
  BarChart2,
  HeadphonesIcon
};

export function Features() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-[#1A1A1A] p-4 rounded-2xl mb-6 group-hover:bg-[#FF3B3B] transition-colors">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}