import React, { useState } from "react";
import CarSection from "./Landing/CarSection";

const cars = [
  { id: 1, name: "Toyota Corolla", brand: "Toyota", fuelType: "Petrol", roadType: "City", price: 5000, image: "path/to/toyota-corolla.jpg" },
  { id: 2, name: "Honda Civic", brand: "Honda", fuelType: "Petrol", roadType: "City", price: 7000, image: "path/to/honda-civic.jpg" },
  { id: 3, name: "Ford Mustang", brand: "Ford", fuelType: "Petrol", roadType: "Highway", price: 15000, image: "path/to/ford-mustang.jpg" },
  { id: 4, name: "Chevrolet Camaro", brand: "Chevrolet", fuelType: "Petrol", roadType: "Highway", price: 14000, image: "path/to/chevrolet-camaro.jpg" },
  { id: 5, name: "BMW 3 Series", brand: "BMW", fuelType: "Diesel", roadType: "City", price: 20000, image: "path/to/bmw-3-series.jpg" },
  { id: 6, name: "Audi A4", brand: "Audi", fuelType: "Diesel", roadType: "City", price: 22000, image: "path/to/audi-a4.jpg" },
  { id: 7, name: "Mercedes-Benz C-Class", brand: "Mercedes-Benz", fuelType: "Petrol", roadType: "Highway", price: 25000, image: "path/to/mercedes-benz-c-class.jpg" },
  { id: 8, name: "Tesla Model 3", brand: "Tesla", fuelType: "Electric", roadType: "City", price: 35000, image: "path/to/tesla-model-3.jpg" },
  { id: 9, name: "Nissan Altima", brand: "Nissan", fuelType: "Petrol", roadType: "City", price: 8000, image: "path/to/nissan-altima.jpg" },
  { id: 10, name: "Hyundai Elantra", brand: "Hyundai", fuelType: "Petrol", roadType: "City", price: 6000, image: "path/to/hyundai-elantra.jpg" },
  { id: 11, name: "Kia Optima", brand: "Kia", fuelType: "Petrol", roadType: "City", price: 7000, image: "path/to/kia-optima.jpg" },
  { id: 12, name: "Volkswagen Passat", brand: "Volkswagen", fuelType: "Diesel", roadType: "City", price: 9000, image: "path/to/volkswagen-passat.jpg" },
  { id: 13, name: "Mazda 3", brand: "Mazda", fuelType: "Petrol", roadType: "City", price: 10000, image: "path/to/mazda-3.jpg" },
  { id: 14, name: "Subaru Impreza", brand: "Subaru", fuelType: "Petrol", roadType: "City", price: 11000, image: "path/to/subaru-impreza.jpg" },
  { id: 15, name: "Lexus IS", brand: "Lexus", fuelType: "Petrol", roadType: "City", price: 30000, image: "path/to/lexus-is.jpg" },
  { id: 16, name: "Jaguar XE", brand: "Jaguar", fuelType: "Diesel", roadType: "City", price: 32000, image: "path/to/jaguar-xe.jpg" },
  { id: 17, name: "Volvo S60", brand: "Volvo", fuelType: "Petrol", roadType: "City", price: 28000, image: "path/to/volvo-s60.jpg" },
  { id: 18, name: "Porsche 911", brand: "Porsche", fuelType: "Petrol", roadType: "Highway", price: 90000, image: "path/to/porsche-911.jpg" },
  { id: 19, name: "Ferrari 488", brand: "Ferrari", fuelType: "Petrol", roadType: "Highway", price: 250000, image: "path/to/ferrari-488.jpg" },
  { id: 20, name: "Lamborghini Huracan", brand: "Lamborghini", fuelType: "Petrol", roadType: "Highway", price: 300000, image: "path/to/lamborghini-huracan.jpg" },
  // Add more car objects as needed
];

const CarPage = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedFuelType, setSelectedFuelType] = useState("");
  const [selectedRoadType, setSelectedRoadType] = useState("");

  const filteredCars = cars.filter(car => {
    return (
      (!selectedBrand || car.brand === selectedBrand) &&
      (!selectedFuelType || car.fuelType === selectedFuelType) &&
      (!selectedRoadType || car.roadType === selectedRoadType)
    );
  });

  const brands = [...new Set(cars.map(car => car.brand))];
  const fuelTypes = [...new Set(cars.map(car => car.fuelType))];
  const roadTypes = [...new Set(cars.map(car => car.roadType))];

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
      {/* <CarSection title="All Brands" cars={cars.filter(car => car.brand === selectedBrand)} /> */}
      <CarSection title="All Brands" cars={filteredCars} />
      <CarSection title="All Fuel Types" cars={filteredCars} />
      <CarSection title="All Road Types" cars={filteredCars} />
    </div>
  );
};

export default CarPage;