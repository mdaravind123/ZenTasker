import { Router } from "express";
import * as UserLogin from "../controllers/userLogin";

const route = Router();

route.post("/signup", UserLogin.signup);

export default route;
