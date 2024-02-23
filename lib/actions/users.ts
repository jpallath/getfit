"use server";
import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../crypt";

const prisma = new PrismaClient();

export type UserObject = {
  username: string;
  password: string;
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
