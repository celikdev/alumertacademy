import { useQuery } from "@tanstack/react-query"; import ClientBase from "../../ClientBase";

const getInstructor = async () => {
    return ClientBase.get("/api/instructor")
}

export function useInstructorQuery() {
    return useQuery({ queryKey: ['instructor'], queryFn: getInstructor })
}