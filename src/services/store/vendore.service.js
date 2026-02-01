import api from "../api";

class vendorService {
    async listVendor(payload) {
        try {
            const res = await api.get("/store/vendor");
            return res.data;
        } catch (error) {
            throw error.response?.data || { message: "Failed To Get Vendor" };
        }
    }
    async createVendor(data) {
        try {
            const res = await api.post("/store/vendor", data);
            return res.data;
        } catch (error) {
            throw error.response?.data || { message: "Vendor Not Created" };
        }
    }
    async editVendor(id, data) {
        try {
            const res = await api.put(`/store/vendor/${id}`, data);
            return res.data;
        } catch (error) {
            throw error.response?.data || { message: "Vendor Detail Not Update" };
        }
    }
    async deleteVendor(id) {
        try {
            const res = await api.delete(`/store/vendor/${id}`);
            return res.data;
        } catch (error) {
            throw error.response?.data || { message: "Vendor Not Deleted" };
        }
    }
}
const StoreService = new vendorService();
export default StoreService;