"use client";
import { useState, useEffect } from "react";

const bannerImages = [
  "https://images-eu.ssl-images-amazon.com/images/G/31/2025/GW/UNREC/PC/78269._CB785061629_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/pc_unrec_may25_refresh._CB761742379_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/IMG25/Home/2025/GW/BAU/Dec/Hero/Mega_home_sale_BAU_PC_-_Drying_racks._CB777818991_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/2025/GW/UNREC/PC/78268._CB785061629_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img22/CEPC/Dec/amazonspecial/BFCM25_GW_PC_Hero._CB775393558_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Books/May26/Desktop_tall_Hero_3000x1200_EL_Rec._CB762895918_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/BISS_2024/2026/June/PC_Hero/1500x600_1._CB760420309_.jpg",
];

export default function Banner() {
  const [current, setCurrent] = useState(0);
  const [imgErrors, setImgErrors] = useState<boolean[]>(
    new Array(bannerImages.length).fill(false)
  );

  // Gradient fallbacks if image fails
  const gradients = [
    "from-blue-900 to-blue-600",
    "from-green-800 to-green-500",
    "from-orange-700 to-yellow-500",
    "from-purple-900 to-purple-600",
    "from-red-800 to-red-500",
    "from-teal-800 to-teal-500",
    "from-indigo-900 to-indigo-600",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bannerImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleImgError = (index: number) => {
    setImgErrors((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  return (
    <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">

      {/* Slides */}
      {bannerImages.map((url, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700
            ${index === current ? "opacity-100" : "opacity-0"}`}
        >
          {imgErrors[index] ? (
            // Fallback gradient if image fails to load
            <div className={`w-full h-full bg-gradient-to-r 
                            ${gradients[index]} flex items-center 
                            justify-center`}>
              <p className="text-white text-2xl font-bold">
                Amazon Great Deals
              </p>
            </div>
          ) : (
            <img
              src={url}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover object-top"
              onError={() => handleImgError(index)}
            />
          )}
        </div>
      ))}

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24
                      bg-gradient-to-t from-gray-100 to-transparent
                      pointer-events-none z-10" />

      {/* Left Arrow */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev - 1 + bannerImages.length) % bannerImages.length)
        }
        className="absolute left-3 top-1/2 -translate-y-1/2
                   bg-white/40 hover:bg-white/80
                   rounded-full w-10 h-10 flex items-center
                   justify-center shadow-lg z-20 text-2xl
                   transition-colors text-gray-800"
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev + 1) % bannerImages.length)
        }
        className="absolute right-3 top-1/2 -translate-y-1/2
                   bg-white/40 hover:bg-white/80
                   rounded-full w-10 h-10 flex items-center
                   justify-center shadow-lg z-20 text-2xl
                   transition-colors text-gray-800"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2
                      flex gap-2 z-20">
        {bannerImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300
              ${i === current
                ? "bg-white w-6 h-2"
                : "bg-white/50 w-2 h-2"
              }`}
          />
        ))}
      </div>
    </div>
  );
}