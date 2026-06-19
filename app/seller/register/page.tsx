"use client";

import { useState } from "react";
import axios from "axios";

export default function SellerRegisterPage() {
  const [form, setForm] = useState({
    seller_name: "",
    business_name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/sellers", form);
      alert(res.data.message);
    } catch (error: any) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 p-5">
      <input
        type="text"
        placeholder="Seller Name"
        className="border p-2 w-full"
        value={form.seller_name}
        onChange={(e) =>
          setForm({ ...form, seller_name: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Business Name"
        className="border p-2 w-full"
        value={form.business_name}
        onChange={(e) =>
          setForm({ ...form, business_name: e.target.value })
        }
      />

      <input
        type="email"
        placeholder="Email"
        className="border p-2 w-full"
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Phone Number"
        className="border p-2 w-full"
        value={form.phone}
        onChange={(e) =>
          setForm({ ...form, phone: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Address"
        className="border p-2 w-full"
        value={form.address}
        onChange={(e) =>
          setForm({ ...form, address: e.target.value })
        }
      />

      <button
        type="submit"
        className="bg-yellow-400 px-4 py-2 rounded"
      >
        Register
      </button>
    </form>
  );
}