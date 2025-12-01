import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import FeatureCards from '@/components/sections/FeatureCards';
import ImageShowcase from '@/components/sections/ImageShowcase';
import AmbassadorGallery from '@/components/sections/AmbassadorGallery';
import TwoColumnSection from '@/components/sections/TwoColumnSection';
import WhoYouAre from '@/components/sections/WhoYouAre';
import WhatYouGet from '@/components/sections/WhatYouGet';
import ApplicationForm from '@/components/sections/ApplicationForm';
import { ambassadorImages } from '@/lib/ambassadorImages';

export default function AmbassadorsPage() {
  // Distribute images:
  // Hero: images 1-2 (already in Hero component)
  // Feature: images 3-4 (already in FeatureCards component)
  // WhoYouAre: image 1 (showing multiple people)
  // WhatYouGet: image 5 (showing woman paying in store)
  // Showcase 1 (after features): images 5-6
  // Gallery: images 7-10 (4 images)
  
  const showcase1Images = ambassadorImages.slice(4, 6); // images 5-6

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <FeatureCards />
      <ImageShowcase images={showcase1Images} columns={2} />
      <WhoYouAre />
      <WhatYouGet />
      <AmbassadorGallery />
      <TwoColumnSection />
      <ApplicationForm />
      <Footer />
    </main>
  );
}

