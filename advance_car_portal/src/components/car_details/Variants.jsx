import React from "react";
import { variantData } from "../../data/variants";

const Variants = () => {
  return (
    <div className="bg-gray-100 md:p-6 p-2 rounded-lg shadow-lg w-full">
      {/* <h3 className="text-2xl font-bold mb-6 text-gray-800">Variants</h3> */}
      <div className="flex flex-col space-y-6">
        <div className="bg-white rounded-lg md:p-6 p-2 shadow-md">
          <div className="flex w-full bg-gray-200 mb-6 rounded-lg items-center">
            <div className="md:px-4 md:py-3 md:w-2/3 w-1/2 p-3 text-center font-semibold text-gray-700">Variants</div>
            <div className="md:px-4 md:py-3 md:w-1/3 w-1/2 p-3 text-center font-semibold text-gray-700">Ex-Showroom Price</div>
          </div>
          <div className="border-t border-gray-300 mb-6"></div>
          <div className="flex w-full flex-col space-y-4">
            {variantData.map((variant, index) => (
              <div key={index} className="flex w-full mb-4 items-center bg-gray-50 rounded-lg p-4 shadow-sm">
                <div className="flex flex-col md:flex-row md:px-4 py-2 w-full md:w-2/3 items-center">
                  <img src={variant.image} alt={variant.name} className="h-16 w-16 object-cover rounded-full mb-4 md:mb-0 md:mr-4" />
                  <div className="text-center md:text-left">
                    <div className="text-gray-800 font-semibold">{variant.name}</div>
                    <div className="text-gray-600">{variant.details}</div>
                  </div>
                </div>
                <div className="px-4 py-2 w-full md:w-1/3 text-center text-gray-800 font-semibold">{variant.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Variants;
