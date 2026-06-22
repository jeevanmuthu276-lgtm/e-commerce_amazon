import db from "@/lib/db";
import SaveRecentlyViewed from "@/components/SaveRecentlyViewed";
import Navbar from "@/components/layout/Navbar";
import MenuBar from "@/components/layout/MenuBar";
import Footer from "@/components/Footer";
import AddToCartButton from "@/components/AddToCartButton";

export const dynamic = "force-dynamic";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const [rows]: any = await db.query(
    "SELECT * FROM products WHERE id = ?",
    [id]
  );

  const product = rows[0];

  if (!product) {
    return (
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <Navbar />
        <MenuBar />
        <div className="flex-1 flex items-center justify-center">
          <h1 className="text-2xl font-bold">Product Not Found</h1>
        </div>
        <Footer />
      </div>
    );
  }

  const priceNum = Number(product.price) || 0;
  const mrp = Math.floor(priceNum * 1.42); // Mock a 42% discount

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <MenuBar />

      <SaveRecentlyViewed productId={product.id} />

      <main className="flex-1 w-full max-w-[1500px] mx-auto px-4 sm:px-6 py-6 text-gray-900">
        
        {/* Breadcrumb mock */}
        <div className="text-xs text-gray-500 mb-4 flex gap-1 items-center">
          <a href="#" className="hover:underline">Home & Kitchen</a>
          <span>›</span>
          <a href="#" className="hover:underline">Heating, Cooling & Air Quality</a>
          <span>›</span>
          <a href="#" className="hover:underline">Air Conditioners</a>
          <span>›</span>
          <span className="text-gray-900 font-bold">Split-System Air Conditioners</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Left Column: Image Gallery */}
          <div className="md:col-span-5 flex gap-4 h-[500px]">
            {/* Thumbnail strip */}
            <div className="flex flex-col gap-3 w-12 flex-shrink-0 mt-2">
              <div className="w-11 h-11 border-2 border-[#e77600] rounded-sm flex items-center justify-center p-1 cursor-pointer shadow-sm">
                 <img src={product.image} className="max-w-full max-h-full object-contain" />
              </div>
              <div className="w-11 h-11 border border-gray-300 hover:border-gray-500 rounded-sm flex items-center justify-center p-1 cursor-pointer shadow-sm">
                 <img src={product.image} className="max-w-full max-h-full object-contain" />
              </div>
              <div className="w-11 h-11 border border-gray-300 hover:border-gray-500 rounded-sm flex items-center justify-center p-1 cursor-pointer shadow-sm">
                 <img src={product.image} className="max-w-full max-h-full object-contain" />
              </div>
            </div>
            
            {/* Main Image */}
            <div className="flex-1 flex items-center justify-center p-4">
              <img src={product.image} className="max-w-full max-h-full object-contain" alt={product.name} />
            </div>
          </div>

          {/* Center Column: Product Info */}
          <div className="md:col-span-4">
            <h1 className="text-2xl font-medium leading-tight mb-1">
              {product.name}
            </h1>
            <a href="#" className="text-[#007185] text-sm hover:text-[#c45500] hover:underline">
              Visit the Store
            </a>
            
            {/* Rating mock */}
            <div className="flex items-center gap-4 mt-1 pb-3 border-b border-gray-300">
              <div className="flex items-center">
                <span className="text-[#007185] text-sm hover:text-[#c45500] hover:underline cursor-pointer">4.1</span>
                <span className="text-[#FFA41C] text-sm ml-1">★★★★☆</span>
                <span className="text-[#007185] text-sm ml-4 hover:text-[#c45500] hover:underline cursor-pointer">811 ratings</span>
              </div>
            </div>

            {/* Pricing block */}
            <div className="mt-4">
              <div className="flex items-start">
                <span className="text-[#CC0C39] text-3xl font-light">-42%</span>
                <span className="text-3xl font-medium ml-3 flex items-start">
                  <span className="text-sm font-normal mt-1 mr-1">₹</span>
                  {priceNum.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="text-sm text-gray-500 mt-1">
                M.R.P.: <span className="line-through">₹{mrp.toLocaleString('en-IN')}</span>
              </div>
              <div className="text-sm mt-2">
                Inclusive of all taxes
              </div>
              <div className="text-sm font-bold mt-1">
                EMI <span className="font-normal text-gray-800">starts at ₹1,687. No Cost EMI available</span> <a href="#" className="text-[#007185] hover:text-[#c45500] hover:underline">EMI options</a>
              </div>
            </div>
            
            <div className="border-t border-gray-300 mt-4 pt-4">
               <div className="flex items-center gap-2 mb-3">
                 <span className="bg-[#cc0c39] text-white text-xs font-bold px-2 py-0.5 rounded-sm">Offers</span>
               </div>
               <div className="flex gap-3 overflow-x-auto pb-2">
                 <div className="border border-gray-300 rounded p-3 w-36 shadow-sm flex-shrink-0 flex flex-col justify-between cursor-pointer hover:bg-gray-50 transition-colors">
                   <div>
                     <h4 className="font-bold text-sm">Bank Offer</h4>
                     <p className="text-xs mt-1 text-gray-800 line-clamp-3">Upto ₹2,500.00 discount on select Credit Cards...</p>
                   </div>
                   <p className="text-[#007185] text-xs mt-2 hover:underline hover:text-[#c45500]">3 offers</p>
                 </div>
                 <div className="border border-gray-300 rounded p-3 w-36 shadow-sm flex-shrink-0 flex flex-col justify-between cursor-pointer hover:bg-gray-50 transition-colors">
                   <div>
                     <h4 className="font-bold text-sm">No Cost EMI</h4>
                     <p className="text-xs mt-1 text-gray-800 line-clamp-3">Upto ₹3,229.97 EMI interest savings on Amazon Pay ICICI...</p>
                   </div>
                   <p className="text-[#007185] text-xs mt-2 hover:underline hover:text-[#c45500]">1 offer</p>
                 </div>
               </div>
            </div>
            
            <div className="border-t border-gray-300 mt-4 pt-4">
               <h3 className="font-bold text-base mb-2">About this item</h3>
               <ul className="list-disc pl-4 text-sm space-y-1">
                 {product.description && <li>{product.description}</li>}
                 <li>AI Convertible 6-in-1 cooling</li>
                 <li>HD Filter with Anti Virus Protection</li>
                 <li>Smart Diagnosis System</li>
                 <li>Auto Clean Feature</li>
                 <li>100% Copper Condenser</li>
               </ul>
            </div>
          </div>

          {/* Right Column: Buy Box */}
          <div className="md:col-span-3">
            <div className="border border-gray-300 rounded-xl p-4 shadow-sm">
              <div className="text-2xl font-medium mb-3 flex items-start">
                  <span className="text-sm font-normal mt-1 mr-1">₹</span>
                  {priceNum.toLocaleString('en-IN')}
              </div>
              
              <p className="text-sm mb-4 leading-relaxed">
                <span className="text-[#007185] hover:text-[#c45500] hover:underline cursor-pointer">FREE scheduled delivery</span> as soon as <br/><strong className="text-gray-900">Wednesday, 24 June, 7 am - 9 pm</strong> to Madurai 625016. Order within 7 hrs 41 mins. <a href="#" className="text-[#007185] hover:text-[#c45500] hover:underline">Details</a>
              </p>

              <h3 className="text-[#007600] text-xl mb-4 font-medium">In stock</h3>

              <AddToCartButton 
                product={product} 
                price={priceNum} 
                mrp={mrp} 
                discountPercent={42} 
              />

              <div className="text-xs text-gray-600 space-y-1 mb-4">
                <div className="grid grid-cols-[80px_1fr] gap-2">
                  <span>Payment</span>
                  <span className="text-[#007185] hover:text-[#c45500] hover:underline cursor-pointer">Secure transaction</span>
                </div>
                <div className="grid grid-cols-[80px_1fr] gap-2">
                  <span>Ships from</span>
                  <span>Amazon</span>
                </div>
                <div className="grid grid-cols-[80px_1fr] gap-2">
                  <span>Sold by</span>
                  <span className="text-[#007185] hover:text-[#c45500] hover:underline cursor-pointer">DAWNTECH</span>
                </div>
              </div>
              
              <button className="w-full border border-gray-300 hover:bg-gray-50 rounded-lg py-1.5 text-sm shadow-sm text-left px-3 text-gray-700 bg-white">
                Add to Wish List
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}