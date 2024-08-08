import React from "react";
import { FaSearch } from "react-icons/fa";
const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-bar flex items-center justify-center mt-6 mb-6 relative">
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-[35rem] h-14 p-2 pl-10 border rounded-md focus:outline-none text-white border-none"
      />
      <FaSearch className="absolute left-[21.5rem] text-white" />
    </div>
  );
};

export default SearchBar;
