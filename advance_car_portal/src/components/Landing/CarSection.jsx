import React, { useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Card from "./Card";
import CarDetailsModal from "./CarDetailsModal";

const CarSection = ({ title, cars }) => {
  const cardContainerRef = useRef(null);
  const [selectedCar, setSelectedCar] = useState(null);

  const left = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft -= 200; // Adjust the scroll amount as needed
    }
  };

  const right = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft += 200; // Adjust the scroll amount as needed
    }
  };

  const handleCardClick = (car) => {
    setSelectedCar(car);
  };

  const handleCloseModal = () => {
    setSelectedCar(null);
  };

  return (
    <div className="my-6 p-4 bg-gray-100 w-full rounded-xl shadow-lg relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <div className="flex md:hidden space-x-2">
          <button
            onClick={left}
            className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-200 z-10"
          >
            <HiChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={right}
            className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-200 z-10"
          >
            <HiChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="relative">
        <div
          ref={cardContainerRef}
          className="flex overflow-x-auto space-x-4 scrollbar-hide md:mx-12"
        >
          {cars.map((car) => (
            <Card key={car.id} car={car} onClick={() => handleCardClick(car)} />
          ))}
        </div>
        <button
          onClick={left}
          className="hidden md:block absolute left-1 top-1/2 transform -translate-y-1/2 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-200 z-10"
        >
          <HiChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={right}
          className="hidden md:block absolute right-1 top-1/2 transform -translate-y-1/2 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-200 z-10"
        >
          <HiChevronRight className="w-6 h-6" />
        </button>
      </div>
      {selectedCar && (
        <CarDetailsModal car={selectedCar} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default CarSection;
