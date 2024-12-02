'use client';

import React from 'react';
import { Card, Col, Container, Row, Image } from 'react-bootstrap';

const ReviewPage: React.FC = () => (
  <Container>
    <div className="text-center py-4" style={{ fontFamily: 'Arial' }}>
      <h2>
        <strong>Review of... </strong>
      </h2>
    </div>
    <Row>
      <Col md={6}>
        <a
          href="review/user-review"
          className="hover-card"
          style={{ textDecoration: 'none' }}
        >
          <Card className="text-white hover-card">
            <div
              style={{
                position: 'relative',
                width: '100%',
                paddingTop: '70%', // 16:9 aspect ratio
                borderRadius: '5px',
                overflow: 'hidden',
              }}
            >
              <Image
                src="/images/search-profiles.jpg"
                alt="Search Profiles"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
            <Card.ImgOverlay
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                borderRadius: '5px',
              }}
            >
              <Card.Text
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: 'white',
                  textAlign: 'center',
                  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)',
                }}
              >
                Users
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </a>
      </Col>
      <Col md={6}>
        <a href="review/jam-review" style={{ textDecoration: 'none' }}>
          <Card className="text-white hover-card">
            <div
              style={{
                position: 'relative',
                width: '100%',
                paddingTop: '70%', // 16:9 aspect ratio
                borderRadius: '5px',
                overflow: 'hidden',
              }}
            >
              <Image
                src="/images/jam-session.jpg"
                alt="Search Jams"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
            <Card.ImgOverlay
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                borderRadius: '5px',
              }}
            >
              <Card.Text
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: 'white',
                  textAlign: 'center',
                  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)',
                }}
              >
                Jams
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </a>
      </Col>
    </Row>
  </Container>
);

export default ReviewPage;
