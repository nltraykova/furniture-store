-- AlterTable
ALTER TABLE "furnitures" ADD COLUMN     "userId" TEXT NOT NULL DEFAULT 'cms27a8z40000d4nq0jew3w7n';

-- AddForeignKey
ALTER TABLE "furnitures" ADD CONSTRAINT "furnitures_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
