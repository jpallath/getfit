/*
  Warnings:

  - Added the required column `day_id` to the `RoutineExercises` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RoutineExercises" ADD COLUMN     "day_id" TEXT NOT NULL;
