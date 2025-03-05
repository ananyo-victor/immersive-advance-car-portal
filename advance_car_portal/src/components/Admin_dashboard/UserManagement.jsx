import React, { useState } from 'react';
import { Button, Modal, TextInput, Label, Accordion, ToggleSwitch } from 'flowbite-react';

const UserManagement = ({ users }) => {
  const [userList, setUserList] = useState(users);
  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '', role: '', status: 'active' });
  const [editUserId, setEditUserId] = useState(null);

  const handleAddUser = () => {
    if (editUserId !== null) {
      setUserList(userList.map(user => (user.id === editUserId ? { ...newUser, id: editUserId } : user)));
      setEditUserId(null);
    } else {
      setUserList([...userList, { ...newUser, id: userList.length + 1 }]);
    }
    setShowModal(false);
    setNewUser({ name: '', email: '', role: '', status: 'active' });
  };

  const handleEditUser = (user) => {
    setNewUser({ name: user.name, email: user.email, role: user.role, status: user.status });
    setEditUserId(user.id);
    setShowModal(true);
  };

  const handleDeleteUser = (userId) => {
    setUserList(userList.filter(user => user.id !== userId));
  };

  const handleToggleStatus = (userId) => {
    setUserList(userList.map(user => (user.id === userId ? { ...user, status: user.status === 'active' ? 'inactive' : 'active' } : user)));
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl md:text-2xl font-bold mb-4">User Management</h2>
      <Accordion className="mt-4">
        {userList.map(user => (
          <Accordion.Panel key={user.id}>
            <Accordion.Title>
              {user.name} - {user.email}
            </Accordion.Title>
            <Accordion.Content>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Role:</strong> {user.role}</p>
              <p><strong>Status:</strong> {user.status}</p>
              <ToggleSwitch
                checked={user.status === 'active'}
                label="Active"
                onChange={() => handleToggleStatus(user.id)}
              />
              <div className="flex space-x-2 mt-4">
                <Button color="info" onClick={() => handleEditUser(user)}>
                  Edit
                </Button>
                <Button color="failure" onClick={() => handleDeleteUser(user.id)}>
                  Delete
                </Button>
              </div>
            </Accordion.Content>
          </Accordion.Panel>
        ))}
      </Accordion>
      <Button color="success" className="mt-4" onClick={() => setShowModal(true)}>
        Add User
      </Button>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>{editUserId !== null ? 'Edit User' : 'Add New User'}</Modal.Header>
        <Modal.Body>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name" value="Name" />
              <TextInput
                id="name"
                type="text"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="email" value="Email" />
              <TextInput
                id="email"
                type="email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="role" value="Role" />
              <TextInput
                id="role"
                type="text"
                value={newUser.role}
                onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="status" value="Status" />
              <ToggleSwitch
                id="status"
                checked={newUser.status === 'active'}
                label="Active"
                onChange={() => setNewUser({ ...newUser, status: newUser.status === 'active' ? 'inactive' : 'active' })}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleAddUser}>{editUserId !== null ? 'Update User' : 'Add User'}</Button>
          <Button color="gray" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserManagement;