import { Col, Container, Row } from 'react-bootstrap';
import SearchBar from '@/components/SearchBar';
import JamInfoCard from '@/components/JamInfoCard';

/** Render a list of stuff for the logged in user. */
const JamSearchPage = async () => (
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
      <Col>
        <JamInfoCard />
      </Col>
    </Container>
  </main>
);

export default JamSearchPage;
