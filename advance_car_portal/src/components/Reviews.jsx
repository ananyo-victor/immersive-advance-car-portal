import React from "react";

const Reviews = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h3 className="font-semibold">Reviews</h3>
      <div className="flex items-center space-x-4">
        <span className="text-xl font-bold">4.7/5</span>
        <span className="text-gray-600">(123 ratings)</span>
      </div>
      <div className="mt-4">
        <div className="flex items-center space-x-2">
          <span>⭐⭐⭐⭐⭐</span>
          <span>Great product!</span>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
