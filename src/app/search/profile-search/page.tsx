import { Col, Container, Row } from 'react-bootstrap';
import SearchBar from '@/components/SearchBar';
import ProfileInfoCard from '@/components/ProfileInfoCard';

/** Render a list of stuff for the logged in user. */
const ProfileSearchPage = async () => (
  <main>
    <Container id="profile-search" className="py-3">
      <Row>
          <Col xs={12} className="text-center py-4">
            <h2><strong>Search Profiles</strong></h2>
          </Col>
        <Col xs={12} className="text-center mb-4">
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
