import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { generateToken } from "../lib/userToken";

const prisma = new PrismaClient();

const saltrounds: number = 10;

export const signup = async (req: Request, res: Response) => {
  const { userName, email, password } = req.body;
  try {
    const isUserNameExist = await prisma.user.findUnique({
      where: {
        userName: userName,
      },
    });
    if (isUserNameExist) {
      res.status(409).json({ message: "UserName already Exists" });
    }
    const isEmailExist = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (isEmailExist) {
      res.status(409).json({ message: "Email already Exists" });
    }
    const hashedPassword = await bcrypt.hash(password, saltrounds);
    const createUser = await prisma.user.create({
      data: {
        userName: userName,
        email: email,
        password: hashedPassword,
      },
    });
    generateToken(createUser.user_id, res);
    res
      .status(200)
      .json({ message: "User Account created Successfully", data: createUser });
  } catch (error: any) {
    res.json({ error: error.message });
  }
};
