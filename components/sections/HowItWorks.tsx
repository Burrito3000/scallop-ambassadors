export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Apply',
      description: 'Share your community details',
      iconPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    },
    {
      number: '2',
      title: 'Activate',
      description: 'Get tasks and assets immediately',
      iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
    },
    {
      number: '3',
      title: 'Grow',
      description: 'Run events, create content, earn rewards',
      iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    },
  ];

  return (
    <div id="how-it-works" className="space-y-12">
      <div>
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-scallop-blue/10 border border-scallop-blue/20 text-scallop-blue mb-6 shadow-sm">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-scallop-blue text-white">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </span>
          <span className="text-sm font-semibold">Process</span>
        </div>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-16 tracking-tight leading-[1.1]">How It Works</h2>
      </div>
      <div className="space-y-12">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start space-x-6 group">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-scallop-blue flex items-center justify-center shadow-sm group-hover:bg-scallop-blue/90 transition-all duration-300">
              <svg 
                className="w-6 h-6 text-white transition-colors duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.iconPath} />
              </svg>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">{step.title}</h3>
              <p className="text-gray-600 text-xl leading-relaxed font-light">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
