import React from "react";

const Specifications = () => {
  const keySpecs = {
    "City Mileage": "15 km/l",
    "Engine Displacement": "1498 cc",
    "Max Power": "115 bhp",
    "Seating Capacity": "5",
    "Boot Space": "500 liters",
    "Body Type": "SUV",
    "Fuel Type": "Petrol",
    "Number Of Cylinders": "4",
    "Max Torque": "250 Nm",
    "Transmission Type": "Automatic",
    "Fuel Tank Capacity": "45 liters",
    "Ground Clearance Unladen": "180 mm"
  };

  const specEntries = Object.entries(keySpecs);
  const specHalf = Math.ceil(specEntries.length / 2);
  const specs1 = specEntries.slice(0, specHalf);
  const specs2 = specEntries.slice(specHalf);

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full">
      <h3 className="text-xl font-semibold mb-4">Key Specifications</h3>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-evenly">
        <div className="flex flex-col space-y-4 w-full md:w-1/2">
          {specs1.map(([key, value]) => (
            <div key={key} className="flex justify-between items-center bg-green-100 p-4 rounded-lg shadow-inner">
              <div className="text-green-700 font-medium">{key}</div>
              <div className="text-green-700">{value}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col space-y-4 w-full md:w-1/2">
          {specs2.map(([key, value]) => (
            <div key={key} className="flex justify-between items-center bg-green-100 p-4 rounded-lg shadow-inner">
              <div className="text-green-700 font-medium">{key}</div>
              <div className="text-green-700">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specifications;
