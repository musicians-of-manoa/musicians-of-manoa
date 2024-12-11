import React from 'react';

interface Review {
  id: number;
  rating: number;
  comment: string;
  createdAt: string;
}

interface ReviewListProps {
  reviews: Review[];
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => (
  <div>
    <h3>Reviews</h3>
    {reviews.length === 0 ? (
      <p>No reviews yet.</p>
    ) : (
      <ul className="list-group">
        {reviews.map((review) => (
          <li key={review.id} className="list-group-item">
            <strong>Rating: </strong>
            {review.rating}
            /5
            <br />
            <strong>Comment: </strong>
            {review.comment}
            <br />
            <small>
              <strong>Date: </strong>
              {new Date(review.createdAt).toLocaleDateString()}
            </small>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default ReviewList;
