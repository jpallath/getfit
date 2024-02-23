"use server";
import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../crypt";

const prisma = new PrismaClient();

export type UserObject = {
  id: string;
  username: string;
  password: string;
  darkMode: boolean;
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

export const updateDarkMode = async (userObject: UserObject) => {
  const { id, darkMode } = userObject;
  return await prisma.user.update({
    where: { id },
    data: { isDarkMode: darkMode },
  });
};

export const deleteUser = async (userObject: UserObject) => {
  const { id } = userObject;
  return await prisma.user.delete({ where: { id } });
};
