'use client';

import { Card } from 'react-bootstrap';
import { Profile } from '@prisma/client';

interface ProfileInfoCardProps {
  profile: Profile;
}

const ProfileInfoCard = ({ profile }: ProfileInfoCardProps) => (
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
    <Card.Body className="d-flex flex-column justify-content-between">
      <Card.Title>
        <strong>
          {profile.firstName}
          {' '}
          {profile.lastName}
        </strong>
      </Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        @
        {profile.username}
      </Card.Subtitle>
      <Card.Text>
        <strong>Rating:</strong>
        {' '}
        {profile.rating ?? 'N/A'}
        <br />
        <strong>Goals:</strong>
        {' '}
        {profile.musicalGoals ?? 'N/A'}
        <br />
        <strong>Tastes:</strong>
        {' '}
        {profile.musicalTastes ?? 'N/A'}
        <br />
        <strong>Instruments:</strong>
        {' '}
        {profile.instruments ?? 'N/A'}
        <br />
        <strong>Experience:</strong>
        {' '}
        {profile.experience}
      </Card.Text>
      <hr />
      {' '}
      {/* Horizontal line divider */}
      <Card.Text>
        <strong>Description:</strong>
        <br />
        {profile.description ?? 'No description provided.'}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default ProfileInfoCard;
