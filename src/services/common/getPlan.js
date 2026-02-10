import api from "../api";

class PlanService {
  // ✅ Get All Active Plans
  async getAllPlans() {
    try {
      const res = await api.get("/super-admin/subscription");
      return res.data;
    } catch (error) {
      throw error.response?.data || { message: "Failed to fetch plans" };
    }
  }

  // ✅ Get Single Plan By ID (optional)
  async getPlanById(planId) {
    try {
      const res = await api.get(`/super-admin/subscription/${planId}`);
      return res.data;
    } catch (error) {
      throw error.response?.data || { message: "Failed to fetch plan" };
    }
  }
}

const planService = new PlanService();
export default planService;
