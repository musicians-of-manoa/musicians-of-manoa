import { getServerSession } from 'next-auth';
import { Container, Row, Col } from 'react-bootstrap';
import { prisma } from '@/lib/prisma';
import AttendedJamCard from '@/components/AttendedJamCard';

const AttendedJamsPage = async () => {
  const session = await getServerSession();
  console.log('Session:', session); // Debug the session
  const userEmail = session?.user?.email;
  console.log('User Email:', userEmail); // Debug the user email

  if (!userEmail) {
    return <p>You must be logged in to view your attended jams.</p>;
  }

  // Fetch attended jams from the database (Server-side logic)
  let attendedJams: any[] = [];
  try {
    attendedJams = await prisma.attendedJam.findMany({
      where: {
        user: {
          email: userEmail, // Look for the user by email
        },
      },
      include: {
        jam: true, // Include jam data
      },
    });
    console.log('Attended Jams:', attendedJams); // Debug the fetched data
  } catch (error) {
    console.error('Error fetching attended jams:', error);
  }

  return (
    <main>
      <Container id="attended-jams-list">
        <Row className="mt-1 mb-2">
          <Col className="text-center">
            <h1 style={{color: 'white'}}>
              Your Attending Jams:
              {' '}
              {attendedJams.length > 0
                ? `${attendedJams.length} jam${attendedJams.length > 1 ? 's' : ''}`
                : 'No attended jams yet.'}
            </h1>
          </Col>
        </Row>
        {attendedJams.map((attendedJam) => (
          <Row key={attendedJam.jamId} className="mb-4">
            <Col>
              <AttendedJamCard Jam={attendedJam.jam} />
            </Col>
          </Row>
        ))}
      </Container>
    </main>
  );
};

export default AttendedJamsPage;
