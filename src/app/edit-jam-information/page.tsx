import React from 'react';
import EditJamInfoForm from '@/components/EditJamInfoForm';
import { Container } from 'react-bootstrap';

const SearchPage = () => (
  <main>
    <Container className="py-3">
      <EditJamInfoForm />
    </Container>
  </main>
);

export default SearchPage;
