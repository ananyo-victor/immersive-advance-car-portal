import React, { useState } from 'react';
import { Button, Modal, TextInput, Label, Accordion } from 'flowbite-react';

const CarManagement = ({ cars }) => {
  const [carList, setCarList] = useState(cars);
  const [showModal, setShowModal] = useState(false);
  const [newCar, setNewCar] = useState({ name: '', brand: '', price: '', year: '', color: '', mileage: '', fuelType: '', transmission: '', seats: '', engine: '', horsepower: '', torque: '', drivetrain: '', safetyRating: '', features: [] });
  const [editCarId, setEditCarId] = useState(null);

  const handleAddCar = () => {
    if (editCarId !== null) {
      setCarList(carList.map(car => (car.id === editCarId ? { ...newCar, id: editCarId } : car)));
      setEditCarId(null);
    } else {
      setCarList([...carList, { ...newCar, id: carList.length + 1 }]);
    }
    setShowModal(false);
    setNewCar({ name: '', brand: '', price: '', year: '', color: '', mileage: '', fuelType: '', transmission: '', seats: '', engine: '', horsepower: '', torque: '', drivetrain: '', safetyRating: '', features: [] });
  };

  const handleEditCar = (car) => {
    setNewCar({ name: car.name, brand: car.brand, price: car.price, year: car.year, color: car.color, mileage: car.mileage, fuelType: car.fuelType, transmission: car.transmission, seats: car.seats, engine: car.engine, horsepower: car.horsepower, torque: car.torque, drivetrain: car.drivetrain, safetyRating: car.safetyRating, features: car.features });
    setEditCarId(car.id);
    setShowModal(true);
  };

  const handleDeleteCar = (carId) => {
    setCarList(carList.filter(car => car.id !== carId));
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl md:text-2xl font-bold mb-4">Car Management</h2>
      <Accordion className="mt-4">
        {carList.map(car => (
          <Accordion.Panel key={car.id}>
            <Accordion.Title>
              {car.name} - {car.brand}
            </Accordion.Title>
            <Accordion.Content>
              <p><strong>Price:</strong> ${car.price}</p>
              <p><strong>Year:</strong> {car.year}</p>
              <p><strong>Color:</strong> {car.color}</p>
              <p><strong>Mileage:</strong> {car.mileage}</p>
              <p><strong>Fuel Type:</strong> {car.fuelType}</p>
              <p><strong>Transmission:</strong> {car.transmission}</p>
              <p><strong>Seats:</strong> {car.seats}</p>
              <p><strong>Engine:</strong> {car.engine}</p>
              <p><strong>Horsepower:</strong> {car.horsepower}</p>
              <p><strong>Torque:</strong> {car.torque}</p>
              <p><strong>Drivetrain:</strong> {car.drivetrain}</p>
              <p><strong>Safety Rating:</strong> {car.safetyRating}</p>
              <p><strong>Features:</strong> {car.features.join(', ')}</p>
              <div className="flex space-x-2 mt-4">
                <Button color="info" onClick={() => handleEditCar(car)}>
                  Edit
                </Button>
                <Button color="failure" onClick={() => handleDeleteCar(car.id)}>
                  Delete
                </Button>
              </div>
            </Accordion.Content>
          </Accordion.Panel>
        ))}
      </Accordion>
      <Button color="success" className="mt-4" onClick={() => setShowModal(true)}>
        Add Car
      </Button>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>{editCarId !== null ? 'Edit Car' : 'Add New Car'}</Modal.Header>
        <Modal.Body>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name" value="Model" />
              <TextInput
                id="name"
                type="text"
                value={newCar.name}
                onChange={(e) => setNewCar({ ...newCar, name: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="brand" value="Brand" />
              <TextInput
                id="brand"
                type="text"
                value={newCar.brand}
                onChange={(e) => setNewCar({ ...newCar, brand: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="price" value="Price" />
              <TextInput
                id="price"
                type="number"
                value={newCar.price}
                onChange={(e) => setNewCar({ ...newCar, price: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="year" value="Year" />
              <TextInput
                id="year"
                type="number"
                value={newCar.year}
                onChange={(e) => setNewCar({ ...newCar, year: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="color" value="Color" />
              <TextInput
                id="color"
                type="text"
                value={newCar.color}
                onChange={(e) => setNewCar({ ...newCar, color: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="mileage" value="Mileage" />
              <TextInput
                id="mileage"
                type="number"
                value={newCar.mileage}
                onChange={(e) => setNewCar({ ...newCar, mileage: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="fuelType" value="Fuel Type" />
              <TextInput
                id="fuelType"
                type="text"
                value={newCar.fuelType}
                onChange={(e) => setNewCar({ ...newCar, fuelType: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="transmission" value="Transmission" />
              <TextInput
                id="transmission"
                type="text"
                value={newCar.transmission}
                onChange={(e) => setNewCar({ ...newCar, transmission: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="seats" value="Seats" />
              <TextInput
                id="seats"
                type="number"
                value={newCar.seats}
                onChange={(e) => setNewCar({ ...newCar, seats: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="engine" value="Engine" />
              <TextInput
                id="engine"
                type="text"
                value={newCar.engine}
                onChange={(e) => setNewCar({ ...newCar, engine: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="horsepower" value="Horsepower" />
              <TextInput
                id="horsepower"
                type="number"
                value={newCar.horsepower}
                onChange={(e) => setNewCar({ ...newCar, horsepower: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="torque" value="Torque" />
              <TextInput
                id="torque"
                type="text"
                value={newCar.torque}
                onChange={(e) => setNewCar({ ...newCar, torque: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="drivetrain" value="Drivetrain" />
              <TextInput
                id="drivetrain"
                type="text"
                value={newCar.drivetrain}
                onChange={(e) => setNewCar({ ...newCar, drivetrain: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="safetyRating" value="Safety Rating" />
              <TextInput
                id="safetyRating"
                type="number"
                value={newCar.safetyRating}
                onChange={(e) => setNewCar({ ...newCar, safetyRating: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="features" value="Features" />
              <TextInput
                id="features"
                type="text"
                value={newCar.features.join(', ')}
                onChange={(e) => setNewCar({ ...newCar, features: e.target.value.split(', ') })}
                required
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleAddCar}>{editCarId !== null ? 'Update Car' : 'Add Car'}</Button>
          <Button color="gray" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CarManagement;