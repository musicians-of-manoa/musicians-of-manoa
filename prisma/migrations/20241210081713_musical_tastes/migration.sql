-- CreateTable
CREATE TABLE "Tastes" (
    "id" SERIAL NOT NULL,
    "genre" TEXT NOT NULL,
    "isEditing" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Tastes_pkey" PRIMARY KEY ("id")
);
