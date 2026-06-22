"use client";
import { useCartStore } from "@/lib/cartStore";
import { useUserStore } from "@/lib/userStore";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function CheckoutPage() {
  const cartItems = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);
  const user = useUserStore((state) => state.user);
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePlaceOrder = async () => {
    if (cartItems.length === 0) return;
    if (!mounted || !user) {
      alert("Please log in to place an order.");
      router.push("/login");
      return;
    }

    setIsPlacingOrder(true);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.id,
          total,
          items: cartItems,
        }),
      });

      const data = await res.json();

      if (data.success) {
        clearCart();
        router.push("/checkout/success");
      } else {
        alert(data.message || "Failed to place order.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred during checkout.");
    } finally {
      setIsPlacingOrder(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Checkout Header */}
      <header className="bg-gray-100 border-b border-gray-300 py-4 px-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">amazon.in</h1>
        </div>
        <div className="text-2xl text-gray-800 font-medium">Checkout</div>
        <div>
          {/* Lock icon placeholder */}
          <span className="text-gray-500">🔒</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1000px] mx-auto py-6 px-4">
        {cartItems.length === 0 ? (
          <div className="text-center py-10">
            <h2 className="text-xl font-bold mb-4">Your cart is empty</h2>
            <button onClick={() => router.push("/")} className="text-blue-600 hover:underline">
              Return to shopping
            </button>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-8">
            
            {/* Left Column */}
            <div className="flex-1 space-y-6">
              {/* Step 1 */}
              <div className="flex gap-4">
                <h3 className="font-bold text-lg w-40">1 Delivery address</h3>
                <div className="flex-1 text-sm">
                  <p className="font-bold">{mounted && user ? user.name : "John Doe"}</p>
                  <p>123 Amazon Way</p>
                  <p>Tech Park, Madurai, Tamil Nadu 625018</p>
                  <p>India</p>
                  <a href="#" className="text-blue-600 hover:underline text-xs mt-1 inline-block">Add delivery instructions</a>
                </div>
                <a href="#" className="text-blue-600 hover:underline text-sm font-medium">Change</a>
              </div>
              <hr />

              {/* Step 2 */}
              <div className="flex gap-4">
                <h3 className="font-bold text-lg w-40">2 Payment method</h3>
                <div className="flex-1 text-sm">
                  <p className="font-bold">Paying with Amazon Pay ICICI Credit Card</p>
                  <p className="text-gray-600">Billing address: Same as delivery address.</p>
                </div>
                <a href="#" className="text-blue-600 hover:underline text-sm font-medium">Change</a>
              </div>
              <hr />

              {/* Step 3 */}
              <div className="flex gap-4">
                <h3 className="font-bold text-lg w-40 text-[#c45500]">3 Items and delivery</h3>
                <div className="flex-1 text-sm border border-gray-300 rounded p-4">
                  <p className="font-bold text-[#007600] mb-1">Guaranteed delivery: 24 June</p>
                  <p className="text-xs text-gray-500 mb-3">Items dispatched by Amazon</p>
                  
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 mb-4">
                      <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
                         <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain" />
                      </div>
                      <div>
                        <p className="font-bold">{item.name}</p>
                        <p className="text-[#B12704] font-bold">₹{item.price.toFixed(2)}</p>
                        <p className="text-xs">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Order Summary */}
            <div className="w-full md:w-[300px]">
              <div className="border border-gray-300 rounded p-4 bg-gray-50 sticky top-4">
                <button 
                  onClick={handlePlaceOrder}
                  disabled={isPlacingOrder}
                  className="w-full bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] rounded-lg py-2.5 text-sm mb-4 shadow-sm font-normal transition-colors disabled:opacity-50"
                >
                  {isPlacingOrder ? "Placing Order..." : "Place Your Order"}
                </button>
                <div className="text-xs text-center text-gray-500 mb-4 px-2">
                  By placing your order, you agree to Amazon's <a href="#" className="text-blue-600 hover:underline">privacy notice</a> and <a href="#" className="text-blue-600 hover:underline">conditions of use</a>.
                </div>

                <h3 className="font-bold text-lg mb-2 border-b border-gray-300 pb-2">Order Summary</h3>
                <div className="text-sm space-y-2 mb-2 border-b border-gray-300 pb-2">
                  <div className="flex justify-between">
                    <span>Items:</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery:</span>
                    <span>₹0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total:</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Promotion Applied:</span>
                    <span>-₹0.00</span>
                  </div>
                </div>
                <div className="flex justify-between font-bold text-lg text-[#B12704]">
                  <span>Order Total:</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
              </div>
            </div>

          </div>
        )}
      </main>
    </div>
  );
}
