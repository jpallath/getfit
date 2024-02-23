/*
  Warnings:

  - You are about to drop the column `dayId` on the `RoutineExercise` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "RoutineExercise" DROP CONSTRAINT "RoutineExercise_dayId_fkey";

-- AlterTable
ALTER TABLE "RoutineExercise" DROP COLUMN "dayId";

-- AddForeignKey
ALTER TABLE "RoutineExercise" ADD CONSTRAINT "RoutineExercise_day_id_fkey" FOREIGN KEY ("day_id") REFERENCES "Day"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
