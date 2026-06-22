"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CheckoutSuccessPage() {
  const [orderNumber, setOrderNumber] = useState("");

  useEffect(() => {
    // Generate a random order number
    const randomNum = Math.floor(1000000 + Math.random() * 9000000);
    setOrderNumber(`404-${randomNum}-${randomNum}`);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Checkout Header */}
      <header className="bg-gray-100 border-b border-gray-300 py-4 px-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">amazon.in</h1>
        </div>
        <div className="text-2xl text-gray-800 font-medium">Checkout</div>
        <div>
          <span className="text-gray-500">🔒</span>
        </div>
      </header>

      <main className="max-w-[800px] mx-auto py-10 px-4">
        <div className="border border-green-500 border-l-8 rounded p-6 bg-green-50 shadow-sm flex gap-4">
          <div className="text-green-600 text-3xl font-bold">✓</div>
          <div>
            <h2 className="text-xl font-bold text-green-800 mb-2">Order placed, thank you!</h2>
            <p className="text-sm mb-1">Confirmation will be sent to your email.</p>
            <p className="text-sm font-bold">Order Number: {orderNumber}</p>
            <p className="text-sm mt-4 text-gray-700">Guaranteed delivery: <strong>Tomorrow</strong></p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] rounded-lg py-2.5 px-6 shadow-sm inline-block">
            Continue Shopping
          </Link>
        </div>
      </main>
    </div>
  );
}
