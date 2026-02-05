import api from "../api";
class authService {
    async Register(data) {
        try {
            const res = await api.post("/auth/register", data);
            return res.data;
        } catch (error) {
            return error.response?.data?.message || "Register failed"
        }
    }

    async Login(data) {
        try {
            const res = await api.post("/auth/login", data);
            return res.data;
        } catch (error) {
            return error.response?.data?.message || "Login failed"
        }
    }
    async Logout(refreshToken) {
        try {
            const res = await api.post("/auth/logout", {
                refreshToken,
            });
            return res.data;
        } catch (error) {
            throw error.response?.data || { message: "Logout failed" };
        }
    }
}
const AuthService = new authService();
export default AuthService;