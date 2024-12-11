'use client'; // Ensure this is a Client Component

import { JamInformation } from '@prisma/client';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

const AttendedJamCard = ({ Jam }: { Jam: JamInformation }) => {
  const [isLoadingRemove, setIsLoadingRemove] = useState<boolean>(false);

  const handleRemove = async () => {
    setIsLoadingRemove(true);
    try {
      const response = await axios.delete('/api/remove-jam', {
        data: { jamId: Jam.id },
      });
      if (response.status === 200) {
        console.log('Jam removed successfully!');
        window.location.reload();
      } else {
        console.log('Failed to remove jam:', response);
      }
    } catch (error) {
      console.error('Error removing jam:', error);
      setIsLoadingRemove(false);
    } finally {
      setIsLoadingRemove(false);
    }

  };

  return (
    <Card className="d-flex flex-column" style={{ height: '100%', backgroundColor: '#ECDFCC',
      paddingTop: '20px',
      paddingBottom: '20px',
      paddingLeft: '30px', }}>
      <Card.Title><strong>{Jam.jamName}</strong></Card.Title>
      <Card.Text>{Jam.description}</Card.Text>
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
        <Button
          className="remove-button"
          variant="danger"
          style={{
            borderRadius: '50px',
            border: '0',
            color: 'white',
            textAlign: 'center',
            width: '100%',
            maxWidth: '150px',
            height: 'auto',
            padding: '10px',
            marginLeft: '1rem',
          }}
          onClick={handleRemove}
          disabled={isLoadingRemove}
        >
          {isLoadingRemove ? 'Removing...' : 'Remove'}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default AttendedJamCard;
