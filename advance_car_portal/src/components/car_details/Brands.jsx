import React, { useState } from "react";

const carCompanies = [
  "Tata Motors",
  "Maruti Suzuki",
  "Hyundai",
  "Mahindra",
  "Honda",
  "Ford",
  "Volkswagen",
  "Renault",
  "Kia",
  "BMW",
  "Audi",
  "Mercedes-Benz",
  "Chevrolet",
  "Nissan",
  "Toyota",
  "Mitsubishi",
  "Jeep",
  "Land Rover",
  "Jaguar",
  "Volvo",
  "Skoda",
  "Porsche",
  "Ferrari",
  "Lamborghini",
  "Maserati",
];

const Brands = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const expand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div id="box" className={`bg-gray-500 p-4 rounded-lg shadow-md w-full ${isExpanded ? 'h-auto' : 'h-[12rem]'} overflow-hidden relative`}>
      <h3 className="font-semibold mb-4">Other Brands to Explore</h3>
      <div className="grid grid-cols-5 gap-3 m-5">
        {carCompanies.map((company, index) => (
          <div key={index} className="bg-gray-300 h-24 w-24 rounded">{company}</div>
        ))}
      </div>
      <div className="flex justify-center absolute w-full z-10 bg-gray-600 bottom-0 left-0">
        <button className="" onClick={expand}>
          {isExpanded ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
          </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>}

        </button>
      </div>
    </div>
  );
};

export default Brands;
