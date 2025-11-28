import HowItWorks from './HowItWorks';
import Perks from './Perks';

export default function TwoColumnSection() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-scallop-blue/10 rounded-full filter blur-3xl opacity-50 -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-1/4 w-56 h-56 bg-scallop-blue/10 rounded-full filter blur-3xl opacity-50 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32">
          <HowItWorks />
          <Perks />
        </div>
      </div>
    </section>
  );
}

