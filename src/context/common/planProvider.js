import { useState, useCallback, useEffect } from "react";
import Toast from "react-native-toast-message";

import PlanContext from "./index";
import planService from "../../services/common/getPlan";

const PlanProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [plans, setPlans] = useState([]);

  const fetchPlans = useCallback(async () => {
    try {
      setLoading(true);

      const res = await planService.getAllPlans();

      if (res?.success) {
        setPlans(res?.data || []);
      } else {
        setPlans([]);
      }
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err?.message || "Failed to fetch plans",
      });
      setPlans([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPlans();
  }, [fetchPlans]);

  return (
    <PlanContext.Provider
      value={{
        loading,
        plans,
        fetchPlans,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};

export default PlanProvider;
