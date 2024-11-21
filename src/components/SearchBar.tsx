'use client';

import React from 'react';
import { Container, Col, Form } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';

const SearchBar: React.FC = () => (
  <Container style={{ backgroundColor: '#ECDFCC' }} className="rounded">
    <Col className="text-center py-4" style={{ fontFamily: 'Arial' }}>
      <Form>
        <Form.Group className="d-flex">
          <Form.Control
            type="text"
            className="rounded"
            placeholder="Search..."
            style={{ width: '1200px', height: '50px', marginRight: '10px' }}
          />
          <Search size="40px" style={{ paddingTop: '10px' }} />
        </Form.Group>
      </Form>
    </Col>
  </Container>
);

export default SearchBar;
