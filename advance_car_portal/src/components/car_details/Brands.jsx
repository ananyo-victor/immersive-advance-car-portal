import React, { useState } from "react";
import { carCompanies } from "../../data/brand";

const Brands = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full">
      <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Car Brands</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {carCompanies.slice(0, isExpanded ? carCompanies.length : 10).map((company, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center transform transition-transform hover:scale-105">
            <img src={company.logo} alt={`${company.name} logo`} className="w-full h-20 object-contain mb-4" />
            <div className="text-gray-800 font-semibold">{company.name}</div>
          </div>
        ))}
      </div>
      <button
        onClick={toggleExpand}
        className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200"
      >
        {isExpanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default Brands;
