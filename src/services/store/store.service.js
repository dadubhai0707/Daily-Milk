import api from "../api";
const plan = {
    id: "697ade66ab3df15b45cffcd0",
    name: "Basic",
    price: 999
};

class storeService {
    async createOrder() {
        try {
            const res = await api.post("/store/plan/create-order", {
                planId: plan.id
            });
            return res.data;
        } catch (error) {
            throw error.response?.data || { message: "Create order failed" };
        }
    }

    async verifyPayment(payload) {
        try {
            const res = await api.post("/store/plan/verify-payment", payload);
            return res.data;
        } catch (error) {
            throw error.response?.data || { message: "Payment verification failed" };
        }
    }
}
const StoreService = new storeService();
export default StoreService;