/*
  Warnings:

  - Made the column `rating` on table `Profile` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Profile" ALTER COLUMN "rating" SET NOT NULL;

-- CreateTable
CREATE TABLE "Experiences" (
    "id" SERIAL NOT NULL,
    "level" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isEditing" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Experiences_pkey" PRIMARY KEY ("id")
);
