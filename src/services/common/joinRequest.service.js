import api from "../api";

class joinRequestService {
  // ✅ Create join request (User)
  async createRequest(data) {
    try {
      const res = await api.post("/store/join-request", data);
      return res.data;
    } catch (error) {
      throw error.response?.data || { message: "Failed to send join request" };
    }
  }

  // ✅ My requests (User)
  async myRequests() {
    try {
      const res = await api.get("/store/join-request/my");
      return res.data;
    } catch (error) {
      throw error.response?.data || { message: "Failed to fetch requests" };
    }
  }

  // ✅ Owner requests list
  async ownerRequests() {
    try {
      const res = await api.get("/store/join-request/owner");
      return res.data;
    } catch (error) {
      throw error.response?.data || { message: "Failed to fetch owner requests" };
    }
  }

  // ✅ Owner approve / reject
  async processRequest(id, action) {
    try {
      const res = await api.patch(`/store/join-request/${id}`, { action });
      return res.data;
    } catch (error) {
      throw error.response?.data || { message: "Failed to process request" };
    }
  }
}

const JoinRequestService = new joinRequestService();
export default JoinRequestService;
