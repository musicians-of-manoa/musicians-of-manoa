'use client';

import React from 'react';
import { Container, Col, Card, Button, Row } from 'react-bootstrap';

const JamSearchCard: React.FC = () => (
  <Container>
    <Row className="g-5">
      <Col md={6} className="py-4" style={{ fontFamily: 'Arial' }}>
        <Card
          style={{ backgroundColor: '#ECDFCC', height: '100%' }}
          className="hover-card d-flex flex-column justify-content-between"
        >
          <Card.Img
            variant="top"
            src="/images/jams-search-photo.jpg"
            style={{
              height: '200px',
              objectFit: 'cover',
            }}
          />
          <Card.Body className="d-flex flex-column justify-content-between">
            <div>
              <Card.Title><strong>JAM NAME</strong></Card.Title>
              <p><strong>Jam Date & Time | Location</strong></p>
            </div>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Card.Text>
            <Button variant="primary">Attend Jam</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6} className="py-4" style={{ fontFamily: 'Arial' }}>
        <Card
          style={{ backgroundColor: '#ECDFCC', height: '100%' }}
          className="hover-card d-flex flex-column justify-content-between"
        >
          <Card.Img
            variant="top"
            src="/images/concert.jpg"
            style={{
              height: '200px',
              objectFit: 'cover',
            }}
          />
          <Card.Body className="d-flex flex-column justify-content-between">
            <div>
              <Card.Title><strong>JAM NAME</strong></Card.Title>
              <p><strong>Jam Date & Time | Location</strong></p>
            </div>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Card.Text>
            <Button variant="primary">Attend Jam</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default JamSearchCard;
