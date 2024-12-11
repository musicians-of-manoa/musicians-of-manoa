'use client';

import React, { useState } from 'react';
import ReviewFormBox from '@/components/ReviewFormBox';

interface FeedbackAndFormProps {
  profileId: number;
}

const FeedbackAndForm: React.FC<FeedbackAndFormProps> = ({ profileId }) => {
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleReviewSubmit = async (review: {
    rating: number;
    comment: string;
  }) => {
    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...review, profileId }),
      });

      if (response.ok) {
        setFeedbackMessage('Review submitted successfully!');
      } else {
        setFeedbackMessage('Failed to submit the review.');
      }
    } catch (error) {
      setFeedbackMessage('An error occurred while submitting the review.');
    }
  };

  return (
    <div>
      {feedbackMessage && (
        <div
          style={{
            marginTop: '10px',
            padding: '10px',
            backgroundColor: '#d4edda',
            color: '#155724',
            border: '1px solid #c3e6cb',
            borderRadius: '4px',
          }}
        >
          {feedbackMessage}
        </div>
      )}
      <ReviewFormBox onSubmit={(review) => handleReviewSubmit(review)} />
    </div>
  );
};

export default FeedbackAndForm;
