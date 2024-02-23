-- AlterTable
ALTER TABLE "RoutineExercise" ADD COLUMN     "dayId" TEXT;

-- CreateIndex
CREATE INDEX "DayIDIndex" ON "RoutineExercise"("day_id");

-- AddForeignKey
ALTER TABLE "RoutineExercise" ADD CONSTRAINT "RoutineExercise_dayId_fkey" FOREIGN KEY ("dayId") REFERENCES "Day"("id") ON DELETE SET NULL ON UPDATE CASCADE;
