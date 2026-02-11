import { useCallback, useEffect, useState } from "react";
import Toast from "react-native-toast-message";

import CustomerProfileContext from "./index";
import CustomerProfileService from "../../../services/customer/customerProfile.service";

const CustomerProfileProvider = ({ children }) => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchProfile = useCallback(async () => {
        try {
            setLoading(true);
            const res = await CustomerProfileService.getProfile();
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

    useEffect(() => {
        fetchProfile();
    }, [fetchProfile]);

    return (
        <CustomerProfileContext.Provider
            value={{
                profile,
                loading,
                fetchProfile,
            }}
        >
            {children}
        </CustomerProfileContext.Provider>
    );
};

export default CustomerProfileProvider;