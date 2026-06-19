"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

function CarouselSection({
  title,
  products,
}: {
  title: string;
  products: Product[];
}) {
  const [scrollIndex, setScrollIndex] = useState(0);
  const visibleCount = 7;

  const scrollLeft = () => {
    setScrollIndex((prev) => Math.max(prev - 1, 0));
  };

  const scrollRight = () => {
    setScrollIndex((prev) =>
      Math.min(prev + 1, Math.max(products.length - visibleCount, 0))
    );
  };

  const visibleProducts = products.slice(
    scrollIndex,
    scrollIndex + visibleCount
  );

  return (
    <div className="w-full bg-white px-6 py-4 mb-4">
      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>

      <div className="relative flex items-center">
        <button
          onClick={scrollLeft}
          disabled={scrollIndex === 0}
          className="absolute left-0 z-10 bg-white shadow rounded-full w-8 h-16"
        >
          ‹
        </button>

        <div className="flex gap-3 overflow-hidden w-full px-8">
          {visibleProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="flex flex-col items-center flex-shrink-0 w-[calc(100%/7)]"
            >
              <div className="w-full aspect-square bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
          ))}
        </div>

        <button
          onClick={scrollRight}
          disabled={scrollIndex >= products.length - visibleCount}
          className="absolute right-0 z-10 bg-white shadow rounded-full w-8 h-16"
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default function ProductCarosels() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="w-full px-4 py-4">
      <CarouselSection
        title="Related to items you've viewed"
        products={products}
      />

      <CarouselSection
        title="Up to 45% off | Electronics & accessories"
        products={products}
      />
    </div>
  );
}