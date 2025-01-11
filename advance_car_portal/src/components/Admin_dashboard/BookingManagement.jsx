import React, { useEffect, useState } from 'react';
import { Table, Button } from 'flowbite-react';

const BookingManagement = () => {
  const [bookings, setBookings] = useState([
    {
      id: '',
      user: {
        name: ''
      },
      car: {
        model: ''
      },
      status: ''
    }
  ]);

  // useEffect(() => {
  //   // Fetch bookings from the server
  //   const fetchBookings = async () => {
  //     try {
  //       const response = await fetch('/api/bookings');
  //       const data = await response.json();
  //       setBookings(data);
  //     } catch (error) {
  //       console.error('Error fetching bookings:', error);
  //     }
  //   };

  //   fetchBookings();
  // }, []);

  // const cancelBooking = async (bookingId) => {
  //   try {
  //     await fetch(`/api/bookings/${bookingId}/cancel`, { method: 'POST' });
  //     setBookings(bookings.map(booking => booking.id === bookingId ? { ...booking, status: 'Cancelled' } : booking));
  //   } catch (error) {
  //     console.error('Error cancelling booking:', error);
  //   }
  // };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Booking Management</h2>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>User</Table.HeadCell>
          <Table.HeadCell>Car</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>Actions</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {bookings.map(booking => (
            <Table.Row key={booking.id} className="bg-white">
              <Table.Cell>{booking.user.name}</Table.Cell>
              <Table.Cell>{booking.car.model}</Table.Cell>
              <Table.Cell>{booking.status}</Table.Cell>
              <Table.Cell>
                {booking.status !== 'Cancelled' && (
                  // <Button color="failure" onClick={() => cancelBooking(booking.id)}>
                  <Button color="failure">
                    Cancel
                  </Button>
                )}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default BookingManagement;