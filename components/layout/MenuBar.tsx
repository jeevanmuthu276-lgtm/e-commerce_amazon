"use client";

import { useState } from "react";
import Link from "next/link";
import SidebarMenu from "./SidebarMenu";

export default function MenuBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    "Today's Deals",
    "Bestsellers",
    "Buy Again",
    "Prime",
    "Mobiles",
    "Gift Cards",
    "Kindle eBooks",
  ];

  return (
    <>
      <div className="bg-[#232f3e] text-white h-12 flex items-center px-4 overflow-x-auto whitespace-nowrap hide-scrollbar flex-shrink-0 text-sm">

        {/* All Menu */}
        <div
          onClick={() => setIsSidebarOpen(true)}
          className="px-2 py-1.5 border border-transparent hover:border-white cursor-pointer flex items-center gap-1 font-bold whitespace-nowrap flex-shrink-0"
        >
          ☰ All
        </div>

        {/* Menu Items Container */}
        <div className="flex items-center ml-2 gap-1 text-[13px] font-medium flex-1">
          
          {/* Rufus Pill */}
          <div className="px-2 py-1 mx-1 flex items-center gap-1 bg-white text-black font-bold rounded-full cursor-pointer hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
            <span className="text-[#0f1111]">Rufus</span>
          </div>

          <Link href="/minitv">
            <div className="px-2 py-1.5 border border-transparent hover:border-white cursor-pointer transition-all whitespace-nowrap flex-shrink-0">
              MX Player
            </div>
          </Link>

          <Link href="/seller">
            <div className="px-2 py-1.5 border border-transparent hover:border-white cursor-pointer transition-all whitespace-nowrap flex-shrink-0">
              Sell
            </div>
          </Link>

          {/* <Link href="/keep-shopping">
            <div className="px-2 py-1.5 border border-transparent hover:border-white cursor-pointer transition-all whitespace-nowrap flex-shrink-0">
              Keep Shopping for
            </div>
          </Link>
           */}
          <Link href="/amazon-pay">
            <div className="px-2 py-1.5 border border-transparent hover:border-white cursor-pointer transition-all whitespace-nowrap flex-shrink-0">
              Amazon Pay
            </div>
          </Link>
          
          {menuItems.map((item) => (
            <div
              key={item}
              className="px-2 py-1.5 border border-transparent hover:border-white cursor-pointer transition-all whitespace-nowrap flex-shrink-0 flex items-center gap-1"
            >
              {item}
              {item === "Prime" && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </div>
          ))}
        </div>

      </div>

      <SidebarMenu 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
    </>
  );
}