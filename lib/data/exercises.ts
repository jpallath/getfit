"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { Exercise } from "@prisma/client";

export const fetchExercise = async (): Promise<Exercise[]> => {
  try {
    const exercises = await prisma.exercise.findMany({});
    return exercises;
  } catch (err) {
    console.error(err);
    return [];
  }
};
