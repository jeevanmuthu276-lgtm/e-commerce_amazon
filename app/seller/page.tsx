"use client";

import { useState } from "react";
import axios from "axios";
import Navbar from "@/components/layout/Navbar";
import MenuBar from "@/components/layout/MenuBar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function SellerPage() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    seller_name: "",
    business_name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/sellers", form);
      alert(res.data.message || "Registration successful!");
      setShowForm(false);
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div className="bg-[#f2f4f8] min-h-screen font-sans">
      <Navbar />
      <MenuBar />

      {/* Hero Section */}
      <main className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 leading-tight tracking-tight mb-6">
            ZERO referral fee on over <span className="text-[#f56600] font-bold">12.5 crore products</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-800 mb-8 max-w-xl">
            Register with a valid GSTIN and an active bank account to become an Amazon.in seller.
          </p>
          {!showForm ? (
            <button 
              onClick={() => setShowForm(true)}
              className="bg-[#f56600] hover:bg-[#d45600] text-white font-bold py-3 px-8 rounded-full shadow-md text-lg transition-colors"
            >
              Start Selling
            </button>
          ) : (
            <div className="bg-white p-6 rounded-xl shadow-lg mt-6 max-w-md border border-gray-200">
              <h3 className="text-xl font-bold mb-4">Seller Registration</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Seller Name"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  onChange={(e) => setForm({ ...form, seller_name: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Business Name"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  onChange={(e) => setForm({ ...form, business_name: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Address"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                />
                <div className="flex gap-4 pt-2">
                  <button type="submit" className="flex-1 bg-yellow-400 hover:bg-yellow-500 font-bold py-2 rounded">
                    Register
                  </button>
                  <button type="button" onClick={() => setShowForm(false)} className="flex-1 bg-gray-200 hover:bg-gray-300 font-bold py-2 rounded">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        <div className="flex-1 relative w-full aspect-square md:aspect-[4/3] max-w-md mx-auto">
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-200 to-transparent rounded-full opacity-50 blur-3xl transform -translate-x-10 translate-y-10"></div>
          <Image
            src="/images/seller_hero.png"
            alt="Amazon Seller Packing Box"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain drop-shadow-2xl z-10"
          />
        </div>
      </main>

      {/* Fee Drop Highlights */}
      <section className="bg-[#141c2c] text-white py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-wide">
            Fee Drop Highlights
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1c2638] p-8 rounded-xl text-center shadow-lg border border-gray-700 hover:border-[#f56600] transition-colors cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-[#f56600] to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#f56600]">Zero Referral Fee</h3>
              <p className="text-gray-400">Enjoy 0% referral fee across 12.5+ crore products. Maximize your profits instantly.</p>
            </div>

            <div className="bg-[#1c2638] p-8 rounded-xl text-center shadow-lg border border-gray-700 hover:border-[#f56600] transition-colors cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-[#f56600] to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#f56600]">Grow Faster</h3>
              <p className="text-gray-400">Reach millions of customers across India and grow your business exponentially.</p>
            </div>

            <div className="bg-[#1c2638] p-8 rounded-xl text-center shadow-lg border border-gray-700 hover:border-[#f56600] transition-colors cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-[#f56600] to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#f56600]">Secure Payments</h3>
              <p className="text-gray-400">Get payments directly to your bank account securely and on time, every time.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}