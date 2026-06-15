"use client";

import { useState, useRef, useEffect } from "react";
import SearchBar from "./SearchBar";
import {
  FaMapMarkerAlt,
  FaShoppingCart,
  FaChevronDown,
} from "react-icons/fa";

const LANGUAGES = [
  { code: "EN", label: "English - EN" },
  { code: "HI", label: "हिन्दी - HI" },
  { code: "TA", label: "தமிழ் - TA" },
  { code: "TE", label: "తెలుగు - TE" },
  { code: "KN", label: "ಕನ್ನಡ - KN" },
  { code: "ML", label: "മലയാളം - ML" },
  { code: "BN", label: "বাংলা - BN" },
  { code: "MR", label: "मराठी - MR" },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<"language" | "account" | null>(null);
  const [language, setLanguage] = useState("EN");
  const navRef = useRef<HTMLDivElement>(null);

  // close any open dropdown when clicking outside the navbar
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = (menu: "language" | "account") => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <header ref={navRef} className="relative z-50 bg-[#131921] text-white">
      <div className="flex items-center px-4 py-1">

        {/* Logo */}
        <div className="px-2 py-2 border border-transparent hover:border-white cursor-pointer">
          <h1 className="text-3xl font-bold">amazon.in</h1>
        </div>

        {/* Location */}
        <div className="ml-2 px-2 py-2 border border-transparent hover:border-white cursor-pointer">
          <p className="text-xs text-gray-300">Delivering to Madurai</p>
          <div className="flex items-center gap-1">
            <FaMapMarkerAlt />
            <span className="font-bold">Update location</span>
          </div>
        </div>

        {/* Search Bar */}
        <SearchBar />

        {/* Language dropdown */}
        <div className="relative">
          <div
            onClick={() => toggleMenu("language")}
            className={`mx-2 px-2 py-2 border cursor-pointer ${
              openMenu === "language"
                ? "border-white"
                : "border-transparent hover:border-white"
            }`}
          >
            <div className="flex items-center gap-1">
              <span className="font-bold">{language}</span>
              <FaChevronDown size={10} />
            </div>
          </div>

          {openMenu === "language" && (
            <div className="absolute top-full left-0 mt-1 w-64 rounded bg-white text-black shadow-xl border border-gray-200">
              {/* little pointer triangle */}
              <div className="absolute -top-2 left-6 h-4 w-4 rotate-45 border-l border-t border-gray-200 bg-white" />

              <div className="relative rounded bg-white p-4">
                <h3 className="mb-2 px-1 text-sm font-bold">Change Language</h3>

                <div className="mb-2 flex flex-col gap-1">
                  {LANGUAGES.map((lang) => (
                    <label
                      key={lang.code}
                      className="flex cursor-pointer items-center gap-2 rounded px-1 py-1 text-sm hover:bg-gray-100"
                    >
                      <input
                        type="radio"
                        name="language"
                        checked={language === lang.code}
                        onChange={() => setLanguage(lang.code)}
                        className="accent-orange-500"
                      />
                      {lang.label}
                    </label>
                  ))}
                </div>

                <hr className="my-2" />

                <div className="flex items-center gap-2 px-1 text-sm">
                  <span>🇮🇳</span>
                  <span>You are shopping on Amazon.in</span>
                </div>

                <a
                  href="#"
                  className="px-1 text-sm text-blue-600 hover:text-orange-600 hover:underline"
                >
                  Change country/region
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Sign In / Account & Lists dropdown */}
        <div className="relative">
          <div
            onClick={() => toggleMenu("account")}
            className={`mx-2 px-2 py-2 border cursor-pointer ${
              openMenu === "account"
                ? "border-white"
                : "border-transparent hover:border-white"
            }`}
          >
            <p className="text-xs">Hello, sign in</p>
            <div className="flex items-center gap-1">
              <p className="font-bold">Account & Lists</p>
              <FaChevronDown size={10} />
            </div>
          </div>

          {openMenu === "account" && (
            <div className="absolute top-full right-0 mt-1 w-[420px] rounded bg-white text-black shadow-xl border border-gray-200">
              <div className="absolute -top-2 right-10 h-4 w-4 rotate-45 border-l border-t border-gray-200 bg-white" />

              <div className="relative rounded bg-white p-4">
                <button className="w-full rounded-md bg-yellow-400 py-1.5 text-sm font-medium hover:bg-yellow-500">
                  Sign in
                </button>
                <p className="mt-2 text-center text-xs">
                  New customer?{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Start here.
                  </a>
                </p>

                <hr className="my-3" />

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="mb-2 font-bold">Your Lists</h4>
                    <ul className="space-y-1.5 text-gray-800">
                      <li className="cursor-pointer hover:text-orange-600 hover:underline">Create a Wish List</li>
                      <li className="cursor-pointer hover:text-orange-600 hover:underline">Wish from Any Website</li>
                      <li className="cursor-pointer hover:text-orange-600 hover:underline">Baby Wishlist</li>
                      <li className="cursor-pointer hover:text-orange-600 hover:underline">Discover Your Style</li>
                      <li className="cursor-pointer hover:text-orange-600 hover:underline">Explore Showroom</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 font-bold">Your Account</h4>
                    <ul className="space-y-1.5 text-gray-800">
                      <li className="cursor-pointer hover:text-orange-600 hover:underline">Your Account</li>
                      <li className="cursor-pointer hover:text-orange-600 hover:underline">Your Orders</li>
                      <li className="cursor-pointer hover:text-orange-600 hover:underline">Your Wish List</li>
                      <li className="cursor-pointer hover:text-orange-600 hover:underline">Keep shopping for</li>
                      <li className="cursor-pointer hover:text-orange-600 hover:underline">Your Recommendations</li>
                      <li className="cursor-pointer hover:text-orange-600 hover:underline">Your Prime Membership</li>
                      <li className="cursor-pointer hover:text-orange-600 hover:underline">Your Prime Video</li>
                      <li className="cursor-pointer hover:text-orange-600 hover:underline">Your Subscribe & Save Items</li>
                      <li className="cursor-pointer hover:text-orange-600 hover:underline">Memberships & Subscriptions</li>
                      <li className="cursor-pointer hover:text-orange-600 hover:underline">Your Seller Account</li>
                      <li className="cursor-pointer hover:text-orange-600 hover:underline">Manage Your Content and Devices</li>
                      <li className="cursor-pointer hover:text-orange-600 hover:underline">Your Music Library</li>
                      <li className="cursor-pointer hover:text-orange-600 hover:underline">Register for a free Business Account</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Orders */}
        <div className="mx-2 px-2 py-2 border border-transparent hover:border-white cursor-pointer">
          <p className="text-xs">Returns</p>
          <p className="font-bold">& Orders</p>
        </div>

        {/* Cart */}
        <div className="flex items-center gap-2 px-2 py-2 border border-transparent hover:border-white cursor-pointer">
          <FaShoppingCart size={28} />
          <span className="font-bold">Cart</span>
        </div>

      </div>
    </header>
  );
}