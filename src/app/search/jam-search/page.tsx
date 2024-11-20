import { Col, Container, Row, Image } from 'react-bootstrap';

/** Render a list of stuff for the logged in user. */
const SearchPage = async () => (
  <main>
    <Container id="search" className="d-flex justify-content-center py-3">
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
  </main>
);

export default SearchPage;
