import api from "../api";

class assignMilkService {
  async listBySeller(sellerId) {
    try {
      const res = await api.get(`/store/milk-assign/seller/${sellerId}`);
      return res.data;
    } catch (error) {
      throw error.response?.data || { message: "Failed to fetch assign history" };
    }
  }

  async sellerSummary(sellerId, params = {}) {
    try {
      const res = await api.get(
        `/store/milk-assign/seller-summary/${sellerId}`,
        { params }
      );
      return res.data;
    } catch (error) {
      throw error.response?.data || { message: "Failed to fetch summary" };
    }
  }

  async create(data) {
    try {
      const res = await api.post(`/store/milk-assign`, data);
      return res.data;
    } catch (error) {
      throw error.response?.data || { message: "Failed to assign milk" };
    }
  }

  async update(id, data) {
    try {
      const res = await api.put(`/store/milk-assign/${id}`, data);
      return res.data;
    } catch (error) {
      throw error.response?.data || { message: "Failed to update assign" };
    }
  }

  async remove(id) {
    try {
      const res = await api.delete(`/store/milk-assign/${id}`);
      return res.data;
    } catch (error) {
      throw error.response?.data || { message: "Failed to delete assign" };
    }
  }
}

const AssignMilkService = new assignMilkService();
export default AssignMilkService;
