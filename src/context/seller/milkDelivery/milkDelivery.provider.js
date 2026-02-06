import { useState } from "react";
import Toast from "react-native-toast-message";

import SellerMilkDeliveryContext from "./index";
import SellerMilkDeliveryService from "../../../services/seller/milkDelivery.service";

const SellerMilkDeliveryProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  // ✅ Mark Delivered
  const markDelivered = async (data) => {
    try {
      setLoading(true);
      const res = await SellerMilkDeliveryService.createDelivery(data);

      Toast.show({
        type: "success",
        text1: "Delivery marked successfully",
      });

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
        markDelivered,
      }}
    >
      {children}
    </SellerMilkDeliveryContext.Provider>
  );
};

export default SellerMilkDeliveryProvider;
