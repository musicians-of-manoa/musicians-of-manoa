import { getServerSession } from 'next-auth';
import authOptions from '@/lib/authOptions';
import { adminProtectedPage } from '@/lib/page-protection';
import EditGoalsForm from '@/components/EditGoalsForm';
import { getGoals } from '@/lib/dbActions';

const AdminPage = async () => {
  const session = await getServerSession(authOptions);
  adminProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );

  const existingGoals = await getGoals();

  return (
    <main>
      <EditGoalsForm existingGoals={existingGoals} />
    </main>
  );
};

export default AdminPage;
