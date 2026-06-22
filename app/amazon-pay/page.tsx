import Navbar from "@/components/layout/Navbar";
import MenuBar from "@/components/layout/MenuBar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AmazonPayPage() {
  const travelIcons = [
    { name: "Flights", icon: "✈️" },
    { name: "Bus Tickets", icon: "🚌" },
    { name: "Trains", icon: "🚂" },
    { name: "Hotels", icon: "🏨" },
  ];

  const recharges = [
    { name: "Mobile Recharge", icon: "📱" },
    { name: "App Store Code", icon: "🍎" },
    { name: "DTH Recharge", icon: "📡" },
    { name: "Google Play Recharge", icon: "▶️" },
  ];

  const billPayments = [
    { name: "Electricity", icon: "💡" },
    { name: "Mobile Postpaid", icon: "📲" },
    { name: "Credit Card Bill", icon: "💳" },
    { name: "Loan Repayment", icon: "💰" },
    { name: "LPG", icon: "🔥" },
    { name: "Insurance Premium", icon: "🛡️" },
    { name: "Water Bill", icon: "💧" },
    { name: "Landline", icon: "☎️" },
    { name: "Broadband", icon: "🌐" },
    { name: "Municipal Tax", icon: "🏛️" },
    { name: "Cable TV", icon: "📺" },
    { name: "Education Fees", icon: "🎓" },
  ];

  return (
    <div className="bg-[#eaeded] min-h-screen font-sans">
      <Navbar />
      <MenuBar />

      {/* Top Logo Bar */}
      <div className="bg-white px-6 py-4 shadow-sm border-b">
        <div className="max-w-[1500px] mx-auto flex items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold tracking-tight">amazon</span>
            <span className="text-2xl font-medium tracking-tight ml-1">pay</span>
            <span className="text-[#f56600] text-3xl leading-none ml-1">.</span>
          </div>
        </div>
      </div>

      <main className="max-w-[1500px] mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row gap-6">
        
        {/* Left Sidebar */}
        <div className="w-full md:w-[300px] shrink-0">
          <div className="bg-white rounded p-4 mb-4 shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-[15px] font-bold">Amazon Pay Balance</h2>
              <span className="text-[#007185] font-medium text-lg">₹0.00</span>
            </div>
            
            <div className="space-y-4">
              <Link href="#" className="flex items-center text-[#007185] hover:text-[#c45500] hover:underline text-[13px] font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Add Money
              </Link>
              <Link href="#" className="flex items-center text-[#007185] hover:text-[#c45500] hover:underline text-[13px] font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
                Add Gift Card
              </Link>
              <Link href="#" className="flex items-center text-[#007185] hover:text-[#c45500] hover:underline text-[13px] font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Account Settings
              </Link>
            </div>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="flex-1 flex flex-col gap-4">
          
          {/* Travel */}
          <div className="bg-white rounded p-6 shadow-sm border border-gray-200">
            <h2 className="text-[17px] font-bold mb-8">Travel</h2>
            <div className="flex flex-wrap gap-x-12 gap-y-8">
              {travelIcons.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center cursor-pointer group w-[80px]">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <span className="text-[13px] text-center text-[#007185] group-hover:text-[#c45500] group-hover:underline leading-tight">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recharges */}
          <div className="bg-white rounded p-6 shadow-sm border border-gray-200">
            <h2 className="text-[17px] font-bold mb-8">Recharges</h2>
            <div className="flex flex-wrap gap-x-12 gap-y-8">
              {recharges.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center cursor-pointer group w-[80px]">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <span className="text-[13px] text-center text-[#007185] group-hover:text-[#c45500] group-hover:underline leading-tight">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bill Payments */}
          <div className="bg-white rounded p-6 shadow-sm border border-gray-200">
            <h2 className="text-[17px] font-bold mb-8">Bill Payments</h2>
            <div className="flex flex-wrap gap-x-12 gap-y-8">
              {billPayments.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center cursor-pointer group w-[80px]">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <span className="text-[13px] text-center text-[#007185] group-hover:text-[#c45500] group-hover:underline leading-tight">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
