'use client';

import { JamInformation } from '@prisma/client';
import { Button, Card, ListGroup } from 'react-bootstrap';

/* Renders a single Jam Info Card. See /search/jam-search/page.tsx. */
const JamInfoCard = ({ Jam }: { Jam: JamInformation }) => (
  <Card className="d-flex flex-column" style={{ height: '100%' }}>
    <Card.Img
      variant="top"
      src={Jam.image}
      style={{
        height: '200px',
        objectFit: 'cover',
      }}
    />
    <Card.Header style={{ backgroundColor: '#ECDFCC', paddingTop: '20px', paddingBottom: '20px', paddingLeft: '30px' }}>
      <Card.Title><strong>{Jam.jamName}</strong></Card.Title>
      <Card.Text>{Jam.description}</Card.Text>
    </Card.Header>
    <Card.Body className="d-flex flex-column" style={{ flexGrow: 1 }}>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <strong>Organizer:&nbsp;</strong>
          {Jam.organizer}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Date & Time:&nbsp;</strong>
          {new Date(Jam.date).toLocaleString()}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Location:&nbsp;</strong>
          {Jam.location}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Genre:&nbsp;</strong>
          {Jam.genre}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Instruments:&nbsp;</strong>
          {Jam.instruments}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Experience:&nbsp;</strong>
          {Jam.experience}
        </ListGroup.Item>
      </ListGroup>
    </Card.Body>
    <Card.Footer style={{ backgroundColor: '#ECDFCC' }}>
      <Button variant="dark" className="w-100">Attend Jam</Button>
    </Card.Footer>
  </Card>
);

export default JamInfoCard;
