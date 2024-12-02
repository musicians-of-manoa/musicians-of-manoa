import { Experience, PrismaClient, Role } from '@prisma/client';
import { hash } from 'bcrypt';
import * as config from '../config/settings.development.json';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding the database');
  const password = await hash('changeme', 10);
  config.defaultAccounts.forEach(async (account) => {
    let role: Role = 'USER';
    if (account.role === 'ADMIN') {
      role = 'ADMIN';
    }
    console.log(`  Creating user: ${account.email} with role: ${role}`);
    await prisma.user.upsert({
      where: { email: account.email },
      update: {},
      create: {
        email: account.email,
        password,
        role,
      },
    });
    // console.log(`  Created user: ${user.email} with role: ${user.role}`);
  });

  // Seed JamInformation
  config.defaultJamInformation.forEach(async (jam) => {
    console.log(`  Adding JamInformation: ${jam.jamName}`);
    await prisma.jamInformation.upsert({
      where: { id: jam.id },
      update: {},
      create: {
        owner: jam.owner,
        jamName: jam.jamName,
        image: jam.image,
        organizer: jam.organizer,
        genre: jam.genre,
        location: jam.location,
        date: new Date(jam.date),
        instruments: jam.instruments,
        experience: jam.experience as Experience,
        description: jam.description,
      },
    });
  });

  // Seed Musical Goals
  config.defaultMusicalGoals.forEach(async (musicalGoal) => {
    console.log(`  Adding Musical Goals: ${musicalGoal.goal}`);
    await prisma.goals.upsert({
      where: { id: musicalGoal.id },
      update: {},
      create: {
        goal: musicalGoal.goal,
        isEditing: musicalGoal.isEditing,
      },
    });
  });

  // Seed Profile
  config.defaultProfiles.forEach(async (profile) => {
    console.log(`  Adding Profile: ${profile.username}`);

    // Find the user by email
    const user = await prisma.user.findUnique({
      where: { email: profile.userEmail }, // Use userEmail from the seed data
    });

    if (!user) {
      console.error(`No user found for profile with email: ${profile.userEmail}`);
      return;
    }

    // Create or update the profile linked to the user
    await prisma.profile.upsert({
      where: { userId: user.id },
      update: {},
      create: {
        userId: user.id, // Link using the user's ID
        username: profile.username,
        firstName: profile.firstName,
        lastName: profile.lastName,
        image: profile.image,
        rating: profile.rating,
        musicalGoals: profile.musicalGoals,
        musicalTastes: profile.musicalTastes,
        instruments: profile.instruments,
        experience: profile.experience as Experience,
        description: profile.description,
      },
    });
  });
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
