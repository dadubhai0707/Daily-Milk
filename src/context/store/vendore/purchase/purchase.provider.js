import React, { useCallback, useEffect, useState } from "react";
import PurchaseContext from "./index";
import PurchaseService from "../../../../services/store/purchase.service";
import Toast from "react-native-toast-message";

export default function PurchaseProvider({ children }) {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ GET ALL PURCHASES
  const fetchPurchases = useCallback(async () => {
    try {
      setLoading(true);
      const res = await PurchaseService.listPurchases();
      setPurchases(res?.data || []);
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err?.message || "Failed to fetch purchases",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  // ✅ ADD PURCHASE
  const handleSubmitPurchase = async ({ data, isEdit, purchaseId }) => {
    try {
      if (isEdit && purchaseId) {
        await PurchaseService.editPurchase(purchaseId, data);
        Toast.show({ type: "success", text1: "Purchase updated" });
      } else {
        await PurchaseService.createPurchase(data);
        Toast.show({ type: "success", text1: "Purchase added" });
      }

      fetchPurchases();
      return true;
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err?.message || "Purchase action failed",
      });
      return false;
    }
  };

  // ✅ DELETE PURCHASE
  const deletePurchase = async (purchaseId) => {
    try {
      await PurchaseService.deletePurchase(purchaseId);
      Toast.show({ type: "success", text1: "Purchase deleted" });
      fetchPurchases();
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err?.message || "Failed to delete purchase",
      });
    }
  };



  const fetchVendorPurchases = useCallback(async (vendorId) => {
    try {
      setLoading(true);
      const res = await PurchaseService.listVendorPurchases(vendorId);
      setPurchases(res?.data || []);
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err?.message || "Failed to fetch vendor purchases",
      });
    } finally {
      setLoading(false);
    }
  }, []);



  useEffect(() => {
    fetchPurchases();
  }, [fetchPurchases]);

  return (
    <PurchaseContext.Provider
      value={{
        purchases,
        loading,
        fetchPurchases, // ✅ VERY IMPORTANT
        handleSubmitPurchase,
        deletePurchase,
        fetchVendorPurchases
      }}
    >
      {children}
    </PurchaseContext.Provider>
  );
}
