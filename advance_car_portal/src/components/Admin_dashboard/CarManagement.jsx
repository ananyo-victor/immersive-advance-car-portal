import React from 'react';
import { Table, Button } from 'flowbite-react';

const CarManagement = ({ cars }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl md:text-2xl font-bold mb-4">Car Management</h2>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Model</Table.HeadCell>
            <Table.HeadCell>Brand</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {cars.map(car => (
              <Table.Row key={car.id} className="bg-white">
                <Table.Cell>{car.name}</Table.Cell>
                <Table.Cell>{car.brand}</Table.Cell>
                <Table.Cell>${car.price}</Table.Cell>
                <Table.Cell>
                  <Button color="info" className="mr-2">
                    Edit
                  </Button>
                  <Button color="failure">
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
      <Button color="success" className="mt-4">
        Add Car
      </Button>
    </div>
  );
};

export default CarManagement;