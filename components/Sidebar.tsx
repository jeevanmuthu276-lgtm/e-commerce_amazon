// components/Sidebar.tsx

import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const trending: string[] = ['Bestsellers', 'New Releases'];

const digital: string[] = [
  'Echo & Alexa',
  'Fire TV',
  'Kindle E-Readers & eBooks',
  'Audible Audiobooks',
  'Amazon Prime Video',
  'Amazon Music',
];

const shop: string[] = [
  'Mobiles, Computers',
  'TV, Appliances, Electronics',
  "Men's Fashion",
  "Women's Fashion",
  'Home & Kitchen',
  'Health, Beauty & Grocery',
  'Toys & Baby Products',
  'Sports, Fitness',
];

const programs: string[] = [
  'Amazon Pay',
  'Gift Cards',
  'Prime',
  'Buy Again',
  'Amazon Business',
  'Sell on Amazon',
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">

      {/* Sidebar Panel */}
      <div
        className="w-80 bg-white flex flex-col overflow-y-auto shadow-2xl"
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#131921] text-white flex items-center gap-3 px-4 py-4 font-bold text-base">
          <span>👤</span>
          <span>Hello, sign in</span>
        </div>

        {/* Trending */}
        <div className="bg-[#f0f2f2] border-t border-gray-300 px-4 py-2 font-bold text-sm">
          Trending
        </div>
        {trending.map((item: string) => (
          <div
            key={item}
            className="flex items-center justify-between px-4 py-3 text-sm border-b border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors"
          >
            <span>{item}</span>
            <span className="text-gray-400">›</span>
          </div>
        ))}

        {/* Digital Content */}
        <div className="bg-[#f0f2f2] border-t border-gray-300 px-4 py-2 font-bold text-sm">
          Digital Content and Devices
        </div>
        {digital.map((item: string) => (
          <div
            key={item}
            className="flex items-center justify-between px-4 py-3 text-sm border-b border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors"
          >
            <span>{item}</span>
            <span className="text-gray-400">›</span>
          </div>
        ))}

        {/* Shop by Category */}
        <div className="bg-[#f0f2f2] border-t border-gray-300 px-4 py-2 font-bold text-sm">
          Shop by Category
        </div>
        {shop.map((item: string) => (
          <div
            key={item}
            className="flex items-center justify-between px-4 py-3 text-sm border-b border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors"
          >
            <span>{item}</span>
            <span className="text-gray-400">›</span>
          </div>
        ))}
        <div className="flex items-center justify-between px-4 py-3 text-sm border-b border-gray-100 cursor-pointer hover:bg-gray-100 text-[#007185] transition-colors">
          <span>See all</span>
          <span>›</span>
        </div>

        {/* Programs & Features */}
        <div className="bg-[#f0f2f2] border-t border-gray-300 px-4 py-2 font-bold text-sm">
          Programs &amp; Features
        </div>
        {programs.map((item: string) => (
          <div
            key={item}
            className="flex items-center justify-between px-4 py-3 text-sm border-b border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors"
          >
            <span>{item}</span>
            <span className="text-gray-400">›</span>
          </div>
        ))}

        {/* Close Button */}
        <div
          onClick={onClose}
          className="flex items-center justify-between px-4 py-3 text-sm cursor-pointer hover:bg-gray-100 text-red-700 font-bold mt-auto transition-colors"
        >
          <span>✕ Close Menu</span>
        </div>
      </div>

      {/* Dark Backdrop */}
      <div
        className="flex-1 bg-black/50"
        onClick={onClose}
      />
    </div>
  );
};

export default Sidebar;