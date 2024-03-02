import axios from "axios";

export const ClientBase = axios.create({
    baseURL: "http://localhost:5001",
});