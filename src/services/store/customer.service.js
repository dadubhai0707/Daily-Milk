import api from "../api";

class customerService {
  async listCustomer() {
    try {
      const res = await api.get("/store/customer");
      return res.data;
    } catch (error) {
      throw error.response?.data || { message: "Failed To Get Customer" };
    }
  }

  async createCustomer(data) {
    try {
      const res = await api.post("/store/customer", data);
      return res.data;
    } catch (error) {
      throw error.response?.data || { message: "Customer Not Created" };
    }
  }

  async editCustomer(id, data) {
    try {
      // ✅ FIX
      const res = await api.put(`/store/customer/${id}`, data);
      return res.data;
    } catch (error) {
      throw error.response?.data || { message: "Customer Detail Not Update" };
    }
  }

  async deleteCustomer(id) {
    try {
      // ✅ FIX
      const res = await api.delete(`/store/customer/${id}`);
      return res.data;
    } catch (error) {
      throw error.response?.data || { message: "Customer Not Deleted" };
    }
  }
}

const CustomerService = new customerService();
export default CustomerService;
