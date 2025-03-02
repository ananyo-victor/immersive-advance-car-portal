import React, { useState } from 'react';
import Slider from "./Slider";
import CarSection from "./CarSection";
import Search from "./Search";
import { carsData } from "../../data/carsData";

function Landing() {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (searchTerm, filters) => {
        const results = carsData.filter(car => {
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
        <div className="relative ">
            <Slider />
            <div className="flex flex-col items-center max-h-fit w-full">
                <Search onSearch={handleSearch} />
                {searchResults.length > 0 ? (
                    <CarSection title="Search Results" cars={searchResults} />
                ) : (
                    <>
                        <CarSection title="Featured Cars" cars={carsData} />
                        <CarSection title="Popular Cars" cars={carsData} />
                    </>
                )}
            </div>
            <div className="bg-blue-500 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center">Why Choose Us?</h2>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center">
                            <div className="bg-white text-blue-500 p-4 rounded-full">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"></path>
                                </svg>
                            </div>
                            <h3 className="mt-4 text-xl font-semibold">24/7 Support</h3>
                            <p className="mt-2 text-center">We offer round-the-clock support to assist you with any queries or issues.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-white text-blue-500 p-4 rounded-full">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h1l1 2h13l1-2h1m-1 0a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2m0 0l1-2h13l1 2"></path>
                                </svg>
                            </div>
                            <h3 className="mt-4 text-xl font-semibold">Wide Range of Cars</h3>
                            <p className="mt-2 text-center">Choose from a wide variety of cars to suit your needs and preferences.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-white text-blue-500 p-4 rounded-full">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"></path>
                                </svg>
                            </div>
                            <h3 className="mt-4 text-xl font-semibold">Affordable Prices</h3>
                            <p className="mt-2 text-center">We offer competitive pricing to ensure you get the best value for your money.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center">Customer Testimonials</h2>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-gray-600">"Great service! The car was in excellent condition and the booking process was smooth."</p>
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold">John Doe</h3>
                                <p className="text-sm text-gray-500">Customer</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-gray-600">"I had a wonderful experience with this car rental service. Highly recommended!"</p>
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold">Jane Smith</h3>
                                <p className="text-sm text-gray-500">Customer</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-gray-600">"Affordable prices and a wide range of cars to choose from. Will definitely use again."</p>
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold">Michael Johnson</h3>
                                <p className="text-sm text-gray-500">Customer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-blue-500 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center">Subscribe to Our Newsletter</h2>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full sm:w-auto p-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="bg-white text-blue-500 p-3 rounded-lg hover:bg-gray-200 transition duration-200">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
