import { Col, Container, Row } from 'react-bootstrap';

/** Render a list of stuff for the logged in user. */
const ListPage = async () => (
  <main>
    <Container id="search" className="d-flex justify-content-center py-3">
      <Row>
        <Col>
          <h1><strong>Search Page</strong></h1>
        </Col>
      </Row>
    </Container>
  </main>
);

export default ListPage;
