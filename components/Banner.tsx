"use client";

import { useEffect, useState } from "react";

export default function Banner() {
  const images = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/2025/GW/UNREC/PC/78269._CB785061629_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/pc_unrec_may25_refresh._CB761742379_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/IMG25/Home/2025/GW/BAU/Dec/Hero/Mega_home_sale_BAU_PC_-_Drying_racks._CB777818991_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/2025/GW/UNREC/PC/78268._CB785061629_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/CEPC/Dec/amazonspecial/BFCM25_GW_PC_Hero._CB775393558_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Books/May26/Desktop_tall_Hero_3000x1200_EL_Rec._CB762895918_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/BISS_2024/2026/June/PC_Hero/1500x600_1._CB760420309_.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full aspect-[5/2] overflow-hidden">
      {/* IMAGE */}
      <img
        src={images[index]}
        alt="banner"
        className="w-full h-full object-cover object-center"
      />

      {/* LEFT */}
      <button
        onClick={() =>
          setIndex((prev) => (prev - 1 + images.length) % images.length)
        }
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded"
      >
        ◀
      </button>

      {/* RIGHT */}
      <button
        onClick={() => setIndex((prev) => (prev + 1) % images.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded"
      >
        ▶
      </button>

      {/* FADE */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}