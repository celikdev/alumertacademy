import { useQuery } from "@tanstack/react-query";
import ClientBase from "../../ClientBase";

const getBlogs = async () => {
    return ClientBase.get("/api/blog")
}

export function useBlogQuery() {
    return useQuery({ queryKey: ['blog'], queryFn: getBlogs })
}