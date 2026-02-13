import { useCallback, useEffect, useState } from "react";
import Toast from "react-native-toast-message";

import PublicStoreContext from "./index";
import PublicStoreService from "../../../services/common/publicStore.service";

const PublicStoreProvider = ({ children }) => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ pagination states
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const limit = 10;

  // ✅ first load / refresh
  const fetchStores = useCallback(async () => {
    try {
      setLoading(true);

      const res = await PublicStoreService.listStores(1, limit);

      setStores(res?.data || []);
      setPage(1);
      setHasMore(res?.pagination?.hasMore ?? false);
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err?.message || "Failed to fetch stores",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  // ✅ load next page (infinite scroll)
  const fetchMoreStores = useCallback(async () => {
    try {
      if (loading) return;
      if (!hasMore) return;

      const nextPage = page + 1;

      const res = await PublicStoreService.listStores(nextPage, limit);

      setStores((prev) => {
        const newData = res?.data || [];

        // ✅ prevent duplicate
        const map = new Map(prev.map((x) => [String(x._id), x]));
        newData.forEach((x) => map.set(String(x._id), x));

        return Array.from(map.values());
      });

      setPage(nextPage);
      setHasMore(res?.pagination?.hasMore ?? false);
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err?.message || "Failed to load more stores",
      });
    }
  }, [page, hasMore, loading]);

  useEffect(() => {
    fetchStores();
  }, [fetchStores]);

  return (
    <PublicStoreContext.Provider
      value={{
        stores,
        loading,
        fetchStores,
        fetchMoreStores,
        hasMore,
      }}
    >
      {children}
    </PublicStoreContext.Provider>
  );
};

export default PublicStoreProvider;
