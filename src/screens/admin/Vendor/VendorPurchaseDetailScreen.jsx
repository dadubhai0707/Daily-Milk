import React, { useContext, useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import PurchaseContext from "../../../context/store/vendore/purchase/index";
import { styles } from "./VendorPurchaseDetailStyle";

function VendorPurchaseDetailScreen({ route, navigation }) {
  const { vendor } = route.params;

  const {
    purchases = [],
    fetchVendorPurchases,
    loading,
  } = useContext(PurchaseContext);

  const [search, setSearch] = useState("");

  useEffect(() => {
    if (vendor?._id) {
      fetchVendorPurchases(vendor._id);
    }
  }, [vendor?._id]);

  // ✅ Search filter
  const filtered = useMemo(() => {
    return purchases.filter((p) =>
      `${p.quantity} ${p.ratePerLiter} ${p.totalAmount}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [purchases, search]);

  const renderItem = ({ item }) => {
    const milkType = item?.milkTypesSupplied?.[0] || "-";

    return (
      <View style={styles.historyCard}>
        <View>
          <Text style={styles.historyTitle}>
            {milkType.toUpperCase()} • {item.quantity}L @ ₹{item.ratePerLiter}/L
          </Text>
          <Text style={styles.historyDate}>
            {new Date(item.date).toDateString()}
          </Text>
        </View>

        <Text style={styles.amount}>₹{item.totalAmount}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
 

      {/* VENDOR TOP CARD */}
      <View style={styles.vendorCard}>
        <View style={styles.vendorAvatar}>
          <Text style={styles.vendorAvatarText}>
            {vendor?.name?.charAt(0)}
          </Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.vendorName}>{vendor?.name}</Text>
          <Text style={styles.vendorPhone}>{vendor?.phone}</Text>
          <Text style={styles.vendorAddress}>{vendor?.address}</Text>
        </View>
      </View>

      {/* SEARCH */}
      <View style={styles.searchBox}>
        <Icon name="search-outline" size={18} color="#658686" />
        <TextInput
          placeholder="Search purchase history..."
          placeholderTextColor="#658686"
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
        />
      </View>

      {/* ✅ LOADING */}
      {loading ? (
        <View style={{ paddingTop: 40, alignItems: "center" }}>
          <ActivityIndicator size="large" color="#12a19c" />
          <Text style={{ marginTop: 10, color: "#658686" }}>
            Loading purchases...
          </Text>
        </View>
      ) : (
        <>
          {/* HISTORY LIST */}
          <FlatList
            data={filtered}
            keyExtractor={(item) => item._id}
            renderItem={renderItem}
            contentContainerStyle={{ paddingBottom: 120 }}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <View style={{ paddingTop: 40, alignItems: "center" }}>
                <Text style={{ color: "#658686", fontSize: 14 }}>
                  No Purchase Milk
                </Text>
              </View>
            )}
          />
        </>
      )}

      {/* PURCHASE BUTTON */}
      <TouchableOpacity
        style={styles.purchaseBtn}
        onPress={() =>
          navigation.navigate("NewPurchase", {
            vendorId: vendor._id,
            vendor,
          })
        }
      >
        <Icon name="add-circle-outline" size={22} color="#fff" />
        <Text style={styles.purchaseText}>Purchase Milk</Text>
      </TouchableOpacity>
    </View>
  );
}

import PurchaseProvider from "../../../context/store/vendore/purchase/purchase.provider";

export default function VendorPurchaseDetailWrapper({ route, navigation }) {
  return (
    <PurchaseProvider>
      <VendorPurchaseDetailScreen route={route} navigation={navigation} />
    </PurchaseProvider>
  );
}
