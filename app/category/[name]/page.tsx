"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import MenuBar from "@/components/layout/MenuBar";
import Footer from "@/components/Footer";
import CategoryFilterSidebar from "@/components/CategoryFilterSidebar";
import CategoryTopBar from "@/components/CategoryTopBar";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function CategoryPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const [products, setProducts] = useState<any[]>([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState("Featured");

  useEffect(() => {
    async function loadProducts() {
      const p = await params;
      // Decode the URL parameter (e.g. %20 -> space)
      const decodedName = decodeURIComponent(p.name);
      setCategory(decodedName);

      try {
        const res = await fetch(`/api/categories/${p.name}`);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, [params]);

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />
      <MenuBar />

      {/* Main Container */}
      <main className="max-w-[1500px] mx-auto px-4 py-4 flex flex-col md:flex-row gap-6">
        
        {/* Left Sidebar Filters */}
        <CategoryFilterSidebar />

        {/* Right Content Area */}
        <div className="flex-1 min-w-0">
          
          <CategoryTopBar categoryName={category} resultCount={products.length} onSortChange={setSortOption} />

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#f56600]"></div>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-xl font-bold text-gray-900">No results for {category}</h2>
              <p className="text-gray-600 mt-2">Try checking your spelling or use more general terms</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {[...products]
                .sort((a, b) => {
                  if (sortOption === "Price: Low to High") return Number(a.price) - Number(b.price);
                  if (sortOption === "Price: High to Low") return Number(b.price) - Number(a.price);
                  if (sortOption === "Newest Arrivals") return Number(b.id) - Number(a.id);
                  return 0;
                })
                .map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-gray-200 rounded-sm hover:shadow-md transition-shadow p-4 flex flex-col relative"
                >
                  {/* Product Image */}
                  <div className="w-full h-48 bg-[#f8f8f8] mb-4 flex items-center justify-center rounded overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-w-full max-h-full object-contain mix-blend-multiply"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-col flex-grow">
                    <Link href={`/product/${product.id}`} className="hover:text-[#c45500] hover:underline">
                      <h2 className="text-base font-medium text-gray-900 line-clamp-2 leading-snug mb-1">
                        {product.name}
                      </h2>
                    </Link>

                    {/* Ratings */}
                    <div className="flex items-center mt-1 mb-2">
                      <div className="flex text-[#FFA41C]">
                        <FaStar size={14} />
                        <FaStar size={14} />
                        <FaStar size={14} />
                        <FaStar size={14} />
                        <FaStarHalfAlt size={14} />
                      </div>
                      <span className="text-[#007185] text-sm ml-2 hover:text-[#c45500] hover:underline cursor-pointer">
                        {Math.floor(Math.random() * 1000) + 50}
                      </span>
                    </div>

                    {/* Price & Deals */}
                    <div className="mt-auto">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="bg-[#CC0C39] text-white text-[11px] font-bold px-2 py-1 rounded-sm">
                          Limited time deal
                        </span>
                      </div>
                      
                      <div className="flex items-end flex-wrap gap-1">
                        <div className="flex items-start">
                          <span className="text-xs font-normal text-gray-900 mt-1">₹</span>
                          <span className="text-2xl font-semibold text-gray-900 leading-none">
                            {Number(product.price).toLocaleString('en-IN')}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500 mb-0.5 ml-1">
                          M.R.P: <span className="line-through">₹{Math.floor(Number(product.price) * 1.5).toLocaleString('en-IN')}</span> ({(1.5 * 100 - 100).toFixed(0)}% off)
                        </span>
                      </div>

                      <div className="flex items-center mt-1">
                        <span className="bg-[#71C258] text-white text-[11px] font-bold px-1.5 py-0.5 rounded-sm mr-1">
                          Savings
                        </span>
                        <span className="text-xs text-gray-700">Buy 2 items, get 3% off</span>
                      </div>
                      
                      {/* Prime Mock Logo */}
                      <div className="flex items-center mt-1">
                        <span className="text-[#00A8E1] font-bold italic text-sm">prime</span>
                      </div>
                      
                      <p className="text-xs text-gray-600 mt-1">Get it by Tomorrow</p>
                      <p className="text-xs text-gray-600">FREE Delivery by Amazon</p>
                    </div>

                    {/* Action Button */}
                    <Link href={`/product/${product.id}`} className="mt-4">
                      <button className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-sm font-medium py-1.5 px-3 rounded-full shadow-sm border border-[#FCD200] transition-colors">
                        See options
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}