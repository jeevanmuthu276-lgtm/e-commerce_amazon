"use client";

import { useEffect, useState } from "react";

export default function CategoryPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const [products, setProducts] = useState<any[]>([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    async function loadProducts() {
      const p = await params;
      setCategory(p.name);

      const res = await fetch(
        `/api/categories/${p.name}`
      );

      const data = await res.json();

      setProducts(data);
    }

    loadProducts();
  }, [params]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">
        {category}
      </h1>

      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow p-4"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-52 object-contain"
            />

            <h2 className="font-semibold mt-3">
              {product.name}
            </h2>

            <p className="text-gray-600 text-sm">
              {product.description}
            </p>

            <p className="text-red-600 font-bold text-xl mt-2">
              ₹{product.price}
            </p>

            <button className="mt-3 bg-yellow-400 px-4 py-2 rounded">
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}