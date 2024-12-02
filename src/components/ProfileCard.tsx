'use client';

import { Profile } from '@prisma/client';
import { Card, Button, Row, Col, Image, Container } from 'react-bootstrap';
import RatingStars from './RatingStars';

const ProfileCard = ({ profile }: { profile: Profile }) => (
  <Card
    style={{
      backgroundColor: '#ECDFCC',
      height: '500px', // Adjust as needed
      width: '100%', // Adjust as needed
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
  >
    <Card.Header>
      <Row>
        <Col>
          {/** <Image src={profile.image} width="100" height="100" roundedCircle /> */}
          <Image
            src="/images/jams-search-photo.jpg"
            style={{
              width: '100px',
              height: '100px',
              objectFit: 'cover',
              borderRadius: '50%', // make the image a circle
            }}
            alt="Profile Image"
          />
        </Col>
        <Col>
          <Card>
            <Container>
              <h3>Rating</h3>
              <RatingStars value={profile.rating} size={32} isHalf />
            </Container>
          </Card>
        </Col>
        <Col className="text-end">
          <Button variant="primary" size="lg" href="">
            Edit
          </Button>
        </Col>
      </Row>
      <Card.Title>
        <strong>{profile.username}</strong>
      </Card.Title>
      <Card.Subtitle>
        {profile.firstName}
        {profile.lastName}
      </Card.Subtitle>
    </Card.Header>
    <Card.Body
      style={{
        backgroundColor: '#ECDFCC',
        width: '100%', // Retain full width
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Card style={{ padding: '1rem' }}>
        <Card.Title>Musical Goals</Card.Title>
        <Card.Text>{profile.musicalGoals}</Card.Text>
      </Card>
      <Card style={{ padding: '1rem' }}>
        <Card.Title>Musical Tastes</Card.Title>
        <Card.Text>{profile.musicalTastes}</Card.Text>
      </Card>
      <Card style={{ padding: '1rem' }}>
        <Card.Title>Instruments & Experience Level</Card.Title>
        <Card.Text>
          {profile.instruments}
          {profile.experience}
        </Card.Text>
      </Card>
      <Card style={{ padding: '1rem' }}>
        <Card.Title>Description</Card.Title>
        <Card.Text>{profile.description}</Card.Text>
      </Card>
      {/** Soundcloud embedding code for later
      <Card>
        <iframe
          width="100%"
          height="300"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1863037101&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        />
      </Card>
      */}
    </Card.Body>
  </Card>
);

export default ProfileCard;
