import React, { useEffect, useState } from 'react';
import UserManagement from './UserManagement';
import CarManagement from './CarManagement';
import BookingManagement from './BookingManagement';
import ReviewModeration from './ReviewModeration';
import UserAnalytics from './UserAnalytics';
import SalesReports from './SalesReports';
import { Tabs } from 'flowbite-react';

function AdminDashboard() {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: '',
      feedback: ''
    }
  ]);

  // useEffect(() => {
  //   // Fetch feedback from the server
  //   const fetchFeedbacks = async () => {
  //     try {
  //       const response = await fetch('/api/feedback');
  //       const data = await response.json();
  //       setFeedbacks(data);
  //     } catch (error) {
  //       console.error('Error fetching feedback:', error);
  //     }
  //   };

  //   fetchFeedbacks();
  // }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">Admin Dashboard</h1>
      <Tabs aria-label="Admin Dashboard Tabs">
        <Tabs.Item active title="User Management">
          <UserManagement />
        </Tabs.Item>
        <Tabs.Item title="Car Management">
          <CarManagement />
        </Tabs.Item>
        <Tabs.Item title="Booking Management">
          <BookingManagement />
        </Tabs.Item>
        <Tabs.Item title="Review Moderation">
          <ReviewModeration />
        </Tabs.Item>
        <Tabs.Item title="User Analytics">
          <UserAnalytics />
        </Tabs.Item>
        <Tabs.Item title="Sales Reports">
          <SalesReports />
        </Tabs.Item>
        <Tabs.Item title="User Feedback">
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4">User Feedback</h3>
            {feedbacks.length > 0 ? (
              <ul className="space-y-4">
                {feedbacks.map((feedback) => (
                  <li key={feedback.id} className="p-4 bg-white rounded-lg shadow-md">
                    <p>{feedback.feedback}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No feedback found.</p>
            )}
          </div>
        </Tabs.Item>
      </Tabs>
    </div>
  );
}

export default AdminDashboard;