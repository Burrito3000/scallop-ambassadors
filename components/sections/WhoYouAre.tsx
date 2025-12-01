'use client';

import Image from 'next/image';
import { ambassadorImages } from '@/lib/ambassadorImages';

export default function WhoYouAre() {
  // Get an image for this section - use one showing multiple people
  const sectionImage = ambassadorImages[0]; // Use image 1 (or another that shows multiple people)

  const introText = "We look for people who live in Web3 every day and want to bring real utility to their communities. If you enjoy helping others discover better financial tools and you like being part of a growing movement, you will feel at home here.";

  const characteristics = [
    {
      text: 'You use crypto daily and look for real utility in everyday life',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      text: 'You enjoy paying in stores, using transport, buying tickets or settling bills with digital assets',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
    {
      text: 'You are tech minded and enjoy giving clear and honest feedback that helps us improve',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      text: 'You are a natural guide in your community and people trust your recommendations',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      text: 'You have hosted small meetups or events or you want to start building your own community',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      text: 'You want support for community activities, sponsorships or collaborations',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      text: 'You enjoy working with emerging fintech and blockchain products that bring real change',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  const importantNote = 'You use our products yourself and promote only what you genuinely believe in. We want real users and real feedback, not generic influencer activity.';
  const closingLine = 'If this sounds like you, you are the kind of ambassador we want to grow with.';

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-scallop-blue relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-scallop-blue/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            {sectionImage && (
              <div className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-premium-lg">
                <Image
                  src={sectionImage.src}
                  alt={sectionImage.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 mb-6 shadow-sm">
              <span className="text-sm font-semibold text-white">Ambassador Profile</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              Who you are
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed font-light">
              {introText}
            </p>
            <div className="space-y-3 mb-8">
              {characteristics.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 hover:shadow-lg hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/20 text-white flex items-center justify-center mr-3 group-hover:bg-white group-hover:text-scallop-blue transition-all duration-300">
                    {item.icon}
                  </div>
                  <p className="text-lg text-white leading-relaxed font-light pt-1.5 flex-1">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 p-8 bg-white/10 rounded-3xl border-2 border-white/20 shadow-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white text-scallop-blue flex items-center justify-center mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-white mb-2 text-lg">Important</p>
                  <p className="text-white leading-relaxed text-lg">{importantNote}</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-white leading-relaxed text-xl font-light">{closingLine}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

