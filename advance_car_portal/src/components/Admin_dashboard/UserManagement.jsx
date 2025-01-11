import React, { useEffect, useState } from 'react';
import { Table, Button } from 'flowbite-react';

const UserManagement = () => {
  const [users, setUsers] = useState([
    {
      id: '',
      name: '',
      email: ''
    }
  ]);

  // useEffect(() => {
  //   // Fetch users from the server
  //   const fetchUsers = async () => {
  //     try {
  //       const response = await fetch('/api/users');
  //       const data = await response.json();
  //       setUsers(data);
  //     } catch (error) {
  //       console.error('Error fetching users:', error);
  //     }
  //   };

  //   fetchUsers();
  // }, []);

  // const suspendUser = async (userId) => {
  //   try {
  //     await fetch(`/api/users/${userId}/suspend`, { method: 'POST' });
  //     setUsers(users.map(user => user.id === userId ? { ...user, suspended: true } : user));
  //   } catch (error) {
  //     console.error('Error suspending user:', error);
  //   }
  // };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Actions</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {users.map(user => (
            <Table.Row key={user.id} className="bg-white">
              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>
                {!user.suspended && (
                  // <Button color="failure" onClick={() => suspendUser(user.id)}>
                  <Button color="failure">
                    Suspend
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

export default UserManagement;