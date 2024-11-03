import React from "react";

const Specifications = () => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
      <h3 className="font-semibold mb-4">Key Specifications</h3>
      <ul className="grid grid-cols-2 gap-2">
        <li className="flex justify-between"><span>Specification 1:</span><span>Detail</span></li>
        <li className="flex justify-between"><span>Specification 2:</span><span>Detail</span></li>
        <li className="flex justify-between"><span>Specification 3:</span><span>Detail</span></li>
      </ul>
    </div>
  );
};

export default Specifications;
