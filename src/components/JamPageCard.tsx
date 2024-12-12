import { useRouter } from 'next/navigation';
import { Button, Card } from 'react-bootstrap';

const JamPageCard = ({ jam }: { jam: any }) => {
  const router = useRouter();

  const handleAttendJam = async () => {
    try {
      const response = await fetch('/api/jam/add-to-attended', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ jamId: jam.id, jamData: jam }),
      });

      if (response.ok) {
        router.push('/attended-jams');
      } else {
        console.error('Error adding jam to attended list');
      }
    } catch (error) {
      console.error('Failed to attend jam', error);
    }
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{jam.title}</Card.Title>
        <Card.Text>{jam.description}</Card.Text>
        <Button onClick={handleAttendJam}>Attend Jam</Button>
      </Card.Body>
    </Card>
  );
};

export default JamPageCard;
