"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import { useCartStore } from "@/lib/cartStore";
import { useUserStore } from "@/lib/userStore";

import {
  FaMapMarkerAlt,
  FaShoppingCart,
  FaChevronDown,
} from "react-icons/fa";

export default function Navbar() {
  const [showLanguage, setShowLanguage] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { items: cartItems } = useCartStore();
  const { user, logout } = useUserStore();

  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="bg-[#131921] text-white relative z-50">
      <div className="flex items-center px-4 h-16">

        {/* Logo */}
        <div className="px-2 py-1 border border-transparent hover:border-white cursor-pointer">
          <Link href="/">
            <h1 className="text-3xl font-bold">amazon.in</h1>
          </Link>
        </div>

        {/* Location */}
        <div className="ml-2 px-2 py-1 border border-transparent hover:border-white cursor-pointer hidden md:block">
          <p className="text-xs text-gray-300">Delivering to Madurai 625018</p>
          <div className="flex items-center gap-1">
            <FaMapMarkerAlt />
            <span className="font-bold">Update location</span>
          </div>
        </div>

        {/* Search Bar */}
        <SearchBar />

        {/* Language */}
        <div className="relative ml-2 hidden sm:block">
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
                <h3 className="font-bold mb-2">Change Language</h3>
                <div className="space-y-2 text-sm">
                  <label className="block"><input type="radio" name="lang" /> English</label>
                  <label className="block"><input type="radio" name="lang" /> தமிழ்</label>
                  <label className="block"><input type="radio" name="lang" /> हिन्दी</label>
                  <label className="block"><input type="radio" name="lang" /> తెలుగు</label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Account */}
        <div className="relative ml-2 hidden sm:block">
          <div
            onClick={() => {
              setShowAccount(!showAccount);
              setShowLanguage(false);
            }}
            className="px-2 py-1 border border-transparent hover:border-white cursor-pointer"
          >
            <Link href={mounted && user ? "#" : "/login"}>
              <p className="text-xs">
                Hello, {mounted && user ? user.name : "Sign in"}
              </p>
            </Link>
            <div className="flex items-center gap-1">
              <span className="font-bold">Account & Lists</span>
              <FaChevronDown size={10} />
            </div>
          </div>

          {showAccount && (
            <div className="absolute top-full right-0 mt-1 w-[350px] bg-white text-black rounded shadow-lg">
              <div className="p-4">
                {mounted && user ? (
                  <button
                    onClick={() => {
                      logout();
                      setShowAccount(false);
                    }}
                    className="block w-full bg-yellow-400 py-2 rounded font-bold text-center"
                  >
                    Sign Out
                  </button>
                ) : (
                  <Link
                    href="/login"
                    className="block w-full bg-yellow-400 py-2 rounded font-bold text-center"
                  >
                    Sign In
                  </Link>
                )}

                <hr className="my-3" />

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h3 className="font-bold mb-2">Your Lists</h3>
                    <ul className="space-y-1">
                      <li>Create Wish List</li>
                      <li>Baby Wishlist</li>
                      <li>Discover Your Style</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Your Account</h3>
                    <ul className="space-y-1">
                      <li>Your Account</li>
                      <li>
                        <Link href="/orders" className="hover:text-yellow-500 hover:underline">
                          Your Orders
                        </Link>
                      </li>
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
        <Link href="/orders">
          <div className="ml-2 px-2 py-1 border border-transparent hover:border-white cursor-pointer hidden sm:block">
            <p className="text-xs">Returns</p>
            <p className="font-bold">& Orders</p>
          </div>
        </Link>

        {/* Cart */}
        <Link
          href="/cart"
          className="ml-2 flex items-center gap-1 px-2 py-1 border border-transparent hover:border-white cursor-pointer relative"
        >
          <div className="relative">
            <FaShoppingCart size={28} />
            {mounted && cartItemCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full z-10">
                {cartItemCount}
              </span>
            )}
          </div>
          <span className="font-bold hidden sm:inline">Cart</span>
        </Link>

      </div>
    </header>
  );
}