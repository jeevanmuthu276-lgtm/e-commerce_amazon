"use client";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const categoryIcons: { [key: string]: string } = {
  Electronics: "📺",
  Mobiles: "📱",
  Fashion: "👟",
  Appliances: "🏠",
  Kitchen: "🍳",
  Home: "🛋️",
};

export default function ProductCard({ product }: { product: Product }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-xl
                    transition-all duration-200 cursor-pointer
                    flex flex-col p-3 border border-gray-100">

      {/* Image Box */}
      <div className="h-48 flex items-center justify-center
                      bg-gray-50 rounded mb-3 overflow-hidden">
        {imgError ? (
          // ✅ Show emoji + name when image fails
          <div className="flex flex-col items-center justify-center
                          w-full h-full bg-gradient-to-br
                          from-gray-100 to-gray-200">
            <span className="text-6xl mb-2">
              {categoryIcons[product.category] || "🛍️"}
            </span>
            <span className="text-xs text-gray-500 text-center px-2 line-clamp-2">
              {product.name}
            </span>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain"
            onError={() => setImgError(true)}
          />
        )}
      </div>

      {/* Name */}
      <h3 className="text-sm font-medium text-gray-800
                     line-clamp-2 min-h-[40px]">
        {product.name}
      </h3>

      {/* Description */}
      <p className="text-xs text-gray-500 mt-1 line-clamp-1">
        {product.description}
      </p>

      {/* Price */}
      <div className="mt-2">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">
            ₹{Number(product.price).toLocaleString("en-IN")}
          </span>
          <span className="text-xs text-green-600 font-medium">
            20% off
          </span>
        </div>
        <p className="text-xs text-gray-400 line-through">
          ₹{(Number(product.price) * 1.2).toLocaleString("en-IN")}
        </p>
      </div>

      {/* Category Badge */}
      <span className="text-xs bg-yellow-50 text-yellow-700
                       border border-yellow-200
                       px-2 py-0.5 rounded-full mt-2 w-fit">
        {categoryIcons[product.category]} {product.category}
      </span>

      {/* Add to Cart Button */}
      <button
        className="mt-3 bg-yellow-400 hover:bg-yellow-500
                   text-sm font-medium py-2 px-3 rounded-full
                   transition-colors duration-200 w-full
                   active:scale-95"
        onClick={() => alert(`Added ${product.name} to cart!`)}
      >
        Add to Cart
      </button>
    </div>
  );
}