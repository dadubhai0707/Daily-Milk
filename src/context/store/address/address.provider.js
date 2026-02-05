import React, { useState, useEffect, useCallback } from "react";
import AddressContext from "./index";
import AddressService from "../../../services/store/address.service";
import { toast } from "react-toastify";

const AddressProvider = ({ children }) => {
  const [address, setAddress] = useState([]);
  const [loading, setLoading] = useState(false);

  /* =======================
        FETCH ADDRESSES
  ======================= */
  const fetchAddress = useCallback(async () => {
    try {
      setLoading(true);
      const res = await AddressService.listAddress();
      setAddress(res?.data || []);
    } catch (err) {
      toast.error(err?.message || "Failed to fetch addresses");
    } finally {
      setLoading(false);
    }
  }, []);

  /* =======================
        ADD / UPDATE
  ======================= */
  const handleSubmitAddress = async ({ data, isEdit, addressId }) => {
    try {
      setLoading(true);

      if (isEdit && addressId) {
        await AddressService.editAddress(addressId, data);
        toast.success("Address updated ✅");
      } else {
        await AddressService.createAddress(data);
        toast.success("Address added ✅");
      }

      fetchAddress();
      return true;
    } catch (err) {
      toast.error(err?.message || "Address action failed");
      return false;
    } finally {
      setLoading(false);
    }
  };

  /* =======================
        DELETE (SOFT)
  ======================= */
  const deleteAddress = async (addressId) => {
    try {
      setLoading(true);
      await AddressService.deleteAddress(addressId);
      toast.success("Address deleted ❌");
      fetchAddress();
    } catch (err) {
      toast.error(err?.message || "Failed to delete address");
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
