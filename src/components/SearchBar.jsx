import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="flex items-center justify-center mt-6 mb-6 relative">
      <div className="relative w-full max-w-xl">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full h-14 p-2 pl-10 border rounded-md focus:outline-none text-white"
          style={{ backgroundColor: "#525252", border: "none" }}
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
      </div>
    </div>
  );
};

export default SearchBar;
