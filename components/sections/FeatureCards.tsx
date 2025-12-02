'use client';

import Image from 'next/image';
import { ambassadorImages } from '@/lib/ambassadorImages';

export default function FeatureCards() {
  // Get images 3 and 4 for feature section
  const featureImages = ambassadorImages.slice(2, 4);
  
  const features = [
    {
      title: 'Earn rewards',
      description: 'Get rewarded for events, activations and real community impact',
      bgColor: 'bg-scallop-blue',
      iconBg: 'bg-white/20',
      iconColor: 'text-white',
      textColor: 'text-white',
      descriptionColor: 'text-white/90',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Exclusive access',
      description: 'Early product features, limited merch and unique ambassador perks',
      bgColor: 'bg-scallop-blue',
      iconBg: 'bg-white/20',
      iconColor: 'text-white',
      textColor: 'text-white',
      descriptionColor: 'text-white/90',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      title: 'Grow your community',
      description: 'Tools, templates and direct support to build and scale your own community',
      bgColor: 'bg-scallop-blue',
      iconBg: 'bg-white/20',
      iconColor: 'text-white',
      textColor: 'text-white',
      descriptionColor: 'text-white/90',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Refer friends',
      description: 'Invite new Scallop app users and earn rewards for every successful referral',
      bgColor: 'bg-scallop-blue',
      iconBg: 'bg-white/20',
      iconColor: 'text-white',
      textColor: 'text-white',
      descriptionColor: 'text-white/90',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18 9a3 3 0 11-6 0 3 3 0 016 0zM6 9a3 3 0 116 0 3 3 0 01-6 0zm12 6a4 4 0 00-3.8 2.8M9.8 17.8A4 4 0 006 15a4 4 0 00-4 4v1h20v-1a4 4 0 00-4-4z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 right-1/4 w-64 h-64 bg-scallop-blue/10 rounded-full filter blur-3xl opacity-50 animate-gentle-drift"></div>
      <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-scallop-blue/10 rounded-full filter blur-3xl opacity-50 animate-gentle-drift animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block px-5 py-2 rounded-full bg-scallop-blue/10 border border-scallop-blue/20 text-scallop-blue mb-6 shadow-sm">
            <span className="text-sm font-semibold">Program Benefits</span>
          </div>
        </div>
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 mb-16 md:mb-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} rounded-3xl p-10 shadow-premium-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden`}
            >
              <div className="relative z-10">
                <div className={`${feature.iconBg} ${feature.iconColor} mb-6 w-16 h-16 flex items-center justify-center rounded-2xl backdrop-blur-sm group-hover:scale-110 transition-all duration-300`}>
                  {feature.icon}
                </div>
                <h3 className={`${feature.textColor} text-3xl font-bold mb-4 tracking-tight`}>{feature.title}</h3>
                <p className={`${feature.descriptionColor} leading-relaxed text-lg font-light`}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Images - Asymmetric layout with varied sizes, large gaps, and text content */}
        <div className="space-y-14 md:space-y-0 md:grid md:grid-cols-2 md:gap-10 items-stretch">
          {/* Primary image - large, anchoring the left side */}
          {featureImages[0] && (
            <div className="space-y-4 md:space-y-6">
              <div className="relative group w-full h-[260px] sm:h-[340px] md:h-[520px] rounded-3xl overflow-hidden shadow-premium-lg transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src={featureImages[0].src}
                  alt={featureImages[0].title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="w-full text-center">
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                  A diverse group of ambassadors working together to bring real-world finance to communities.
                </p>
              </div>
            </div>
          )}

          {/* Secondary image - slightly smaller, offset on desktop for an aesthetic staggered look */}
          {featureImages[1] && (
            <div className="space-y-4 md:space-y-6 flex flex-col justify-center">
              <div className="relative group w-full md:w-4/5 md:ml-auto h-[220px] sm:h-[320px] md:h-[420px] rounded-3xl overflow-hidden shadow-premium-lg transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src={featureImages[1].src}
                  alt={featureImages[1].title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <div className="w-full md:w-4/5 md:ml-auto text-center">
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                  Using Scallop in everyday life – paying in stores, using transport, and settling bills with digital assets.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

