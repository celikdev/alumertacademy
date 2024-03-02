import { Router } from "express";
import { getLessons } from "../controllers/Lesson.js";

const LessonRouter = Router();

LessonRouter.get("/", getLessons);

export default LessonRouter;
