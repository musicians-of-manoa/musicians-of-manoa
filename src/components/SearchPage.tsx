'use client';

import React from 'react';
import { Card, Col, Container, Row, Image } from 'react-bootstrap';

const SearchPage: React.FC = () => (
  <Container>
    <Col className="text-center">
      <h1 className="py-3">Search for...</h1>
    </Col>
    <Row>
      <Col md={6} className="py-3">
        <a href="search/profile-search" className="hover-card" style={{ textDecoration: 'none' }}>
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
                Profiles
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </a>
      </Col>
      <Col md={6} className="py-3">
        <a href="search/jam-search" style={{ textDecoration: 'none' }}>
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

export default SearchPage;
