'use client';

import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import Image from 'next/image';
import styles from './page.module.css';

/** The Home page. */
const Home = () => (
  <main>
    {/* Top Section */}
    <section className={styles.topSection}>
      <Container fluid className={styles.sectionHolder}>
        <Row className={styles.sectionInner}>
          {/* Left Side */}
          <Col
            xs={12}
            md={6}
            className="d-flex flex-column justify-content-center align-items-start ps-5"
          >
            <h1 className={`${styles.catchphrase} ${styles.leftContent}`}>
              Find local musicians and events to jam at
            </h1>
            <p className={styles.subCatchphrase}>
              Connect with other local musicians, or find out about events near
              you.
            </p>
            <section className={`${styles.buttonGroup} mt-4`}>
              <Button
                as="a"
                href="/search/profile-search"
                className={`${styles.customButton} ${styles.customButtonSmallText} me-3`}
                size="lg"
              >
                Find Musicians
              </Button>
              <Button
                as="a"
                href="/search/jam-search"
                className={`${styles.customButton} ${styles.customButtonSmallText}`}
                size="lg"
              >
                Find Jams
              </Button>
            </section>
          </Col>

          {/* Right Side */}
          <Col xs={12} md={6} className="p-0">
            <Carousel controls={false} indicators={false} interval={5000}>
              <Carousel.Item>
                <Image
                  src="/musicianBackMatch-1-transparent.png"
                  alt="Musician 1"
                  layout="responsive" // Ensures the image scales while maintaining its aspect ratio
                  width={1920} // Actual width of the image
                  height={1080} // Actual height of the image
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src="/musicianBackMatch-2-transparent.png"
                  alt="Musician 1"
                  layout="responsive" // Ensures the image scales while maintaining its aspect ratio
                  width={1920} // Actual width of the image
                  height={1080} // Actual height of the image
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>

    {/* Bottom Section */}
    <section className={styles.bottomSection}>
      <Container className="py-5">
        <h2 className="text-center mb-5">Discover Musicians</h2>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {/* Singer Button */}
          <Col>
            <a href="/musicians/singers" className={styles.discoverButton}>
              <span className={styles.discoverText}>Singers</span>
            </a>
          </Col>
          {/* Guitarist Button */}
          <Col>
            <a href="/musicians/guitarists" className={styles.discoverButton}>
              <span className={styles.discoverText}>Guitarists</span>
            </a>
          </Col>
          {/* Producer Button */}
          <Col>
            <a href="/musicians/producers" className={styles.discoverButton}>
              <span className={styles.discoverText}>Producers</span>
            </a>
          </Col>
          <Col>
            <a href="/musicians/DJs" className={styles.discoverButton}>
              <span className={styles.discoverText}>DJs</span>
            </a>
          </Col>
          {/* Add more buttons as needed */}
        </Row>
      </Container>
    </section>
  </main>
);

export default Home;
