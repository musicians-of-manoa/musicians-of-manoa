import { getServerSession } from 'next-auth';
import authOptions from '@/lib/authOptions';
import { adminProtectedPage } from '@/lib/page-protection';
import EditExperiencesForm from '@/components/EditExperiencesForm';
import { getExperiences } from '@/lib/dbActions';

const AdminPage = async () => {
  const session = await getServerSession(authOptions);
  adminProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );

  const existingExperiences = await getExperiences();

  return (
    <main>
      <EditExperiencesForm existingExperiences={existingExperiences} />
    </main>
  );
};

export default AdminPage;
