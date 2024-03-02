import { Router } from "express";
import { login, register, verify } from "../controllers/Auth.js";

const AuthRouter = Router();

AuthRouter.post("/login", login);
AuthRouter.post("/register", register);
AuthRouter.get("/verify", verify);

export default AuthRouter;
