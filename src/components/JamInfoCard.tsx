'use client';

import { JamInformation } from '@prisma/client';
import { Button, Card, ListGroup } from 'react-bootstrap';

/* Renders a single Jam Info Card. See /search/jam-search/page.tsx. */
const JamInfoCard = ({ Jam }: { Jam: JamInformation }) => (
  <Card>
    <Card.Img
      variant="top"
      src={Jam.image}
      style={{
        height: '200px',
        objectFit: 'cover',
      }}
    />
    <Card.Body className="d-flex flex-column justify-content-between">
      <Card.Title><strong>{Jam.jamName}</strong></Card.Title>
      <Card.Text>{Jam.description}</Card.Text>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{new Date(Jam.date).toLocaleString()}</ListGroup.Item>
        <ListGroup.Item>{Jam.location}</ListGroup.Item>
        <ListGroup.Item>{Jam.genre}</ListGroup.Item>
        <ListGroup.Item>{Jam.instruments}</ListGroup.Item>
        <ListGroup.Item>{Jam.experience}</ListGroup.Item>
      </ListGroup>
      <Button variant="primary">Attend Jam</Button>
    </Card.Body>
  </Card>
);

export default JamInfoCard;
