import { Col, Row, Container } from 'react-bootstrap';

const JamListPage = async () => (
  <main>
    <Container id="jam-list-page" fluid className="py-3">
      <Row>
        <Col>
          <h2>Jam List</h2>
          <Row xs={1} md={2} lg={3} className="g-4" />
        </Col>
      </Row>
    </Container>
  </main>
);

export default JamListPage;
