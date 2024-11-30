-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "fistName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "musicalGoals" TEXT NOT NULL,
    "musicalTastes" TEXT NOT NULL,
    "instruments" TEXT NOT NULL,
    "experience" "Experience" NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);
