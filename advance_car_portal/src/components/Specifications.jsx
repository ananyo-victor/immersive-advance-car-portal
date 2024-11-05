import React from "react";

const Specifications = () => {
  const keySpecs = ['City Mileage', 'Engine Displacement', 'Max Power', 'Seating Capacity', 'Boot Space', 'Body Type', 'Fuel Type', 'No. of Cylinder', 'Max Torque', 'Transmission Type', 'Fuel Tank Capacity', 'Ground Clearence Unladen'];
  const keyFeat = ['Power Steering', 'Air Conditioner', 'Passenger Airbag', 'Alloy Wheels', 'Engine Start Stop Button', 'Anti-lock Braking System (ABS)', 'Driver Bag', 'Automatic Climate Control', 'Multi-function Steering Wheel'];
  const specSize = keySpecs.length;
  const featSize = keyFeat.length;
  const specs1 = keySpecs.slice(0, (specSize / 2) + 1);
  const specs2 = keySpecs.slice((specSize / 2), (specSize + 1));
  const feat1 = keyFeat.slice(0, (featSize / 2) + 1);
  const feat2 = keySpecs.slice((featSize / 2), (featSize + 1));

  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
      <h3 className="font-semibold mb-4">Key Specifications</h3>
      <div className="h-fit w-full flex">
        {
          specs1.map((spec, index) => (
            return (
              <div></div>
            )))
        }
        <div className="flex w-full mx-5 bg-slate-300 p-5">
          <div className="w-1/2  flex justify-start">Lorem, ipsum.</div>
          <div className="w-1/2 flex justify-end">Lorem, ipsum.</div>
        </div>
        <div className="flex w-full mx-5 bg-slate-300 p-5">
          <div className="w-1/2  flex justify-start">Lorem, ipsum.</div>
          <div className="w-1/2  flex justify-end">Lorem, ipsum.</div>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
