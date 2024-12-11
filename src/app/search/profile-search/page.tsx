import { prisma } from '@/lib/prisma';
import { Col, Container, Row } from 'react-bootstrap';
import SearchBar from '@/components/SearchBar';
import ProfileInfoCard from '@/components/ProfileInfoCard';
import Link from 'next/link';

interface ProfilePageProps {
  searchParams: {
    page?: string;
  };
}

const PROFILES_PER_PAGE = 4;

const ProfileSearchPage = async ({ searchParams }: ProfilePageProps) => {
  const page = searchParams?.page ? parseInt(searchParams.page, 10) : 1;

  const skip = (page - 1) * PROFILES_PER_PAGE;

  // Fetch profiles from DB, skip is how many profiles will be skipped in the db
  const profiles = await prisma.profile.findMany({
    skip,
    take: PROFILES_PER_PAGE,
    orderBy: { id: 'asc' }, // Order by id
  });

  // Count total profiles to know if we have a next page
  const totalProfiles = await prisma.profile.count();

  const hasNextPage = page * PROFILES_PER_PAGE < totalProfiles;
  const hasPrevPage = page > 1;

  return (
    <main>
      <Container id="jam-search" className="d-flex justify-content-center py-3">
        <Row>
          <Col>
            <Col className="text-center py-4">
              <h2>
                Search Profiles
              </h2>
            </Col>
            <SearchBar />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="gy-4">
          {profiles.map((profile) => (
            <Col xs={12} md={6} lg={3} key={profile.id}>
              <ProfileInfoCard profile={profile} />
            </Col>
          ))}
        </Row>
        <Row className="mt-4">
          <Col className="d-flex justify-content-between">
            {hasPrevPage ? (
              <Link href={`/search/profile-search?page=${page - 1}`} className="btn btn-secondary">
                Previous Page
              </Link>
            ) : (
              <div />
            )}

            {hasNextPage ? (
              <Link href={`/search/profile-search?page=${page + 1}`} className="btn btn-secondary">
                Next Page
              </Link>
            ) : (
              <div />
            )}
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default ProfileSearchPage;
