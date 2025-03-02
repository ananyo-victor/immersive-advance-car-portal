import React, { useState, useEffect } from "react";
import { indianStatesAndDistricts } from "../../data/stateAndDistrict.js";
import { dealers } from "../../data/dealers.js";

const Filter = ({ carBrand }) => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [districts, setDistricts] = useState([]);
  const [filteredDealers, setFilteredDealers] = useState([]);

  useEffect(() => {
    console.log("Car brand:", carBrand);
    const brandDealers = dealers.filter(dealer => dealer.brand === carBrand);
    setFilteredDealers(brandDealers);
  }, [carBrand]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=f5f948aba5204fdc9f5e7bd2a7aa9895`);
        const data = await response.json();
        const components = data.results[0].components;
        const state = components.state;
        let district = components.county || components.city || components.town;

        // Check if the district matches any district in indianStatesAndDistricts
        const stateDistricts = indianStatesAndDistricts[state] || [];
        const matchedDistrict = stateDistricts.find(d => district.includes(d) || d.includes(district));

        if (matchedDistrict) {
          district = matchedDistrict;
        }

        console.log("Detected state:", state);
        console.log("Detected district:", district);

        setSelectedState(state);
        setSelectedDistrict(district);
        setDistricts(stateDistricts);
        filterDealers(state, district);
      });
    }
  }, []);

  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    const stateDistricts = indianStatesAndDistricts[state] || [];
    setDistricts(stateDistricts);
    filterDealers(state, selectedDistrict);
  };

  const handleDistrictChange = (event) => {
    const district = event.target.value;
    setSelectedDistrict(district);
    filterDealers(selectedState, district);
  };

  const filterDealers = (state, district) => {
    console.log("Filtering dealers with state:", state, "and district:", district);
    const results = dealers.filter(dealer => {
      return (
        (!state || dealer.state === state) &&
        (!district || dealer.district === district) &&
        dealer.brand === carBrand
      );
    });
    console.log("Filtered dealers:", results);
    setFilteredDealers(results);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full">
      <h3 className="text-xl font-semibold mb-4">Dealers</h3>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="w-full md:w-1/2">
            <label className="block text-gray-700 mb-2" htmlFor="state">State</label>
            <select
              id="state"
              value={selectedState}
              onChange={handleStateChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select State</option>
              {Object.keys(indianStatesAndDistricts).map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
          <div className="w-full md:w-1/2">
            <label className="block text-gray-700 mb-2" htmlFor="district">District</label>
            <select
              id="district"
              value={selectedDistrict}
              onChange={handleDistrictChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select District</option>
              {districts.map((district) => (
                <option key={district} value={district}>{district}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Filtered Dealers</h3>
        {filteredDealers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDealers.map((dealer, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold">{dealer.name}</h4>
                <p className="text-gray-600">{dealer.address}</p>
                <p className="text-gray-600">Brand: {dealer.brand}</p>
                <p className="text-gray-600">State: {dealer.state}</p>
                <p className="text-gray-600">District: {dealer.district}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No dealers found matching the selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default Filter;
