import React from "react";
import BookingForm from "./BookingForm";

function Booking() {
  return (
    <div>
      <h2>Booking</h2>
      <BookingForm carId={1} /> {/* Pass the appropriate carId */}
    </div>
  );
}

export default Booking;