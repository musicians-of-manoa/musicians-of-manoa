import { Col, Container, Row } from 'react-bootstrap';
import SearchBar from '@/components/SearchBar';
import JamInfoCard from '@/components/JamInfoCard';
import { getServerSession } from 'next-auth';
import authOptions from '@/lib/authOptions';
import { loggedInProtectedPage } from '@/lib/page-protection';
import { JamInformation } from '@prisma/client';
import { prisma } from '@/lib/prisma';

/** Render a list of stuff for the logged in user. */
const JamSearchPage = async () => {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );
  const owner = session?.user!.email ? session.user.email : '';
  const Jams: JamInformation[] = await prisma.jamInformation.findMany({
    where: {
      owner,
    },
  });
  console.log(Jams);
  return (
    <main>
      <Container id="jam-search" className="d-flex justify-content-center py-3">
        <Row>
          <Col>
            <Col className="text-center py-4" style={{ fontFamily: 'Arial' }}>
              <h2><strong>Search Jams</strong></h2>
            </Col>
            <SearchBar />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          {Jams.map((jam) => (
            <Col key={jam.id}>
              <JamInfoCard Jam={jam} />
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default JamSearchPage;
