'use client';

import { Review } from '@prisma/client';
import { ListGroup } from 'react-bootstrap';

/* Renders a single Review Note. See ProfileInfoCard */
const ReviewItem = ({ review }: { review: Review }) => (
  <ListGroup.Item>
    <p>{review.rating}</p>
    <p>{review.comment}</p>
  </ListGroup.Item>
);

export default ReviewItem;
