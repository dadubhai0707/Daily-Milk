import { useState, useEffect, useCallback } from "react";
import VendorContext from "./index";
import StoreService from "../../../services/store/seller.service";
import Toast from "react-native-toast-message";
const SellerProvider = ({ children }) => {
    const [seller, setSeller] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchSeller = useCallback(async () => {
        try {
            setLoading(true);
            const res = await StoreService.listSeller();
            setSeller(res?.data || []);
        } catch (err) {
            Toast.show({
                type: "error",
                text1: err?.message || "Failed to fetch vendors",
            });
        } finally {
            setLoading(false);
        }
    }, []);


    const handleSubmitVendor = async ({ data, isEdit, sellerId }) => {
        try {
            if (isEdit && sellerId) {
                await StoreService.editSeller(sellerId, data);
                Toast.show({ type: "success", text1: "Vendor updated" });
            } else {
                await StoreService.createSeller(data);
                Toast.show({ type: "success", text1: "Vendor added" });
            }

            fetchSeller();
            return true;
        } catch (err) {
            Toast.show({
                type: "error",
                text1: err?.message || "Vendor action failed",
            });
            return false;
        }
    };


    const deleteVendor = async (sellerId) => {
        try {
            await StoreService.deleteSeller(sellerId);
            Toast.show({ type: "success", text1: "Vendor deleted" });
            fetchSeller();
        } catch (err) {
            Toast.show({
                type: "error",
                text1: err?.message || "Failed to delete vendor",
            });
        }
    };


    useEffect(() => {
        fetchSeller();
    }, [fetchSeller]);

    return (
        <VendorContext.Provider
            value={{
                seller,
                loading,
                fetchSeller,
                handleSubmitVendor,
                deleteVendor,
            }}
        >
            {children}
        </VendorContext.Provider>
    );
};

export default SellerProvider;
