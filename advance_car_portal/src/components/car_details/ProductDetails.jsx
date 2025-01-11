import React from "react";
import RatingComp from "./extra/RatingComp";

const ProductDetails = ({ onTogglePromotions }) => {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 p-4 rounded-lg shadow-md space-x-0 lg:space-x-5">
      <div className="mt-5 w-full lg:w-1/3 bg-blue-200 aspect-square h-64 rounded-lg"></div>
      <div className="mt-5 px-5 flex flex-col justify-evenly w-full lg:w-2/3">
        <div className="flex justify-between">
          <div className="space-y-2">
            <h2 className="text-xl font-bold">Product Name</h2>
            <RatingComp />
          </div>
          <div className="flex space-x-5 px-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
            </svg>
          </div>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque fuga impedit voluptatem eligendi doloribus qui doloremque id beatae dolor architecto temporibus, omnis illum distinctio consequatur vitae fugit fugiat officiis quisquam.
        </div>
        <div>
          <button
            onClick={onTogglePromotions}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Show Offers
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
