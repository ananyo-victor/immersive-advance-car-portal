import React, { useState } from "react";

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    brand: "",
    model: "",
    priceRange: "",
  });

  const handleSearch = () => {
    onSearch(searchTerm, filters);
  };

  return (
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 p-6 bg-white rounded-lg shadow-lg w-full max-w-4xl mx-auto">
      <input
        type="text"
        placeholder="Search for cars..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full md:w-1/4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select
        value={filters.brand}
        onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
        className="w-full md:w-1/4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Brand</option>
        <option value="Toyota">Toyota</option>
        <option value="Honda">Honda</option>
        {/* Add more brands as needed */}
      </select>
      <select
        value={filters.model}
        onChange={(e) => setFilters({ ...filters, model: e.target.value })}
        className="w-full md:w-1/4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Model</option>
        <option value="Corolla">Corolla</option>
        <option value="Civic">Civic</option>
        {/* Add more models as needed */}
      </select>
      <select
        value={filters.priceRange}
        onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
        className="w-full md:w-1/4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Price Range</option>
        <option value="0-5000">$0 - $5000</option>
        <option value="5000-10000">$5000 - $10000</option>
        {/* Add more price ranges as needed */}
      </select>
      <button
        onClick={handleSearch}
        className="w-full md:w-auto bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Search
      </button>
    </div>
  );
}

export default Search;