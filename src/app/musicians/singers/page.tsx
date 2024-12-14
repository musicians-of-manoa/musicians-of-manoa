import { prisma } from '@/lib/prisma';
import { Col, Container, Row } from 'react-bootstrap';
import DiscoverMusiciansInfoCard from '@/components/DiscoverMusiciansInfoCard';
import { ProfileWithReviews } from '@/types/types';
// import FeedbackAndForm from '@/components/FeedbackAndForm';
import Link from 'next/link';

interface CategoryPageProps {
  searchParams: {
    page?: string;
  };
}

const PROFILES_PER_PAGE = 4;

const SingersPage = async ({ searchParams }: CategoryPageProps) => {
  const page = searchParams?.page ? parseInt(searchParams.page, 10) : 1;

  const skip = (page - 1) * PROFILES_PER_PAGE;

  // Fetch profiles for Singers
  const profiles: ProfileWithReviews[] = await prisma.profile.findMany({
    where: { instruments: { contains: 'Vocals' } },
    skip,
    take: PROFILES_PER_PAGE,
    orderBy: { id: 'asc' },
    include: {
      reviews: {
        take: 2,
        orderBy: { createdAt: 'desc' },
<<<<<<< HEAD
=======
        select: {
          id: true,
          rating: true,
          comment: true,
          createdAt: true,
          user: { select: { id: true } },
        },
>>>>>>> main
      },
    },
  });

  // Count total profiles for pagination
  const totalProfiles = await prisma.profile.count({
    where: { instruments: { contains: 'Vocals' } },
  });

  const hasNextPage = page * PROFILES_PER_PAGE < totalProfiles;
  const hasPrevPage = page > 1;

  return (
    <main>
      <Container
        id="singer-search"
        className="d-flex justify-content-center py-3"
      >
        <Row>
          <Col>
            <Col className="text-center py-4" style={{ fontFamily: 'Arial' }}>
              <h2>
                <strong>Discover Singers</strong>
              </h2>
            </Col>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="gy-4">
          {profiles.map((profile) => (
            <Col xs={12} md={6} lg={3} key={profile.id}>
              <DiscoverMusiciansInfoCard profile={profile} />
              {/** <FeedbackAndForm profileId={profile.id} /> */}
            </Col>
          ))}
        </Row>
        <Row className="mt-4">
          <Col className="d-flex justify-content-between">
            {hasPrevPage ? (
              <Link
                href={`/search/singers?page=${page - 1}`}
                className="btn btn-secondary"
              >
                Previous Page
              </Link>
            ) : (
              <div />
            )}
            {hasNextPage ? (
              <Link
                href={`/search/singers?page=${page + 1}`}
                className="btn btn-secondary"
              >
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

export default SingersPage;