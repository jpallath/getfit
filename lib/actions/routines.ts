"use server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

const RoutineExersiceSchema = z.object({});

const DaySchema = z.object({
  text: z.string(),
  isChecked: z.boolean(),
});

const RoutineSchema = z.object({
  id: z.string(),
  name: z.string(),
  days: z.array(DaySchema),
  
});

export async function createRoutine(routineForm: {}) {
  console.log(routineForm);
}
