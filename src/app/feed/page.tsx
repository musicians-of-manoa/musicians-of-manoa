import { prisma } from '@/lib/prisma'; // Import Prisma client
import FeedList from '@/components/FeedList';

const FeedPage = async () => {
  // Fetch JamInformation from the database
  const jams = await prisma.jamInformation.findMany({
    orderBy: { date: 'asc' },
  });

  return (
    <main>
      <h1 className="text-center mt-4">Upcoming Jams</h1>
      <div className="container mt-3">
        {jams.map((jam) => (
          <FeedList key={jam.id} Jam={jam} />
        ))}
      </div>
    </main>
  );
};

export default FeedPage;
