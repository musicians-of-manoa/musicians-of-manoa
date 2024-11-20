/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import React from 'react';

interface Review {
  id: number;
  author: string;
  date: string;
  rating: number;
  content: string;
}

const reviews: Review[] = [
  {
    id: 1,
    author: 'Josh Pat',
    date: '2024-11-20',
    rating: 4,
    content: 'Great service, highly recommend!',
  },
  {
    id: 2,
    author: 'Suzan Gail',
    date: '2024-11-18',
    rating: 5,
    content: 'Amazing experience! Easy to use',
  },
  {
    id: 3,
    author: 'Arthur Harry',
    date: ' 2023-5-03',
    rating: 3,
    content: 'I got a bit lost while navigating but was able to use it still regardless',
  },
  {
    id: 4,
    author: 'Sir Tim',
    date: ' 2024-5-03',
    rating: 5,
    content: 'Super easy to use!!!!',
  },
];

const ReviewPage = () => {
  let currentSort = 'date';

  const getSortedReviews = (sortOption: string): Review[] => {
    const sortedReviews = [...reviews];
    if (sortOption === 'date') {
      sortedReviews.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      );
    } else if (sortOption === 'rating') {
      sortedReviews.sort((a, b) => b.rating - a.rating);
    }
    return sortedReviews;
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    currentSort = event.target.value;
    const sorted = getSortedReviews(currentSort);
    document.getElementById('reviews-list')!.innerHTML = sorted
      .map(
        (review) => `
        <div style="border: 1px solid #ccc; border-radius: 15px; padding: 15px; margin-bottom: 20px;">
          <div style="margin-bottom: 10px;"><strong>Rating:</strong> ${review.rating} / 5</div>
          <div style="margin-bottom: 10px;"><strong>Author:</strong> ${review.author}</div>
          <div style="margin-bottom: 10px;"><strong>Date:</strong> ${review.date}</div>
          <div><strong>Review:</strong> ${review.content}</div>
        </div>`,
      )
      .join('');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <h2 style={{ margin: 0, textAlign: 'left', flexGrow: 1 }}>Review Information</h2>
        <button
          type="button"
          style={{
            padding: '10px 15px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Add Review
        </button>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="sortOptions" style={{ marginRight: '10px' }}>
          Sort by:
        </label>
        <select id="sortOptions" onChange={handleSortChange}>
          <option value="date">Date</option>
          <option value="rating">Rating</option>
        </select>
      </div>
      <div id="reviews-list">
        {getSortedReviews(currentSort).map((review) => (
          <div
            key={review.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '5px',
              padding: '40px',
              marginBottom: '30px',
            }}
          >
            <div style={{ marginBottom: '10px' }}>
              <strong>Rating: </strong>
              {review.rating}
              / 5
            </div>
            <div style={{ marginBottom: '10px' }}>
              <strong>Author: </strong>
              {review.author}
            </div>
            <div style={{ marginBottom: '10px' }}>
              <strong>Date:</strong>
              {review.date}
            </div>
            <div>
              <strong>Review:</strong>
              {review.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;
