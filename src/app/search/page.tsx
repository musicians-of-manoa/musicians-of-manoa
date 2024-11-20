import { Col, Container, Row, Image } from 'react-bootstrap';

/** Render a list of stuff for the logged in user. */
const SearchPage = async () => (
  <main>
    <Container id="search" className="d-flex justify-content-center py-3">
      <Row>
        <Col>
          <h1><strong>Search Page</strong></h1>

          {/* Jam Search Button */}
          <Image src="/public/images/jams-search-photo.jpg" height={200} />
        </Col>
      </Row>
    </Container>
  </main>
);

export default SearchPage;
