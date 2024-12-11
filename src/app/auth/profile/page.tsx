import { getServerSession } from 'next-auth';
import { loggedInProtectedPage } from '@/lib/page-protection';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import ProfileCard from '@/components/MainUserProfile';
import { Container } from 'react-bootstrap';
import { prisma } from '@/lib/prisma';

/** Render a profile for the logged-in user */
const ProfilePage = async () => {
  // Protect the page, only logged-in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );

  // Extract user ID from the session
  const userEmail = session?.user?.email;

  if (!userEmail) {
    // Handle the case where userEmail is undefined
    // You might redirect to login or show an error
    return (
      <main>
        <Container style={{ paddingTop: '2rem' }}>
          <h1>Error</h1>
          <p>User is not logged in.</p>
        </Container>
      </main>
    );
  }

  // Fetch the user from the database
  const user = await prisma.user.findUnique({
    where: { email: userEmail },
    include: {
      Profile: true, // Include the profile relation
    },
  });

  if (!user) {
    // Handle the case where the user is not found
    return (
      <main>
        <Container style={{ paddingTop: '2rem' }}>
          <h1>Error</h1>
          <p>User not found.</p>
        </Container>
      </main>
    );
  }

  // If the user does not have a profile, you might redirect them to create one
  if (!user.Profile) {
    return (
      <main>
        <Container style={{ paddingTop: '2rem' }}>
          <h1>No Profile Found</h1>
          <p>
            You don&apos;t have a profile yet.
            <a href="/auth/signup">Create Profile</a>
          </p>
        </Container>
      </main>
    );
  }

  // If the profile exists, render it
  return (
    <main>
      <Container style={{ paddingTop: '2rem' }}>
        <h1>Profile</h1>
        <div>
          <ProfileCard profile={user.Profile} />
        </div>
      </Container>
    </main>
  );
};

export default ProfilePage;
