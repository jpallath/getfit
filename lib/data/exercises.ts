import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { Exercise } from "@/components/ui/exercises/fetchExercises";

export const fetchExercise = async (): Promise<Exercise[]> => {
  try {
    const exercises = await prisma.exercise.findMany({});
    return exercises;
  } catch (err) {
    console.log(err);
    return [];
  }
};
