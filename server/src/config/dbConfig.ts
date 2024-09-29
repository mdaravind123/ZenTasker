import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const connectDb = async () => {
  try {
    await prisma.$connect();
    console.log("Connected to database successfully!");
  } catch (error: any) {
    console.error("Error connecting to db", error);
  }
  return prisma;
};

export default connectDb;
