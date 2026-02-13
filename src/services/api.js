import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.8:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

/* ===============================
   REQUEST INTERCEPTOR
=============================== */
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

/* ===============================
   RESPONSE INTERCEPTOR (AUTO REFRESH)
=============================== */
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // ✅ if no response
    if (!error.response) {
      return Promise.reject({ message: "Network error / Server not reachable" });
    }

    const status = error.response.status;

    // ✅ prevent infinite loop
    if ((status === 401 || status === 403) && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = await AsyncStorage.getItem("refreshToken");

        // refresh token missing => logout
        if (!refreshToken) {
          return Promise.reject({
            message: "Session expired, please login again",
          });
        }

        // ✅ call refresh API
        const res = await axios.post(
          "http://10.195.36.171:3000/api/auth/refresh-token",
          { refreshToken },
          { headers: { "Content-Type": "application/json" } }
        );

        const newAccessToken = res.data?.accessToken;

        if (!newAccessToken) {
          return Promise.reject({
            message: "Failed to refresh session, login again",
          });
        }

        // ✅ save new token
        await AsyncStorage.setItem("accessToken", newAccessToken);

        // ✅ retry old request with new token
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (refreshErr) {
        return Promise.reject(
          refreshErr.response?.data || {
            message: "Session expired, please login again",
          }
        );
      }
    }

    // normal error
    return Promise.reject(
      error.response?.data || { message: "Something went wrong" }
    );
  }
);

export default api;
