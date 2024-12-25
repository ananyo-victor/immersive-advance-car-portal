import React, { useState } from 'react';
import Sidebar from "./Sidebar";
import ProductDetails from "./ProductDetails";
import Variants from "./Variants";
import Specifications from "./Specifications";
import Features from "./Features";
import Reviews from "./Reviews";
import Filter from "./Filter";
import Brands from "./Brands";
import Promotions from "../Promotions"; // Import the Promotions component

function CarDetails() {
  const carId = 1; // Replace with the actual car ID
  const [showPromotions, setShowPromotions] = useState(false); // State to toggle promotions window

  const handleTogglePromotions = () => {
    setShowPromotions(!showPromotions);
  };

  const handleClosePromotions = () => {
    setShowPromotions(false);
  };

  return (
    <div className="flex mx-4 justify-evenly relative">
      <Sidebar />
      <div className={`w-10/12 px-4 space-y-6`}>
        <ProductDetails onTogglePromotions={handleTogglePromotions} />
        <Variants />
        <Specifications />
        <Features />
        <Reviews />
        <Filter />
        <Brands />
      </div>
        {showPromotions && <Promotions onClose={handleClosePromotions} />}
    </div>
  );
}

export default CarDetails;
