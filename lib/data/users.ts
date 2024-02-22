"use server";
import { PrismaClient, User } from "@prisma/client";
import { hashPassword, verifyPassword } from "../crypt";

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

export const createUser = async (userObject: UserObject) => {
  const { username, password } = userObject;
  const hashedPassword = await hashPassword(password);
  try {
    const userData = { username, password: hashedPassword };

    const createdUser = await prisma.user.create({
      data: userData,
    });
    if (createdUser) {
      return createdUser;
    } else {
      return { errorMessage: "unable to create user" };
    }
  } catch (err) {
    console.log(err);
  }
};
