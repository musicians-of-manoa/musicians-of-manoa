'use server';

import { hash } from 'bcrypt';
import { redirect } from 'next/navigation';
import { Experience, JamInformation } from '@prisma/client';
import { prisma } from './prisma';
/**
 * Adds a new jam information entry to the database.
 * @param jamInfo, an object containing the required fields fields: organizer, genre,
 * location, date, instruments, experience, and description.
 */
export async function addJamInformation(jamInfo: {
  owner: string;
  jamName: string;
  image: string;
  organizer: string;
  genre: string;
  location: string;
  date: Date; // Includes date & time
  instruments: string;
  experience: Experience;
  description: string;
}) {
  // Ensure the `date` field is converted to a JavaScript Date object
  const parsedDate = new Date(jamInfo.date);

  if (Number.isNaN(parsedDate.getTime())) {
    throw new Error('Invalid date format.');
  }

  // Insert into the database
  await prisma.jamInformation.create({
    data: {
      owner: jamInfo.owner,
      jamName: jamInfo.jamName,
      image: jamInfo.image,
      organizer: jamInfo.organizer,
      genre: jamInfo.genre,
      location: jamInfo.location,
      date: parsedDate,
      instruments: jamInfo.instruments,
      experience: jamInfo.experience,
      description: jamInfo.description,
    },
  });
  // After adding, redirect to the jam information list page
  redirect('/search/jam-search');
}

/**
 * Edits a jam information entry.
 * @param jamInfo, an object containing the required fields fields: organizer, genre,
 * location, date, instruments, experience, and description.
 */
export async function editJamInformation(jamInfo: JamInformation) {
  // Ensure the `date` field is converted to a JavaScript Date object
  const parsedDate = new Date(jamInfo.date);

  if (Number.isNaN(parsedDate.getTime())) {
    throw new Error('Invalid date format.');
  }

  // Insert into the database
  await prisma.jamInformation.update({
    where: { id: jamInfo.id },
    data: {
      owner: jamInfo.owner,
      jamName: jamInfo.jamName,
      image: jamInfo.image,
      organizer: jamInfo.organizer,
      genre: jamInfo.genre,
      location: jamInfo.location,
      date: parsedDate,
      instruments: jamInfo.instruments,
      experience: jamInfo.experience,
      description: jamInfo.description,
    },
  });
  // After adding, redirect to the jam information list page
  redirect('/search/jam-search');
}

/**
 * Creates a new musical goal entry in the database.
 * @param createGoal, an object containing the required fields fields: goal, isEditing
 */
export async function createGoal(goal: {
  goal: string;
  isEditing: number;
}) {
  // Insert into the database
  await prisma.goals.create({
    data: {
      goal: goal.goal,
      isEditing: goal.isEditing,
    },
  });
  // After adding, redirect to the list page
  redirect('/admin/edit/goals');
}

/**
 * Edits an existing musical goal entry in the database.
 * @param editGoal, an object containing the required fields fields: goal, isEditing
 */

export async function editGoal(goal: {
  id: number;
  goal: string;
  isEditing: number;
}) {
  // Update the database
  await prisma.goals.update({
    where: { id: goal.id },
    data: {
      goal: goal.goal,
      isEditing: goal.isEditing,
    },
  });
  // After updating, redirect to the list page
  redirect('/admin/edit/goals');
}

/**
 * Grabs all existing musical goal entries in the database.
 * @param editGoal, an object containing the required fields fields: goal, isEditing
 */
export async function getGoals() {
  // Grab all goals from the database
  const goals = await prisma.goals.findMany();
  return goals;
}

/**
 * Creates a new musical experience entry in the database.
 * @param createExperienceLevel, an object containing the required fields fields: level, description, isEditing
 */
export async function createExperience(experience: {
  level: string;
  description: string;
  isEditing: number;
}) {
  // Insert into the database
  await prisma.experiences.create({
    data: {
      level: experience.level,
      description: experience.description,
      isEditing: experience.isEditing,
    },
  });
  // After adding, redirect to the list page
  redirect('/admin/edit/experience');
}

/**
 * Edits an existing musical experience entry in the database.
 * @param editExperienceLevel, an object containing the required fields fields: levle, description, isEditing
 */

export async function editExperience(experience: {
  id: number;
  level: string;
  description: string;
  isEditing: number;
}) {
  // Update the database
  await prisma.experiences.update({
    where: { id: experience.id },
    data: {
      level: experience.level,
      description: experience.description,
      isEditing: experience.isEditing,
    },
  });
  // After updating, redirect to the list page
  redirect('/admin/edit/experience');
}

/**
 * Grabs all existing musical experience entries in the database.
 * @param getExperienceLevel, an object containing the required fields fields: level, description, isEditing
 */
export async function getExperiences() {
  // Grab all experiences from the database
  const experiences = await prisma.experiences.findMany();
  return experiences;
}

/**
 * Creates a new user in the database.
 * @param credentials, an object with the following properties: email, password.
 */
export async function createUser(credentials: { email: string; password: string }) {
  // console.log(`createUser data: ${JSON.stringify(credentials, null, 2)}`);
  const password = await hash(credentials.password, 10);
  await prisma.user.create({
    data: {
      email: credentials.email,
      password,
    },
  });
}

/**
 * Changes the password of an existing user in the database.
 * @param credentials, an object with the following properties: email, password.
 */
export async function changePassword(credentials: { email: string; password: string }) {
  // console.log(`changePassword data: ${JSON.stringify(credentials, null, 2)}`);
  const password = await hash(credentials.password, 10);
  await prisma.user.update({
    where: { email: credentials.email },
    data: {
      password,
    },
  });
}

export async function addReview(review: { rating: number; comment: string; userID: number }) {
  await prisma.review.create({
    data: {
      rating: review.rating,
      comment: review.comment,
      userID: review.userID,
    },
  });
  redirect('/profile');
}
