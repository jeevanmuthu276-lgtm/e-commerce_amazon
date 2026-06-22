"use client";

import { useUserStore } from "@/lib/userStore";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function OrdersPage() {
  const user = useUserStore((state) => state.user);
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !user) {
      router.push("/login");
    } else if (mounted && user) {
      fetchOrders();
    }
  }, [mounted, user, router]);

  const fetchOrders = async () => {
    try {
      const res = await fetch(`/api/orders?userId=${user?.id}`);
      const data = await res.json();
      if (data.success) {
        setOrders(data.orders);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!mounted || !user) return null;

  return (
    <div className="bg-white min-h-screen">
      <main className="max-w-[1000px] mx-auto py-6 px-4">
        <h1 className="text-3xl font-normal mb-6">Your Orders</h1>

        {loading ? (
          <p>Loading orders...</p>
        ) : orders.length === 0 ? (
          <div className="border border-gray-300 rounded-lg p-6 text-center">
            <h2 className="text-xl font-bold mb-2">Looks like you haven't placed an order yet</h2>
            <button onClick={() => router.push("/")} className="text-blue-600 hover:underline">
              Start shopping
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order.id} className="border border-gray-300 rounded-lg overflow-hidden">
                <div className="bg-gray-100 p-4 border-b border-gray-300 flex justify-between items-center text-sm">
                  <div className="flex gap-8">
                    <div>
                      <p className="text-gray-600 font-medium uppercase mb-1">Order placed</p>
                      <p className="text-gray-800">{new Date(order.created_at).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 font-medium uppercase mb-1">Total</p>
                      <p className="text-gray-800">₹{order.total}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium uppercase mb-1">Order # {order.id}</p>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-lg mb-4 text-[#007600]">{order.status}</h3>
                  <div className="space-y-4">
                    {order.items?.map((item: any) => (
                      <div key={item.id} className="flex gap-4">
                        <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center bg-gray-50 border border-gray-200">
                           <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain" />
                        </div>
                        <div>
                          <p className="font-bold text-blue-600 hover:underline cursor-pointer">{item.name}</p>
                          <p className="text-sm mt-1">Quantity: {item.quantity}</p>
                          <p className="text-sm font-bold text-[#B12704] mt-1">₹{item.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}