import React, {useContext} from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import CarSection from "./components/CarSection";
import FooterComponent from "./components/FooterComponent";
import Sidebar from "./components/Sidebar";
import ProductDetails from "./components/ProductDetails";
import Variants from "./components/Variants";
import Specifications from "./components/Specifications";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import Filter from "./components/Filter";
import Brands from "./components/Brands";
import  userContext  from "./UserContext";


function App() {
  const {navHeight} = useContext(userContext);
const height = navHeight +2; 
  return (<>
    <div className="App relative">
      <Navbar />
      {/* <Slider />
      <div className="flex flex-col items-center max-h-fit w-full">
        <CarSection title="Featured Car" />
        <CarSection title="Popular Car" />
        <CarSection title="Featured Car" />
      </div> */}

      <div className="flex mx-4 justify-evenly relative">
        <Sidebar />
        <div className={`w-10/12 px-4 space-y-6 mt-[${height}px]`}>
          <ProductDetails />
          <Variants />
          <Specifications />
          <Features />
          <Reviews />
          <Filter />
          <Brands />
        </div>
      </div>
      <FooterComponent />
    </div>


  </>
  );
}

export default App;
