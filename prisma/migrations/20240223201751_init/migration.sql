/*
  Warnings:

  - Added the required column `createdAt` to the `UserCalorie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `UserCalorie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `UserExercise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `UserWeight` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `UserWeight` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserCalorie" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "UserExercise" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "UserWeight" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
