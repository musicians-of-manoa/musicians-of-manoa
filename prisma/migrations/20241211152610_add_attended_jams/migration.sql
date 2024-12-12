-- CreateTable
CREATE TABLE "AttendedJam" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "jamId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AttendedJam_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AttendedJam_userId_jamId_key" ON "AttendedJam"("userId", "jamId");

-- AddForeignKey
ALTER TABLE "AttendedJam" ADD CONSTRAINT "AttendedJam_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AttendedJam" ADD CONSTRAINT "AttendedJam_jamId_fkey" FOREIGN KEY ("jamId") REFERENCES "JamInformation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
