export default function MenuBar() {
  const menuItems = [
    "MX Player",
    "Sell",
    "Bestsellers",
    "Today's Deals",
    "Mobiles",
    "Prime",
    "New Releases",
    "Customer Service",
    "Electronics",
    "Amazon Pay",
    "Fashion",
    "Home & Kitchen",
  ];

  return (
    <div className="bg-[#232f3e] text-white h-12 flex items-center px-4">
      
      {/* All Menu */}
      <div className="px-2 py-1 border border-transparent hover:border-white cursor-pointer">
        ☰ All
      </div>

      {/* Menu Items */}
      <div className="flex ml-4 gap-2 text-bold">
        {menuItems.map((item) => (
          <div
            key={item}
            className="
              px-2 py-1
              border border-transparent
              hover:border-white
              cursor-pointer
              transition-all
            "
          >
            {item}
          </div>
        ))}
      </div>

    </div>
  );
}