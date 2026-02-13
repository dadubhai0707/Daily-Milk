import { useCallback, useEffect, useState } from "react";
import Toast from "react-native-toast-message";

import JoinRequestContext from "./index";
import JoinRequestService from "../../../services/common/joinRequest.service";

const JoinRequestProvider = ({ children }) => {
  const [myRequests, setMyRequests] = useState([]);
  const [ownerRequests, setOwnerRequests] = useState([]);

  const [loading, setLoading] = useState(false);

  // ==========================
  // USER: Fetch my requests
  // ==========================
  const fetchMyRequests = useCallback(async () => {
    try {
      setLoading(true);
      const res = await JoinRequestService.myRequests();
      setMyRequests(res?.data || []);
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err?.message || "Failed to fetch my requests",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  // ==========================
  // OWNER: Fetch owner requests
  // ==========================
  const fetchOwnerRequests = useCallback(async () => {
    try {
      setLoading(true);
      const res = await JoinRequestService.ownerRequests();
      setOwnerRequests(res?.data || []);
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err?.message || "Failed to fetch owner requests",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  // ==========================
  // USER: Create request
  // ==========================
  const sendJoinRequest = async ({ storeID, roleRequested, message }) => {
    try {
      setLoading(true);

      const payload = {
        storeID,
        roleRequested,
        message: message || "",
      };

      await JoinRequestService.createRequest(payload);

      Toast.show({
        type: "success",
        text1: "Request sent successfully",
      });

      // refresh my requests
      fetchMyRequests();

      return true;
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err?.message || "Request failed",
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // OWNER: Approve / Reject
  // ==========================
  const processJoinRequest = async ({ requestId, action }) => {
    try {
      setLoading(true);

      await JoinRequestService.processRequest(requestId, action);

      Toast.show({
        type: "success",
        text1: action === "approve" ? "Request approved" : "Request rejected",
      });

      fetchOwnerRequests();
      return true;
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err?.message || "Failed to process request",
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Optional auto load (safe)
  useEffect(() => {
    fetchMyRequests();
  }, [fetchMyRequests]);

  return (
    <JoinRequestContext.Provider
      value={{
        loading,

        // user side
        myRequests,
        fetchMyRequests,
        sendJoinRequest,

        // owner side
        ownerRequests,
        fetchOwnerRequests,
        processJoinRequest,
      }}
    >
      {children}
    </JoinRequestContext.Provider>
  );
};

export default JoinRequestProvider;
