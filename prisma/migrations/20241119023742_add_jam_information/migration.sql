/*
  Warnings:

  - You are about to drop the `Stuff` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Experience" AS ENUM ('novice', 'beginner', 'intermediate', 'professional');

-- DropTable
DROP TABLE "Stuff";

-- DropEnum
DROP TYPE "Condition";

-- CreateTable
CREATE TABLE "JamInformation" (
    "id" SERIAL NOT NULL,
    "organizer" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "instruments" TEXT NOT NULL,
    "experience" "Experience" NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "JamInformation_pkey" PRIMARY KEY ("id")
);
