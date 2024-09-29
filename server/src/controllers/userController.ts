import User from "../models/userModel";
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getUser = async (req: Request, res: Response) => {
  try {
    const findUsers: User[] = await prisma.user.findMany();
    res.json(findUsers);
  } catch (error: any) {
    res.json({ message: error.message });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { user_name, emailId, password }: User = req.body;
  try {
    const createUser: User = await prisma.user.create({
      data: {
        user_name: user_name,
        emailId: emailId,
        password: password,
      },
    });
    res.json({ message: "Inserted User successfully!", createUser });
  } catch (error: any) {
    res.json({ message: error.message });
  }
};
