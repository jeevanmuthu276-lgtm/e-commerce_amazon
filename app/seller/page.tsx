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

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await axios.post(
      "/api/sellers",
      form
    );

    alert(res.data.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Seller Name"
        onChange={(e) =>
          setForm({
            ...form,
            seller_name: e.target.value,
          })
        }
      />

      <button type="submit">
        Register
      </button>
    </form>
  );
}