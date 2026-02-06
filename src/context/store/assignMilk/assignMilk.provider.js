import { useCallback, useState } from "react";
import Toast from "react-native-toast-message";
import AssignMilkContext from "./index";
import AssignMilkService from "../../../services/store/assignMilk.service";

const AssignMilkProvider = ({ children }) => {
  const [assignHistory, setAssignHistory] = useState([]);
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchAssignHistory = useCallback(async (sellerId) => {
    try {
      setLoading(true);
      const res = await AssignMilkService.listBySeller(sellerId);
      setAssignHistory(res?.data || []);
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err?.message || "Failed to fetch history",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchSellerSummary = useCallback(async (sellerId, params = {}) => {
    try {
      const res = await AssignMilkService.sellerSummary(sellerId, params);
      setSummary(res?.data || null);
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err?.message || "Failed to fetch summary",
      });
    }
  }, []);

  const createAssign = async ({ sellerId, payload }) => {
    try {
      await AssignMilkService.create(payload);
      Toast.show({ type: "success", text1: "Milk assigned successfully" });

      // refresh
      fetchAssignHistory(sellerId);
      fetchSellerSummary(sellerId, { date: payload.date, milkType: payload.milkType });

      return true;
    } catch (err) {
      Toast.show({ type: "error", text1: err?.message || "Assign failed" });
      return false;
    }
  };

  const updateAssign = async ({ sellerId, assignId, payload }) => {
    try {
      await AssignMilkService.update(assignId, payload);
      Toast.show({ type: "success", text1: "Assign updated successfully" });

      fetchAssignHistory(sellerId);
      fetchSellerSummary(sellerId, { date: payload.date, milkType: payload.milkType });

      return true;
    } catch (err) {
      Toast.show({ type: "error", text1: err?.message || "Update failed" });
      return false;
    }
  };

  const deleteAssign = async ({ sellerId, assignId }) => {
    try {
      await AssignMilkService.remove(assignId);
      Toast.show({ type: "success", text1: "Assign deleted successfully" });

      fetchAssignHistory(sellerId);
      return true;
    } catch (err) {
      Toast.show({ type: "error", text1: err?.message || "Delete failed" });
      return false;
    }
  };

  return (
    <AssignMilkContext.Provider
      value={{
        assignHistory,
        summary,
        loading,
        fetchAssignHistory,
        fetchSellerSummary,
        createAssign,
        updateAssign,
        deleteAssign,
      }}
    >
      {children}
    </AssignMilkContext.Provider>
  );
};

export default AssignMilkProvider;
