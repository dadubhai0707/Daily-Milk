import api from "../api";

class profileService {
  async getStoreProfile() {
    try {
      const res = await api.get("/store/profile");
      return res.data;
    } catch (error) {
      throw error.response?.data || { message: "Failed to get store profile" };
    }
  }

  async updateStoreProfile(data) {
    try {
      const res = await api.put("/store/profile", data);
      return res.data;
    } catch (error) {
      throw (
        error.response?.data || { message: "Failed to update store profile" }
      );
    }
  }
}

const ProfileService = new profileService();
export default ProfileService;
