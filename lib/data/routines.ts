"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getRoutine = async (routineId: string) => {
  return await prisma.routine.findFirst({ where: { id: routineId } });
};
