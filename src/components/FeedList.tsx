'use client';

import { Card, Badge, Row, Col } from 'react-bootstrap';
import { JamInformation } from '@prisma/client';

const FeedList = ({ Jam }: { Jam: JamInformation }) => (
  <Card className="mb-3 shadow-sm">
    <Card.Body>
      {/* Left Section: Metadata */}
      <Row className="g-2">
        <Col xs={12} sm={4} md={3} className="pe-md-2">
          <strong>{Jam.jamName}</strong>
          <small className="text-muted d-block mb-1">
            Date: {new Date(Jam.date).toLocaleDateString()}
          </small>
          <Badge bg="info" className="mt-1">
            {Jam.experience.charAt(0).toUpperCase() + Jam.experience.slice(1)}
          </Badge>
        </Col>

        {/* Right Section: Content */}
        <Col xs={12} sm={6} md={8} className="ps-md-2">
          <Card.Text>
            <strong>Location:</strong> {Jam.location}
            <br />
            <strong>Instruments:</strong> {Jam.instruments}
            <br />
            <strong>Genre:</strong> {Jam.genre}
            <br />
            {Jam.description}
          </Card.Text>
          <small className="text-muted d-block">
            Organized by {Jam.organizer}
          </small>
        </Col>
      </Row>
    </Card.Body>
  </Card>
);

export default FeedList;
