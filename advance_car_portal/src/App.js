import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import FooterComponent from "./components/FooterComponent";
import Landing from "./components/Landing";
import CarDetails from "./components/CarDetails";

function App() {
  return (
    <Router>
      <div className="relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/car-details" element={<CarDetails />} />
        </Routes>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
