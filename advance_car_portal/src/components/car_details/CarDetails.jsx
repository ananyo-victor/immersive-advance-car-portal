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
  const [showPromotions, setShowPromotions] = useState(false); // State to toggle promotions window

  const handleTogglePromotions = () => {
    setShowPromotions(!showPromotions);
  };

  const handleClosePromotions = () => {
    setShowPromotions(false);
  };

  return (
    <div className="flex lg:flex-row md:px-4 justify-evenly relative bg-gradient-to-r from-blue-400 to-purple-500">
      <Sidebar />
      <div className="w-full lg:w-9/12 px-4 space-y-6">
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
