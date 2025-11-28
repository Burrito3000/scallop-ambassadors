import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import FeatureCards from '@/components/sections/FeatureCards';
import ImageShowcase from '@/components/sections/ImageShowcase';
import AmbassadorGallery from '@/components/sections/AmbassadorGallery';
import MidPageCTA from '@/components/sections/MidPageCTA';
import TwoColumnSection from '@/components/sections/TwoColumnSection';
import WhoYouAre from '@/components/sections/WhoYouAre';
import WhatYouGet from '@/components/sections/WhatYouGet';
import HowToApply from '@/components/sections/HowToApply';
import ApplicationForm from '@/components/sections/ApplicationForm';
import { ambassadorImages } from '@/lib/ambassadorImages';

export default function AmbassadorsPage() {
  // Distribute images:
  // Hero: images 1-2 (already in Hero component)
  // Feature: images 3-4 (already in FeatureCards component)
  // WhoYouAre: image 3 (already in WhoYouAre component)
  // WhatYouGet: image 4 (already in WhatYouGet component)
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
      <MidPageCTA />
      <TwoColumnSection />
      <HowToApply />
      <ApplicationForm />
      <Footer />
    </main>
  );
}

