import React from "react";

const Features = () => {
  const keyFeat = {
    "Power Steering": true,
    "Air Conditioner": true,
    "Passenger Airbag": true,
    "Alloy Wheels": true,
    "Engine Start Stop Button": true,
    "Anti-Lock Braking System": true,
    "Driver Airbag": false,
    "Automatic Climate Control": true,
    "Multi Function Steering Wheel": true
  };

  const featEntries = Object.entries(keyFeat);
  const featHalf = Math.ceil(featEntries.length / 2);
  const feat1 = featEntries.slice(0, featHalf);
  const feat2 = featEntries.slice(featHalf);
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
      <h3 className="font-semibold mb-4">Key Features</h3>
      <div className="flex h-fit w-full space-x-4 justify-evenly">
        <div className="h-fit w-1/3 flex flex-col space-y-4">
          {
            feat1.map(([key, value]) => (
              <div key={key} className="flex w-full mx-5 bg-slate-300 p-5 rounded-lg">
                <div className="w-2/3  flex justify-start">{key}</div>
                <div className="w-1/3  flex justify-end">{value ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                  : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                }</div>
              </div>
            ))
          }
        </div>
        <div className="h-fit w-1/3 flex flex-col space-y-4">
          {
            feat2.map(([key, value]) => (
              <div key={key} className="flex w-full mx-5 bg-slate-300 p-5 rounded-lg">
                <div className="w-2/3  flex justify-start">{key}</div>
                <div className="w-1/3  flex justify-end">{value ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                  : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                }</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Features;
