import React, { useContext, Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import userContext from "./UserContext";
import Navbar from "./components/Navbar/Navbar";
import FooterComponent from "./components/FooterComponent";

const Landing = lazy(() => import("./components/Landing/Landing"));
const CarDetails = lazy(() => import("./components/car_details/CarDetails"));
const Login = lazy(() => import("./components/Auth/Login"));
const Register = lazy(() => import("./components/Auth/Register"));
const Booking = lazy(() => import("./components/Booking"));
const UserProfile = lazy(() => import("./components/UserProfile"));
const AdminDashboard = lazy(() => import("./components/Admin_dashboard/AdminDashboard"));
const BookingHistory = lazy(() => import("./components/BookingHistory"));
const FAQ = lazy(() => import("./components/FAQ"));
const Contact = lazy(() => import("./components/Navbar/Contact"));
const BookingForm = lazy(() => import("./components/BookingForm"));
const FeedbackForm = lazy(() => import("./components/FeedbackForm"));
const AboutUs = lazy(() => import("./components/Navbar/AboutUs"));
const CarPage = lazy(() => import("./components/Navbar/CarPage"));

function App() {
  const { navHeight } = useContext(userContext);
  const height = navHeight + 2;

  useEffect(() => {
    document.documentElement.style.setProperty('--height', `${height}px`);
  }, [height]);

  return (
    <Router>
      <div className="relative bg-gradient-to-r from-blue-400 to-purple-500">
        <Navbar />
        <div className="margin-top ">
          <Suspense fallback={<div>Loading...</div>}>
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
              <Route path="/feedback" element={<FeedbackForm />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/car-page" element={<CarPage />} />
            </Routes>
          </Suspense>
        </div>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
