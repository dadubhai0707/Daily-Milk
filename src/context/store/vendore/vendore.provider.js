import React, { useState, useEffect, useCallback } from "react";
import VendorContext from "./index";
import StoreService from "../../services/vendor.service";
import Toast from "react-native-toast-message";
const VendorProvider = ({ children }) => {
    const [vendors, setVendors] = useState([]);
    const [loading, setLoading] = useState(false);

    /* =======================
       FETCH ALL VENDORS
    ======================= */
    const fetchVendors = useCallback(async () => {
        try {
            setLoading(true);
            const res = await StoreService.listVendor();
            setVendors(res?.data || []);
        } catch (err) {
            Toast.show({
                type: "error",
                text1: err?.message || "Failed to fetch vendors",
            });
        } finally {
            setLoading(false);
        }
    }, []);

    /* =======================
       ADD / UPDATE VENDOR
    ======================= */
    const handleSubmitVendor = async ({ data, isEdit, vendorId }) => {
        try {
            if (isEdit && vendorId) {
                await StoreService.editVendor(vendorId, data);
                Toast.show({ type: "success", text1: "Vendor updated" });
            } else {
                await StoreService.createVendor(data);
                Toast.show({ type: "success", text1: "Vendor added" });
            }

            fetchVendors();
            return true;
        } catch (err) {
            Toast.show({
                type: "error",
                text1: err?.message || "Vendor action failed",
            });
            return false;
        }
    };

    /* =======================
       SOFT DELETE (optional)
    ======================= */
    const deleteVendor = async (vendorId) => {
        try {
            await StoreService.deleteVendor(vendorId);
            Toast.show({ type: "success", text1: "Vendor deleted" });
            fetchVendors();
        } catch (err) {
            Toast.show({
                type: "error",
                text1: err?.message || "Failed to delete vendor",
            });
        }
    };

    /* =======================
       AUTO FETCH ON MOUNT
    ======================= */
    useEffect(() => {
        fetchVendors();
    }, [fetchVendors]);

    return (
        <VendorContext.Provider
            value={{
                vendors,
                loading,
                fetchVendors,
                handleSubmitVendor,
                deleteVendor,
            }}
        >
            {children}
        </VendorContext.Provider>
    );
};

export default VendorProvider;
