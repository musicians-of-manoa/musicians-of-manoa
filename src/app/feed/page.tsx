// app/feed/page.tsx
import React from 'react';
import { getServerSession } from 'next-auth';
import authOptions from '@/lib/authOptions';
import { loggedInProtectedPage } from '@/lib/page-protection';
import FeedList from '@/components/FeedList';
import { Container, Row, Col } from 'react-bootstrap';
import { prisma } from '@/lib/prisma';
import { JamInformation } from '@prisma/client';

const FeedPage = async () => {
  // Protect the page, only logged-in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );

  // Fetch jams from database
  const Jams: JamInformation[] = await prisma.jamInformation.findMany({});

  // Sort jams by date in descending order
  const sortedJams = Jams.sort((a, b) => a.date.getTime() - b.date.getTime());

  return (
    <main>
      <Container className="mt-4">
        <h2 className="mb-4">Upcoming Jams</h2>
        <Row>
          {sortedJams.map((jam) => (
            <Col xs={12} key={jam.id} className="mb-4">
              <FeedList Jam={jam} />
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default FeedPage;
