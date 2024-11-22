import { Col, Container, Row } from 'react-bootstrap';
import SearchBar from '@/components/SearchBar';
import ProfileInfoCard from '@/components/ProfileInfoCard';

/** Render a list of stuff for the logged in user. */
const ProfileSearchPage = async () => (
  <main>
    <Container id="jam-search" className="d-flex justify-content-center py-3">
      <Row>
        <Col>
          <Col className="text-center py-4" style={{ fontFamily: 'Arial' }}>
            <h2><strong>Search Profiles</strong></h2>
          </Col>
          <SearchBar />
        </Col>
      </Row>
    </Container>
    <Container>
      <Col>
        <ProfileInfoCard />
      </Col>
    </Container>
  </main>
);

export default ProfileSearchPage;
