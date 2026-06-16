"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "@/components/ProductCard";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface Props {
  title: string;
  category?: string;
}

export default function ProductsSection({ title, category }: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = category
          ? `/api/products?category=${category}`
          : "/api/products";
        const response = await axios.get(url);
        setProducts(response.data);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category]);

  if (loading) {
    return (
      <div className="bg-white p-4 my-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-64 bg-gray-200 rounded animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-4 my-4 rounded shadow">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 my-4 rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <a href="/products" className="text-sm text-blue-500 hover:underline">
          See all
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}