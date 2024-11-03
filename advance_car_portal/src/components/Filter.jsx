import React from "react";

const Filter = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h3 className="font-semibold mb-4">Filter Options</h3>
      <div className="flex space-x-2">
        <select className="p-2 bg-gray-300 rounded">
          <option>Company</option>
        </select>
        <select className="p-2 bg-gray-300 rounded">
          <option>Place</option>
        </select>
        <button className="p-2 bg-blue-500 text-white rounded">Search</button>
      </div>
    </div>
  );
};

export default Filter;
