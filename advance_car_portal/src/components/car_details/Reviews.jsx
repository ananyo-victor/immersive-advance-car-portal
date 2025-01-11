import React, { useState, useEffect } from "react";
import { Rating } from "flowbite-react";
import { Accordion } from "flowbite-react";

const Reviews = ({ carId }) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ title: "", rating: 0, content: "" });

  useEffect(() => {
    // Fetch reviews from the server
    const fetchReviews = async () => {
      try {
        const response = await fetch(`/api/reviews?carId=${carId}`);
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [carId]);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...newReview, carId }),
      });
      const data = await response.json();
      setReviews([...reviews, data]);
      setNewReview({ title: "", rating: 0, content: "" });
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  // Sample reviews for demonstration
  const sampleReviews = [
    { id: 1, title: "Great Car!", rating: 5, content: "This car is amazing. It drives smoothly and is very comfortable." },
    { id: 2, title: "Good Value", rating: 4, content: "The car offers good value for the price. Highly recommended." },
    { id: 3, title: "Average Experience", rating: 3, content: "The car is okay, but I expected more features for the price." },
    { id: 4, title: "Not Satisfied", rating: 2, content: "The car has some issues with the engine. Not very satisfied." },
    { id: 5, title: "Terrible", rating: 1, content: "The car broke down after a week. Very disappointed." },
  ];

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full">
      <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-semibold">All Reviews</h4>
            </div>
          </Accordion.Title>
          <Accordion.Content>
            {sampleReviews.map((review) => (
              <div key={review.id} className="mb-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-semibold">{review.title}</h4>
                  <Rating>
                    {[...Array(5)].map((_, index) => (
                      <Rating.Star key={index} filled={index < review.rating} />
                    ))}
                  </Rating>
                </div>
                <p className="text-gray-600 mt-2">{review.content}</p>
              </div>
            ))}
          </Accordion.Content>
        </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title><h4 className="text-lg font-semibold mb-4">Write a Review</h4></Accordion.Title>
      <Accordion.Content>
      <form onSubmit={handleReviewSubmit} className="mt-6 bg-white p-4 rounded-lg shadow-inner">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={newReview.title}
            onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="rating">Rating</label>
          <Rating>
            {[...Array(5)].map((_, index) => (
              <Rating.Star
                key={index}
                filled={index < newReview.rating}
                onClick={() => setNewReview({ ...newReview, rating: index + 1 })}
                className="cursor-pointer"
              />
            ))}
          </Rating>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="content">Review</label>
          <textarea
            id="content"
            value={newReview.content}
            onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Submit Review
        </button>
      </form>
      </Accordion.Content>
      </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Reviews;
