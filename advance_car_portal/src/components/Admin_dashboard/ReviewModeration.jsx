import React, { useEffect, useState } from 'react';
import { Table, Button } from 'flowbite-react';

const ReviewModeration = () => {
  const [reviews, setReviews] = useState([
    {
      id: '',
      title: '',
      rating: 0,
      content: '',
      approved: false
    }
  ]);

//   useEffect(() => {
//     // Fetch reviews from the server
//     const fetchReviews = async () => {
//       try {
//         const response = await fetch('/api/reviews');
//         const data = await response.json();
//         setReviews(data);
//       } catch (error) {
//         console.error('Error fetching reviews:', error);
//       }
//     };

//     fetchReviews();
//   }, []);

  const approveReview = async (reviewId) => {
    try {
      await fetch(`/api/reviews/${reviewId}/approve`, { method: 'POST' });
      setReviews(reviews.map(review => review.id === reviewId ? { ...review, approved: true } : review));
    } catch (error) {
      console.error('Error approving review:', error);
    }
  };

  const deleteReview = async (reviewId) => {
    try {
      await fetch(`/api/reviews/${reviewId}`, { method: 'DELETE' });
      setReviews(reviews.filter(review => review.id !== reviewId));
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Review Moderation</h2>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Title</Table.HeadCell>
          <Table.HeadCell>Rating</Table.HeadCell>
          <Table.HeadCell>Content</Table.HeadCell>
          <Table.HeadCell>Actions</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {reviews.map(review => (
            <Table.Row key={review.id} className="bg-white">
              <Table.Cell>{review.title}</Table.Cell>
              <Table.Cell>{review.rating}</Table.Cell>
              <Table.Cell>{review.content}</Table.Cell>
              <Table.Cell>
                {!review.approved && (
                  <Button color="success" onClick={() => approveReview(review.id)} className="mr-2">
                    Approve
                  </Button>
                )}
                <Button color="failure" onClick={() => deleteReview(review.id)}>
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ReviewModeration;