import React, { useState } from 'react';
import UserManagement from './UserManagement';
import CarManagement from './CarManagement';
import BookingManagement from './BookingManagement';
import ReviewModeration from './ReviewModeration';
import UserAnalytics from './UserAnalytics';
import SalesReports from './SalesReports';
import DealerManagement from './DealerManagement';
import { Tabs } from 'flowbite-react';
import {
  feedbacksData,
  usersData,
  carsData,
  bookingsData,
  reviewsData,
  analyticsData,
  salesReportsData,
  dealersData,
} from '../../data/adminData';

function AdminDashboard() {
  const [feedbacks, setFeedbacks] = useState(feedbacksData);
  const [users, setUsers] = useState(usersData);
  const [cars, setCars] = useState(carsData);
  const [bookings, setBookings] = useState(bookingsData);
  const [reviews, setReviews] = useState(reviewsData);
  const [analytics, setAnalytics] = useState(analyticsData);
  const [salesReports, setSalesReports] = useState(salesReportsData);
  const [dealers, setDealers] = useState(dealersData);

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 text-center">Admin Dashboard</h1>
      <Tabs aria-label="Admin Dashboard Tabs">
        <Tabs.Item active title="User Management">
          <UserManagement users={users} />
        </Tabs.Item>
        <Tabs.Item title="Car Management">
          <CarManagement cars={cars} />
        </Tabs.Item>
        <Tabs.Item title="Booking Management">
          <BookingManagement bookings={bookings} />
        </Tabs.Item>
        <Tabs.Item title="Review Moderation">
          <ReviewModeration reviews={reviews} setReviews={setReviews} />
        </Tabs.Item>
        <Tabs.Item title="User Analytics">
          <UserAnalytics analytics={analytics} />
        </Tabs.Item>
        <Tabs.Item title="Sales Reports">
          <SalesReports salesReports={salesReports} />
        </Tabs.Item>
        <Tabs.Item title="Dealer Management">
          <DealerManagement dealers={dealers} />
        </Tabs.Item>
      </Tabs>
    </div>
  );
}

export default AdminDashboard;