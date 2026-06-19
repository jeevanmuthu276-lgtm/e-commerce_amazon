"use client";

import { useEffect, useState } from "react";

export default function Banner() {
  const [bannerImages, setBannerImages] = useState<string[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
  async function loadBanners() {
    try {
      const res = await fetch("/api/banners");

      console.log("Status:", res.status);

      const data = await res.json();

      console.log("Banner Data:", data);

      setBannerImages(
        data.map((item: any) => item.image_url)
      );
    } catch (error) {
      console.error("Banner Error:", error);
    }
  }

  loadBanners();
}, []);

  useEffect(() => {
    if (bannerImages.length === 0) return;

    const timer = setInterval(() => {
      setCurrent(
        (prev) => (prev + 1) % bannerImages.length
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [bannerImages]);

  if (bannerImages.length === 0) {
    return (
      <div className="h-[400px] flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
<div className="relative w-full h-[500px] overflow-hidden">
  
      {bannerImages.map((url, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
         <img
  src={url}
  alt={`Banner ${index + 1}`}
  className="absolute inset-0 w-full h-full object-cover object-top"
/>
        </div>
      ))}

      <button
        onClick={() =>
          setCurrent(
            (prev) =>
              (prev - 1 + bannerImages.length) %
              bannerImages.length
          )
        }
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/50 rounded-full w-10 h-10 z-20"
      >
        ‹
      </button>

      <button
        onClick={() =>
          setCurrent(
            (prev) => (prev + 1) % bannerImages.length
          )
        }
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/50 rounded-full w-10 h-10 z-20"
      >
        ›
      </button>
      
    </div>
  );
}