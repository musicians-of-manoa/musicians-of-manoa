import { getServerSession } from 'next-auth/next';
import authOptions from '@/lib/authOptions';
import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// eslint-disable-next-line import/prefer-default-export
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: 'User not authenticated' }, { status: 401 });
    }

    const { jamId, jamData } = await request.json();

    if (!jamId || !jamData) {
      return NextResponse.json({ message: 'Invalid data' }, { status: 400 });
    }

    const user = session.user as { id: string } & typeof session.user;

    if (!user || !user.id) {
      return NextResponse.json({ message: 'User ID not found' }, { status: 400 });
    }

    const userId = Number(user.id);

    const existingJam = await prisma.attendedJam.findFirst({
      where: {
        userId,
        jamId,
      },
    });

    if (existingJam) {
      return NextResponse.json({ message: 'You have already attended this jam' }, { status: 409 });
    }

    const attendedJam = await prisma.attendedJam.create({
      data: {
        userId,
        jamId,
      },
    });

    return NextResponse.json(attendedJam, { status: 200 });
  } catch (error) {
    console.error('Error adding jam to attended list:', error);

    return NextResponse.json(
      {
        message: 'Internal Server Error',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    );
  }
}
