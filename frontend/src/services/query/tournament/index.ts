import { useQuery } from "@tanstack/react-query";
import ClientBase from "../../ClientBase";

const getTournaments = async () => {
    return ClientBase.get("/api/tournament")
}

export function useTournamentQuery() {
    return useQuery({ queryKey: ['tournament'], queryFn: getTournaments })
}