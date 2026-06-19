"use client";
import Link from "next/link";
import { useState } from "react";
import SearchBar from "./SearchBar";

import {
  FaMapMarkerAlt,
  FaShoppingCart,
  FaChevronDown,
} from "react-icons/fa";

export default function Navbar() {
  const [showLanguage, setShowLanguage] = useState(false);
  const [showAccount, setShowAccount] = useState(false);

  return (
    <header className="bg-[#131921] text-white relative z-50">
      <div className="flex items-center px-4 h-16">

        {/* Logo */}
        <div className="px-2 py-1 border border-transparent hover:border-white cursor-pointer">
          <h1 className="text-3xl font-bold">
            amazon.in
          </h1>
        </div>

        {/* Location */}
        <div className="ml-2 px-2 py-1 border border-transparent hover:border-white cursor-pointer">
          <p className="text-xs text-gray-300">
             Delivering to Madurai 625018
          </p>

          <div className="flex items-center gap-1">
            <FaMapMarkerAlt />
            <span className="font-bold">
              Update location
            </span>
          </div>
        </div>

        {/* Search Bar */}
        <SearchBar />

        {/* Language */}
        <div className="relative ml-2">
          <div
            onClick={() => {
              setShowLanguage(!showLanguage);
              setShowAccount(false);
            }}
            className="px-2 py-1 border border-transparent hover:border-white cursor-pointer"
          >
            <div className="flex items-center gap-1">
              <span className="font-bold">EN</span>
              <FaChevronDown size={10} />
            </div>
          </div>

          {showLanguage && (
            <div className="absolute top-full left-0 mt-1 w-56 bg-white text-black rounded shadow-lg">
              <div className="p-3">
                <h3 className="font-bold mb-2">
                  Change Language
                </h3>

                <div className="space-y-2 text-sm">
                  <label className="block">
                    <input type="radio" name="lang" /> English
                  </label>

                  <label className="block">
                    <input type="radio" name="lang" /> தமிழ்
                  </label>

                  <label className="block">
                    <input type="radio" name="lang" /> हिन्दी
                  </label>

                  <label className="block">
                    <input type="radio" name="lang" /> తెలుగు
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
     <div className="relative ml-2">
 <div
  onClick={() => {
    setShowAccount(!showAccount);
    setShowLanguage(false);
  }}
  className="px-2 py-1 border border-transparent hover:border-white cursor-pointer"
>
  <Link href="/login">
    <p className="text-xs">
      Hello, Sign in
    </p>
  </Link>

  <div className="flex items-center gap-1">
    <span className="font-bold">
      Account & Lists
    </span>
    <FaChevronDown size={10} />
  </div>
</div>

          {showAccount && (
            <div className="absolute top-full right-0 mt-1 w-[350px] bg-white text-black rounded shadow-lg">
              <div className="p-4">

              <Link href="/login"
                    className="block w-full bg-yellow-400 py-2 rounded font-bold text-center" >
                    Sign In
                 </Link>

                <hr className="my-3" />

                <div className="grid grid-cols-2 gap-4 text-sm">

                  <div>
                    <h3 className="font-bold mb-2">
                      Your Lists
                    </h3>

                    <ul className="space-y-1">
                      <li>Create Wish List</li>
                      <li>Baby Wishlist</li>
                      <li>Discover Your Style</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold mb-2">
                      Your Account
                    </h3>

                    <ul className="space-y-1">
                      <li>Your Account</li>
                      <li>Your Orders</li>
                      <li>Your Wish List</li>
                      <li>Prime Membership</li>
                    </ul>
                  </div>

                </div>

              </div>
            </div>
          )}
        </div>

        {/* Orders */}
        <div className="ml-2 px-2 py-1 border border-transparent hover:border-white cursor-pointer">
          <p className="text-xs">
            Returns
          </p>

          <p className="font-bold">
            & Orders
          </p>
        </div>

        {/* Cart */}
<Link
  href="/cart"
  className="ml-2 flex items-center gap-2 px-2 py-1 border border-transparent hover:border-white cursor-pointer"
>
  <FaShoppingCart size={28} />
  <span className="font-bold">Cart</span>
</Link>
      </div>
    </header>
  );
}