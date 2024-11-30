// import { getServerSession } from 'next-auth';
// import { loggedInProtectedPage } from '@/lib/page-protection';
// import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import ProfileCard from '@/components/ProfileCard';
import { Container } from 'react-bootstrap';
import { Profile } from '@prisma/client';

/** Render a profile for the logged in user */
const ProfilePage = async () => {
  // Protect the page, only logged in users can access it.
  // const session = await getServerSession(authOptions);
  // loggedInProtectedPage(
  // session as {
  // user: { email: string; id: string; randomKey: string };
  // } | null,
  // );
  // Mocked profile data (replace with actual data fetching logic if needed)
  const profile: Profile = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    username: 'johndoe',
    image: '...', // Replace with an actual image URL
    rating: 4.5,
    musicalGoals: 'To play music',
    musicalTastes: 'Rock',
    instruments: 'Guitar',
    experience: 'professional',
    description: 'I am a musician',
  };

  return (
    <main>
      <Container>
        <h1>Profile</h1>
        <div
          style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}
        >
          <ProfileCard profile={profile} />
        </div>
      </Container>
    </main>
  );
};

export default ProfilePage;
