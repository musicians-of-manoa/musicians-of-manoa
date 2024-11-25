declare module 'react-rating-stars-component' {
  import React from 'react';

  interface ReactStarsProps {
    count?: number; // Number of stars
    value?: number; // Current rating value
    onChange?: (newRating: number) => void; // Function to handle rating changes
    size?: number; // Size of stars
    isHalf?: boolean; // Allow half-star ratings
    edit?: boolean; // Allow editing (true/false)
    activeColor?: string; // Active star color
    color?: string; // Inactive star color
  }

  const ReactStars: React.FC<ReactStarsProps>;
  export default ReactStars;
}
