import { Router } from "express";
import { createBlog } from "../controllers/Blog.js";
import {
  createTournament,
  deleteTournament,
} from "../controllers/Tournament.js";
import { createLesson, deleteLesson } from "../controllers/Lesson.js";
import {
  createInstructor,
  deleteInstructor,
} from "../controllers/Instructor.js";
import { createVideo, deleteVideo } from "../controllers/Video.js";

const AdminRouter = Router();

AdminRouter.post("/blog", createBlog);

AdminRouter.post("/tournament", createTournament);
AdminRouter.delete("/tournament/:tournamentID", deleteTournament);

AdminRouter.post("/lesson", createLesson);
AdminRouter.delete("/lesson/:lessonID", deleteLesson);

AdminRouter.post("/instructor", createInstructor);
AdminRouter.delete("/instructor/:instructorID", deleteInstructor);

AdminRouter.post("/video", createVideo);
AdminRouter.delete("/video/:videoID", deleteVideo);

export default AdminRouter;
