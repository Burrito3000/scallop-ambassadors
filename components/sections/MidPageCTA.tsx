import Link from 'next/link';

export default function MidPageCTA() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-scallop-blue relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2"></div>
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
          Want to be featured?
        </h2>
        <p className="text-2xl md:text-3xl text-white mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Apply to become a Scallop Ambassador and grow your community with us.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#apply"
            className="bg-white text-gray-900 px-12 py-5 rounded-full hover:bg-gray-50 transition-all duration-200 font-semibold text-xl shadow-lg hover:shadow-xl hover:scale-105 border-2 border-white"
          >
            Apply Now
          </Link>
          <Link
            href="#perks"
            className="bg-white text-gray-900 px-12 py-5 rounded-full hover:bg-gray-50 transition-all duration-200 font-semibold text-xl shadow-lg hover:shadow-xl hover:scale-105 border-2 border-white"
          >
            See Perks
          </Link>
        </div>
      </div>
    </section>
  );
}

