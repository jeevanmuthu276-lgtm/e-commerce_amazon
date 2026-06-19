"use client";

import { useState } from "react";
import axios from "axios";

export default function SellerForm() {
  const [form, setForm] = useState({
    seller_name: "",
    business_name: "",
    email: "",
    phone: "",
  });

  const submitForm = async () => {
    try {
      const res = await axios.post("/api/sellers", form);

      console.log(res.data);
      alert("Seller Registered Successfully");
    } catch (error: any) {
      console.log(error.response?.data);

      alert(
        error.response?.data?.message ||
        "Something went wrong"
      );
    }
  };

  return (
    <div className="space-y-3">
      <input
        placeholder="Seller Name"
        className="border p-2 w-full"
        onChange={(e) =>
          setForm({
            ...form,
            seller_name: e.target.value,
          })
        }
      />

      <input
        placeholder="Business Name"
        className="border p-2 w-full"
        onChange={(e) =>
          setForm({
            ...form,
            business_name: e.target.value,
          })
        }
      />

      <input
        type="email"
        placeholder="Email"
        className="border p-2 w-full"
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value,
          })
        }
      />

      <input
        placeholder="Phone Number"
        className="border p-2 w-full"
        onChange={(e) =>
          setForm({
            ...form,
            phone: e.target.value,
          })
        }
      />

      <button
        onClick={submitForm}
        className="bg-yellow-400 px-4 py-2 rounded"
      >
        Register
      </button>
    </div>
  );
}