import React,{useContext} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import userContext from "./UserContext";
import Navbar from "./components/Navbar";
import FooterComponent from "./components/FooterComponent";
import Landing from "./components/Landing/Landing";
import CarDetails from "./components/car_details/CarDetails";
import Login from "./components/Login";
import Register from "./components/Register";
import Booking from "./components/Booking";
import UserProfile from "./components/UserProfile";
import AdminDashboard from "./components/AdminDashboard";
import BookingHistory from "./components/BookingHistory";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import BookingForm from "./components/BookingForm";

function App() {
      const { navHeight } = useContext(userContext);
      const height = navHeight + 2;
  
  return (
    <Router>
      <div className="relative">
        <Navbar />
        <div style={{ marginTop: `${height}px` }}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/car-details" element={<CarDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/booking-history" element={<BookingHistory />} />
            <Route path="/booking-form" element={<BookingForm />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
