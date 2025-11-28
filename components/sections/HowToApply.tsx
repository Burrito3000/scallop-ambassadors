import Link from 'next/link';

export default function HowToApply() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-scallop-blue relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-scallop-blue/20 rounded-full blur-3xl -mr-36 -mb-36"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 mb-6 shadow-sm">
            <span className="text-sm font-semibold text-white">Application</span>
          </div>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
          How to Apply
        </h2>
        <p className="text-2xl md:text-3xl text-white mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Fill out the form and our team will get in touch with you
        </p>
        <Link
          href="#apply"
          className="inline-block bg-scallop-blue text-white px-12 py-5 rounded-full hover:opacity-90 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
        >
          Apply now
        </Link>
      </div>
    </section>
  );
}

