import express from "express";
import connectDb from "./config/dbConfig";
import cors from "cors";
import route from "./routers/loginRoute";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const port: string | number = process.env.PORT || 8080;

app.use(cors({ origin: "http://localhost:3000" }));

app.use(cookieParser());

app.use(express.json());

connectDb();

app.use("/api", route);

app.listen(port, () => {
  console.log(`App is running successfully at port ${port}`);
});
