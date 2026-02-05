import { useState, useEffect, useCallback } from "react";
import PurchaseContext from "./index";
import PurchaseService from "../../../services/store/purchase.service";
import Toast from "react-native-toast-message";

const PurchaseProvider = ({ children }) => {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPurchase = useCallback(async () => {
    try {
      setLoading(true);
      const res = await PurchaseService.listPurchase();
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

  const handleSubmitPurchase = async ({ data, isEdit, purchaseId }) => {
    try {
      if (isEdit && purchaseId) {
        await PurchaseService.editPurchase(purchaseId, data);
        Toast.show({ type: "success", text1: "Purchase updated" });
      } else {
        await PurchaseService.createPurchase(data);
        Toast.show({ type: "success", text1: "Purchase added" });
      }

      fetchPurchase();
      return true;
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err?.message || "Purchase action failed",
      });
      return false;
    }
  };

  const deletePurchase = async (purchaseId) => {
    try {
      await PurchaseService.deletePurchase(purchaseId);
      Toast.show({ type: "success", text1: "Purchase deleted" });
      fetchPurchase();
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err?.message || "Delete failed",
      });
    }
  };

  useEffect(() => {
    fetchPurchase();
  }, [fetchPurchase]);

  return (
    <PurchaseContext.Provider
      value={{
        purchases,
        loading,
        fetchPurchase,
        handleSubmitPurchase,
        deletePurchase,
      }}
    >
      {children}
    </PurchaseContext.Provider>
  );
};

export default PurchaseProvider;
