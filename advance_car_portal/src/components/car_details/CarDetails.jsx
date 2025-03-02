import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from "./Sidebar";
import ProductDetails from "./ProductDetails";
import Variants from "./Variants";
import Specifications from "./Specifications";
import Features from "./Features";
import Reviews from "./Reviews";
import Dealers from "./Dealers";
import Brands from "./Brands";
import Promotions from "../Promotions"; // Import the Promotions component

function CarDetails() {
  const location = useLocation();
  const { brand } = location.state || {};
  const [showPromotions, setShowPromotions] = useState(false); // State to toggle promotions window

  useEffect(() => {
    if (brand) {
      console.log("Car brand:", brand);
      // You can use the brand to fetch or display related data
    }
  }, [brand]);

  const handleTogglePromotions = () => {
    setShowPromotions(!showPromotions);
  };

  const handleClosePromotions = () => {
    setShowPromotions(false);
  };

  return (
    <div className="md:flex md:px-4 justify-evenly md:relative bg-gradient-to-r from-blue-400 to-purple-500">
      <Sidebar />
      <div className="w-full lg:w-9/12 px-4 space-y-6">
        <ProductDetails onTogglePromotions={handleTogglePromotions} />
        <Variants />
        <Specifications />
        <Features />
        <Reviews />
        <Dealers carBrand={brand} />
        <Brands />
      </div>
      {showPromotions && <Promotions onClose={handleClosePromotions} />}
    </div>
  );
}

export default CarDetails;
