import React, { useState, useEffect, useCallback } from "react";
import VendorContext from "./index";
import StoreService from "../../../services/store/address.service";
import Toast from "react-native-toast-message";
const AddressProvider = ({ children }) => {
    const [address, setAddress] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchAddress = useCallback(async () => {
        try {
            setLoading(true);
            const res = await StoreService.listAddress();
            setAddress(res?.data || []);
        } catch (err) {
            Toast.show({
                type: "error",
                text1: err?.message || "Failed to fetch vendors",
            });
        } finally {
            setLoading(false);
        }
    }, []);

    const handleSubmitAddress = async ({ data, isEdit, vendorId }) => {
        try {
            if (isEdit && vendorId) {
                await StoreService.editAddress(vendorId, data);
                Toast.show({ type: "success", text1: "Address updated" });
            } else {
                await StoreService.createAddress(data);
                Toast.show({ type: "success", text1: "Address added" });
            }

            fetchAddress();
            return true;
        } catch (err) {
            Toast.show({
                type: "error",
                text1: err?.message || "Address action failed",
            });
            return false;
        }
    };

    const deleteAddress = async (vendorId) => {
        try {
            await StoreService.deleteAddress(vendorId);
            Toast.show({ type: "success", text1: "Address deleted" });
            fetchAddress();
        } catch (err) {
            Toast.show({
                type: "error",
                text1: err?.message || "Failed to delete Address",
            });
        }
    };


    useEffect(() => {
        fetchAddress();
    }, [fetchAddress]);

    return (
        <VendorContext.Provider
            value={{
                address,
                loading,
                fetchAddress,
                handleSubmitAddress,
                deleteAddress,
            }}
        >
            {children}
        </VendorContext.Provider>
    );
};

export default AddressProvider;
