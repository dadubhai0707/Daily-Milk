import api from "../api";

class SellerMilkDeliveryService {
  // ✅ Mark delivery
  async createDelivery(data) {
    try {
      const res = await api.post("/seller/milk-delivered", data);
      return res.data;
    } catch (error) {
      throw (
        error.response?.data || { message: "Failed to mark milk delivery" }
      );
    }
  }
}

const sellerMilkDeliveryService = new SellerMilkDeliveryService();
export default sellerMilkDeliveryService;
