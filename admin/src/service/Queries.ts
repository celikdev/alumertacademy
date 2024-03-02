import { useQuery } from "@tanstack/react-query";
import { ClientBase } from "./client/ClientBase";

const query = useQuery({
    queryKey: "todos",
    queryFn: async () => {
        const response = await ClientBase.get("/todos");
        return response.data;
    },
});