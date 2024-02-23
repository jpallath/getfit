import { PrismaClient, Routine, RoutineExercises } from "@prisma/client";
const prisma = new PrismaClient();
export const getRoutineExercises = async (routineId: string, dayId: string) => {
  return await prisma.routineExercises.findMany({
    where: { routine_id: routineId, day_id: dayId },
  });
};
