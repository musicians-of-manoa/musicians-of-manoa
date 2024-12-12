import { Container } from 'react-bootstrap';
import SearchPage from '@/components/SearchPage';

/** Render a list of stuff for the logged in user. */
const Search = async () => (
  <main>
    <Container id="search" className="d-flex justify-content-center py-1" style={{ color: 'white' }}>
      <SearchPage />
    </Container>
  </main>
);

export default Search;
