import api from "../api";

class addressService {
    async listAddress() {
        try {
            const res = await api.get("/store/address");
            return res.data;
        } catch (error) {
            throw error.response?.data || { message: "Failed To Get Address" };
        }
    }
    async createAddress(data) {
        try {
            const res = await api.post("/store/address", data);
            return res.data;
        } catch (error) {
            throw error.response?.data || { message: "Address Not Created" };
        }
    }
    async editAddress(id, data) {
        try {
            const res = await api.put(`/store/address${id}`, data);
            return res.data;
        } catch (error) {
            throw error.response?.data || { message: "Address Detail Not Update" };
        }
    }
    async deleteAddress(id) {
        try {
            const res = await api.delete(`/store/address${id}`);
            return res.data;
        } catch (error) {
            throw error.response?.data || { message: "Address Not Deleted" };
        }
    }
}
const AddressService = new addressService();
export default AddressService;