'use client';

import React from 'react';
import { Container, Col, Card, Button, Row } from 'react-bootstrap';

const ProfileInfoCard: React.FC = () => (
  <Container>
    <Row className="g-5">
      <Col className="py-4" style={{ fontFamily: 'Arial' }}>
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
              <Card.Title>
                <strong>PROFILE NAME</strong>
              </Card.Title>
              <p>
                <strong>Username | Instruments & Experience Level</strong>
              </p>
              <p>
                <strong>Musical Goals</strong>
              </p>
              <p>
                <strong>Musical Tastes</strong>
              </p>
              <hr />
            </div>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Card.Text>
            <Button variant="primary">View Profile</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col className="py-4" style={{ fontFamily: 'Arial' }}>
        <Card
          style={{ backgroundColor: '#ECDFCC', height: '100%' }}
          className="hover-card d-flex flex-column justify-content-between"
        >
          <Card.Img
            variant="top"
            src="/images/search-profiles.jpg"
            style={{
              height: '200px',
              objectFit: 'cover',
            }}
          />
          <Card.Body className="d-flex flex-column justify-content-between">
            <div>
              <Card.Title>
                <strong>PROFILE NAME</strong>
              </Card.Title>
              <p>
                <strong>Username | Instruments & Experience Level</strong>
              </p>
              <p>
                <strong>Musical Goals</strong>
              </p>
              <p>
                <strong>Musical Tastes</strong>
              </p>
              <hr />
            </div>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Card.Text>
            <Button variant="primary">View Profile</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col className="py-4" style={{ fontFamily: 'Arial' }}>
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
              <Card.Title>
                <strong>PROFILE NAME</strong>
              </Card.Title>
              <p>
                <strong>Username | Instruments & Experience Level</strong>
              </p>
              <p>
                <strong>Musical Goals</strong>
              </p>
              <p>
                <strong>Musical Tastes</strong>
              </p>
              <hr />
            </div>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Card.Text>
            <Button variant="primary">View Profile</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col className="py-4" style={{ fontFamily: 'Arial' }}>
        <Card
          style={{ backgroundColor: '#ECDFCC', height: '100%' }}
          className="hover-card d-flex flex-column justify-content-between"
        >
          <Card.Img
            variant="top"
            src="/images/search-profiles.jpg"
            style={{
              height: '200px',
              objectFit: 'cover',
            }}
          />
          <Card.Body className="d-flex flex-column justify-content-between">
            <div>
              <Card.Title>
                <strong>PROFILE NAME</strong>
              </Card.Title>
              <p>
                <strong>Username | Instruments & Experience Level</strong>
              </p>
              <p>
                <strong>Musical Goals</strong>
              </p>
              <p>
                <strong>Musical Tastes</strong>
              </p>
              <hr />
            </div>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Card.Text>
            <Button variant="primary">View Profile</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default ProfileInfoCard;
