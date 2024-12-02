import { Container } from 'react-bootstrap';
import ReviewPage from '@/components/ReviewPage';

/** Render a Review Search page. */
const Review = async () => (
  <main>
    <Container id="review" className="d-flex justify-content-center py-3">
      <ReviewPage />
    </Container>
  </main>
);

export default Review;
