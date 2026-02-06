import React, { useContext, useMemo, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import FabButton from "../Dashboard/components/FabButton";
import SellerMilkDeliveryModal from "./SellerMilkDeliveryModal";

// ✅ CONTEXT
import SellerMilkDeliveryProvider from "../../../context/seller/milkDelivery/milkDelivery.provider";
import SellerMilkDeliveryContext from "../../../context/seller/milkDelivery";

// ✅ SAME STYLE (Customer style)
import { styles } from "../../admin/Customer/customerStyle";

function SellerMilkDeliveryList() {
  const { customers = [], loading, fetchCustomers, markDelivered } = useContext(
    SellerMilkDeliveryContext
  );

  const [search, setSearch] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const filtered = useMemo(() => {
    return customers.filter((c) => {
      const name = c?.userId?.name || "";
      const mobile = c?.userId?.mobile || "";
      const fullAddress = c?.fullAddress || "";

      return `${name} ${mobile} ${fullAddress}`
        .toLowerCase()
        .includes(search.toLowerCase());
    });
  }, [customers, search]);

  const renderItem = ({ item }) => {
    const name = item?.userId?.name || "Unknown";
    const phone = item?.userId?.mobile || "-";

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.card}
        onPress={() => {
          setSelectedCustomer(item);
          setFormOpen(true);
        }}
      >
        <View style={styles.topRow}>
          <View style={styles.leftRow}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{name.charAt(0)}</Text>
            </View>

            <View>
              <Text style={styles.name}>{name}</Text>

              <View style={styles.phoneRow}>
                <Icon name="call-outline" size={13} color="#658686" />
                <Text style={styles.phone}>{phone}</Text>
              </View>
            </View>
          </View>

          <Icon name="chevron-forward" size={22} color="#1fadad" />
        </View>

        <View style={styles.addressRow}>
          <Icon name="location-outline" size={14} color="#1fadad" />
          <Text style={styles.address} numberOfLines={1}>
            {item?.fullAddress || "-"}
          </Text>
        </View>

        <View style={styles.metaRow}>
          <Text style={styles.metaText}>
            Milk: {String(item?.milkType || "-").toUpperCase()}
          </Text>

          <Text style={styles.metaText}>
            Daily: {item?.dailyQty || 0} L
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const NoCustomer = () => (
    <View style={{ paddingVertical: 40, alignItems: "center" }}>
      <Text style={{ fontSize: 16, fontWeight: "700", color: "#64748b" }}>
        No Customer Found
      </Text>

      <TouchableOpacity onPress={fetchCustomers} style={{ marginTop: 10 }}>
        <Text style={{ color: "#1fadad", fontWeight: "800" }}>Reload</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* SEARCH */}
      <View style={styles.searchBox}>
        <Icon name="search-outline" size={18} color="#658686" />
        <TextInput
          placeholder="Search customer by name, phone or address"
          placeholderTextColor="#658686"
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* LIST */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 140 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={!loading ? <NoCustomer /> : null}
        refreshing={loading}
        onRefresh={fetchCustomers}
      />

      {/* FAB */}
      <FabButton
        title="Deliver Milk"
        onPress={() => {
          setSelectedCustomer(null);
          setFormOpen(true);
        }}
      />

      {/* MODAL */}
      <SellerMilkDeliveryModal
        visible={formOpen}
        onClose={() => {
          setFormOpen(false);
          setSelectedCustomer(null);
        }}
        customer={selectedCustomer}
        onSubmit={async (payload) => {
          // ✅ API CALL
          await markDelivered(payload);

          // close modal
          setFormOpen(false);
          setSelectedCustomer(null);
        }}
      />
    </SafeAreaView>
  );
}

export default function SellerMilkDeliveryScreen() {
  return (
    <SellerMilkDeliveryProvider>
      <SellerMilkDeliveryList />
    </SellerMilkDeliveryProvider>
  );
}
