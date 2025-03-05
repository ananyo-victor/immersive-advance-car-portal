import React, { useState } from 'react';
import { Button, Modal, TextInput, Label, Accordion, ToggleSwitch } from 'flowbite-react';

const DealerManagement = ({ dealers }) => {
  const [dealerList, setDealerList] = useState(dealers);
  const [showModal, setShowModal] = useState(false);
  const [newDealer, setNewDealer] = useState({ name: '', location: '', contact: '', phone: '', brands: [], status: 'active' });
  const [editDealerId, setEditDealerId] = useState(null);

  const handleAddDealer = () => {
    if (editDealerId !== null) {
      setDealerList(dealerList.map(dealer => (dealer.id === editDealerId ? { ...newDealer, id: editDealerId } : dealer)));
      setEditDealerId(null);
    } else {
      setDealerList([...dealerList, { ...newDealer, id: dealerList.length + 1 }]);
    }
    setShowModal(false);
    setNewDealer({ name: '', location: '', contact: '', phone: '', brands: [], status: 'active' });
  };

  const handleEditDealer = (dealer) => {
    setNewDealer({ name: dealer.name, location: dealer.location, contact: dealer.contact, phone: dealer.phone, brands: dealer.brands, status: dealer.status });
    setEditDealerId(dealer.id);
    setShowModal(true);
  };

  const handleDeleteDealer = (dealerId) => {
    setDealerList(dealerList.filter(dealer => dealer.id !== dealerId));
  };

  const handleToggleStatus = (dealerId) => {
    setDealerList(dealerList.map(dealer => (dealer.id === dealerId ? { ...dealer, status: dealer.status === 'active' ? 'inactive' : 'active' } : dealer)));
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl md:text-2xl font-bold mb-4">Dealer Management</h2>
      <Accordion className="mt-4">
        {dealerList.map(dealer => (
          <Accordion.Panel key={dealer.id}>
            <Accordion.Title>
              {dealer.name} - {dealer.location}
            </Accordion.Title>
            <Accordion.Content>
              <p><strong>Name:</strong> {dealer.name}</p>
              <p><strong>Location:</strong> {dealer.location}</p>
              <p><strong>Contact:</strong> {dealer.contact}</p>
              <p><strong>Phone:</strong> {dealer.phone}</p>
              <p><strong>Brands:</strong> {dealer.brands.join(', ')}</p>
              <p><strong>Status:</strong> {dealer.status}</p>
              <ToggleSwitch
                checked={dealer.status === 'active'}
                label="Active"
                onChange={() => handleToggleStatus(dealer.id)}
              />
              <div className="flex space-x-2 mt-4">
                <Button color="info" onClick={() => handleEditDealer(dealer)}>
                  Edit
                </Button>
                <Button color="failure" onClick={() => handleDeleteDealer(dealer.id)}>
                  Delete
                </Button>
              </div>
            </Accordion.Content>
          </Accordion.Panel>
        ))}
      </Accordion>
      <Button color="success" className="mt-4" onClick={() => setShowModal(true)}>
        Add Dealer
      </Button>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>{editDealerId !== null ? 'Edit Dealer' : 'Add New Dealer'}</Modal.Header>
        <Modal.Body>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name" value="Name" />
              <TextInput
                id="name"
                type="text"
                value={newDealer.name}
                onChange={(e) => setNewDealer({ ...newDealer, name: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="location" value="Location" />
              <TextInput
                id="location"
                type="text"
                value={newDealer.location}
                onChange={(e) => setNewDealer({ ...newDealer, location: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="contact" value="Contact" />
              <TextInput
                id="contact"
                type="email"
                value={newDealer.contact}
                onChange={(e) => setNewDealer({ ...newDealer, contact: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="phone" value="Phone" />
              <TextInput
                id="phone"
                type="text"
                value={newDealer.phone}
                onChange={(e) => setNewDealer({ ...newDealer, phone: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="brands" value="Brands" />
              <TextInput
                id="brands"
                type="text"
                value={newDealer.brands.join(', ')}
                onChange={(e) => setNewDealer({ ...newDealer, brands: e.target.value.split(', ') })}
                required
              />
            </div>
            <div>
              <Label htmlFor="status" value="Status" />
              <ToggleSwitch
                id="status"
                checked={newDealer.status === 'active'}
                label="Active"
                onChange={() => setNewDealer({ ...newDealer, status: newDealer.status === 'active' ? 'inactive' : 'active' })}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleAddDealer}>{editDealerId !== null ? 'Update Dealer' : 'Add Dealer'}</Button>
          <Button color="gray" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DealerManagement;