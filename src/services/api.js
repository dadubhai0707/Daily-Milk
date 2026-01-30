import axios from "axios";
const api = axios.create({
    baseURL: "http://10.140.189.171:3000/api",
    headers: {
        "Content-Type": "application/json"
    }
});

export default api;