"use server";
import { PrismaClient } from "@prisma/client";
import { verifyPassword } from "../crypt";

const prisma = new PrismaClient();

export type UserObject = {
  username: string;
  password: string;
};

export const getUser = async (userObject: UserObject) => {
  const { username, password } = userObject;
  try {
    const user = await prisma.user.findFirst({
      where: { username },
    });
    if (user) {
      const { password: fetchedPassword } = user;
      if (await verifyPassword(fetchedPassword, password)) {
        return { user };
      }
      return { errorMessage: "failed to fetch user" };
    }
  } catch (err) {}
};
