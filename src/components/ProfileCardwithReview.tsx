'use client';

import { User, Review } from '@prisma/client';
import { Card, ListGroup } from 'react-bootstrap';
import ReviewItem from '@/components/ReviewItem';
import AddReviewForm from '@/components/AddReviewForm';

const ProfileCardwithReview = ({
  user,
  reviews,
}: {
  user: User;
  reviews: Review[];
}) => (
  <Card className="h-100">
    <Card.Header>
      {/** Profile Image */}
      <Card.Title>{user.email}</Card.Title>
    </Card.Header>
    <Card.Body>
      {/** Profile Info */}
      <Card.Text>{/** Profile Info. Somthing about Jam */}</Card.Text>
      <ListGroup variant="flush">
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </ListGroup>
      <AddReviewForm user={user} />
    </Card.Body>
    <Card.Footer />
  </Card>
);

export default ProfileCardwithReview;
