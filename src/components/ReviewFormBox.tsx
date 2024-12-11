import React, { useState } from 'react';

interface ReviewFormProps {
  onSubmit: (review: { rating: number; comment: string }) => void;
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    maxWidth: '400px',
    margin: 'auto',
    backgroundColor: '#f9f9f9',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  ratingContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
  },
  textarea: {
    width: '100%',
    height: '80px',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

const ReviewCreateForm: React.FC<ReviewFormProps> = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleStarClick = (star: number) => {
    setRating(star);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      alert('Please select a rating before submitting.');
      return;
    }
    onSubmit({ rating, comment });
    setRating(0);
    setComment('');
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.ratingContainer}>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              role="button"
              tabIndex={0}
              onClick={() => handleStarClick(star)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleStarClick(star);
              }}
              style={{
                cursor: 'pointer',
                fontSize: '1.5rem',
                color: star <= rating ? '#FFD700' : '#E0E0E0',
              }}
            >
              ★
            </span>
          ))}
        </div>

        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your review here..."
          style={styles.textarea}
        />

        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReviewCreateForm;
