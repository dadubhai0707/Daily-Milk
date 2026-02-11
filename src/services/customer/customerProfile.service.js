import api from "../api";
class customerProfileService {
  async getProfile() {
    try {
      const res = await api.get("/customer/profile");
      return res.data;
    } catch (error) {
      throw error.response?.data || { message: "Failed to get profile" };
    }
  }
}

const CustomerProfileService = new customerProfileService();
export default CustomerProfileService;
