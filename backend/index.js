import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

import MainRouter from "./routes/index.js";
import { connectDB } from "./utils/connectDB.js";

const app = express();

dotenv.config();
app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use("/api", MainRouter);

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
