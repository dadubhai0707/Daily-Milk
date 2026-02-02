import { useState, useEffect, useCallback } from "react";
import VendorContext from "./index";
import StoreService from "../../../services/store/customer.service";
import Toast from "react-native-toast-message";
const CustomerProvider = ({ children }) => {
    const [customer, setCustomer] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchCustomer = useCallback(async () => {
        try {
            setLoading(true);
            const res = await StoreService.listCustomer();
            setCustomer(res?.data || []);
        } catch (err) {
            Toast.show({
                type: "error",
                text1: err?.message || "Failed to fetch vendors",
            });
        } finally {
            setLoading(false);
        }
    }, []);


    const handleSubmitCustomer = async ({ data, isEdit, vendorId }) => {
        try {
            if (isEdit && vendorId) {
                await StoreService.editCustomer(vendorId, data);
                Toast.show({ type: "success", text1: "Vendor updated" });
            } else {
                await StoreService.createCustomer(data);
                Toast.show({ type: "success", text1: "Vendor added" });
            }

            fetchCustomer();
            return true;
        } catch (err) {
            Toast.show({
                type: "error",
                text1: err?.message || "Vendor action failed",
            });
            return false;
        }
    };


    const deleteCustomer = async (vendorId) => {
        try {
            await StoreService.deleteCustomer(vendorId);
            Toast.show({ type: "success", text1: "Vendor deleted" });
            fetchCustomer();
        } catch (err) {
            Toast.show({
                type: "error",
                text1: err?.message || "Failed to delete vendor",
            });
        }
    };


    useEffect(() => {
        fetchCustomer();
    }, [fetchCustomer]);

    return (
        <VendorContext.Provider
            value={{
                customer,
                loading,
                fetchCustomer,
                handleSubmitCustomer,
                deleteCustomer,
            }}
        >
            {children}
        </VendorContext.Provider>
    );
};

export default CustomerProvider;
