/*
  Warnings:

  - You are about to drop the `_ReviewToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `image` to the `JamInformation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jamName` to the `JamInformation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ReviewToUser" DROP CONSTRAINT "_ReviewToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_ReviewToUser" DROP CONSTRAINT "_ReviewToUser_B_fkey";

-- AlterTable
ALTER TABLE "JamInformation" ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "jamName" TEXT NOT NULL;

-- DropTable
DROP TABLE "_ReviewToUser";

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
