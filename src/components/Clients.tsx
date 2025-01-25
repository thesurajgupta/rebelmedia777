import React from 'react';
import { Creator } from '../types';

const creators: Creator[] = [
  {
    name: 'Nick DiGiovanni',
    handle: '@nickdigio',
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop'
  },
  {
    name: 'Luke Davidson en Español',
    handle: '@lukedavidson.es',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop'
  },
  {
    name: 'Haminations en Español',
    handle: '@haminations.es',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop'
  }
];

export function Clients() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">TRUSTED BY 100+ GLOBAL CREATORS</h2>
          <p className="text-gray-600">Join the creators who've gone global with RebelMedia</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {creators.map((creator, index) => (
            <div 
              key={creator.name} 
              className="text-center opacity-0 animate-[fadeIn_1s_ease-in_forwards]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={creator.image}
                alt={creator.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover hover:scale-110 transition-transform duration-300"
              />
              <h3 className="font-medium text-lg">{creator.name}</h3>
              <p className="text-gray-600">{creator.handle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}