import React, { useState, useEffect, useCallback } from "react";
import AddressContext from "./index";
import AddressService from "../../../services/store/address.service";
import Toast from "react-native-toast-message";

const AddressProvider = ({ children }) => {
  const [address, setAddress] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ FETCH
  const fetchAddress = useCallback(async () => {
    try {
      setLoading(true);
      const res = await AddressService.listAddress();
      setAddress(res?.data || []);
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err?.message || "Failed to fetch addresses",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  // ✅ ADD / UPDATE
  const handleSubmitAddress = async ({ data, isEdit, addressId }) => {
    try {
      setLoading(true);

      if (isEdit && addressId) {
        await AddressService.editAddress(addressId, data);
        Toast.show({ type: "success", text1: "Address updated ✅" });
      } else {
        await AddressService.createAddress(data);
        Toast.show({ type: "success", text1: "Address added ✅" });
      }

      fetchAddress();
      return true;
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err?.message || "Address action failed",
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  // ✅ DELETE
  const deleteAddress = async (addressId) => {
    try {
      setLoading(true);
      await AddressService.deleteAddress(addressId);
      Toast.show({ type: "success", text1: "Address deleted ❌" });
      fetchAddress();
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err?.message || "Failed to delete address",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAddress();
  }, [fetchAddress]);

  return (
    <AddressContext.Provider
      value={{
        address,
        loading,
        fetchAddress,
        handleSubmitAddress,
        deleteAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export default AddressProvider;
