'use client';

import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

interface Jam {
  id: number;
  name: string;
  organizer: string;
  genre: string;
  location: string;
  date: Date;
  instruments: string;
  experience: 'novice' | 'beginner' | 'intermediate' | 'professional';
  description: string;
}

const FeedList: React.FC = () => {
  const [jams, setJams] = useState<Jam[]>([]);

  // Mock data
  useEffect(() => {
    const mockJams: Jam[] = [
      {
        id: 1,
        name: 'Mayjah Rayjah',
        organizer: 'user1@example.com',
        genre: 'Reggae',
        location: 'Honolulu Community Center',
        date: new Date('2024-11-20T18:00:00'),
        instruments: 'Guitar, Bass, Drums',
        experience: 'intermediate',
        description: 'Practicing some classic Reggae tunes.',
      },
      {
        id: 2,
        name: 'I Love Blink-182',
        organizer: 'user2@example.com',
        genre: 'Punk Rock',
        location: 'Warehouse',
        date: new Date('2024-11-25T20:00:00'),
        instruments: 'Vocals, Guitar',
        experience: 'beginner',
        description: 'Looking for any musicians to try out some punk rock 2000s focused music.',
      },
      {
        id: 3,
        name: 'Rave Night',
        organizer: 'user3@example.com',
        genre: 'Electronic',
        location: 'Republik',
        date: new Date('2024-12-01T19:00:00'),
        instruments: 'Ableton/CDJs',
        experience: 'intermediate',
        description: 'Need a DJ for this date. Experience with house and EDM djing required.',
      },
    ];

    // Sort jams by date (soonest first)
    const sortedJams = mockJams.sort((a, b) => a.date.getTime() - b.date.getTime());

    setJams(sortedJams);
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Upcoming Jams</h2>
      <Row>
        {jams.map((jam) => (
          <Col xs={12} key={jam.id} className="mb-4">
            <Card className="flex-row">
              {/* Left Section: Metadata */}
              <Card.Body className="d-flex flex-column align-items-start" style={{ maxWidth: '200px' }}>
                <strong>
                  {jam.name}
                  {' '}
                </strong>
                <small className="text-muted">
                  Date:
                  {jam.date.toLocaleDateString()}
                </small>
                <Badge bg="info" className="mt-2">
                  {jam.experience.charAt(0).toUpperCase() + jam.experience.slice(1)}
                </Badge>
              </Card.Body>

              {/* Right Section: Content */}
              <Card.Body>
                <Card.Text>
                  <strong>Location:</strong>
                  {' '}
                  {jam.location}
                  <br />
                  <strong>Instruments:</strong>
                  {' '}
                  {jam.instruments}
                  <br />
                  <strong>Genre:</strong>
                  {' '}
                  {jam.genre}
                  <br />
                  {jam.description}
                </Card.Text>
                <small className="text-muted">
                  Organized by
                  {jam.organizer}
                </small>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeedList;
