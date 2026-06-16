"use client";
import Link from "next/link";

// ─── Types ───────────────────────────────────────────────────────────────────
interface CategoryItem {
  name: string;
  img: string;
}

interface Category {
  title: string;
  items: CategoryItem[];
  link: string;
  linkText: string;
}

// ─── Row 1 Data ───────────────────────────────────────────────────────────────
const categoriesRow1: Category[] = [
  {
    title: "Appliances for your home | Up to 55% off",
    items: [
      { name: "Air conditioners", img: "/images/categories/appliance/ac.jpg" },
      { name: "Refrigerators",    img: "/images/categories/appliance/fridge.jpg" },
      { name: "Microwaves",       img: "/images/categories/appliance/microwave.jpg" },
      { name: "Washing machines", img: "/images/categories/appliance/washing.jpg" },
    ],
    link: "/products?category=Appliances",
    linkText: "See more",
  },
  {
    title: "Revamp your home in style",
    items: [
      { name: "Cushion covers, bedsheets & more", img: "/images/categories/home/bedcover.jpg" },
      { name: "Figurines, vases & more",          img: "/images/categories/home/clock.jpg" },
      { name: "Home storage",                     img: "/images/categories/home/cookware.jpg" },
      { name: "Lighting solutions",               img: "/images/categories/home/lamp.jpg" },
    ],
    link: "/products?category=Home",
    linkText: "Explore all",
  },
  {
    title: "Starting ₹49 | Deals on home essentials",
    items: [
      { name: "Cleaning supplies",    img: "/images/categories/essentials/cleaning.jpg" },
      { name: "Bathroom accessories", img: "/images/categories/essentials/shower.jpg" },
      { name: "Home tools",           img: "/images/categories/essentials/home tools.jpg" },
      { name: "Wallpapers",           img: "/images/categories/essentials/wall papers.jpg" },
    ],
    link: "/products?category=Kitchen",
    linkText: "Explore all",
  },
];

// ─── Row 2 Data ───────────────────────────────────────────────────────────────
const categoriesRow2: Category[] = [
  {
    title: "Starting ₹199 | Amazon Brands & more",
    items: [
      { name: "Starting ₹199 | Bedsheets",          img: "/images/categories/brands/bedsheets.jpg" },
      { name: "Starting ₹199 | Curtains",            img: "/images/categories/brands/curtains.jpg" },
      { name: "Minimum 40% off | Ironing board & more", img: "/images/categories/brands/ironingboard.jpg" },
      { name: "Up to 60% off | Home decor",          img: "/images/categories/brands/homedecor.jpg" },
    ],
    link: "/products?category=AmazonBrands",
    linkText: "See more",
  },
  {
    title: "Automotive essentials | Up to 60% off",
    items: [
      { name: "Cleaning accessories", img: "/images/categories/automotive/cleaning.jpg" },
      { name: "Tyre & rim care",      img: "/images/categories/automotive/tyre.jpg" },
      { name: "Helmets",              img: "/images/categories/automotive/helmets.jpg" },
      { name: "Vacuum cleaner",       img: "/images/categories/automotive/vacuum.jpg" },
    ],
    link: "/products?category=Automotive",
    linkText: "See more",
  },
  {
    title: "Up to 75% off | Deals on headphones",
    items: [
      { name: "Neckband earphones",  img: "/images/categories/headphones/neckband.jpg" },
      { name: "TWS earbuds",         img: "/images/categories/headphones/tws.jpg" },
      { name: "Over-ear headphones", img: "/images/categories/headphones/overear.jpg" },
      { name: "Wired earphones",     img: "/images/categories/headphones/wired.jpg" },
    ],
    link: "/products?category=Headphones",
    linkText: "See more",
  },
  {
    title: "Up to 50% off | Baby care & toys | Amazon Brands",
    items: [
      { name: "Up to 50% off | Baby diapers & wipes",    img: "/images/categories/baby/diapers.jpg" },
      { name: "Up to 50% off | Ride ons",                img: "/images/categories/baby/rideons.jpg" },
      { name: "Starting ₹649 | RC cars",                 img: "/images/categories/baby/rccars.jpg" },
      { name: "Up to 50% off | Baby safety essentials",  img: "/images/categories/baby/safety.jpg" },
    ],
    link: "/products?category=BabyCare",
    linkText: "See all offers",
  },
];

// ─── Reusable Category Card ───────────────────────────────────────────────────
function CategoryCard({ cat }: { cat: Category }) {
  return (
    <div className="bg-white p-5 rounded shadow hover:shadow-md transition-shadow flex flex-col">
      {/* Title */}
      <h3 className="text-base font-bold text-gray-900 mb-3 leading-snug">
        {cat.title}
      </h3>

      {/* 2×2 Image Grid */}
      <div className="grid grid-cols-2 gap-3 flex-1">
        {cat.items.map((item, i) => (
          <Link href={cat.link} key={i}>
            <div className="flex flex-col items-center">
              <div className="w-full h-44 bg-gray-50 rounded overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://via.placeholder.com/150";
                  }}
                />
              </div>
              <p className="text-xs text-gray-700 mt-1 text-center leading-tight">
                {item.name}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* See more / Explore all link */}
      <Link
        href={cat.link}
        className="text-sm text-blue-500 hover:text-blue-700 hover:underline mt-4 block"
      >
        {cat.linkText}
      </Link>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function CategoryGrid() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 py-4 -mt-32 relative z-10">

      {/* ── Row 1: 3 category cards + Column 4 (sign-in + sponsored) ── */}
      <div className="grid grid-cols-4 gap-3">

        {categoriesRow1.map((cat, index) => (
          <CategoryCard key={index} cat={cat} />
        ))}

        {/* Column 4 — Sign in + Sponsored product */}
        <div className="flex flex-col gap-3">

          {/* Sign-in box */}
          <div className="bg-white p-5 rounded shadow hover:shadow-md transition-shadow">
            <h3 className="text-base font-bold text-gray-900 mb-4 leading-snug">
              Sign in for your best experience
            </h3>
            <Link
              href="/login"
              className="block w-full text-center bg-yellow-400 hover:bg-yellow-500
                         text-gray-900 font-medium text-sm py-2 px-4 rounded transition-colors"
            >
              Sign in securely
            </Link>
            <p className="mt-2 text-center text-sm text-blue-600 hover:underline cursor-pointer">
              New customer? Start here
            </p>
          </div>

          {/* Sponsored product box */}
          <div className="bg-white p-4 rounded shadow hover:shadow-md transition-shadow flex-1 flex flex-col">
            <div className="flex gap-3 flex-1">
              <img
                src="/images/sponsored/cetaphil.jpg"
                alt="Cetaphil"
                className="w-24 h-28 object-contain flex-shrink-0"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://via.placeholder.com/96";
                }}
              />
              <div className="flex flex-col gap-2">
                <p className="text-xs text-blue-600 leading-snug hover:underline cursor-pointer">
                  Cetaphil Moisturising Lotion 118 ml for Dry to Normal &amp; Sensitive Skin
                </p>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500 text-sm">★★★★½</span>
                  <span className="text-xs text-blue-600">(17,987)</span>
                </div>
                <div>
                  <p className="text-sm">
                    <span className="text-red-600 font-medium">-15% </span>
                    <span className="font-bold text-gray-900">₹670</span>
                    <sup className="font-bold text-gray-900">00</sup>
                  </p>
                  <p className="text-xs text-gray-500">
                    M.R.P: <span className="line-through">₹789</span>
                  </p>
                  <span className="text-xs font-bold text-blue-700 italic">prime</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-3 text-right">Sponsored ⓘ</p>
          </div>

        </div>
        {/* End Column 4 */}

      </div>
      {/* End Row 1 */}

      {/* ── Row 2: 4 category cards (no Column 4) ── */}
      <div className="grid grid-cols-4 gap-3 mt-3">
        {categoriesRow2.map((cat, index) => (
          <CategoryCard key={index} cat={cat} />
        ))}
      </div>
      {/* End Row 2 */}

    </div>
  );
}