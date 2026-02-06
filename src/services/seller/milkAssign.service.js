import api from "../api";

class SellerMilkAssignService {
  // ✅ Today Assign
  async getTodayAssign() {
    try {
      const res = await api.get("/seller/milk-assign/today");
      return res.data;
    } catch (error) {
      throw error.response?.data || { message: "Failed to fetch today assign" };
    }
  }

  // ✅ Date wise Assign
  async getAssignByDate(date) {
    try {
      const res = await api.get(`/seller/milk-assign/date/${date}`);
      return res.data;
    } catch (error) {
      throw error.response?.data || { message: "Failed to fetch assign by date" };
    }
  }

}




const sellerMilkAssignService = new SellerMilkAssignService();
export default sellerMilkAssignService;
