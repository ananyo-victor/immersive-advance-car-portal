import React, { useEffect, useState } from 'react';
import { Table } from 'flowbite-react';

const UserAnalytics = () => {
  const [userAnalytics, setUserAnalytics] = useState([
    {
      userId: '',
      userName: '',
      pageViews: '',
      bookings: '',
      lastActive: ''
    }
  ]);

//   useEffect(() => {
//     // Fetch user analytics from the server
//     const fetchUserAnalytics = async () => {
//       try {
//         const response = await fetch('/api/user-analytics');
//         const data = await response.json();
//         setUserAnalytics(data);
//       } catch (error) {
//         console.error('Error fetching user analytics:', error);
//       }
//     };

//     fetchUserAnalytics();
//   }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">User Analytics</h2>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>User</Table.HeadCell>
          <Table.HeadCell>Page Views</Table.HeadCell>
          <Table.HeadCell>Bookings</Table.HeadCell>
          <Table.HeadCell>Last Active</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {userAnalytics.map((analytics) => (
            <Table.Row key={analytics.userId} className="bg-white">
              <Table.Cell>{analytics.userName}</Table.Cell>
              <Table.Cell>{analytics.pageViews}</Table.Cell>
              <Table.Cell>{analytics.bookings}</Table.Cell>
              <Table.Cell>{analytics.lastActive}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default UserAnalytics;