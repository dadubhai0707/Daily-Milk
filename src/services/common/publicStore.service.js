import api from "../api";

class publicStoreService {
  async listStores(page = 1, limit = 10) {
    try {
      const res = await api.get(`/user/list?page=${page}&limit=${limit}`);
      return res.data;
    } catch (error) {
      throw error.response?.data || { message: "Failed To Get Stores" };
    }
  }
}

const PublicStoreService = new publicStoreService();
export default PublicStoreService;
