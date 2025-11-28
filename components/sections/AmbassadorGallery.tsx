'use client';

import Image from 'next/image';
import { ambassadorImages, galleryLayoutConfig } from '@/lib/ambassadorImages';
import { useState } from 'react';

// Deterministic delay based on index (to avoid hydration mismatch)
function getDeterministicDelay(index: number): number {
  // Use a simple hash-like function based on index for consistency
  return (index * 0.3) % 2;
}

// Deterministic duration based on index
function getDeterministicDuration(index: number): number {
  return 4 + ((index * 0.2) % 2);
}

export default function AmbassadorGallery() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const getLayoutClasses = (layout: string, isMobile: boolean = false) => {
    const config = galleryLayoutConfig[layout as keyof typeof galleryLayoutConfig];
    return isMobile ? config.mobileClassName : config.className;
  };

  // Helper to get deterministic animation values based on image ID
  const getAnimationStyle = (imageId: string, index: number = 0) => {
    const idNum = parseInt(imageId) || 0;
    const delay = (idNum * 0.3 + index * 0.2) % 2;
    const duration = 4 + ((idNum * 0.2 + index * 0.1) % 2);
    return {
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
    };
  };

  // Use only last 4 images for the gallery (images 7, 8, 9, 10)
  const galleryImages = ambassadorImages.slice(6, 10);

  // Contextual descriptions for gallery images
  const galleryDescriptions = [
    'Meet our ambassadors from around the world',
    'Real people using Scallop in their daily lives',
    'Community leaders driving Web3 adoption',
    'Creators building the future of finance',
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 right-1/4 w-64 h-64 bg-scallop-blue/10 rounded-full filter blur-3xl opacity-50 animate-gentle-drift"></div>
      <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-scallop-blue/10 rounded-full filter blur-3xl opacity-50 animate-gentle-drift animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-2 rounded-full bg-scallop-blue/10 border border-scallop-blue/20 text-scallop-blue mb-6 shadow-sm">
            <span className="text-sm font-semibold">Community</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-16 tracking-tight leading-[1.1]">
            Our Ambassadors
          </h2>
        </div>
        {/* Spread images out with large gaps, varied sizes, and text content */}
        <div className="space-y-20">
          {galleryImages.map((img, idx) => {
            // Varied sizes: alternating large and medium, with offset positioning
            const isLarge = idx % 2 === 0;
            const widthClass = isLarge 
              ? 'w-full md:w-4/5' 
              : 'w-full md:w-3/5';
            const offsetClass = idx % 2 === 1 
              ? 'md:ml-auto' 
              : '';
            const heightClass = isLarge 
              ? 'h-[500px] md:h-[650px]' 
              : 'h-[450px] md:h-[550px]';
            
            return (
              <div key={img.id} className="space-y-6">
                {/* Image */}
                <div
                  className={`relative group ${widthClass} ${heightClass} ${offsetClass} rounded-3xl overflow-hidden shadow-premium-lg animate-gentle-drift`}
                  style={getAnimationStyle(img.id, idx)}
                  onMouseEnter={() => setHoveredId(img.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover"
                    sizes={isLarge ? "(max-width: 768px) 100vw, 80vw" : "(max-width: 768px) 100vw, 60vw"}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent transition-all duration-300 ${
                      hoveredId === img.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  <div
                    className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-300 ${
                      hoveredId === img.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <h3 className="text-xl font-bold text-gray-900">{img.title}</h3>
                  </div>
                </div>
                {/* Text content below image */}
                <div className={`${widthClass} ${offsetClass} text-center`}>
                  <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                    {galleryDescriptions[idx] || 'Scallop Ambassador'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

