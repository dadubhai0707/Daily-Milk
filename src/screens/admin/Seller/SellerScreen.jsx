import React, { useState, useContext, useMemo } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "./SellerStyle";
import SellerProvider from "../../../context/store/seller/seller.provider";
import SellerContext from "../../../context/store/seller";
import FabButton from "../Dashboard/components/FabButton";
import SellerFormModal from "./SellerFormModal";

const SellerList = () => {
  const { seller = [], loading, handleSubmitSeller, fetchSeller } =
    useContext(SellerContext);

  const [search, setSearch] = useState("");
  const [formOpen, setFormOpen] = useState(false);

  const filtered = useMemo(() => {
    return seller.filter((s) => {
      const name = s?.userId?.name || "";
      const phone = s?.userId?.mobile || "";
      return `${name} ${phone}`.toLowerCase().includes(search.toLowerCase());
    });
  }, [seller, search]);

  const renderSeller = ({ item }) => {
    const name = item?.userId?.name || "Unknown";
    const phone = item?.userId?.mobile || "-";

    const isActive = item?.isActive === true;

    return (
      <View style={[styles.card, !isActive && styles.inactiveCard]}>
        {/* AVATAR */}
        <View style={styles.avatarWrap}>
          <View style={styles.vendorAvatar}>
            <Text style={styles.vendorAvatarText}>{name.charAt(0)}</Text>
          </View>

          {/* ✅ GREEN if active, RED if inactive */}
          <View
            style={[
              styles.statusDot,
              isActive ? styles.greenDot : styles.redDot,
            ]}
          />
        </View>

        {/* CONTENT */}
        <View style={{ flex: 1 }}>
          <View style={styles.rowBetween}>
            <View>
              <Text style={[styles.name, !isActive && styles.inactiveText]}>
                {name}
              </Text>

              <Text style={styles.meta}>
                Role: {item?.userId?.role || "-"}
              </Text>
            </View>

            {/* ✅ badge green/red */}
            <View
              style={[
                styles.badge,
                isActive ? styles.activeBadge : styles.inactiveBadge,
              ]}
            >
              <Text
                style={[
                  styles.badgeText,
                  isActive ? styles.activeBadgeText : styles.inactiveBadgeText,
                ]}
              >
                {isActive ? "ACTIVE" : "INACTIVE"}
              </Text>
            </View>
          </View>

          <View style={styles.footerRow}>
            <View style={styles.phoneRow}>
              <Icon name="call-outline" size={14} color="#6b7280" />
              <Text style={styles.phone}>{phone}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const NoSeller = () => (
    <View style={{ paddingVertical: 40, alignItems: "center" }}>
      <Text style={{ fontSize: 16, fontWeight: "600", color: "#64748b" }}>
        No Seller Found
      </Text>

      <TouchableOpacity style={{ marginTop: 10 }} onPress={fetchSeller}>
        <Text style={{ color: "#12a19c", fontWeight: "700" }}>Reload</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
  

      {/* SEARCH */}
      <View style={styles.searchBox}>
        <Icon name="search-outline" size={18} color="#9ca3af" />
        <TextInput
          placeholder="Search sellers by name or number"
          placeholderTextColor="#9ca3af"
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* LIST */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item?._id}
        renderItem={renderSeller}
        contentContainerStyle={{ paddingBottom: 140 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={!loading ? <NoSeller /> : null}
        refreshing={loading}
        onRefresh={fetchSeller}
      />

      {/* FAB */}
      <FabButton title="Add Seller" onPress={() => setFormOpen(true)} />

      <SellerFormModal
        visible={formOpen}
        onClose={() => setFormOpen(false)}
        onSubmit={async (data) => {
          await handleSubmitSeller({
            data,
            isEdit: false,
            sellerId: null,
          });
          setFormOpen(false);
        }}
      />
    </SafeAreaView>
  );
};

export default function SellerScreen() {
  return (
    <SellerProvider>
      <SellerList />
    </SellerProvider>
  );
}
