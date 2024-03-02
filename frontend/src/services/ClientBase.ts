import axios from "axios";

const ClientBase = axios.create({
    baseURL: "http://localhost:5001",
})

export default ClientBase;