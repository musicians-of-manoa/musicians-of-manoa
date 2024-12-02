'use client';

import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';

const JamSearchFilter: React.FC = () => {
  const [filters, setFilters] = useState({
    experience: '',
    instruments: '',
    keywords: '',
    conditions: new Set<string>(),
  });

  const handleFilterChange = (field: string, value: string) => {
    setFilters({ ...filters, [field]: value });
  };

  return (
    <Container>
      <h3>Filters</h3>
      <Form>
        <Form.Group>
          <Form.Select
            value={filters.experience}
            onChange={(e) => handleFilterChange('experience', e.target.value)}
          >
            <option value="">Select Experience Level</option>
            <option value="novice">Novice</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="professional">Professional</option>
          </Form.Select>
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Search by Instruments"
            value={filters.keywords}
            onChange={(e) => handleFilterChange('instruments', e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Search by Keywords"
            value={filters.keywords}
            onChange={(e) => handleFilterChange('keywords', e.target.value)}
          />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default JamSearchFilter;
