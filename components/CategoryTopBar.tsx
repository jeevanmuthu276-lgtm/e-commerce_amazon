"use client";

import React from 'react';

export default function CategoryTopBar({ categoryName, resultCount, onSortChange }: { categoryName: string, resultCount: number, onSortChange: (option: string) => void }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-2 px-4 border-b border-gray-200 mb-4 bg-white shadow-sm mt-2 rounded-sm">
      <div className="text-sm text-gray-800 mb-2 sm:mb-0">
        <span className="font-normal">1-{resultCount > 16 ? 16 : resultCount} of over {resultCount} results for </span>
        <span className="text-[#c45500] font-bold">&quot;{categoryName}&quot;</span>
      </div>

      <div className="flex items-center">
        <label htmlFor="sort" className="text-sm text-gray-800 mr-2 font-medium">Sort by:</label>
        <select
          id="sort"
          onChange={(e) => onSortChange(e.target.value)}
          className="bg-[#F0F2F2] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#e77600] focus:border-[#e77600] focus:shadow-[0_0_3px_2px_rgba(228,121,17,.5)] block w-full p-1.5 shadow-sm outline-none cursor-pointer hover:bg-gray-200"
        >
          <option>Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Avg. Customer Review</option>
          <option>Newest Arrivals</option>
        </select>
      </div>
    </div>
  );
}
