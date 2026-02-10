import api from "../api";

class PaymentService {
  // ✅ Create Razorpay order
  async createOrder(planId) {
    try {
      const res = await api.post("/store/plan/create-order", { planId });
      return res.data;
    } catch (error) {
      throw error.response?.data || { message: "Failed to create order" };
    }
  }

  // ✅ Verify payment + activate store
  async verifyPayment(payload) {
    try {
      const res = await api.post("/store/plan/verify-payment", payload);
      return res.data;
    } catch (error) {
      throw error.response?.data || { message: "Payment verification failed" };
    }
  }
}

const paymentService = new PaymentService();
export default paymentService;
