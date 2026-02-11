import api from "../api";

class customerHistoryService {
  async thisMonth() {
    try {
      const res = await api.get("/customer/history/this-month");
      return res.data;
    } catch (error) {
      throw error.response?.data || { message: "Failed to get this month history" };
    }
  }

  async previousMonth() {
    try {
      const res = await api.get("/customer/history/previous-month");
      return res.data;
    } catch (error) {
      throw error.response?.data || { message: "Failed to get previous month history" };
    }
  }
}

const CustomerHistoryService = new customerHistoryService();
export default CustomerHistoryService;
