import React, { useEffect, useState } from 'react';

const BookingHistory = ({ userId }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch booking history from the server
    const fetchBookings = async () => {
      try {
        const response = await fetch(`/api/bookings?userId=${userId}`);
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error('Error fetching booking history:', error);
      }
    };

    fetchBookings();
  }, [userId]);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Booking History</h2>
      {bookings.length > 0 ? (
        <ul className="space-y-4">
          {bookings.map((booking) => (
            <li key={booking.id} className="p-4 bg-white rounded-lg shadow-md">
              <p><strong>Car ID:</strong> {booking.carId}</p>
              <p><strong>Start Date:</strong> {booking.startDate}</p>
              <p><strong>End Date:</strong> {booking.endDate}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No bookings found.</p>
      )}
    </div>
  );
};

export default BookingHistory;