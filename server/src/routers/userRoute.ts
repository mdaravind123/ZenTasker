import { Router } from "express";
import * as controller from "../controllers/userController";

const route = Router();

route.get("/users", controller.getUser);
route.post("/", controller.createUser);

export default route;
