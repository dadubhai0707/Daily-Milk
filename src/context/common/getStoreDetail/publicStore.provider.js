import { useCallback, useEffect, useState } from "react";
import Toast from "react-native-toast-message";

import PublicStoreContext from "./index";
import PublicStoreService from "../../../services/common/publicStore.service";

const PublicStoreProvider = ({ children }) => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchStores = useCallback(async () => {
    try {
      setLoading(true);
      const res = await PublicStoreService.listStores();
      setStores(res?.data || []);
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err?.message || "Failed to fetch stores",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStores();
  }, [fetchStores]);

  return (
    <PublicStoreContext.Provider
      value={{
        stores,
        loading,
        fetchStores,
      }}
    >
      {children}
    </PublicStoreContext.Provider>
  );
};

export default PublicStoreProvider;
