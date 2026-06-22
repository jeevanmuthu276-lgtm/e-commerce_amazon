import Link from "next/link";
import Image from "next/image";

export default function MiniTVPage() {
  // Mock data for the horizontal carousels
  const trendingShows = [
    { id: 1, title: "Mystery of the Void", image: "/images/minitv/hero_banner.png" },
    { id: 2, title: "Love in the Sun", image: "/images/minitv/romance.png" },
    { id: 3, title: "The Family Couch", image: "/images/minitv/comedy.png" },
    { id: 4, title: "Explosive Justice", image: "/images/minitv/action.png" },
    { id: 5, title: "Objection!", image: "/images/minitv/drama.png" },
  ];

  const popularWebSeries = [
    { id: 6, title: "Action Force", image: "/images/minitv/action.png" },
    { id: 7, title: "Romantic Getaway", image: "/images/minitv/romance.png" },
    { id: 8, title: "Courtroom Drama", image: "/images/minitv/drama.png" },
    { id: 9, title: "Laugh Out Loud", image: "/images/minitv/comedy.png" },
    { id: 10, title: "Dark Secrets", image: "/images/minitv/hero_banner.png" },
  ];

  return (
    <div className="bg-[#0f171e] min-h-screen text-white font-sans">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-[#0f171e] sticky top-0 z-50">
        <div className="flex items-center gap-6">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <span className="text-xl font-bold tracking-tight">amazon</span>
              <span className="text-xl font-light text-blue-500 mx-2">▶</span>
              <span className="text-xl font-bold tracking-tight">MX PLAYER</span>
            </div>
          </Link>
          
          <div className="hidden md:flex gap-5 text-[15px] font-medium ml-4">
            <span className="text-blue-500 cursor-pointer">Home</span>
            <span className="hover:text-blue-500 cursor-pointer transition-colors text-gray-300">New & Hot</span>
            <span className="hover:text-blue-500 cursor-pointer transition-colors text-gray-300">Web Series</span>
            <span className="hover:text-blue-500 cursor-pointer transition-colors text-gray-300">Movies</span>
            <span className="hover:text-blue-500 cursor-pointer transition-colors text-gray-300">VDesi</span>
            <span className="hover:text-blue-500 cursor-pointer transition-colors text-gray-300">Romance</span>
            <span className="hover:text-blue-500 cursor-pointer transition-colors text-gray-300">Comedy</span>
            <span className="hover:text-blue-500 cursor-pointer transition-colors text-gray-300">Tamil</span>
            <span className="hover:text-blue-500 cursor-pointer transition-colors text-gray-300">Telugu</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer hover:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <div className="text-yellow-500 font-bold text-xl cursor-pointer">a.</div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer hover:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
      </nav>

      <main className="pb-16">
        {/* Hero Banner */}
        <div className="relative w-full h-[50vh] md:h-[70vh] bg-gray-900 overflow-hidden group cursor-pointer">
          <img 
            src="/images/minitv/hero_banner.png" 
            alt="Hero Banner" 
            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f171e] via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f171e] via-[#0f171e]/50 to-transparent"></div>
          
          <div className="absolute left-10 md:left-20 bottom-1/4 max-w-2xl">
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider mb-4 inline-block">New Series</span>
            <h1 className="text-5xl md:text-7xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              SANKALP
            </h1>
            <p className="text-gray-300 text-lg mb-6 max-w-md hidden md:block">
              A gripping tale of determination, power, and secrets that will keep you on the edge of your seat. Watch the highly anticipated new series exclusively on Amazon MX Player.
            </p>
            <button className="bg-white text-black font-bold py-3 px-8 rounded flex items-center gap-2 hover:bg-gray-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Watch Now
            </button>
          </div>

          {/* Carousel Arrows */}
          <button className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/60 rounded-full text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/60 rounded-full text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Trending Top 10 */}
        <section className="px-6 md:px-12 mt-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">Trending Top 10</h2>
          <div className="relative group">
            <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar snap-x scroll-smooth">
              {trendingShows.map((show) => (
                <div key={show.id} className="min-w-[280px] md:min-w-[320px] aspect-video relative rounded-md overflow-hidden cursor-pointer group/card snap-start">
                  <img src={show.image} alt={show.title} className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
                  <h3 className="absolute bottom-4 left-4 font-bold text-lg">{show.title}</h3>
                </div>
              ))}
            </div>
            {/* Right Arrow */}
            <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-2 bg-black/80 hover:bg-black rounded-full text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </section>

        {/* Popular Web Series */}
        <section className="px-6 md:px-12 mt-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">Popular Web Series</h2>
          <div className="relative group">
            <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar snap-x scroll-smooth">
              {popularWebSeries.map((show) => (
                <div key={show.id} className="min-w-[280px] md:min-w-[320px] aspect-video relative rounded-md overflow-hidden cursor-pointer group/card snap-start">
                  <img src={show.image} alt={show.title} className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
                  <h3 className="absolute bottom-4 left-4 font-bold text-lg">{show.title}</h3>
                </div>
              ))}
            </div>
            {/* Right Arrow */}
            <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-2 bg-black/80 hover:bg-black rounded-full text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </section>

      </main>
      
      {/* Footer minimal */}
      <footer className="bg-[#0f171e] text-center text-gray-400 py-8 text-sm border-t border-gray-800">
        <div className="flex justify-center gap-6 mb-4">
          <span className="hover:text-white cursor-pointer transition-colors">Terms of Use</span>
          <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer transition-colors">FAQ</span>
        </div>
        <p>© 2026 Amazon.com Inc. or its affiliates</p>
      </footer>
    </div>
  );
}
