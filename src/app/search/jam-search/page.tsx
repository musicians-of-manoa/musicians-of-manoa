import { Col, Container, Row } from 'react-bootstrap';
import SearchBar from '@/components/SearchBar';
import JamInfoCard from '@/components/JamInfoCard';
import { getServerSession } from 'next-auth';
import authOptions from '@/lib/authOptions';
import { loggedInProtectedPage } from '@/lib/page-protection';
import { JamInformation } from '@prisma/client';
import { prisma } from '@/lib/prisma';
// import SearchJams from './SearchJams';

const JamSearchPage = async ({
  searchParams = { query: '' },
}: {
  // eslint-disable-next-line react/require-default-props
  searchParams?: {
    query?: string;
  };
}) => {
  const query = searchParams?.query || '';
  console.log('query', query);
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
  // console.log(Jams);

  return (
    <main>
      <Container id="jam-search" className="py-3">
        {/* Row to align the search bar and header */}
        <Row className="justify-content-center">
          <Col xs={12} className="text-center py-4">
            <h2><strong>Search Jams</strong></h2>
          </Col>
          <Col xs={12} className="text-center mb-4">
            <SearchBar />
          </Col>
          {/*
          <Col xs={12} className="text-center mb-4">
            <SearchJams />
          </Col> */}
        </Row>
      </Container>

      <Container className="py-3">
        {/* Row for displaying the JamInfoCard components, aligned to the left */}
        <Row className="justify-content-start">
          {Jams.map((jam) => (
            <Col key={jam.id} xs={12} sm={6} md={4} lg={4} className="mb-4">
              <JamInfoCard Jam={jam} />
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default JamSearchPage;
