"use server";
import { Exercise, PrismaClient } from "@prisma/client";
import { z } from "zod";
const prisma = new PrismaClient();

const ExerciseSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  name: z.string(),
  description: z.string(),
  video: z.string(),
  image: z.string(),
});

const CreateExercise = ExerciseSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export async function createExercise(formData: FormData) {
  const validatedFields = CreateExercise.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
    video: formData.get("video"),
    image: formData.get("image"),
  });
  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      message: "WHOOPS",
    };
  }
  try {
    const { name, description, video, image } = validatedFields.data;
    const data = { name, description, video, image };
    return await prisma.exercise.create({ data });
  } catch (err) {
    console.log(err);
  }
}

export async function updateExercise(exerciseData: Exercise) {
  const { id, name, description, video, image } = exerciseData;
  return await prisma.exercise.update({
    where: { id },
    data: { name, description, video, image },
  });
}

export async function deleteExercise(exerciseId: string) {
  return await prisma.exercise.delete({ where: { id: exerciseId } });
}
