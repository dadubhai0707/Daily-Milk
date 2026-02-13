import React, { useMemo } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./PublicStoreDetailScreen.style";

export default function PublicStoreDetailScreen({ route, navigation }) {
  const store = route?.params?.store;

  const data = useMemo(() => {
    return {
      shopName: store?.shopName || "-",
      ownerName: store?.ownerName || "-",
      city: store?.city || "-",
      pincode: store?.pincode || "-",
      sellers: store?.sellers || 0,
      customers: store?.customers || 0,
      todayDelivered: store?.todayDelivered || 0,
      monthDelivered: store?.monthDelivered || 0,
      isActive: store?.isActive === true,
      id: store?._id || "-",
    };
  }, [store]);

  if (!store) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{ padding: 20, fontSize: 16, fontWeight: "800" }}>
          Store data not found
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Icon name="arrow-left" size={22} color="#0f172a" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Store Details</Text>

        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        {/* MAIN CARD */}
        <View style={styles.card}>
          <View style={styles.cardTop}>
            <View style={styles.logoWrap}>
              <Icon name="storefront-outline" size={26} color="#1fadad" />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.storeName}>{data.shopName}</Text>

              <View style={styles.metaRow}>
                <Icon name="map-marker-outline" size={15} color="#64748b" />
                <Text style={styles.metaText}>
                  {data.city} - {data.pincode}
                </Text>
              </View>

              <View style={styles.metaRow}>
                <Icon name="account-outline" size={15} color="#64748b" />
                <Text style={styles.metaText}>Owner: {data.ownerName}</Text>
              </View>
            </View>

            {/* STATUS */}
            <View
              style={[
                styles.statusPill,
                { backgroundColor: data.isActive ? "#dcfce7" : "#fee2e2" },
              ]}
            >
              <View
                style={[
                  styles.statusDot,
                  { backgroundColor: data.isActive ? "#16a34a" : "#ef4444" },
                ]}
              />
              <Text
                style={[
                  styles.statusText,
                  { color: data.isActive ? "#16a34a" : "#ef4444" },
                ]}
              >
                {data.isActive ? "ACTIVE" : "INACTIVE"}
              </Text>
            </View>
          </View>

          {/* ID */}
          <Text style={styles.idText}>Store ID: #{String(data.id).slice(-8)}</Text>
        </View>

        {/* STATS GRID */}
        <View style={styles.statsGrid}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>SELLERS</Text>
            <Text style={styles.statValue}>{data.sellers}</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statLabel}>CUSTOMERS</Text>
            <Text style={styles.statValue}>{data.customers}</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statLabel}>TODAY</Text>
            <Text style={styles.statValue}>{data.todayDelivered} L</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statLabel}>MONTH</Text>
            <Text style={styles.statValue}>{data.monthDelivered} L</Text>
          </View>
        </View>

        {/* ACTION BUTTON */}
        <View style={{ paddingHorizontal: 16, marginTop: 18 }}>
          <TouchableOpacity activeOpacity={0.9} style={styles.joinBtn}>
            <Icon name="account-plus-outline" size={20} color="#fff" />
            <Text style={styles.joinBtnText}>Request to Join</Text>
          </TouchableOpacity>

          <Text style={styles.hintText}>
            You can request to join this store as a customer or seller.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
