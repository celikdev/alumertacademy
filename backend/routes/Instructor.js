import { Router } from "express";
import { getInstructor, getInstructors } from "../controllers/Instructor.js";

const InstructorRoute = Router();

InstructorRoute.get("/", getInstructors);
InstructorRoute.get("/:instructorID", getInstructor);

export default InstructorRoute;
