/*
  Warnings:

  - Made the column `rating` on table `Profile` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Profile" ALTER COLUMN "rating" SET NOT NULL;
