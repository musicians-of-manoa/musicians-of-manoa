'use client';

import React from 'react';
import { Container, Card } from 'react-bootstrap';
import RatingStars from '@/components/RatingStars'; // import the RatingStars component. Dahyun

const Profile: React.FC = () => (
  <Container>
    <Card
      style={{ backgroundColor: '#ECDFCC', height: '100%' }}
      className="hover-card d-flex flex-column justify-content-between"
    >
      <Card.Img
        variant="top"
        src="/images/jams-search-photo.jpg"
        style={{
          height: '200px',
          objectFit: 'cover',
        }}
      />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title>
            <strong>PROFILE NAME</strong>
          </Card.Title>
          <p>
            <strong>Username | Instruments & Experience Level</strong>
          </p>
          <p>
            <strong>Musical Goals</strong>
          </p>
          <p>
            <strong>Musical Tastes</strong>
          </p>
          <hr />
        </div>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Card.Text>
        {/* Add the RatingStars component here. Dahyun */}
        <strong>Reviews:</strong>
        <div className="d-flex justify-content-center mb-2">
          <RatingStars value={3.5} size={24} isHalf />
        </div>
      </Card.Body>
    </Card>
  </Container>
);

export default Profile;