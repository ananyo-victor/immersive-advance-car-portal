import React, { useState } from "react";
import CarSection from "../Landing/CarSection";
import { carsData } from "../../data/carsData";

const CarPage = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedFuelType, setSelectedFuelType] = useState("");
  const [selectedRoadType, setSelectedRoadType] = useState("");

  const filteredCars = carsData.filter(car => {
    return (
      (!selectedBrand || car.brand === selectedBrand) &&
      (!selectedFuelType || car.fuelType === selectedFuelType) &&
      (!selectedRoadType || car.roadType === selectedRoadType)
    );
  });

  const brands = [...new Set(carsData.map(car => car.brand))];
  const fuelTypes = [...new Set(carsData.map(car => car.fuelType))];
  const roadTypes = [...new Set(carsData.map(car => car.roadType))];

  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-6 rounded-lg shadow-md w-full">
      <h1 className="text-3xl font-bold text-center mb-8">Our Cars</h1>
      <div className="flex flex-col md:flex-row md:space-x-4 mb-8">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <label className="block text-gray-700 mb-2" htmlFor="brand">Brand</label>
          <select
            id="brand"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Brands</option>
            {brands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <label className="block text-gray-700 mb-2" htmlFor="fuelType">Fuel Type</label>
          <select
            id="fuelType"
            value={selectedFuelType}
            onChange={(e) => setSelectedFuelType(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Fuel Types</option>
            {fuelTypes.map(fuelType => (
              <option key={fuelType} value={fuelType}>{fuelType}</option>
            ))}
          </select>
        </div>
        <div className="w-full md:w-1/3">
          <label className="block text-gray-700 mb-2" htmlFor="roadType">Road Type</label>
          <select
            id="roadType"
            value={selectedRoadType}
            onChange={(e) => setSelectedRoadType(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Road Types</option>
            {roadTypes.map(roadType => (
              <option key={roadType} value={roadType}>{roadType}</option>
            ))}
          </select>
        </div>
      </div>
      <CarSection title="Filtered Cars" cars={filteredCars} />
    </div>
  );
};

export default CarPage;