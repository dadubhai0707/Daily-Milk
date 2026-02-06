import api from "../api";
class SellerProfileService {
  async getProfile() {
    try {
      const res = await api.get("/seller/profile");
      return res.data;
    } catch (error) {
      throw error.response?.data || { message: "Failed to fetch seller profile" };
    }
  }
}
const sellerProfileService = new SellerProfileService();
export default sellerProfileService;
