"use client";
import { useState } from "react";
import axios from "axios";

export default function AdminPage() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const categories = [
    "Electronics",
    "Mobiles",
    "Fashion",
    "Appliances",
    "Kitchen",
    "Home",
  ];

  // Image preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    if (!form.name || !form.price || !form.category || !imageFile) {
      setMessage("❌ Please fill all fields and select an image!");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      // Step 1: Upload image
      const imageForm = new FormData();
      imageForm.append("image", imageFile);

      const uploadRes = await axios.post("/api/upload", imageForm, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const imagePath = uploadRes.data.imagePath;

      // Step 2: Save product to DB with image path
      await axios.post("/api/products", {
        name: form.name,
        description: form.description,
        price: parseFloat(form.price),
        image: imagePath,
        category: form.category,
      });

      setMessage("✅ Product saved successfully!");
      setForm({ name: "", description: "", price: "", category: "" });
      setImageFile(null);
      setPreview("");
    } catch (error) {
      setMessage("❌ Failed to save product!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          ➕ Add New Product
        </h1>

        {message && (
          <div className={`p-3 rounded mb-4 text-sm font-medium
            ${message.includes("✅") 
              ? "bg-green-100 text-green-700" 
              : "bg-red-100 text-red-700"}`}>
            {message}
          </div>
        )}

        {/* Product Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Product Name
          </label>
          <input
            type="text"
            placeholder="e.g. Samsung 4K TV"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border border-gray-300 rounded px-3 py-2 
                       text-sm focus:outline-none focus:ring-2 
                       focus:ring-yellow-400"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            placeholder="e.g. Ultra HD Smart TV with HDR"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="w-full border border-gray-300 rounded px-3 py-2 
                       text-sm focus:outline-none focus:ring-2 
                       focus:ring-yellow-400 h-20 resize-none"
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price (₹)
          </label>
          <input
            type="number"
            placeholder="e.g. 45999"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            className="w-full border border-gray-300 rounded px-3 py-2 
                       text-sm focus:outline-none focus:ring-2 
                       focus:ring-yellow-400"
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="w-full border border-gray-300 rounded px-3 py-2 
                       text-sm focus:outline-none focus:ring-2 
                       focus:ring-yellow-400"
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Image Upload */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Product Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border border-gray-300 rounded px-3 py-2 
                       text-sm focus:outline-none"
          />
          {/* Image Preview */}
          {preview && (
            <div className="mt-3 border rounded p-2">
              <img
                src={preview}
                alt="Preview"
                className="h-40 object-contain mx-auto"
              />
              <p className="text-xs text-center text-gray-500 mt-1">
                Preview
              </p>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-yellow-400 hover:bg-yellow-500 
                     text-gray-900 font-bold py-3 rounded-lg
                     transition-colors disabled:opacity-50
                     disabled:cursor-not-allowed"
        >
          {loading ? "⏳ Saving..." : "💾 Save Product"}
        </button>
      </div>
    </div>
  );
}