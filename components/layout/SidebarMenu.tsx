"use client";

import { useUserStore } from "@/lib/userStore";
import Link from "next/link";
import { useEffect } from "react";

interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SidebarMenu({ isOpen, onClose }: SidebarMenuProps) {
  const user = useUserStore((state) => state.user);

  // Prevent background scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Dark overlay */}
      <div 
        className="fixed inset-0 bg-black/70 transition-opacity"
        onClick={onClose}
      ></div>

      {/* Sidebar Panel */}
      <div className="relative flex flex-col w-[365px] max-w-[80%] bg-white h-full shadow-xl animate-slide-in-left">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-3 -right-14 text-white p-1 border border-white rounded-md hover:bg-white/10 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="bg-[#232f3e] text-white px-8 py-3 flex items-center gap-3">
          <div className="bg-white rounded-full p-1 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#232f3e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="text-[19px] font-bold">Hello, {user ? user.name : "Sign in"}</h2>
        </div>

        {/* Content Sections */}
        <div className="flex-1 overflow-y-auto pb-20">
          {/* Trending */}
          <div className="py-2 border-b border-gray-300">
            <h3 className="px-8 py-2 text-[18px] font-bold text-gray-900 mt-2">Trending</h3>
            <ul className="text-[14px] text-gray-600">
              <li className="px-8 py-3 hover:bg-gray-100 cursor-pointer transition-colors">Bestsellers</li>
              <li className="px-8 py-3 hover:bg-gray-100 cursor-pointer transition-colors">New Releases</li>
              <li className="px-8 py-3 hover:bg-gray-100 cursor-pointer transition-colors">Movers and Shakers</li>
            </ul>
          </div>

          {/* Digital Content and Devices */}
          <div className="py-2 border-b border-gray-300">
            <h3 className="px-8 py-2 text-[18px] font-bold text-gray-900 mt-2">Digital Content and Devices</h3>
            <ul className="text-[14px] text-gray-600">
              <li className="px-8 py-3 hover:bg-gray-100 cursor-pointer flex justify-between items-center transition-colors">
                Amazon miniTV - FREE entertainment
              </li>
              <li className="px-8 py-3 hover:bg-gray-100 cursor-pointer flex justify-between items-center transition-colors">
                Echo & Alexa
                <span className="text-gray-400">›</span>
              </li>
              <li className="px-8 py-3 hover:bg-gray-100 cursor-pointer flex justify-between items-center transition-colors">
                Fire TV
                <span className="text-gray-400">›</span>
              </li>
              <li className="px-8 py-3 hover:bg-gray-100 cursor-pointer flex justify-between items-center transition-colors">
                Kindle E-Readers & eBooks
                <span className="text-gray-400">›</span>
              </li>
              <li className="px-8 py-3 hover:bg-gray-100 cursor-pointer flex justify-between items-center transition-colors">
                Audible Audiobooks
                <span className="text-gray-400">›</span>
              </li>
              <li className="px-8 py-3 hover:bg-gray-100 cursor-pointer flex justify-between items-center transition-colors">
                Amazon Prime Video
                <span className="text-gray-400">›</span>
              </li>
              <li className="px-8 py-3 hover:bg-gray-100 cursor-pointer flex justify-between items-center transition-colors">
                Amazon Prime Music
                <span className="text-gray-400">›</span>
              </li>
            </ul>
          </div>

          {/* Shop by Category */}
          <div className="py-2 border-b border-gray-300">
            <h3 className="px-8 py-2 text-[18px] font-bold text-gray-900 mt-2">Shop by Category</h3>
            <ul className="text-[14px] text-gray-600">
              <li className="px-8 py-3 hover:bg-gray-100 cursor-pointer flex justify-between items-center transition-colors">
                Mobiles, Computers
                <span className="text-gray-400">›</span>
              </li>
              <li className="px-8 py-3 hover:bg-gray-100 cursor-pointer flex justify-between items-center transition-colors">
                TV, Appliances, Electronics
                <span className="text-gray-400">›</span>
              </li>
              <li className="px-8 py-3 hover:bg-gray-100 cursor-pointer flex justify-between items-center transition-colors">
                Men's Fashion
                <span className="text-gray-400">›</span>
              </li>
              <li className="px-8 py-3 hover:bg-gray-100 cursor-pointer flex justify-between items-center transition-colors">
                Women's Fashion
                <span className="text-gray-400">›</span>
              </li>
              <li className="px-8 py-3 hover:bg-gray-100 cursor-pointer flex justify-between items-center transition-colors">
                See all
                <span className="text-gray-400">∨</span>
              </li>
            </ul>
          </div>

          {/* Programs & Features */}
          <div className="py-2">
            <h3 className="px-8 py-2 text-[18px] font-bold text-gray-900 mt-2">Programs & Features</h3>
            <ul className="text-[14px] text-gray-600">
              <li className="px-8 py-3 hover:bg-gray-100 cursor-pointer flex justify-between items-center transition-colors">
                Gift Cards & Mobile Recharges
                <span className="text-gray-400">›</span>
              </li>
              <li className="px-8 py-3 hover:bg-gray-100 cursor-pointer flex justify-between items-center transition-colors">
                Flight Tickets
              </li>
              <li className="px-8 py-3 hover:bg-gray-100 cursor-pointer flex justify-between items-center transition-colors">
                Clearance store
              </li>
            </ul>
          </div>

        </div>
      </div>
      
      {/* Custom styles for the slide-in animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}} />
    </div>
  );
}
