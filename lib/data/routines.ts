import {
  PrismaClient,
  Routine,
  Exercise,
  RoutineExercises,
} from "@prisma/client";

const prisma = new PrismaClient();

export type ExerciseObject = {
  id: string;
  name: string;
  reps: number;
  sets: number;
};

export type RoutineObject = {
  routineName: string;
  exercises: ExerciseObject[];
};

export const createRoutine = async (routineObject: RoutineObject) => {
  const { routineName, exercises } = routineObject;
  const data = {
    name: routineName,
  };
  let routine: Routine = {
    id: "",
    name: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  try {
    routine = await prisma.routine.create({ data });
  } catch (err) {
    console.log(err);
  }

  if (routine && routine.id) {
    try {
      for (const exercise of exercises) {
        const routineExercisedata = {
          routine_id: routine.id,
          exercise_id: exercise.id,
          reps: exercise.reps,
          sets: exercise.sets,
        };
        await prisma.routineExercises.create({ data: routineExercisedata });
      }
    } catch (err) {}
  }
};
