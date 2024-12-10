import { PrismaClient, Experience, Role } from '@prisma/client';
import { hash } from 'bcrypt';
import * as config from '../config/settings.development.json';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding the database');

  // Seed Users First
  const password = await hash('changeme', 10);
  await Promise.all(
    config.defaultAccounts.map(async (account) => {
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
    }),
  );

  // Seed Profiles Next, For Dependency Issues
  await Promise.all(
    config.defaultProfiles.map(async (profile) => {
      console.log(`  Adding Profile: ${profile.username}`);
      const user = await prisma.user.findUnique({
        where: { email: profile.userEmail }, // Ensure the User exists
      });

      if (!user) {
        console.error(`  No user found for profile with email: ${profile.userEmail}`);
        return;
      }

      await prisma.profile.upsert({
        where: { userId: user.id },
        update: {},
        create: {
          userId: user.id,
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
    }),
  );

  // Jam Information Seed Next!
  await Promise.all(
    config.defaultJamInformation.map(async (jam) => {
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
    }),
  );

  // Musical Goals
  await Promise.all(
    config.defaultMusicalGoals.map(async (musicalGoal) => {
      console.log(`  Adding Musical Goal: ${musicalGoal.goal}`);
      await prisma.goals.upsert({
        where: { id: musicalGoal.id },
        update: {},
        create: {
          goal: musicalGoal.goal,
          isEditing: musicalGoal.isEditing,
        },
      });
    }),
  );

  // Musical Experience Levels
  await Promise.all(
    config.defaultExperienceLevels.map(async (experience) => {
      console.log(`  Adding Experience Level: ${experience.level}`);
      await prisma.experiences.upsert({
        where: { id: experience.id },
        update: {},
        create: {
          level: experience.level,
          description: experience.description,
          isEditing: experience.isEditing,
        },
      });
    }),
  );

  // Musical Tastes
  await Promise.all(
    config.defaultMusicalTastes.map(async (tastes) => {
      console.log(`  Adding Musical Taste: ${tastes.genre}`);
      await prisma.tastes.upsert({
        where: { id: tastes.id },
        update: {},
        create: {
          genre: tastes.genre,
          isEditing: tastes.isEditing,
        },
      });
    }),
  );
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
