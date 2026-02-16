import { useState, useEffect, useCallback } from "react";
import ProfileContext from "./index";
import ProfileService from "../../../services/store/profile.service";
import Toast from "react-native-toast-message";

const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null); // { owner, store, stats, plan }
  const [loading, setLoading] = useState(false);

  // ✅ Fetch profile
  const fetchProfile = useCallback(async () => {
    try {
      setLoading(true);
      const res = await ProfileService.getStoreProfile();
      setProfile(res?.data || null);
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err?.message || "Failed to fetch profile",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  // ✅ Update profile
  const updateProfile = async ({ owner, store }) => {
    try {
      setLoading(true);

      const payload = {
        owner: owner || {},
        store: store || {},
      };

      const res = await ProfileService.updateStoreProfile(payload);

      Toast.show({
        type: "success",
        text1: res?.message || "Profile updated",
      });

      // Update local state
      setProfile((prev) => {
        if (!prev) return res?.data || null;

        return {
          ...prev,
          owner: res?.data?.owner || prev.owner,
          store: res?.data?.store || prev.store,
        };
      });

      return true;
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err?.message || "Profile update failed",
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return (
    <ProfileContext.Provider
      value={{
        profile,
        loading,
        fetchProfile,
        updateProfile,
        setProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
