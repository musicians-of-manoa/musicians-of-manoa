/*
  Warnings:

  - Added the required column `owner` to the `JamInformation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "JamInformation" ADD COLUMN     "owner" TEXT NOT NULL;
