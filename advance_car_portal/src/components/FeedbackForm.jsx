import React, { useState } from 'react';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('');
  const [feedback, setFeedback] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const feedbackDetails = {
      name,
      email,
      rating,
      feedback,
    };

    try {
      // Mock API call to save feedback details
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackDetails),
      });

      if (response.ok) {
        setMessage('Feedback submitted successfully!');
        setName('');
        setEmail('');
        setRating('');
        setFeedback('');
      } else {
        setMessage('Failed to submit feedback. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-center text-white">Submit Feedback</h2>
      <p className="text-center text-white mb-6">We value your feedback!</p>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-blue-600 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-blue-600 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-blue-600 text-sm font-bold mb-2" htmlFor="rating">
            Rating
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          >
            <option value="">Select Rating</option>
            <option value="1">1 - Very Poor</option>
            <option value="2">2 - Poor</option>
            <option value="3">3 - Average</option>
            <option value="4">4 - Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-blue-600 text-sm font-bold mb-2" htmlFor="feedback">
            Feedback
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Your Feedback"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      {message && (
        <div className="mt-4 text-center">
          <p className={`text-sm ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
            {message}
          </p>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;