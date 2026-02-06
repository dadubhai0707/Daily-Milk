import { useState, useCallback } from "react";
import Toast from "react-native-toast-message";

import SellerMilkAssignContext from "./index";
import SellerMilkAssignService from "../../../services/seller/milkAssign.service";

const SellerMilkAssignProvider = ({ children }) => {
  const [assignData, setAssignData] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ Today assign
  const fetchTodayAssign = useCallback(async () => {
    try {
      setLoading(true);
      const res = await SellerMilkAssignService.getTodayAssign();
      setAssignData(res?.data || null);
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err?.message || "Failed to fetch today assign",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  // ✅ Date wise assign
  const fetchAssignByDate = useCallback(async (date) => {
    try {
      setLoading(true);
      const res = await SellerMilkAssignService.getAssignByDate(date);
      setAssignData(res?.data || null);
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err?.message || "Failed to fetch assign",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <SellerMilkAssignContext.Provider
      value={{
        assignData,
        loading,
        fetchTodayAssign,
        fetchAssignByDate,
      }}
    >
      {children}
    </SellerMilkAssignContext.Provider>
  );
};

export default SellerMilkAssignProvider;
