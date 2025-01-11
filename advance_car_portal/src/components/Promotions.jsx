import React, { useState } from 'react';

const promotions = [
  { id: 1, title: "Summer Sale", description: "Get 20% off on all rentals!", location: "New York", dealer: "Dealer A" },
  { id: 2, title: "Winter Discount", description: "Save $100 on your next booking!", location: "Los Angeles", dealer: "Dealer B" },
  // Add more promotions as needed
];

const Promotions = ({ onClose }) => {
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(null);
  const [loyaltyPoints, setLoyaltyPoints] = useState(100); // Example initial points

  const applyCoupon = () => {
    // Mock coupon validation
    if (couponCode === 'SUMMER20') {
      setDiscount('20% off');
    } else if (couponCode === 'WINTER100') {
      setDiscount('$100 off');
    } else {
      setDiscount('Invalid coupon code');
    }
  };

  return (
    <div className="fixed top-0 inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Promotions & Discounts</h2>
        <ul className="space-y-4">
          {promotions.map((promo) => (
            <li key={promo.id} className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold">{promo.title}</h3>
              <p>{promo.description}</p>
              <p className="text-sm text-gray-600">Location: {promo.location}</p>
              <p className="text-sm text-gray-600">Dealer: {promo.dealer}</p>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Apply Coupon Code</h3>
          <input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="w-full p-2 border rounded-lg mb-2"
            placeholder="Enter coupon code"
          />
          <button
            onClick={applyCoupon}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Apply
          </button>
          {discount && <p className="mt-2 text-green-500">{discount}</p>}
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Loyalty Program</h3>
          <p>You have <span className="font-bold">{loyaltyPoints}</span> loyalty points.</p>
          <p>Earn points for each booking and redeem them for discounts!</p>
        </div>
      </div>
    </div>
  );
};

export default Promotions;