'use client';

import { Experience } from '@prisma/client';
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import JamInfoCard from './JamInfoCard';

interface JamInformation {
  id: number;
  owner: string;
  jamName: string;
  image: string;
  organizer: string;
  genre: string;
  location: string;
  date: Date;
  instruments: string;
  experience: Experience;
  description: string;
}

const JamSearchPage = ({ jams }: { jams: JamInformation[] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredJams, setFilteredJams] = useState(jams);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);

    // Filter based on location or jamName starting with the search term
    const filtered = jams.filter((singleJam) =>
      singleJam.location.toLowerCase().startsWith(searchValue)
        || singleJam.jamName.toLowerCase().startsWith(searchValue), // **Use startsWith for jamName**
    );
    setFilteredJams(filtered);
  };

  return (
    <main>
      <Container id="jam-search">
        {/* Row to align the search bar and header */}
        <Row className="justify-content-center">
          <Col xs={12} className="text-center py-1" style={{ color: 'white' }}>
            <h1 className="py-3">Search Jams</h1>
          </Col>
          <Col xs={12} className="text-center mb-4">
            <Container
              style={{
                backgroundColor: '#ECDFCC',
                paddingTop: '10px',
                paddingBottom: '10px',
              }}
              className="rounded-pill"
            >
              <div className="search-wrapper">
                <button type="submit" className="search-button">
                  <Search />
                </button>
                <input
                  type="search"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="search-input"
                />
              </div>
            </Container>
          </Col>
          {/*
          <Col xs={12} className="text-center mb-4">
            <SearchJams />
          </Col> */}
        </Row>
      </Container>

      <Container className="py-3">
        {/* Row for displaying the JamInfoCard components, aligned to the left */}
        <Row className="justify-content-start">
          {filteredJams.map((singleJam) => (
            <Col key={singleJam.id} xs={12} sm={6} md={4} lg={4} className="mb-4">
              <JamInfoCard Jam={singleJam} />
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default JamSearchPage;
