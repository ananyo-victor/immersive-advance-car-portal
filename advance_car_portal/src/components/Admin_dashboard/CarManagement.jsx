import React, { useEffect, useState } from 'react';
import { Table, Button } from 'flowbite-react';

const CarManagement = () => {
  const [cars, setCars] = useState([{
    id: '',
    model: '',
    brand: ''
  }]);

  // useEffect(() => {
  //   // Fetch cars from the server
  //   const fetchCars = async () => {
  //     try {
  //       const response = await fetch('/api/cars');
  //       const data = await response.json();
  //       setCars(data);
  //     } catch (error) {
  //       console.error('Error fetching cars:', error);
  //     }
  //   };

  //   fetchCars();
  // }, []);

  // const addCar = async (car) => {
  //   try {
  //     const response = await fetch('/api/cars', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(car),
  //     });
  //     const newCar = await response.json();
  //     setCars([...cars, newCar]);
  //   } catch (error) {
  //     console.error('Error adding car:', error);
  //   }
  // };

  // const editCar = async (carId, updatedCar) => {
  //   try {
  //     await fetch(`/api/cars/${carId}`, {
  //       method: 'PUT',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(updatedCar),
  //     });
  //     setCars(cars.map(car => car.id === carId ? updatedCar : car));
  //   } catch (error) {
  //     console.error('Error editing car:', error);
  //   }
  // };

  // const deleteCar = async (carId) => {
  //   try {
  //     await fetch(`/api/cars/${carId}`, { method: 'DELETE' });
  //     setCars(cars.filter(car => car.id !== carId));
  //   } catch (error) {
  //     console.error('Error deleting car:', error);
  //   }
  // };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Car Management</h2>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Model</Table.HeadCell>
          <Table.HeadCell>Brand</Table.HeadCell>
          <Table.HeadCell>Actions</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {cars.map(car => (
            <Table.Row key={car.id} className="bg-white">
              <Table.Cell>{car.model}</Table.Cell>
              <Table.Cell>{car.brand}</Table.Cell>
              <Table.Cell>
                {/* <Button color="info" onClick={() => editCar(car.id, { ...car, model: 'Updated Model' })} className="mr-2"> */}
                <Button color="info" className="mr-2">
                  Edit
                </Button>
                {/* <Button color="failure" onClick={() => deleteCar(car.id)}> */}
                <Button color="failure">
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {/* <Button color="success" onClick={() => addCar({ model: 'New Model', brand: 'New Brand' })} className="mt-4"> */}
      <Button color="success" className="mt-4">
        Add Car
      </Button>
    </div>
  );
};

export default CarManagement;