-- CreateTable
CREATE TABLE "Exercises" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "video" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Exercises_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Routines" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Routines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoutineExercises" (
    "routine_id" TEXT NOT NULL,
    "exercise_id" TEXT NOT NULL,
    "sets" INTEGER NOT NULL,
    "reps" INTEGER NOT NULL,

    CONSTRAINT "RoutineExercises_pkey" PRIMARY KEY ("routine_id","exercise_id")
);

-- CreateIndex
CREATE INDEX "RoutineIDIndex" ON "RoutineExercises"("routine_id");

-- CreateIndex
CREATE INDEX "ExerciseIDIndex" ON "RoutineExercises"("exercise_id");

-- AddForeignKey
ALTER TABLE "RoutineExercises" ADD CONSTRAINT "RoutineExercises_routine_id_fkey" FOREIGN KEY ("routine_id") REFERENCES "Routines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoutineExercises" ADD CONSTRAINT "RoutineExercises_exercise_id_fkey" FOREIGN KEY ("exercise_id") REFERENCES "Exercises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
