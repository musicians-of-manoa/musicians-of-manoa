import { getServerSession } from 'next-auth';
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';
import { JamInformation, PrismaClient } from '@prisma/client';
import JamSearchPage from '@/components/JamSearchPage';

const prisma = new PrismaClient();

const AllJamSearchPage = async () => {
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );

  // Fetch all sessions from the database
  const Jams: JamInformation[] = (await prisma.jamInformation.findMany({
    select: {
      id: true,
      owner: true,
      jamName: true,
      image: true,
      organizer: true,
      genre: true,
      location: true,
      date: true,
      instruments: true,
      experience: true,
      description: true,
    },
  }));

  return (
    <main>
      <JamSearchPage jams={Jams} />
    </main>
  );
};

export default AllJamSearchPage;
