import React from 'react';
import { Table, Button } from 'flowbite-react';

const BookingManagement = ({ bookings }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl md:text-2xl font-bold mb-4">Booking Management</h2>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>User</Table.HeadCell>
            <Table.HeadCell>Car</Table.HeadCell>
            <Table.HeadCell>Date</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {bookings.map(booking => (
              <Table.Row key={booking.id} className="bg-white">
                <Table.Cell>{booking.user}</Table.Cell>
                <Table.Cell>{booking.car}</Table.Cell>
                <Table.Cell>{booking.date}</Table.Cell>
                <Table.Cell>
                  {booking.status !== 'Cancelled' && (
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
    </div>
  );
};

export default BookingManagement;