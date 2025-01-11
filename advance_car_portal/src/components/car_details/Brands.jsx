import React, { useState } from "react";

const carCompanies = [
  { name: "Tata Motors", logo: "path/to/tata-motors-logo.png" },
  { name: "Maruti Suzuki", logo: "path/to/maruti-suzuki-logo.png" },
  { name: "Hyundai", logo: "path/to/hyundai-logo.png" },
  { name: "Mahindra", logo: "path/to/mahindra-logo.png" },
  { name: "Honda", logo: "path/to/honda-logo.png" },
  { name: "Ford", logo: "path/to/ford-logo.png" },
  { name: "Volkswagen", logo: "path/to/volkswagen-logo.png" },
  { name: "Renault", logo: "path/to/renault-logo.png" },
  { name: "Kia", logo: "path/to/kia-logo.png" },
  { name: "BMW", logo: "path/to/bmw-logo.png" },
  { name: "Audi", logo: "path/to/audi-logo.png" },
  { name: "Mercedes-Benz", logo: "path/to/mercedes-benz-logo.png" },
  { name: "Chevrolet", logo: "path/to/chevrolet-logo.png" },
  { name: "Nissan", logo: "path/to/nissan-logo.png" },
  { name: "Toyota", logo: "path/to/toyota-logo.png" },
  { name: "Mitsubishi", logo: "path/to/mitsubishi-logo.png" },
  { name: "Jeep", logo: "path/to/jeep-logo.png" },
  { name: "Land Rover", logo: "path/to/land-rover-logo.png" },
  { name: "Jaguar", logo: "path/to/jaguar-logo.png" },
  { name: "Volvo", logo: "path/to/volvo-logo.png" },
  { name: "Skoda", logo: "path/to/skoda-logo.png" },
  { name: "Porsche", logo: "path/to/porsche-logo.png" },
  { name: "Ferrari", logo: "path/to/ferrari-logo.png" },
  { name: "Lamborghini", logo: "path/to/lamborghini-logo.png" },
  { name: "Maserati", logo: "path/to/maserati-logo.png" },
];

const Brands = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full">
      <h3 className="text-xl font-semibold mb-4">Car Brands</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {carCompanies.slice(0, isExpanded ? carCompanies.length : 10).map((company, index) => (
          <div key={index} className="bg-white p-2 rounded-lg shadow-inner text-center">
            <img src={company.logo} alt={`${company.name} logo`} className="w-full h-16 object-contain mb-2" />
            <div className="text-gray-700 font-medium">{company.name}</div>
          </div>
        ))}
      </div>
      <button
        onClick={toggleExpand}
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        {isExpanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default Brands;
