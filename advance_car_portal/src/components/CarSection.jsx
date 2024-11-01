import React from "react";
import Card from "./Card";

const CarSection = ({ title }) => {
  return (
    <div className="my-6 p-4 bg-gray-300 w-[98%] h-[470px] rounded-xl">
      <h2 className="text-xl font-semibold mt-3 ml-4">{title}</h2>
      <div className="flex justify-center items-center h-[90%]">
        <button className="p-2 bg-gray-300 rounded-full">{"<"}</button>
        <div className="flex gap-4 overflow-auto w-full px-4 max-h-screen h-[90%]">
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
        <button className="p-2 bg-gray-300 rounded-full">{">"}</button>
      </div>
    </div>
  );
};

export default CarSection;
