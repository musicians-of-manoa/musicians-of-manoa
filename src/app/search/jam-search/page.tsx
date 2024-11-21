import { Col, Container, Row } from 'react-bootstrap';
import SearchBar from '@/components/SearchBar';
import JamInfoCard from '@/components/JamInfoCard';

/** Render a list of stuff for the logged in user. */
const JamSearchPage = async () => (
  <main>
    <Container id="jam-search" className="d-flex justify-content-center py-3">
      <Row>
        <Col>
          <h1><strong>Search for... </strong></h1>

          {/* Jam Search Button */}
          <a href="search/jam-search" className="hover-card">
            <Image src="/images/jams-search-photo.jpg" width={500} height={500} style={{ objectFit: 'cover' }} />
          </a>
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
