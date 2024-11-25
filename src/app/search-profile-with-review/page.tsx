import ProfileCardwithReview from '@/components/ProfileCardwithReview';
import authOptions from '@/lib/authOptions';
import { loggedInProtectedPage } from '@/lib/page-protection';
import { Role } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { Container } from 'react-bootstrap';

const ProfileWithReview = async () => {
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );

  // Mock data for demonstration
  const user = {
    id: 1,
    email: 'example@example.com',
    password: 'hashed_password',
    role: Role.USER, // Use the Role enum here
  };
  const reviews = [
    { id: 1, rating: 5, comment: 'Great!', userId: 1 },
    { id: 2, rating: 4, comment: 'Good!', userId: 1 },
  ];

  return (
    <main>
      <Container>
        <ProfileCardwithReview user={user} reviews={reviews} />
      </Container>
    </main>
  );
};

export default ProfileWithReview;
