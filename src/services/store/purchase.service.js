import api from "../api";

class purchaseService {
  async listPurchases() {
    try {
      const res = await api.get("/store/milk-procurement");
      return res.data;
    } catch (error) {
      throw error.response?.data || { message: "Failed to fetch purchases" };
    }
  }

  async createPurchase(data) {
    try {
      const res = await api.post("/store/milk-procurement", data);
      return res.data;
    } catch (error) {
      throw error.response?.data || { message: "Failed to create purchase" };
    }
  }

  async editPurchase(id, data) {
    try {
      const res = await api.put(`/store/milk-procurement/${id}`, data);
      return res.data;
    } catch (error) {
      throw error.response?.data || { message: "Failed to update purchase" };
    }
  }

  async deletePurchase(id) {
    try {
      const res = await api.delete(`/store/milk-procurement/${id}`);
      return res.data;
    } catch (error) {
      throw error.response?.data || { message: "Failed to delete purchase" };
    }
  }
  async listVendorPurchases(vendorId) {
    try {
      const res = await api.get(`/store/milk-procurement/vendor/${vendorId}`);
      return res.data;
    } catch (error) {
      throw error.response?.data || { message: "Failed to fetch vendor purchases" };
    }
  }
}

const PurchaseService = new purchaseService();
export default PurchaseService;
