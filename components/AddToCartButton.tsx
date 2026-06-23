"use client";

import { useState } from "react";
import { useCartStore, CartItem } from "@/lib/cartStore";
import { useRouter } from "next/navigation";

export default function AddToCartButton({
  product,
  price,
  mrp,
  discountPercent,
}: {
  product: any;
  price: number;
  mrp: number;
  discountPercent: number;
}) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartStore();
  const router = useRouter();

  const buildItem = (): CartItem => ({
    id: product.id.toString(),
    name: product.name,
    image: product.image,
    price,
    mrp,
    discountPercent,
    deliveryDate: "Wednesday, 24 June",
    quantity,
    size: "Standard",
  });

  const handleAdd = () => {
    addToCart(buildItem());
    router.push(`/cart/smart-wagon?productId=${product.id}`);
  };

  const handleBuyNow = () => {
    addToCart(buildItem());
    router.push("/checkout");
  };

  return (
    <>
      <div className="mb-4">
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="border border-gray-300 rounded-md py-1.5 px-2 bg-[#f0f2f2] hover:bg-[#e3e6e6] shadow-sm outline-none text-sm focus:border-blue-500 w-24 cursor-pointer"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <option key={num} value={num}>Quantity: {num}</option>
          ))}
        </select>
      </div>

      <button
        onClick={handleAdd}
        className="w-full bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] rounded-full py-2.5 text-sm mb-3 shadow-sm font-normal transition-colors"
      >
        Add to cart
      </button>

      <button
        onClick={handleBuyNow}
        className="w-full bg-[#FFA41C] hover:bg-[#FA8900] border border-[#FF8F00] rounded-full py-2.5 text-sm shadow-sm mb-4 font-normal transition-colors"
      >
        Buy Now
      </button>
    </>
  );
}