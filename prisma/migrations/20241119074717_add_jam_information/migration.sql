-- CreateEnum
CREATE TYPE "Condition" AS ENUM ('good', 'fair', 'poor', 'excellent');

-- CreateTable
CREATE TABLE "Stuff" (
    "id" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "condition" TEXT NOT NULL,

    CONSTRAINT "Stuff_pkey" PRIMARY KEY ("id")
);
