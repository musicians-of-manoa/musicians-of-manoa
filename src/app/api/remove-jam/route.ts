import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

/* eslint-disable import/prefer-default-export */
export async function DELETE(request: NextRequest) {
  try {
    const { jamId }: { jamId?: number } = await request.json();

    if (!jamId) {
      return NextResponse.json({ error: 'Jam ID is required' }, { status: 400 });
    }

    const jamExists = await prisma.attendedJam.findUnique({
      where: { id: jamId },
    });

    if (jamExists) {
      return NextResponse.json({ error: 'Jam not found' }, { status: 404 });
    }

    await prisma.attendedJam.deleteMany({
      where: { jamId },
    });

    // Delete the jam
    const removedJam = await prisma.attendedJam.delete({
      where: { id: jamId },
    });

    return NextResponse.json(removedJam, { status: 200 });
  } catch (error) {
    console.error('Error removing Jam:', error);
    return NextResponse.json({ error: 'Failed to remove Jam' }, { status: 500 });
  }
}
