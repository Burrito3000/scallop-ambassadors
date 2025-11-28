import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <svg
            className="w-24 h-24 mx-auto text-scallop-blue"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          Thank You!
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
          We will contact you within the next days.
        </p>
        <Link
          href="/ambassadors"
          className="inline-block bg-scallop-blue text-white px-10 py-4 rounded-full hover:opacity-90 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
        >
          Back to Ambassadors
        </Link>
      </div>
    </main>
  );
}

