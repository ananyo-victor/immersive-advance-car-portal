import React from "react";

const Variants = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h3 className="font-semibold mb-4">Variants</h3>
      <div className="flex space-x-2">
        <button className="py-2 px-4 bg-gray-300 rounded">Variant 1</button>
        <button className="py-2 px-4 bg-gray-300 rounded">Variant 2</button>
        <button className="py-2 px-4 bg-gray-300 rounded">Variant 3</button>
      </div>
    </div>
  );
};

export default Variants;
