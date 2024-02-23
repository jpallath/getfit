/*
  Warnings:

  - The primary key for the `RoutineExercise` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "RoutineExercise" DROP CONSTRAINT "RoutineExercise_pkey",
ADD CONSTRAINT "RoutineExercise_pkey" PRIMARY KEY ("routine_id", "exercise_id", "day_id");
