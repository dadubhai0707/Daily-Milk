import { useCallback, useEffect, useState } from "react";
import Toast from "react-native-toast-message";

import CustomerHistoryContext from "./index";
import CustomerHistoryService from "../../../services/customer/customerHistory.service";

const CustomerHistoryProvider = ({ children }) => {
  const [thisMonth, setThisMonth] = useState([]);
  const [previousMonth, setPreviousMonth] = useState([]);

  const [loading, setLoading] = useState(false);

  const fetchThisMonth = useCallback(async () => {
    try {
      setLoading(true);
      const res = await CustomerHistoryService.thisMonth();
      setThisMonth(res?.data?.deliveries || []);
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err?.message || "Failed to fetch this month history",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchPreviousMonth = useCallback(async () => {
    try {
      setLoading(true);
      const res = await CustomerHistoryService.previousMonth();
      setPreviousMonth(res?.data?.deliveries || []);
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err?.message || "Failed to fetch previous month history",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  // ✅ Fetch both (dashboard needs both sometimes)
  const fetchAllHistory = useCallback(async () => {
    await fetchThisMonth();
    await fetchPreviousMonth();
  }, [fetchThisMonth, fetchPreviousMonth]);

  useEffect(() => {
    fetchThisMonth(); // dashboard default
  }, [fetchThisMonth]);

  return (
    <CustomerHistoryContext.Provider
      value={{
        thisMonth,
        previousMonth,
        loading,
        fetchThisMonth,
        fetchPreviousMonth,
        fetchAllHistory,
      }}
    >
      {children}
    </CustomerHistoryContext.Provider>
  );
};

export default CustomerHistoryProvider;
