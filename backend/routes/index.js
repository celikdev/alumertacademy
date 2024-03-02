import { Router } from "express";

import AuthRouter from "./Auth.js";
import AdminRouter from "./Admin.js";
import BlogRouter from "./Blog.js";
import TournamentRoutes from "./Tournaments.js";
import LessonRouter from "./Lessons.js";
import InstructorRoute from "./Instructor.js";
import VideoRouter from "./Video.js";
import { verifyToken } from "../middleware/VerifyToken.js";

const MainRouter = Router();

MainRouter.use("/auth", AuthRouter);
MainRouter.use("/admin", verifyToken, AdminRouter);
MainRouter.use("/blog", BlogRouter);
MainRouter.use("/tournament", TournamentRoutes);
MainRouter.use("/lesson", LessonRouter);
MainRouter.use("/instructor", InstructorRoute);
MainRouter.use("/video", VideoRouter);

export default MainRouter;
