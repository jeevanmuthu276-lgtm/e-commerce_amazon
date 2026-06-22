"use client";

import { FaSearch } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fetch all products initially
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredProducts([]);
      setShowDropdown(false);
      return;
    }

    const term = searchTerm.toLowerCase();
    const filtered = products.filter((p) =>
      p.name.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
    setShowDropdown(true);
  }, [searchTerm, products]);

  // Handle outside click to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex w-[900px] mx-4 h-11 relative" ref={dropdownRef}>
      <select className="bg-gray-200 text-black px-3 rounded-l-md outline-none">
        <option>All</option>
        <option>Mobiles</option>
        <option>Electronics</option>
        <option>Fashion</option>
      </select>

      <input
        type="text"
        placeholder="Search Amazon.in"
        className="flex-1 bg-white text-black px-4 outline-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => {
          if (searchTerm.trim() !== "") setShowDropdown(true);
        }}
      />

      <button className="bg-[#febd69] px-5 rounded-r-md hover:bg-[#f3a847]">
        <FaSearch className="text-black text-lg" />
      </button>

      {/* Autocomplete Dropdown */}
      {showDropdown && filteredProducts.length > 0 && (
        <div className="absolute top-12 left-[80px] right-[60px] bg-white text-black shadow-lg border border-gray-200 rounded-md max-h-[400px] overflow-y-auto z-50">
          {filteredProducts.map((product) => (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              onClick={() => {
                setShowDropdown(false);
                setSearchTerm("");
              }}
            >
              <div className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-0">
                <div className="w-10 h-10 relative flex-shrink-0">
                  {product.image && (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {product.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    ₹{Number(product.price).toLocaleString("en-IN")}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
      
      {showDropdown && filteredProducts.length === 0 && searchTerm.trim() !== "" && (
        <div className="absolute top-12 left-[80px] right-[60px] bg-white text-black shadow-lg border border-gray-200 rounded-md p-4 z-50 text-sm text-gray-500">
          No products found matching "{searchTerm}"
        </div>
      )}
    </div>
  );
}