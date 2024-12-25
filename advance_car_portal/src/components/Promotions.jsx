import React from 'react';

const promotions = [
  { id: 1, title: "Summer Sale", description: "Get 20% off on all rentals!", location: "New York", dealer: "Dealer A" },
  { id: 2, title: "Winter Discount", description: "Save $100 on your next booking!", location: "Los Angeles", dealer: "Dealer B" },
  // Add more promotions as needed
];

const Promotions = ({ onClose }) => {
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
            <li key={promo.id} className="p-2 border rounded-lg">
              <h3 className="text-lg font-semibold">{promo.title}</h3>
              <p>{promo.description}</p>
              <p className="text-sm text-gray-500">Location: {promo.location}</p>
              <p className="text-sm text-gray-500">Dealer: {promo.dealer}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Promotions;