'use server';

import { hash } from 'bcrypt';
import { redirect } from 'next/navigation';
import { Experience } from '@prisma/client';
import { prisma } from './prisma';

/**
 * Adds a new jam information entry to the database.
 * @param jamInfo, an object containing the required fields fields: organizer, genre,
 * location, date, instruments, experience, and description.
 */
export async function addJamInformation(jamInfo: {
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
  redirect('/jam-information');
}

/**
 * Edits an existing jam information entry in the database.
 * @param editJamInfo, an object containing the required fields fields: organizer, genre,
 * location, date, instruments, experience, and description.
 */
export async function editJamInformation(jamInfo: {
  id: number;
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

  // Update the database
  await prisma.jamInformation.update({
    where: { id: jamInfo.id },
    data: {
      organizer: jamInfo.organizer,
      genre: jamInfo.genre,
      location: jamInfo.location,
      date: parsedDate,
      instruments: jamInfo.instruments,
      experience: jamInfo.experience,
      description: jamInfo.description,
    },
  });
  // After updating, redirect to the list page
  redirect('/jam-information');
}

/**
 * Deletes an existing stuff from the database.
 * @param id, the id of the stuff to delete.
 */
/**
export async function deleteStuff(id: number) {
  // console.log(`deleteStuff id: ${id}`);
  await prisma.stuff.delete({
    where: { id },
  });
  // After deleting, redirect to the list page
  redirect('/list');
}
*/

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

export async function addReview(review: { rating: number; comment: string; userId: number }) {
  await prisma.review.create({
    data: {
      rating: review.rating,
      comment: review.comment,
      userId: review.userId,
    },
  });
  redirect('/profile');
}
