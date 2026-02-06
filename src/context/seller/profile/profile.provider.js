import { useState, useCallback, useEffect } from "react";
import Toast from "react-native-toast-message";

import SellerProfileContext from "./index";
import SellerProfileService from "../../../services/seller/profile.service";

const SellerProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchSellerProfile = useCallback(async () => {
    try {
      setLoading(true);
      const res = await SellerProfileService.getProfile();
      setProfile(res?.data || null);
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err?.message || "Failed to fetch seller profile",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  // ✅ Auto fetch
  useEffect(() => {
    fetchSellerProfile();
  }, [fetchSellerProfile]);

  return (
    <SellerProfileContext.Provider
      value={{
        profile,
        loading,
        fetchSellerProfile,
      }}
    >
      {children}
    </SellerProfileContext.Provider>
  );
};

export default SellerProfileProvider;
