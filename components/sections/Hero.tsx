'use client';

import { useParallax } from '@/lib/animations';
import Link from 'next/link';
import Image from 'next/image';
import { ambassadorImages } from '@/lib/ambassadorImages';

export default function Hero() {
  const parallaxRef = useParallax(0.3);
  // Get first two images for hero background
  const heroImages = ambassadorImages.slice(0, 2);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white py-40">
      {/* Background Ambassador Images - Large and Spread Out */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        {heroImages[0] && (
          <div className="absolute top-32 right-20 w-96 h-[600px] rounded-3xl overflow-hidden shadow-premium-lg">
            <Image
              src={heroImages[0].src}
              alt={heroImages[0].title}
              fill
              className="object-cover"
              sizes="384px"
            />
          </div>
        )}
        {heroImages[1] && (
          <div className="absolute bottom-32 left-20 w-80 h-[500px] rounded-3xl overflow-hidden shadow-premium-lg">
            <Image
              src={heroImages[1].src}
              alt={heroImages[1].title}
              fill
              className="object-cover"
              sizes="320px"
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-32">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-gray-900 mb-8 leading-[1.05] tracking-[-0.02em]">
          We are looking for you
        </h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-gray-800 mb-8 leading-[1.1] tracking-tight">
          Become a Scallop Brand Ambassador
        </h2>
        <p className="text-2xl md:text-3xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
          Targeting Web3 power users, creators, event hosts and community builders
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="#apply"
            className="bg-scallop-blue text-white px-12 py-5 rounded-full hover:opacity-90 transition-all duration-200 font-semibold text-xl shadow-lg hover:shadow-xl hover:scale-105"
          >
            Apply now
          </Link>
        </div>
      </div>
    </section>
  );
}

