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

  // Calculate halfway point for splitting
  const specHalf = Math.ceil(specEntries.length / 2);

  // Split each entry array into two halves
  const specs1 = specEntries.slice(0, specHalf);
  const specs2 = specEntries.slice(specHalf);
  


  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
      <h3 className="font-semibold mb-4">Key Specifications</h3>
      <div className="flex h-fit w-full space-x-4 justify-evenly">
        <div className="h-fit w-1/3 flex flex-col space-y-4">
          {
          specs1.map(([key, value]) => (
            <div key={key} className="flex w-full mx-5 bg-slate-300 p-5 rounded-lg">
              <div className="w-2/3  flex justify-start">{key}</div>
              <div className="w-1/3  flex justify-end">{value}</div>
            </div>
          ))
        }
        </div>
        <div className="h-fit w-1/3 flex flex-col space-y-4">
          {
          specs2.map(([key, value]) => (
            <div key={key}className="flex w-full mx-5 bg-slate-300 p-5 rounded-lg">
              <div className="w-2/3  flex justify-start">{key}</div>
              <div className="w-1/3  flex justify-end">{value}</div>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  );
};

export default Specifications;
