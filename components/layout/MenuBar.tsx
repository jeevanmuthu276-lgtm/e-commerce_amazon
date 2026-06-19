interface MenuBarProps {
  onMenuToggle: () => void;
}

export default function MenuBar({ onMenuToggle }: MenuBarProps) {
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

      {/* All Menu — onClick added here */}
      <div
        onClick={onMenuToggle}
        className="px-2 py-1 border border-transparent hover:border-white cursor-pointer flex items-center gap-1 font-bold whitespace-nowrap"
      >
        ☰ All
      </div>

      {/* Menu Items */}
      <div className="flex ml-4 gap-2 text-bold">
        {menuItems.map((item) => (
          <div
            key={item}
            className="px-2 py-1 border border-transparent hover:border-white cursor-pointer transition-all whitespace-nowrap"
          >
            {item}
          </div>
        ))}
      </div>

    </div>
  );
}