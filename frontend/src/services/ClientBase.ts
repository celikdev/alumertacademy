import axios from "axios";

const ClientBase = axios.create({
    baseURL: "http://192.168.1.172:5001",
})

export default ClientBase;