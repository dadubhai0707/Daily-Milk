import { useState, useEffect, useCallback } from "react";
import SellerContext from "./index";
import SellerService from "../../../services/store/seller.service";
import Toast from "react-native-toast-message";

const SellerProvider = ({ children }) => {
  const [seller, setSeller] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSeller = useCallback(async () => {
    try {
      setLoading(true);
      const res = await SellerService.listSeller();
      setSeller(res?.data || []);
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err?.message || "Failed to fetch sellers",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  // ✅ Create / Update Seller
  const handleSubmitSeller = async ({ data, isEdit, sellerId }) => {
    try {
      if (isEdit && sellerId) {
        await SellerService.editSeller(sellerId, data);
        Toast.show({ type: "success", text1: "Seller updated" });
      } else {
        await SellerService.createSeller(data);
        Toast.show({ type: "success", text1: "Seller added" });
      }

      fetchSeller();
      return true;
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err?.message || "Seller action failed",
      });
      return false;
    }
  };

  // ✅ Delete seller
  const deleteSeller = async (sellerId) => {
    try {
      await SellerService.deleteSeller(sellerId);
      Toast.show({ type: "success", text1: "Seller deleted" });
      fetchSeller();
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err?.message || "Failed to delete seller",
      });
    }
  };

  useEffect(() => {
    fetchSeller();
  }, [fetchSeller]);

  return (
    <SellerContext.Provider
      value={{
        seller,
        loading,
        fetchSeller,
        handleSubmitSeller,
        deleteSeller,
      }}
    >
      {children}
    </SellerContext.Provider>
  );
};

export default SellerProvider;
