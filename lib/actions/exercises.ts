
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req:any, res:any) {
  if (req.method === "GET") {
    const users = await prisma.exercise.findMany();
    res.status(200).json(users);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}