"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useCartStore } from "@/lib/cartStore";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import MenuBar from "@/components/layout/MenuBar";
import Footer from "@/components/Footer";
import axios from "axios";
import { FaCheckCircle, FaStar, FaStarHalfAlt } from "react-icons/fa";

function SmartWagonContent() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("productId");
  const { items } = useCartStore();
  const router = useRouter();
  
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);

  // Find the added item
  const addedItem = items.find((item) => item.id === productId) || items[items.length - 1];

  // Calculate cart subtotal and total items
  const cartSubtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartTotalItems = items.reduce((total, item) => total + item.quantity, 0);

  // Delivery progress
  const freeDeliveryThreshold = 499;
  const eligibleForFreeDelivery = cartSubtotal >= freeDeliveryThreshold;
  const progressPercent = Math.min((cartSubtotal / freeDeliveryThreshold) * 100, 100);

  useEffect(() => {
    // Fetch related products for the bottom grid
    axios.get("/api/products")
      .then((res) => {
        // Just take a few random items to simulate "related"
        setRelatedProducts(res.data.slice(0, 8));
      })
      .catch(console.error);
  }, []);

  return (
    <div className="bg-[#eaeded] min-h-screen font-sans pb-10">
      <Navbar />
      <MenuBar />

      <main className="max-w-[1500px] mx-auto p-4 flex flex-col gap-4">
        
        {/* Top Section: Added to Cart + Order Summary */}
        <div className="flex flex-col lg:flex-row gap-4">
          
          {/* Left/Middle: Success Banner & Progress Bar */}
          <div className="flex-1 bg-white p-4 flex flex-col md:flex-row items-center gap-6 border border-gray-200">
            
            {/* Added Item Detail */}
            {addedItem && (
              <div className="flex items-center gap-4 border-r border-gray-200 pr-6 min-w-[300px]">
                <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center">
                  <img 
                    src={addedItem.image} 
                    alt={addedItem.name} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#067D62] text-xl" />
                  <span className="text-xl font-bold text-gray-900">Added to cart</span>
                </div>
              </div>
            )}

            {/* Progress Bar */}
            <div className="flex-1 max-w-md w-full">
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span></span>
                <span>₹{freeDeliveryThreshold}</span>
              </div>
              <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden mb-2">
                <div 
                  className={`h-full ${eligibleForFreeDelivery ? 'bg-[#067D62]' : 'bg-[#FFA41C]'}`}
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
              {eligibleForFreeDelivery ? (
                <p className="text-sm">
                  <span className="text-[#067D62] font-medium">Your order is eligible for FREE Delivery.</span>
                  <br/>
                  <span className="text-gray-600">Choose <span className="text-[#007185] hover:text-[#C45500] hover:underline cursor-pointer">FREE Delivery</span> option at checkout.</span>
                </p>
              ) : (
                <p className="text-sm">
                  <span className="text-[#CC0C39]">Add ₹{(freeDeliveryThreshold - cartSubtotal).toFixed(2)}</span> of eligible items to your order to qualify for FREE Delivery.
                </p>
              )}
            </div>
          </div>

          {/* Right: Cart Subtotal Box */}
          <div className="w-full lg:w-[300px] bg-white p-4 border border-gray-200 flex flex-col gap-3">
            <div className="text-lg">
              <span className="font-bold">Cart subtotal: </span>
              <span className="font-bold text-[#B12704]">₹{cartSubtotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
            </div>
            
            <button 
              onClick={() => router.push('/checkout')}
              className="w-full bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] rounded-full py-1.5 text-sm shadow-sm transition-colors"
            >
              Proceed to Buy ({cartTotalItems} items)
            </button>
            
            <button 
              onClick={() => router.push('/cart')}
              className="w-full bg-white hover:bg-gray-50 border border-gray-300 rounded-lg py-1.5 text-sm shadow-sm transition-colors"
            >
              Go to Cart
            </button>
          </div>
        </div>

        {/* Bottom Section: Related Products Grid */}
        <div className="bg-white p-4 border border-gray-200 mt-2">
          <h2 className="text-lg font-bold mb-4">
            Products related to {addedItem ? (addedItem.name.length > 30 ? addedItem.name.substring(0, 30) + '...' : addedItem.name) : 'this item'}
          </h2>
          
          <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-thin">
            {relatedProducts.map((product) => (
              <div key={product.id} className="min-w-[200px] max-w-[200px] flex flex-col">
                <Link href={`/product/${product.id}`} className="mb-2 h-[200px] flex items-center justify-center bg-[#F8F8F8] p-2">
                  <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                </Link>
                <Link href={`/product/${product.id}`} className="hover:text-[#C45500] hover:underline text-[#007185] text-sm line-clamp-2 mb-1">
                  {product.name}
                </Link>
                <div className="flex text-[#FFA41C] text-xs mb-1">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                  <span className="text-[#007185] ml-1">{(Math.random() * 1000 + 50).toFixed(0)}</span>
                </div>
                <div className="flex items-start mb-1">
                  <span className="text-xs mt-1">₹</span>
                  <span className="text-xl font-medium">{Number(product.price).toLocaleString('en-IN')}</span>
                </div>
                
                {product.price > 400 && (
                  <div className="mb-2">
                    <span className="bg-[#CC0C39] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm">
                      Limited time deal
                    </span>
                  </div>
                )}
                
                <button 
                  onClick={() => router.push(`/product/${product.id}`)}
                  className="mt-auto w-full bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] rounded-full py-1 text-xs shadow-sm transition-colors"
                >
                  See options
                </button>
              </div>
            ))}
          </div>
        </div>

      </main>
      
      <Footer />
    </div>
  );
}

export default function SmartWagonPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SmartWagonContent />
    </Suspense>
  );
}
