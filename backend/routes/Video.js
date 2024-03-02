import { Router } from "express";
import { getVideos } from "../controllers/Video.js";

const VideoRouter = Router();

VideoRouter.get("/", getVideos);

export default VideoRouter;
