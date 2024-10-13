import jwt from "jsonwebtoken";
import { Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const jwtKey: string | undefined = process.env.JWT_SECRET || "";

const node_env: string | undefined = process.env.NODE_ENV || "";

export const generateToken = async (userId: string, res: Response) => {
  const token = jwt.sign({ userId }, jwtKey, { expiresIn: "30d" });
  res.cookie("jwt", token, {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure: node_env !== "development",
  });
};
