import { Router } from "express";
import { getTournament, getTournaments } from "../controllers/Tournament.js";

const TournamentRoutes = Router();

TournamentRoutes.get("/", getTournaments);
TournamentRoutes.get("/:tournamentID", getTournament);

export default TournamentRoutes;
