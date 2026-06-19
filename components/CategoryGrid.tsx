"use client";
import Link from "next/link";

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

const categoriesRow2: Category[] = [
  {
    title: "Starting ₹199 | Amazon Brands & more",
    items: [
      { name: "Starting ₹199 | Bedsheets",              img: "/images/categories/brands/bedsheet1.jpg" },
      { name: "Starting ₹199 | Curtains",               img: "/images/categories/brands/curtains.jpg" },
      { name: "Minimum 40% off | Ironing board & more", img: "/images/categories/brands/ironing board.jpg" },
      { name: "Up to 60% off | Home decor",             img: "/images/categories/brands/home decor.jpg" },
    ],
    link: "/products?category=AmazonBrands",
    linkText: "See more",
  },
  {
    title: "Automotive essentials | Up to 60% off",
    items: [
      { name: "Cleaning accessories", img: "/images/categories/automotive/clean.jpg" },
      { name: "Tyre & rim care",      img: "/images/categories/automotive/tyre.jpg" },
      { name: "Helmets",              img: "/images/categories/automotive/helmet.jpg" },
      { name: "Vacuum cleaner",       img: "/images/categories/automotive/vacum cleaner.jpg" },
    ],
    link: "/products?category=Automotive",
    linkText: "See more",
  },
  {
    title: "Up to 75% off | Deals on headphones",
    items: [
      { name: "Neckband earphones",  img: "/images/categories/headphones/neck earphone.png" },
      { name: "TWS earbuds",         img: "/images/categories/headphones/tws.jpg" },
      { name: "Over-ear headphones", img: "/images/categories/headphones/over ear.jpg" },
      { name: "Wired earphones",     img: "/images/categories/headphones/head wired.jpg" },
    ],
    link: "/products?category=Headphones",
    linkText: "See more",
  },
  {
    title: "Up to 50% off | Baby care & toys | Amazon Brands",
    items: [
      { name: "Up to 50% off | Baby diapers & wipes",   img: "/images/categories/baby/diaper.jpg" },
      { name: "Up to 50% off | Ride ons",               img: "/images/categories/baby/rideon.jpg" },
      { name: "Starting ₹649 | RC cars",                img: "/images/categories/baby/rc cars.jpg" },
      { name: "Up to 50% off | Baby safety essentials", img: "/images/categories/baby/safty.jpg" },
    ],
    link: "/products?category=BabyCare",
    linkText: "See all offers",
  },
];

function CategoryCard({ cat }: { cat: Category }) {
  return (
    <div className="bg-white p-5 rounded shadow hover:shadow-md transition-shadow flex flex-col h-full">
      <h3 className="text-base font-bold text-gray-900 mb-3 leading-snug min-h-[48px]">
        {cat.title}
      </h3>
      <div className="grid grid-cols-2 gap-2 flex-1">
        {cat.items.map((item, i) => (
          <Link href={cat.link} key={i} className="flex flex-col">
            <div className="w-full aspect-square bg-gray-50 rounded overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://placehold.co/150x150";
                }}
              />
            </div>
            <p className="text-xs text-gray-700 mt-1 text-center leading-tight line-clamp-2">
              {item.name}
            </p>
          </Link>
        ))}
      </div>
      <Link
        href={cat.link}
        className="text-sm text-blue-500 hover:text-blue-700 hover:underline mt-4 block"
      >
        {cat.linkText}
      </Link>
    </div>
  );
}

export default function CategoryGrid() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 py-4 -mt-32 relative z-10">

      {/* Row 1 */}
      <div className="grid grid-cols-4 gap-3 items-stretch">

        {categoriesRow1.map((cat, index) => (
          <CategoryCard key={index} cat={cat} />
        ))}

        {/* Column 4 — Sign in + Sponsored */}
        <div className="flex flex-col gap-3 h-full">

          {/* Sign-in box */}
          <div className="bg-white p-4 rounded shadow hover:shadow-md transition-shadow">
            <h3 className="text-base font-bold text-gray-900 mb-3 leading-snug">
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

          {/* Sponsored box — full width of column, no fixed w */}
          <div className="bg-white p-3 rounded shadow hover:shadow-md transition-shadow flex flex-col">

            <div className="flex items-start gap-2">

              {/* Image */}
              <img
                src="/images/sponsored/cetaphil.jpg"
                alt="Cetaphil"
                className="w-[120px] h-[160px] object-contain flex-shrink-0"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://placehold.co/120x160";
                }}
              />

              {/* Details */}
              <div className="flex flex-col gap-1 flex-1 min-w-0">

                <div className="bg-green-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-full w-fit">
                  Cetaphil
                </div>

                <p className="text-[12px] text-blue-600 leading-snug hover:underline cursor-pointer">
                  Cetaphil Moisturising Lotion 118 ml for Dry to Normal &amp; Sensiti...
                </p>

                <div className="flex items-center gap-0.5 flex-wrap">
                  <span className="text-orange-400 text-sm">★★★★½</span>
                  <span className="text-[11px] text-blue-600 ml-1">(17,999)</span>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-red-600 text-[12px] font-medium">-14%</span>
                  <span className="text-gray-900 font-bold text-sm">₹676</span>
                  <sup className="text-gray-900 font-bold text-[10px]">00</sup>
                </div>

                <p className="text-[11px] text-gray-500">
                  M.R.P: <span className="line-through">₹789</span>
                </p>
                <span className="text-[11px] font-bold text-blue-700 italic">✓prime</span>

              </div>
            </div>

            <p className="text-[10px] text-gray-400 mt-2 text-right">Sponsored ⓘ</p>
          </div>

        </div>
      </div>
      {/* End Row 1 */}

      {/* Row 2 */}
      <div className="grid grid-cols-4 gap-3 mt-3 items-stretch">
        {categoriesRow2.map((cat, index) => (
          <CategoryCard key={index} cat={cat} />
        ))}
      </div>

    </div>
  );
}