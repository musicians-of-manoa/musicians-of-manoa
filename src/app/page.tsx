'use client';

import Link from 'next/link';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import styles from './page.module.css';

/** The Home page. */
const Home = () => (
  <main>
    <Container fluid className={styles.headerSection}>
      <Row>
        {/* Left Side */}
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column justify-content-center align-items-start p-5"
        >
          <h1 className={styles.catchphrase}>
            <span>Find some </span>
            <span>musicians </span>
            <span>to jam </span>
            <span>with!</span>
          </h1>
          <section className={`${styles.buttonGroup} mt-4`}>
            <Link href="/find-musicians" passHref legacyBehavior>
              <Button
                as="a"
                className={`${styles.customButton} ${styles.customButtonSmallText} me-3`}
                size="lg"
              >
                Find Musicians
              </Button>
            </Link>
            <Link href="/find-jams" passHref legacyBehavior>
              <Button
                as="a"
                className={`${styles.customButton} ${styles.customButtonSmallText}`}
                size="lg"
              >
                Find Jams
              </Button>
            </Link>
          </section>
        </Col>

        {/* Right Side */}
        <Col xs={12} md={6} className="p-0">
          <Carousel controls={false} indicators={false} interval={3000} fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/musicianBackMatch-1.png"
                alt="Musician 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/musicianBackMatch-2.png"
                alt="Musician 2"
              />
            </Carousel.Item>
            {/* more photos if needed */}
          </Carousel>
        </Col>
      </Row>
    </Container>
  </main>
);

export default Home;
