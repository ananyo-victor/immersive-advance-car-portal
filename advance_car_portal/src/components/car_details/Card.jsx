import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md h-full min-w-[20%]">
      <div className="bg-gray-300 aspect-square h-[50%] w-full mb-4 rounded-md">Image</div>
      <div className="h-[50%] flex flex-col justify-between py-4">
        <div>
          <h3 className="text-lg font-semibold">Car Model</h3>
          <p className="text-sm text-gray-600">Description of the car goes here.</p>
        </div>
        <div className="bg-gray-300 size-fit py-2 px-3 rounded-lg">
          <Link to="/car-details">
            <button className="ml-auto">Check Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
