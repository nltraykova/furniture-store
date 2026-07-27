-- CreateTable
CREATE TABLE "furnitures" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "make" TEXT NOT NULL,
    "material" TEXT,
    "model" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "year" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "furnitures_pkey" PRIMARY KEY ("id")
);
