import { useState, useCallback, useEffect } from "react";
import Toast from "react-native-toast-message";

import SellerMilkDeliveryContext from "./index";
import SellerMilkDeliveryService from "../../../services/seller/milkDelivery.service";

const SellerMilkDeliveryProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  // ✅ Customers state
  const [customers, setCustomers] = useState([]);

  // ✅ Fetch customers (assigned areas only)
  const fetchCustomers = useCallback(async () => {
    try {
      setLoading(true);
      const res = await SellerMilkDeliveryService.listCustomers();
      setCustomers(res?.data || []);
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err?.message || "Failed to fetch customers",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  // ✅ Auto fetch on load
  useEffect(() => {
    fetchCustomers();
  }, [fetchCustomers]);

  // ✅ Mark Delivered
  const markDelivered = async (data) => {
    try {
      setLoading(true);
      const res = await SellerMilkDeliveryService.createDelivery(data);

      Toast.show({
        type: "success",
        text1: "Delivery marked successfully",
      });

      // ✅ Refresh customers list (optional)
      fetchCustomers();

      return res;
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err?.message || "Failed to mark delivery",
      });
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return (
    <SellerMilkDeliveryContext.Provider
      value={{
        loading,
        customers,
        fetchCustomers,
        markDelivered,
      }}
    >
      {children}
    </SellerMilkDeliveryContext.Provider>
  );
};

export default SellerMilkDeliveryProvider;
