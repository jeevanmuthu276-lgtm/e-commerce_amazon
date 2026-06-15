import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
  <div className="flex w-[900px] mx-4 h-11">

      {/* Category */}
      <select className="bg-gray-200 text-black px-3 rounded-l-md outline-none">
        <option>All</option>
        <option>Mobiles</option>
        <option>Electronics</option>
        <option>Fashion</option>
      </select>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search Amazon.in"
        className="flex-1 bg-white text-black px-4 outline-none"
      />

      {/* Search Button */}
      <button className="bg-[#febd69] px-5 rounded-r-md hover:bg-[#f3a847]">
        <FaSearch className="text-black text-lg" />
      </button>

    </div>
  );
}