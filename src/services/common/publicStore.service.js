import api from "../api";

class publicStoreService {
    async listStores() {
        try {
            const res = await api.get("/user/list");
            return res.data;
        } catch (error) {
            throw error.response?.data || { message: "Failed To Get Stores" };
        }
    }
}

const PublicStoreService = new publicStoreService();
export default PublicStoreService;
