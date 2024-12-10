'use client';

import { Card, Badge } from 'react-bootstrap';
import { JamInformation } from '@prisma/client';

const FeedList = ({ Jam }: { Jam: JamInformation }) => (
  <Card className="flex-row mb-3">
    {/* Left Section: Metadata */}
    <Card.Body className="d-flex flex-column align-items-start" style={{ maxWidth: '170px' }}>
      <strong>{Jam.jamName}</strong>
      <small className="text-muted">
        Date:
        {' '}
        {new Date(Jam.date).toLocaleDateString()}
      </small>
      <Badge bg="info" className="mt-2">
        {Jam.experience.charAt(0).toUpperCase() + Jam.experience.slice(1)}
      </Badge>
    </Card.Body>

    {/* Right Section: Content */}
    <Card.Body className="d-flex flex-column align-items-start" style={{ paddingLeft: '0px' }}>
      <Card.Text>
        <strong>Location:</strong>
        {' '}
        {Jam.location}
        <br />
        <strong>Instruments:</strong>
        {' '}
        {Jam.instruments}
        <br />
        <strong>Genre:</strong>
        {' '}
        {Jam.genre}
        <br />
        {Jam.description}
      </Card.Text>
      <small className="text-muted">
        Organized by
        {' '}
        {Jam.organizer}
      </small>
    </Card.Body>
  </Card>
);

export default FeedList;
