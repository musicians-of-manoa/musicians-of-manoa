'use client';

import { Search } from 'react-bootstrap-icons';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const SearchJams = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (searchTerm: string) => {
    const params = new URLSearchParams(searchParams);
    if (searchTerm) {
      params.set('query', searchTerm);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div
      className="search-wrapper"
      style={{
        backgroundColor: '#ECDFCC',
        paddingTop: '10px',
        paddingBottom: '10px',
      }}
    >
      <button type="submit" className="search-button">
        <Search />
      </button>
      <input
        type="search"
        placeholder="Search..."
        className="search-input"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchJams;
