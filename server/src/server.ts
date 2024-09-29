import express from "express";
import connectDb from "./config/dbConfig";
import route from "./routers/userRoute";

const app = express();

const port: number = 3001;

app.use(express.json());

connectDb();

app.use("/api", route);

app.listen(port, () => {
  console.log(`App is running successfully at port ${port}`);
});
