/*
  Warnings:

  - You are about to drop the `Review` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Stuff` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ReviewToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ReviewToUser" DROP CONSTRAINT "_ReviewToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_ReviewToUser" DROP CONSTRAINT "_ReviewToUser_B_fkey";

-- DropTable
DROP TABLE "Review";

-- DropTable
DROP TABLE "Stuff";

-- DropTable
DROP TABLE "_ReviewToUser";

-- DropEnum
DROP TYPE "Condition";
