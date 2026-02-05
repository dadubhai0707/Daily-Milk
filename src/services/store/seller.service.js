import api from "../api";

class sellerService {
  async listSeller() {
    try {
      const res = await api.get("/store/seller");
      console.log(res)
      return res.data;
    } catch (error) {
      throw error.response?.data || { message: "Failed To Get seller" };
    }
  }

  async createSeller(data) {
    try {
      const res = await api.post("/store/seller", data);
      return res.data;
    } catch (error) {
      throw error.response?.data || { message: "seller Not Created" };
    }
  }

  async editSeller(id, data) {
    try {
      // ✅ FIX
      const res = await api.put(`/store/seller/${id}`, data);
      return res.data;
    } catch (error) {
      throw error.response?.data || { message: "seller Detail Not Update" };
    }
  }

  async deleteSeller(id) {
    try {
      // ✅ FIX
      const res = await api.delete(`/store/seller/${id}`);
      return res.data;
    } catch (error) {
      throw error.response?.data || { message: "seller Not Deleted" };
    }
  }
}

const SellerService = new sellerService();
export default SellerService;
