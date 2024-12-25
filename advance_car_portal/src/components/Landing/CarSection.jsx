import React, { useRef } from "react";
import Card from "../car_details/Card";

const CarSection = ({ title }) => {
  const cardContainerRef = useRef(null);

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

  return (
    <div className="my-6 p-4 bg-gray-300 w-[98%] h-[470px] rounded-xl">
      <h2 className="text-xl font-semibold mt-3 ml-4">{title}</h2>
      <div className="flex justify-center items-center h-[90%] space-x-5">
        <div>
          <button className="p-2 bg-gray-500 rounded-full" onClick={left}>
            {"<"}
          </button>
        </div>
        <div
          ref={cardContainerRef}
          className="flex gap-4 scrollbar-hide overflow-auto w-full max-h-screen h-[90%]"
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div>
          <button className="p-2 bg-gray-500 rounded-full" onClick={right}>
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarSection;
