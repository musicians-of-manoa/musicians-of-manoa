import React from 'react';
import ReactStars from 'react-rating-stars-component';

interface RatingStarsProps {
  value: number; // the value of the current rating
  size: number; // size of the stars
  isHalf: boolean; // whether or not to allow half stars
}

const RatingStars: React.FC<RatingStarsProps> = ({
  value,
  size = 24,
  isHalf = true,
}) => (
  <div className="rating-stars-wrapper">
    <ReactStars
      count={5}
      size={size}
      activeColor="#ffd700"
      value={value}
      isHalf={isHalf}
      edit={false} // Don't allow editing
    />
  </div>
);

export default RatingStars;
