import React from 'react';
import { ArrowRight, CheckCircle2, Users, Languages } from 'lucide-react';

const stats = [
  { label: 'Creators', value: '350+' },
  { label: 'Dubbed Views', value: '10M+' },
  { label: 'Hour Delivery', value: '48' }
];

export function Hero() {
  return (
    <div className="relative bg-[#1A1A1A] pt-20">
      {/* Live Counter */}
      <div className="bg-[#FF3B3B] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center animate-pulse">
            🔥 12 creators joined RebelMedia this week. Book your slot now!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Your Content, But Understood
            <br />
            <span className="text-[#FF3B3B]">By 5X More Viewers</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Professional Human Dubbing + Social Media Management for Creators Who Want 10X Views & Engagement
          </p>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-white">
                <div className="text-4xl font-bold text-[#FF3B3B] mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button className="animate-pulse bg-[#FF3B3B] text-white px-8 py-4 rounded-lg font-medium hover:bg-red-600 transition-colors flex items-center justify-center">
              Claim Your Free Strategy Session
              <span className="ml-2 text-sm">(Only 3 Spots Left)</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 text-white">
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

      {/* Video Demo Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="aspect-video grid grid-cols-2">
            <div className="bg-gray-900 flex items-center justify-center">
              <p className="text-white text-xl">Original Video</p>
            </div>
            <div className="bg-gray-800 flex items-center justify-center">
              <p className="text-white text-xl">Dubbed Version</p>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-[#FF3B3B] text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQ4YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnptMC0xMmMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6IiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-5" />
    </div>
  );
}