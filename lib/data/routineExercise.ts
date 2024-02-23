import { PrismaClient, Routine } from "@prisma/client";
const prisma = new PrismaClient();

export type FormRoutineExercise = {
  routineId: string;
  exerciseId: string;
  dayId: string;
  sets: number;
  reps: number;
};

export const getRoutineExercises = async (routineId: string, dayId: string) => {
  return await prisma.routineExercise.findMany({
    where: { routine_id: routineId, day_id: dayId },
  });
};

export const getRoutineExercise = async (
  routineExercise: FormRoutineExercise
) => {
  const { routineId, exerciseId, dayId } = routineExercise;
  return await prisma.routineExercise.findFirst({
    where: { routine_id: routineId, exercise_id: exerciseId, day_id: dayId },
  });
};

export const updateRoutineExercise = async (
  routineExercise: FormRoutineExercise
) => {
  const { routineId, exerciseId, dayId, sets, reps } = routineExercise;
  return await prisma.routineExercise.update({
    where: {
      routine_id_exercise_id_day_id: {
        routine_id: routineId,
        exercise_id: exerciseId,
        day_id: dayId,
      },
    },
    data: { sets, reps },
  });
};
