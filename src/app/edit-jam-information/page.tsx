import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';
import { JamInformation } from '@prisma/client';
import authOptions from '@/lib/authOptions';
import { loggedInProtectedPage } from '@/lib/page-protection';
import { prisma } from '@/lib/prisma';
import EditJamInfoForm from '@/components/EditJamInfoForm';

export default async function EditJamInfoPage({ params }: { params: { id: string | string[] } }) {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
      // eslint-disable-next-line @typescript-eslint/comma-dangle
    } | null,
  );
  console.log('params.id:', params?.id);
  const id = Number(Array.isArray(params?.id) ? params?.id[0] : params?.id);
  // console.log(id);
  const jamInfo: JamInformation | null = await prisma.jamInformation.findUnique({
    where: { id },
  });
  // console.log(stuff);
  if (!jamInfo) {
    return notFound();
  }

  return (
    <main>
      <EditJamInfoForm jamInfo={jamInfo} />
    </main>
  );
}
