import React,{useContext} from 'react';
import Sidebar from "./Sidebar";
import ProductDetails from "./ProductDetails";
import Variants from "./Variants";
import Specifications from "./Specifications";
import Features from "./Features";
import Reviews from "./Reviews";
import Filter from "./Filter";
import Brands from "./Brands";
import userContext from "../UserContext";


function CarDetails() {
    const { navHeight } = useContext(userContext);
    console.log(navHeight);
  
    const height = navHeight + 2;
    console.log(height);
  
  return (
      <div  className="flex mx-4 justify-evenly relative" style={{ marginTop: `${height}px` }}>
        <Sidebar />
        <div className={`w-10/12 px-4 space-y-6`}>
          <ProductDetails />
          <Variants />
          <Specifications />
          <Features />
          <Reviews />
          <Filter />
          <Brands />
        </div>
      </div> 
  )
}

export default CarDetails
