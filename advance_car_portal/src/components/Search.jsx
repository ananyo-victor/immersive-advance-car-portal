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
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        value={filters.brand}
        onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
      >
        <option value="">Select Brand</option>
        <option value="Toyota">Toyota</option>
        <option value="Honda">Honda</option>
        {/* Add more brands as needed */}
      </select>
      <select
        value={filters.model}
        onChange={(e) => setFilters({ ...filters, model: e.target.value })}
      >
        <option value="">Select Model</option>
        <option value="Corolla">Corolla</option>
        <option value="Civic">Civic</option>
        {/* Add more models as needed */}
      </select>
      <select
        value={filters.priceRange}
        onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
      >
        <option value="">Select Price Range</option>
        <option value="0-5000">$0 - $5000</option>
        <option value="5000-10000">$5000 - $10000</option>
        {/* Add more price ranges as needed */}
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;