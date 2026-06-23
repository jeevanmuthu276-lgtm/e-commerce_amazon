"use client";

import React from 'react';
import Link from 'next/link';
import { FaStar, FaRegStar } from 'react-icons/fa';

export default function CategoryFilterSidebar() {
  return (
    <div className="w-64 flex-shrink-0 border-r border-gray-200 pr-4 hidden lg:block">
      
      {/* Free Shipping */}
      <div className="mb-4">
        <h3 className="font-bold text-sm text-gray-900 mb-2">Eligible for Free Shipping</h3>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#007185] focus:ring-[#007185]" />
          <span className="text-sm text-gray-800">Free Shipping</span>
        </label>
        <p className="text-xs text-gray-600 mt-1 pl-6">All customers get FREE Shipping on eligible orders shipped by Amazon</p>
      </div>

      {/* Category */}
      <div className="mb-4">
        <h3 className="font-bold text-sm text-gray-900 mb-2">Category</h3>
        <p className="text-sm font-bold text-gray-900 flex items-center mb-1">
          <span className="text-gray-500 mr-1 text-xs">‹</span> Home & Kitchen
        </p>
        <p className="text-sm font-bold text-gray-900 ml-3 mb-1">
          Deals on Air Conditioners - Great Summer Sale
        </p>
        <ul className="text-sm text-gray-800 space-y-1 ml-3">
          <li className="hover:text-[#c45500] hover:underline cursor-pointer">Heating, Cooling & Air Quality</li>
          <li className="hover:text-[#c45500] hover:underline cursor-pointer">Kitchen & Home Appliances</li>
        </ul>
      </div>

      {/* Brands */}
      <div className="mb-4">
        <h3 className="font-bold text-sm text-gray-900 mb-2">Brands</h3>
        <ul className="space-y-1">
          {['DAIKIN', 'Voltas', 'Hitachi', 'Godrej', 'Blue Star', 'Samsung', 'LG'].map(brand => (
            <li key={brand} className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#007185] focus:ring-[#007185]" />
              <span className="text-sm text-gray-800">{brand}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Customer Reviews */}
      <div className="mb-4">
        <h3 className="font-bold text-sm text-gray-900 mb-2">Customer Reviews</h3>
        <ul className="space-y-2">
          {[4, 3, 2, 1].map(stars => (
            <li key={stars} className="flex items-center cursor-pointer group">
              <div className="flex text-[#FFA41C]">
                {[...Array(5)].map((_, i) => (
                  i < stars ? <FaStar key={i} size={15} /> : <FaRegStar key={i} size={15} />
                ))}
              </div>
              <span className="text-sm text-gray-800 ml-2 group-hover:text-[#c45500] group-hover:underline">&amp; Up</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Item Condition */}
      <div className="mb-4">
        <h3 className="font-bold text-sm text-gray-900 mb-2">Item Condition</h3>
        <ul className="space-y-1">
          <li className="text-sm text-gray-800 hover:text-[#c45500] hover:underline cursor-pointer">New</li>
          <li className="text-sm text-gray-800 hover:text-[#c45500] hover:underline cursor-pointer">Renewed</li>
          <li className="text-sm text-gray-800 hover:text-[#c45500] hover:underline cursor-pointer">Used</li>
        </ul>
      </div>

      {/* Price */}
      <div className="mb-4">
        <h3 className="font-bold text-sm text-gray-900 mb-2">Price</h3>
        <ul className="space-y-1">
          <li className="text-sm text-gray-800 hover:text-[#c45500] hover:underline cursor-pointer">Under ₹20,000</li>
          <li className="text-sm text-gray-800 hover:text-[#c45500] hover:underline cursor-pointer">₹20,000 - ₹30,000</li>
          <li className="text-sm text-gray-800 hover:text-[#c45500] hover:underline cursor-pointer">₹30,000 - ₹40,000</li>
          <li className="text-sm text-gray-800 hover:text-[#c45500] hover:underline cursor-pointer">Over ₹40,000</li>
        </ul>
        <div className="flex items-center mt-2 space-x-2">
          <input type="text" placeholder="Min" className="w-16 h-8 px-2 border border-gray-400 rounded text-sm outline-none focus:border-[#e77600] focus:shadow-[0_0_3px_2px_rgba(228,121,17,.5)]" />
          <span className="text-gray-500">-</span>
          <input type="text" placeholder="Max" className="w-16 h-8 px-2 border border-gray-400 rounded text-sm outline-none focus:border-[#e77600] focus:shadow-[0_0_3px_2px_rgba(228,121,17,.5)]" />
          <button className="bg-white border border-gray-400 rounded-lg px-3 py-1 text-sm shadow-sm hover:bg-gray-50">Go</button>
        </div>
      </div>
      
    </div>
  );
}
