import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import CarSection from "./components/CarSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <div className="flex flex-col items-center max-h-fit w-full">
      <CarSection title="Featured Car" />
      <CarSection title="Popular Car" />
      <CarSection title="Featured Car" />
      </div>
      {/* <div className="w-full h-52 bg-gray-200 mt-6"></div> */}
    </div>
  );
}

export default App;
