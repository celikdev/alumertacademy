import { useQuery } from "@tanstack/react-query"; import ClientBase from "../../ClientBase";

const getLessons = async () => {
    return ClientBase.get("/api/lesson")
}

export function useLessonQuery() {
    return useQuery({ queryKey: ['lesson'], queryFn: getLessons })
}