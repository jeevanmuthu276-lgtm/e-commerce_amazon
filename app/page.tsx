import Navbar from "@/components/layout/Navbar";
import MenuBar from "@/components/layout/MenuBar";
import Banner from "@/components/Banner";
import CategoryGrid from "@/components/CategoryGrid";
import ProductsSection from "@/components/ProductsSection";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <MenuBar />

      {/* Banner */}
      <Banner />

      {/* Category Grid — appears RIGHT after banner */}
      <div className="w-full m-0 p-0 -mt-16 relative z-10">
        <CategoryGrid />
      </div>

      {/* Product Sections */}
      <div className="max-w-screen-xl mx-auto px-2 mt-2">
        <ProductsSection title="Electronics"  category="Electronics" />
        <ProductsSection title="Mobiles"      category="Mobiles" />
        <ProductsSection title="Fashion"      category="Fashion" />
        <ProductsSection title="Appliances"   category="Appliances" />
        <ProductsSection title="Kitchen"      category="Kitchen" />
        <ProductsSection title="All Products" />
      </div>
    </div>
  );
}