import React, { useEffect, useState } from 'react';
import { Table } from 'flowbite-react';

const SalesReports = () => {
  const [salesReports, setSalesReports] = useState([
    {
      date: '',
      bookings: '',
      revenue: ''
    }
  ]);

//   useEffect(() => {
//     // Fetch sales reports from the server
//     const fetchSalesReports = async () => {
//       try {
//         const response = await fetch('/api/sales-reports');
//         const data = await response.json();
//         setSalesReports(data);
//       } catch (error) {
//         console.error('Error fetching sales reports:', error);
//       }
//     };

//     fetchSalesReports();
//   }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Sales Reports</h2>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Bookings</Table.HeadCell>
          <Table.HeadCell>Revenue</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {salesReports.map((report) => (
            <Table.Row key={report.date} className="bg-white">
              <Table.Cell>{report.date}</Table.Cell>
              <Table.Cell>{report.bookings}</Table.Cell>
              <Table.Cell>{report.revenue}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default SalesReports;