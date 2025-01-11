import React from "react";

const CarDetailsModal = ({ car, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">{car.name}</h2>
        <div className="bg-blue-200 aspect-square h-48 w-full mb-4 rounded-md flex items-center justify-center">
          <span className="text-blue-500">Image</span>
        </div>
        <p className="text-gray-600 mb-4">{car.description}</p>
        <p className="text-lg font-bold text-blue-700 mb-4">${car.price}</p>
        <p className="text-gray-600 mb-4">Availability: In Stock</p>
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default CarDetailsModal;