'use client';

import React, { useState } from 'react';
import { Container, Card, Button, Row, Col, Form } from 'react-bootstrap';
import RatingStars from '@/components/RatingStars';
import ReactStars from 'react-rating-stars-component';

const PersonalProfile: React.FC = () => {
  // Hardcoded profile data for demonstration purposes
  const personalProfile = {
    name: 'PROFILE NAME',
    username: 'Username',
    instruments: 'Instruments & Experience Level',
    musicalGoals: 'Musical Goals',
    musicalTastes: 'Musical Tastes',
    description: 'Personal Profile Description.',
    rating: 3.5, // Average star rating
    totalReviews: 2, // Total number of reviews
    jams: [
      { jamName: 'Jam Session 1', date: '2024-12-31' },
      { jamName: 'Jam Session 2', date: '2024-12-31' },
    ],
    reviews: [
      {
        id: 1,
        rating: 4,
        comment: 'Amazing musician and great to work with!',
        userId: 1,
      },
      {
        id: 2,
        rating: 3,
        comment: 'Very talented, but could improve time management.',
        userId: 2,
      },
    ],
  };

  // State variables for handling the review submission
  const [rating, setRating] = useState(0); // User's rating input
  const [comment, setComment] = useState(''); // User's comment input

  // Handles the review submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted Rating:', rating);
    console.log('Submitted Comment:', comment);
    // Add submission logic here, such as sending data to the server
  };

  return (
    <Container style={{ padding: '20px', maxWidth: '900px' }}>
      {/* Profile Information Section */}
      <Card style={{ backgroundColor: '#ECDFCC' }}>
        <Card.Body>
          <Row>
            {/* User's Profile Picture */}
            <Col md={4}>
              <Card.Img
                src="/neutral_profile_icon.png"
                alt="Profile Image"
                style={{
                  height: '200px',
                  width: '80%',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  marginTop: '15px',
                  marginLeft: '15px',
                }}
              />
            </Col>

            {/* User's Basic Information */}
            <Col md={8}>
              <Card.Title>{personalProfile.name}</Card.Title>
              <p>
                <strong>Username: </strong>
                {personalProfile.username}
              </p>
              <p>
                <strong>Instruments & Experience: </strong>
                {personalProfile.instruments}
              </p>
              <p>
                <strong>Musical Goals: </strong>
                {personalProfile.musicalGoals}
              </p>
              <p>
                <strong>Musical Tastes: </strong>
                {personalProfile.musicalTastes}
              </p>
              <p>
                <strong>Description: </strong>
                {personalProfile.description}
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Overall Rating and Recent Reviews Section */}
      <Card className="mt-4" style={{ backgroundColor: '#F5F5F5' }}>
        <Card.Body>
          <Row>
            {/* Overall Rating */}
            <Col md={4}>
              <Card
                style={{ backgroundColor: '#F5F5F5', marginBottom: '20px' }}
              >
                <Card.Body>
                  <Card.Title>Overall Rating</Card.Title>
                  {/* Star Rating Display */}
                  <RatingStars
                    value={personalProfile.rating}
                    size={24}
                    isHalf
                  />
                  <p
                    style={{
                      marginTop: '10px',
                      fontSize: '14px',
                      color: '#555',
                    }}
                  >
                    <strong>Total Reviews: </strong>
                    {personalProfile.totalReviews}
                    {personalProfile.totalReviews === 1
                      ? ' review'
                      : ' reviews'}
                  </p>
                </Card.Body>
              </Card>
            </Col>

            {/* Recent Reviews */}
            <Col md={8}>
              <Card style={{ backgroundColor: '#F5F5F5' }}>
                <Card.Body>
                  <Card.Title>Recent Reviews</Card.Title>
                  {/* Loop through and display each review */}
                  {personalProfile.reviews.map((review) => (
                    <div
                      key={review.id}
                      style={{
                        borderBottom: '1px solid #ccc',
                        paddingBottom: '10px',
                        marginBottom: '10px',
                      }}
                    >
                      <p>{review.comment}</p>
                      <RatingStars value={review.rating} size={20} isHalf />
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Leave a Review Section */}
      <Card className="mt-4" style={{ backgroundColor: '#F5F5F5' }}>
        <Card.Body>
          <Card.Title>Leave a Review</Card.Title>
          {/* Review Form */}
          <Form onSubmit={handleSubmit}>
            <ReactStars
              count={5}
              size={24}
              value={rating}
              isHalf
              edit
              onChange={(newRating: number) => setRating(newRating)} // Update rating state
            />
            <Form.Control
              as="textarea"
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)} // Update comment state
              className="mt-3"
              placeholder="Write your comment here..."
            />
            <Button type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PersonalProfile;
