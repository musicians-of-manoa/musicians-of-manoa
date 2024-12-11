'use client'; // Ensure this is a Client Component

import { JamInformation } from '@prisma/client';
import swal from 'sweetalert';
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

    // Show success message
    swal('Removed', 'You have successfully removed a Jam!', 'success', {
        timer: 2000,
      });
  };

  return (
    <Card
      className="d-flex flex-column"
      style={{
        height: '100%',
        padding: '20px',
        borderRadius: '15px', // Add border radius for smooth corners
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Light shadow for card depth
      }}
    >
      <Card.Title className="mb-3">
        <strong>{Jam.jamName}</strong>
      </Card.Title>
      <Card.Text className="mb-4">{Jam.description}</Card.Text>
      <Card.Body className="d-flex flex-column" style={{ flexGrow: 1 }}>
        <ListGroup className="list-group-flush">
          <ListGroup.Item className="px-0">
            <strong>Organizer:&nbsp;</strong>
            {Jam.organizer}
          </ListGroup.Item>
          <ListGroup.Item className="px-0">
            <strong>Date & Time:&nbsp;</strong>
            {new Date(Jam.date).toLocaleString()}
          </ListGroup.Item>
          <ListGroup.Item className="px-0">
            <strong>Location:&nbsp;</strong>
            {Jam.location}
          </ListGroup.Item>
          <ListGroup.Item className="px-0">
            <strong>Genre:&nbsp;</strong>
            {Jam.genre}
          </ListGroup.Item>
          <ListGroup.Item className="px-0">
            <strong>Instruments:&nbsp;</strong>
            {Jam.instruments}
          </ListGroup.Item>
          <ListGroup.Item className="px-0">
            <strong>Experience:&nbsp;</strong>
            {Jam.experience}
          </ListGroup.Item>
        </ListGroup>
        <Button
          className="mt-3"
          variant="danger"
          style={{
            borderRadius: '50px',
            border: '0',
            color: 'white',
            textAlign: 'center',
            width: '100%',
            maxWidth: '150px',
            padding: '10px',
            margin: 'auto', // Center the button
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
