'use client';

import { useSession } from 'next-auth/react';
import { Form, Button, Card, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import swal from 'sweetalert';
import { redirect } from 'next/navigation';
import { addReview } from '@/lib/dbActions';
import LoadingSpinner from '@/components/LoadingSpinner';
import { AddReviewSchema } from '@/lib/validationSchemas';
// import ReactStars from 'react-rating-stars-component';
import { User } from '@prisma/client';
import React from 'react';

const onSubmit = async (data: {
  rating: number;
  comment: string;
  userId: number;
}) => {
  await addReview(data);
  swal('Success', 'Your review has been added.', 'success', {
    timer: 2000,
  });
};

const AddReviewForm = ({ user }: { user: User }) => {
  const { status } = useSession();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddReviewSchema),
  });
  if (status === 'loading') {
    return <LoadingSpinner />;
  }
  if (status === 'unauthenticated') {
    redirect('/auth/signin');
  }

  return (
    <Card>
      <Card.Header>Add Review</Card.Header>
      <Card.Body>
        <Form
          onSubmit={handleSubmit((data) =>
            onSubmit({ ...data, userId: user.id }),
          )}
        >
          {/* Rating Stars */}
          {/*
          <Form.Group>
            <Form.Label>Rating</Form.Label>
            <ReactStars
              count={5}
              value={rating}
              onChange={(newRating) => setRating(newRating)}
              size={24}
              activeColor="#ffd700"
            />
          </Form.Group> */}

          {/* Description Input */}
          <Form.Group className="mt-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              {...register('comment')}
              isInvalid={!!errors.comment}
            />
            <Form.Control.Feedback type="invalid">
              {errors.comment?.message}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Submit Button */}
          <Row className="pt-3">
            <Col>
              <Button type="submit" className="mt-3">
                Submit
              </Button>
            </Col>
            <Col>
              {/* Reset Button */}
              <Button
                type="button"
                className="mt-3 ml-3"
                onClick={() => reset()}
              >
                Reset
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddReviewForm;
