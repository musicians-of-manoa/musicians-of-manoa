'use client';

// import React, { useEffect, useState } from 'react';
import { Card, Badge } from 'react-bootstrap';
import { JamInformation } from '@prisma/client';

/**
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
  }, []); */

const FeedList = ({ Jam }: { Jam: JamInformation }) => (
  <Card className="flex-row">
    {/* Left Section: Metadata */}
    <Card.Body className="d-flex flex-column align-items-start" style={{ maxWidth: '200px' }}>
      <strong>
        {Jam.jamName}
        {' '}
      </strong>
      <small className="text-muted">
        Date:&nbsp;
        {Jam.date.toLocaleDateString()}
      </small>
      <Badge bg="info" className="mt-2">
        {Jam.experience.charAt(0).toUpperCase() + Jam.experience.slice(1)}
      </Badge>
    </Card.Body>

    {/* Right Section: Content */}
    <Card.Body>
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
        Organized by&nbsp;
        {Jam.organizer}
      </small>
    </Card.Body>
  </Card>
);

export default FeedList;
