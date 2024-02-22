const bcrypt = require("bcrypt");

export const hashPassword = async (password: string) => {
  const saltRounds = 10;
  return await bcrypt.hash(password);
};

export const verifyPassword = async (
  password: string,
  hashedPassword: string
) => {
  return await bcrypt.compare(password, hashedPassword);
};

