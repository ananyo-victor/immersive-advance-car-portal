import React, { useState } from 'react';
import Slider from "./Slider";
import CarSection from "./CarSection";
// import userContext from "../../UserContext";
import Search from "../Search";

const carList = [
  { id: 1, name: "Toyota Corolla", brand: "Toyota", model: "Corolla", price: 5000, description: "A reliable car" },
  { id: 2, name: "Honda Civic", brand: "Honda", model: "Civic", price: 7000, description: "A stylish car" },
  // Add more car objects as needed
];

function Landing() {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (searchTerm, filters) => {
        const results = carList.filter(car => {
            return (
                car.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                (filters.brand ? car.brand === filters.brand : true) &&
                (filters.model ? car.model === filters.model : true) &&
                (filters.priceRange ? car.price <= parseInt(filters.priceRange.split('-')[1]) : true)
            );
        });
        setSearchResults(results);
    };

    return (
        <>
            <div className="App relative">
                <div>
                    <Slider />
                    <div className="flex flex-col items-center max-h-fit w-full">
                        <Search onSearch={handleSearch} />
                        {searchResults.length > 0 ? (
                            <div>
                                {searchResults.map((car) => (
                                    <div key={car.id}>
                                        <h3>{car.name}</h3>
                                        <p>{car.description}</p>
                                        {/* Display more car details as needed */}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <>
                                <CarSection title="Featured Car" />
                                <CarSection title="Popular Car" />
                                <CarSection title="Featured Car" />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Landing;
