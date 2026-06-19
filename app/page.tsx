import Navbar from "@/components/layout/Navbar";
import MenuBar from "@/components/layout/MenuBar";
import Banner from "@/components/Banner";

import CategoryGrid from "@/components/CategoryGrid";
import ProductCarousels from "@/components/ProductCarousels";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <MenuBar />

      <Banner />

      <div className="w-full m-0 p-0 relative z-10">
        <CategoryGrid />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-10 py-4">
        <ProductCarousels />
      </div>

      <Footer />
    </div>
  );
}