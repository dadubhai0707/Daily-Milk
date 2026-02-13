import React, { useMemo, useState, useContext } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./PublicStoreDetailScreen.style";

import JoinRequestModal from "./JoinRequestModal";
import ConfirmJoinRequestModal from "./ConfirmJoinRequestModal";

import JoinRequestContext from "../../../context/common/joinRequest";

export default function PublicStoreDetailScreen({ route, navigation }) {
  const store = route?.params?.store;

  const { sendJoinRequest, myRequests, loading, fetchMyRequests } =
    useContext(JoinRequestContext);

  const [roleRequested, setRoleRequested] = useState(null); // customer | seller
  const [message, setMessage] = useState("");

  const [formOpen, setFormOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

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

  // ✅ check if already pending for this store
  const hasPending = useMemo(() => {
    if (!store?._id) return false;

    return (myRequests || []).some(
      (r) =>
        String(r?.storeID?._id) === String(store._id) &&
        r?.status === "pending"
    );
  }, [myRequests, store]);

  const openCustomerModal = () => {
    setRoleRequested("customer");
    setMessage("");
    setFormOpen(true);
  };

  const openSellerModal = () => {
    setRoleRequested("seller");
    setMessage("");
    setFormOpen(true);
  };

  const closeAll = () => {
    setFormOpen(false);
    setConfirmOpen(false);
    setMessage("");
    setRoleRequested(null);
  };

  const handleNext = () => {
    setFormOpen(false);
    setConfirmOpen(true);
  };

  const handleConfirm = async () => {
    if (!store?._id || !roleRequested) return;

    const ok = await sendJoinRequest({
      storeID: store._id,
      roleRequested,
      message,
    });

    if (ok) {
      await fetchMyRequests();
      closeAll();
    } else {
      // if failed keep confirm open
      setConfirmOpen(false);
    }
  };

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

        {/* ACTION BUTTONS */}
        <View style={{ paddingHorizontal: 16, marginTop: 18, gap: 12 }}>
          <TouchableOpacity
            activeOpacity={0.9}
            style={[
              styles.joinBtn,
              hasPending && { backgroundColor: "#94a3b8" },
            ]}
            disabled={hasPending || loading}
            onPress={openCustomerModal}
          >
            <Icon name="account-heart-outline" size={20} color="#fff" />
            <Text style={styles.joinBtnText}>
              {hasPending ? "Request Pending" : "Request as Customer"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.9}
            style={[
              styles.joinBtn,
              { backgroundColor: "#0f172a" },
              hasPending && { backgroundColor: "#94a3b8" },
            ]}
            disabled={hasPending || loading}
            onPress={openSellerModal}
          >
            <Icon name="bike-fast" size={20} color="#fff" />
            <Text style={styles.joinBtnText}>
              {hasPending ? "Request Pending" : "Request as Seller"}
            </Text>
          </TouchableOpacity>

          <Text style={styles.hintText}>
            Owner will review your request. Once approved, your role will be updated.
          </Text>
        </View>
      </ScrollView>

      {/* MODALS */}
      <JoinRequestModal
        visible={formOpen}
        onClose={closeAll}
        roleRequested={roleRequested}
        message={message}
        setMessage={setMessage}
        onNext={handleNext}
      />

      <ConfirmJoinRequestModal
        visible={confirmOpen}
        onCancel={closeAll}
        onConfirm={handleConfirm}
        roleRequested={roleRequested}
        loading={loading}
      />
    </SafeAreaView>
  );
}
