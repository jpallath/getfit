/*
  Warnings:

  - You are about to drop the `RoutineExercises` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "RoutineExercises" DROP CONSTRAINT "RoutineExercises_exercise_id_fkey";

-- DropForeignKey
ALTER TABLE "RoutineExercises" DROP CONSTRAINT "RoutineExercises_routine_id_fkey";

-- DropTable
DROP TABLE "RoutineExercises";

-- CreateTable
CREATE TABLE "RoutineExercise" (
    "routine_id" TEXT NOT NULL,
    "exercise_id" TEXT NOT NULL,
    "day_id" TEXT NOT NULL,
    "sets" INTEGER NOT NULL,
    "reps" INTEGER NOT NULL,

    CONSTRAINT "RoutineExercise_pkey" PRIMARY KEY ("routine_id","exercise_id")
);

-- CreateIndex
CREATE INDEX "RoutineIDIndex" ON "RoutineExercise"("routine_id");

-- CreateIndex
CREATE INDEX "ExerciseIDIndex" ON "RoutineExercise"("exercise_id");

-- AddForeignKey
ALTER TABLE "RoutineExercise" ADD CONSTRAINT "RoutineExercise_routine_id_fkey" FOREIGN KEY ("routine_id") REFERENCES "Routines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoutineExercise" ADD CONSTRAINT "RoutineExercise_exercise_id_fkey" FOREIGN KEY ("exercise_id") REFERENCES "Exercises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
