import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "flowbite-react";

const Card = ({ car, onClick }) => {
  return (
    <div onClick={onClick} className="bg-white p-4 rounded-lg shadow-md h-full min-w-[80%] sm:min-w-[40%] md:min-w-[30%] lg:min-w-[20%] cursor-pointer">
      <div className="bg-blue-200 aspect-square h-[50%] w-full mb-4 rounded-md flex items-center justify-center">
        <span className="text-blue-500">Image</span>
      </div>
      <div className="h-[50%] flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-blue-700">{car.name}</h3>
          <p className="text-sm text-gray-600">{car.description}</p>
          <Rating>
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star filled={false} />
          </Rating>
        </div>
        <div className="mt-4">
          <p className="text-lg font-bold text-blue-700">${car.price}</p>
          <Link to="/car-details">
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
              Check Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
