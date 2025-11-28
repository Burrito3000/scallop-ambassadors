'use client';

import Image from 'next/image';
import { AmbassadorImage } from '@/lib/ambassadorImages';
import { useState } from 'react';

interface ImageShowcaseProps {
  images: AmbassadorImage[];
  layout?: 'grid' | 'masonry';
  columns?: 2 | 3;
}

export default function ImageShowcase({ images, layout = 'grid', columns = 3 }: ImageShowcaseProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const getAnimationStyle = (imageId: string, index: number = 0) => {
    const idNum = parseInt(imageId) || 0;
    const delay = (idNum * 0.3 + index * 0.2) % 2;
    const duration = 4 + ((idNum * 0.2 + index * 0.1) % 2);
    return {
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
    };
  };

  // Contextual descriptions for images
  const imageDescriptions = [
    'Building communities across borders with Scallop',
    'Real ambassadors using real products in their daily lives',
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-scallop-blue/10 rounded-full filter blur-3xl opacity-50 -mr-32"></div>
      <div className="absolute bottom-1/4 left-0 w-56 h-56 bg-scallop-blue/10 rounded-full filter blur-3xl opacity-50 -ml-28"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Spread images out individually with large gaps, varied sizes, and text content */}
        <div className="space-y-20">
          {images.map((img, idx) => {
            // Varied sizes: first full-width, others offset and smaller
            const isFullWidth = idx === 0;
            const widthClass = isFullWidth 
              ? 'w-full' 
              : idx % 2 === 1 
                ? 'w-full md:w-2/3 md:ml-auto' 
                : 'w-full md:w-2/3';
            const heightClass = isFullWidth 
              ? 'h-[500px] md:h-[600px]' 
              : 'h-[400px] md:h-[500px]';
            
            return (
              <div key={img.id} className="space-y-6">
                {/* Image */}
                <div
                  className={`relative group ${widthClass} ${heightClass} rounded-3xl overflow-hidden shadow-premium-lg animate-gentle-drift mx-auto`}
                  style={getAnimationStyle(img.id, idx)}
                  onMouseEnter={() => setHoveredId(img.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover"
                    sizes={isFullWidth ? "100vw" : "(max-width: 768px) 100vw, 66vw"}
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
                <div className={`${widthClass} mx-auto text-center`}>
                  <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                    {imageDescriptions[idx] || 'Scallop Ambassador representing borderless finance'}
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

