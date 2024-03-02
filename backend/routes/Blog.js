import { Router } from "express";
import { getBlog, getBlogs } from "../controllers/Blog.js";

const BlogRouter = Router();

BlogRouter.get("/", getBlogs);
BlogRouter.get("/:blogID", getBlog);

export default BlogRouter;
