'use client';

import React from 'react';
import { Container } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';

const SearchBar: React.FC = () => (
  <Container style={{ backgroundColor: '#ECDFCC', paddingTop: '10px', paddingBottom: '10px' }} className="rounded-pill">
    <div className="search-wrapper">
      <button type="submit" className="search-button">
        <Search />
      </button>
      <input
        type="search"
        placeholder="Search..."
        className="search-input"
      />
    </div>
  </Container>
);

export default SearchBar;
