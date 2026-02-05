import { useState, useEffect, useCallback } from "react";
import CustomerContext from "./index";
import CustomerService from "../../../services/store/customer.service";
import Toast from "react-native-toast-message";

const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCustomer = useCallback(async () => {
    try {
      setLoading(true);
      const res = await CustomerService.listCustomer();
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

  const handleSubmitCustomer = async ({ data, isEdit, customerId }) => {
    try {
      if (isEdit && customerId) {
        await CustomerService.editCustomer(customerId, data);
        Toast.show({ type: "success", text1: "Customer updated" });
      } else {
        await CustomerService.createCustomer(data);
        Toast.show({ type: "success", text1: "Customer added" });
      }

      fetchCustomer();
      return true;
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err?.message || "Customer action failed",
      });
      return false;
    }
  };

  const deleteCustomer = async (customerId) => {
    try {
      await CustomerService.deleteCustomer(customerId);
      Toast.show({ type: "success", text1: "Customer deleted" });
      fetchCustomer();
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err?.message || "Failed to delete customer",
      });
    }
  };

  useEffect(() => {
    fetchCustomer();
  }, [fetchCustomer]);

  return (
    <CustomerContext.Provider
      value={{
        customers,
        loading,
        fetchCustomer,
        handleSubmitCustomer,
        deleteCustomer,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};

export default CustomerProvider;
