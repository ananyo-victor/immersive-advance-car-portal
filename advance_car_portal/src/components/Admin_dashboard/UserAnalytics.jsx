import React from 'react';
import { Table } from 'flowbite-react';

const UserAnalytics = ({ analytics }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl md:text-2xl font-bold mb-4">User Analytics</h2>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>User</Table.HeadCell>
            <Table.HeadCell>Page Views</Table.HeadCell>
            <Table.HeadCell>Bookings</Table.HeadCell>
            <Table.HeadCell>Last Active</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {analytics.map((analytic) => (
              <Table.Row key={analytic.userId} className="bg-white">
                <Table.Cell>{analytic.userName}</Table.Cell>
                <Table.Cell>{analytic.pageViews}</Table.Cell>
                <Table.Cell>{analytic.bookings}</Table.Cell>
                <Table.Cell>{analytic.lastActive}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default UserAnalytics;