import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const api = axios.create({
    baseURL: "http://10.140.189.171:3000/api",
    headers: {
        "Content-Type": "application/json"
    }
});

api.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem("accessToken");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);
export default api;