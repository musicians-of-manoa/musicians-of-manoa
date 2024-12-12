import { getServerSession } from 'next-auth/next';
import authOptions from '@/lib/authOptions';
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

// eslint-disable-next-line import/prefer-default-export
export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: 'User not authenticated' }, { status: 401 });
    }

    const user = session.user as { id: string } & typeof session.user;

    if (!user || !user.id) {
      return NextResponse.json({ message: 'User ID not found' }, { status: 400 });
    }

    const userId = Number(user.id);

    const attendedJams = await prisma.attendedJam.findMany({
      where: { userId },
      include: { jam: true }, // Include related jam data if necessary
    });

    return NextResponse.json(attendedJams, { status: 200 });
  } catch (error) {
    console.error('Error fetching attended jams:', error);

    return NextResponse.json(
      {
        message: 'Internal Server Error',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    );
  }
}
