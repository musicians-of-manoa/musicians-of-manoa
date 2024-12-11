'use client';

import { Card } from 'react-bootstrap';
import { ProfileWithReviews } from '@/types/types';

interface ProfileInfoCardProps {
  profile: ProfileWithReviews;
}

const DiscoverMusiciansInfoCard = ({ profile }: ProfileInfoCardProps) => (
  <Card
    style={{ backgroundColor: '#ECDFCC', height: '100%' }}
    className="hover-card d-flex flex-column justify-content-between"
  >
    <Card.Img
      variant="top"
      src={profile.image || '/public/images/search-profiles.jpg'}
      style={{
        height: '200px',
        objectFit: 'cover',
      }}
    />
    <Card.Body
      className="d-flex flex-column justify-content-between"
      style={{ padding: '10px' }}
    >
      <Card.Title style={{ marginBottom: '5px' }}>
        <strong>
          {profile.firstName}
          &nbsp;
          {profile.lastName}
        </strong>
      </Card.Title>
      <Card.Subtitle
        className="mb-2 text-muted"
        style={{ marginBottom: '5px' }}
      >
        @&nbsp;
        {profile.username}
      </Card.Subtitle>
      <Card.Text style={{ marginBottom: '5px' }}>
        <strong>Rating:</strong>
        &nbsp;
        {profile.rating ?? 'N/A'}
        <br />
        <strong>Goals:</strong>
        &nbsp;
        {profile.musicalGoals ?? 'N/A'}
        <br />
        <strong>Tastes:</strong>
        &nbsp;
        {profile.musicalTastes ?? 'N/A'}
        <br />
        <strong>Instruments:</strong>
        &nbsp;
        {profile.instruments ?? 'N/A'}
        <br />
        <strong>Experience:</strong>
        &nbsp;
        {profile.experience}
      </Card.Text>
      <hr style={{ margin: '5px 0' }} />
      <Card.Text style={{ marginBottom: '5px' }}>
        <strong>Description:</strong>
        <br />
        {profile.description ?? 'No description provided.'}
      </Card.Text>
      <hr style={{ margin: '5px 0' }} />
      <div>
        <strong>Reviews:</strong>
        {profile.reviews.length > 0 ? (
          [
            ...new Map(
              profile.reviews.map((review) => [review.comment, review]),
            ).values(),
          ].map((review) => (
            <div
              key={review.id}
              style={{
                borderBottom: '1px solid #ccc',
                marginBottom: '5px',
                paddingBottom: '5px',
              }}
            >
              <strong>Comment:</strong>
              &nbsp;
              {review.comment}
              <br />
              <strong>Rating:</strong>
              &nbsp;
              {review.rating}
              &nbsp;/ 5
              <br />
              <strong>Date:</strong>
              &nbsp;
              {new Date(review.createdAt).toLocaleDateString()}
            </div>
          ))
        ) : (
          <strong>No reviews yet.</strong>
        )}
      </div>
    </Card.Body>
  </Card>
);

export default DiscoverMusiciansInfoCard;
