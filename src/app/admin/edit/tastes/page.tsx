import { getServerSession } from 'next-auth';
import authOptions from '@/lib/authOptions';
import { adminProtectedPage } from '@/lib/page-protection';
import EditTastesForm from '@/components/EditTastesForm';
import { getTastes } from '@/lib/dbActions';

const AdminPage = async () => {
  const session = await getServerSession(authOptions);
  adminProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );

  const existingTastes = await getTastes();

  return (
    <main>
      <EditTastesForm existingTastes={existingTastes} />
    </main>
  );
};

export default AdminPage;
