export default function Perks() {
  const perks = [
    {
      title: 'Paid campaigns',
      iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
      title: 'Merch & drops',
      iconPath: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
    },
    {
      title: 'Creator toolkit',
      iconPath: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    },
    {
      title: 'Community support',
      iconPath: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
    },
  ];

  return (
    <div id="perks" className="space-y-12">
      <div>
        <div className="inline-block px-5 py-2 rounded-full bg-scallop-blue/10 border border-scallop-blue/20 text-scallop-blue mb-6 shadow-sm">
          <span className="text-sm font-semibold">Benefits</span>
        </div>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-16 tracking-tight leading-[1.1]">Perks</h2>
      </div>
      <div className="space-y-12">
        {perks.map((perk, index) => (
          <div key={index} className="flex items-center space-x-6 group">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-scallop-blue/10 flex items-center justify-center shadow-sm group-hover:bg-scallop-blue transition-all duration-300">
              <svg 
                className="w-6 h-6 text-scallop-blue group-hover:text-white transition-colors duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={perk.iconPath} />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 tracking-tight">{perk.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

