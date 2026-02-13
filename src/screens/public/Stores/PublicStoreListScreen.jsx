import React, { useMemo, useState, useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./PublicStoreListScreen.style";

import PublicStoreProvider from "../../../context/common/getStoreDetail/publicStore.provider";
import PublicStoreContext from "../../../context/common/getStoreDetail/index";

const PublicStoreList = () => {
  const [search, setSearch] = useState("");

  const { stores = [], loading, fetchStores } = useContext(PublicStoreContext);

  // ✅ Filter
  const filtered = useMemo(() => {
    return stores.filter((s) =>
      `${s.shopName} ${s.ownerName} ${s.city} ${s.pincode}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [stores, search]);

  const renderStore = ({ item }) => {
    return (
      <TouchableOpacity activeOpacity={0.9} style={styles.card}>
        {/* TOP */}
        <View style={styles.cardTop}>
          <View style={styles.logoWrap}>
            <Icon name="storefront-outline" size={24} color="#1fadad" />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.storeName}>{item.shopName}</Text>

            <View style={styles.metaRow}>
              <Icon name="map-marker-outline" size={14} color="#64748b" />
              <Text style={styles.metaText}>
                {item.city} - {item.pincode}
              </Text>
            </View>

            <View style={styles.metaRow}>
              <Icon name="account-outline" size={14} color="#64748b" />
              <Text style={styles.metaText}>Owner: {item.ownerName}</Text>
            </View>
          </View>

          {/* ACTIVE STATUS */}
          <View
            style={[
              styles.statusPill,
              { backgroundColor: item.isActive ? "#dcfce7" : "#fee2e2" },
            ]}
          >
            <View
              style={[
                styles.statusDot,
                { backgroundColor: item.isActive ? "#16a34a" : "#ef4444" },
              ]}
            />
            <Text
              style={[
                styles.statusText,
                { color: item.isActive ? "#16a34a" : "#ef4444" },
              ]}
            >
              {item.isActive ? "ACTIVE" : "INACTIVE"}
            </Text>
          </View>
        </View>

        {/* STATS */}
        <View style={styles.statsGrid}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>SELLERS</Text>
            <Text style={styles.statValue}>{item.sellers}</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statLabel}>CUSTOMERS</Text>
            <Text style={styles.statValue}>{item.customers}</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statLabel}>TODAY</Text>
            <Text style={styles.statValue}>{item.todayDelivered} L</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statLabel}>MONTH</Text>
            <Text style={styles.statValue}>{item.monthDelivered} L</Text>
          </View>
        </View>

        {/* FOOTER */}
        <View style={styles.footerRow}>
          <Text style={styles.smallHint}>ID: #{String(item._id).slice(-5)}</Text>

          <TouchableOpacity style={styles.viewBtn} activeOpacity={0.85}>
            <Text style={styles.viewBtnText}>View Details</Text>
            <Icon name="chevron-right" size={18} color="#fff" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  const Empty = () => (
    <View style={{ paddingVertical: 50, alignItems: "center" }}>
      <Icon name="store-off-outline" size={40} color="#94a3b8" />
      <Text
        style={{
          marginTop: 10,
          fontSize: 16,
          fontWeight: "900",
          color: "#64748b",
        }}
      >
        No Stores Found
      </Text>
      <Text
        style={{
          marginTop: 6,
          fontSize: 13,
          fontWeight: "700",
          color: "#94a3b8",
        }}
      >
        Try searching another name or city
      </Text>

      <TouchableOpacity style={{ marginTop: 14 }} onPress={fetchStores}>
        <Text style={{ color: "#12a19c", fontWeight: "900" }}>Reload</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* SEARCH */}
      <View style={styles.searchBox}>
        <Icon name="magnify" size={20} color="#648487" />
        <TextInput
          placeholder="Search store, owner, city..."
          placeholderTextColor="#648487"
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* LIST */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item._id}
        renderItem={renderStore}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
        ListEmptyComponent={!loading ? <Empty /> : null}
        refreshing={loading}
        onRefresh={fetchStores}
      />
    </SafeAreaView>
  );
};

export default function PublicStoreListScreen() {
  return (
    <PublicStoreProvider>
      <PublicStoreList />
    </PublicStoreProvider>
  );
}
