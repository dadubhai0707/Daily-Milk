import React, { useContext, useMemo, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
  RefreshControl,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Toast from "react-native-toast-message";

import styles from "./CustomerDashboard.Style";

import AuthService from "../../../services/authService/auth.service";
import { clearAuthData, getAuthData } from "../../../utils/storage";
import { useNavigation } from "@react-navigation/native";

// ✅ Providers
import CustomerProfileProvider from "../../../context/customere/profile/customerProfile.provider";
import CustomerHistoryProvider from "../../../context/customere/history/customerHistory.provider";

// ✅ Context
import CustomerProfileContext from "../../../context/customere/profile";
import CustomerHistoryContext from "../../../context/customere/history";

/* ======================================================
   UI COMPONENT (Inside Providers)
====================================================== */
function CustomerDashboardUI() {
  const navigation = useNavigation();
  const [logoutLoading, setLogoutLoading] = useState(false);

  const { profile, loading: profileLoading, fetchProfile } = useContext(
    CustomerProfileContext
  );

  const { thisMonth, loading: historyLoading, fetchThisMonth } = useContext(
    CustomerHistoryContext
  );

  const loading = profileLoading || historyLoading;

  // ✅ Backend response safe mapping
  const user = profile?.user || {};
  const customer = profile?.customer || {};
  const store = customer?.storeID || {};
  const today = profile?.todayMilk || {};

  const profileImage =
    user?.profileImage && user?.profileImage !== ""
      ? user.profileImage
      : "https://i.pravatar.cc/100";

  // ✅ This month summary
  const month = useMemo(() => {
    const list = Array.isArray(thisMonth) ? thisMonth : [];

    const totalMilk = list.reduce((sum, d) => sum + Number(d?.milkQty || 0), 0);

    const rate = Number(customer?.ratePerLiter || 0);
    const totalAmount = totalMilk * rate;

    return {
      totalMilk,
      totalAmount,
      paymentStatus: "unpaid", // 🔥 next API se live karenge
    };
  }, [thisMonth, customer?.ratePerLiter]);

  // ✅ Recent 3 records
  const recentHistory = useMemo(() => {
    const list = Array.isArray(thisMonth) ? thisMonth : [];

    return list.slice(0, 3).map((d) => ({
      date: new Date(d.date).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
      }),
      status: d.status,
      qty: Number(d.milkQty || 0),
    }));
  }, [thisMonth]);

  // ✅ Today status color
  const statusColor =
    today.status === "delivered"
      ? "#16a34a"
      : today.status === "skipped"
        ? "#f59e0b"
        : "#ef4444";

  // ✅ Pull refresh
  const handleRefresh = async () => {
    await fetchProfile();
    await fetchThisMonth();
  };

  // ✅ LOGOUT FUNCTION
  const handleLogout = async () => {
    if (logoutLoading) return;

    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Logout",
          style: "destructive",
          onPress: async () => {
            try {
              setLogoutLoading(true);

              const auth = await getAuthData();
              const refreshToken = auth?.refreshToken;

              // 1) backend logout
              if (refreshToken) {
                await AuthService.Logout(refreshToken);
              }

              // 2) clear local storage
              await clearAuthData();

              Toast.show({
                type: "success",
                text1: "Logged out ✅",
              });

              // 3) reset navigation
              navigation.reset({
                index: 0,
                routes: [{ name: "Login" }],
              });
            } catch (err) {
              Toast.show({
                type: "error",
                text1: "Logout failed",
                text2: err?.message || "Try again",
              });
            } finally {
              setLogoutLoading(false);
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  // ✅ fallback (lastPayment) - abhi dummy
  const lastPayment = {
    amount: 0,
    date: "-",
    mode: "-",
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.profileWrap}>
          <View style={styles.avatarWrap}>
            <Image source={{ uri: profileImage }} style={styles.avatar} />
          </View>

          <View>
            <Text style={styles.greeting}>WELCOME 👋</Text>
            <Text style={styles.name}>{user?.name || "Customer"}</Text>
            <Text style={styles.shop}>{store?.shopName || ""}</Text>
          </View>
        </View>

        {/* LOGOUT ICON */}
        <TouchableOpacity
          style={styles.notifyBtn}
          onPress={handleLogout}
          activeOpacity={0.7}
          hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
        >
          <Icon
            name={logoutLoading ? "progress-clock" : "logout"}
            size={22}
            color="#1fadad"
          />
        </TouchableOpacity>
      </View>

      {/* BODY */}
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={handleRefresh} />
        }
      >
        {/* TODAY CARD */}
        <View style={styles.todayCard}>
          <View style={styles.todayTop}>
            <View>
              <Text style={styles.todayTitle}>Today’s Milk</Text>
              <Text style={styles.todaySub}>
                {String(today?.milkType || customer?.milkType || "").toUpperCase()}{" "}
                • {Number(today?.milkQty || 0)} L
              </Text>
            </View>

            <View style={[styles.statusPill, { backgroundColor: statusColor }]}>
              <Text style={styles.statusText}>
                {String(today?.status || "not_delivered").toUpperCase()}
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.linkRow}
            onPress={() => navigation.navigate("CustomerHistory")}
          >
            <Text style={styles.linkText}>View Delivery History</Text>
            <Icon name="chevron-right" size={18} color="#1fadad" />
          </TouchableOpacity>
        </View>

        {/* MONTH SUMMARY */}
        <Text style={styles.sectionTitle}>This Month</Text>

        <View style={styles.twoGrid}>
          <View style={styles.smallCard}>
            <Icon name="cup-outline" size={22} color="#1fadad" />
            <Text style={styles.smallLabel}>Total Milk</Text>
            <Text style={styles.smallValue}>{month.totalMilk} L</Text>
          </View>

          <View style={styles.smallCard}>
            <Icon name="cash-multiple" size={22} color="#1fadad" />
            <Text style={styles.smallLabel}>Total Amount</Text>
            <Text style={styles.smallValue}>₹ {month.totalAmount}</Text>
          </View>
        </View>

        {/* PAYMENT */}
        <View style={styles.paymentCard}>
          <View style={styles.paymentRow}>
            <View>
              <Text style={styles.paymentTitle}>Payment Status</Text>
              <Text style={styles.paymentSub}>
                {String(month.paymentStatus).toUpperCase()}
              </Text>
            </View>

            <Icon
              name={
                month.paymentStatus === "paid"
                  ? "check-decagram"
                  : "alert-decagram"
              }
              size={26}
              color={month.paymentStatus === "paid" ? "#16a34a" : "#f59e0b"}
            />
          </View>

          <View style={styles.paymentBottom}>
            <Text style={styles.lastPayText}>
              Last Payment: ₹ {lastPayment.amount}
            </Text>
            <Text style={styles.lastPayMeta}>
              {lastPayment.date} • {String(lastPayment.mode).toUpperCase()}
            </Text>
          </View>
        </View>

        {/* INVOICE */}
        <View style={styles.invoiceCard}>
          <View style={{ flex: 1 }}>
            <Text style={styles.invoiceTitle}>Invoice</Text>
            <Text style={styles.invoiceSub}>
              Download your monthly invoice anytime.
            </Text>
          </View>

          <TouchableOpacity
            style={styles.invoiceBtn}
            onPress={() => Toast.show({ type: "info", text1: "Coming soon..." })}
          >
            <Icon name="download" size={18} color="#fff" />
            <Text style={styles.invoiceBtnText}>Download</Text>
          </TouchableOpacity>
        </View>

        {/* RECENT HISTORY */}
        <Text style={styles.sectionTitle}>Recent (Last 3 Days)</Text>

        {recentHistory.length === 0 ? (
          <Text style={{ color: "#64748b", marginTop: 10 }}>
            No delivery records found
          </Text>
        ) : (
          recentHistory.map((h, idx) => {
            const color =
              h.status === "delivered"
                ? "#16a34a"
                : h.status === "skipped"
                  ? "#f59e0b"
                  : "#ef4444";

            return (
              <View key={idx} style={styles.historyRow}>
                <View style={[styles.dot, { backgroundColor: color }]} />
                <Text style={styles.historyDate}>{h.date}</Text>

                <Text style={styles.historyStatus}>
                  {String(h.status).toUpperCase()}
                </Text>

                <Text style={styles.historyQty}>{h.qty} L</Text>
              </View>
            );
          })
        )}

        <View style={{ height: 120 }} />
      </ScrollView>
    </View>
  );
}

/* ======================================================
   MAIN EXPORT (Providers Wrap)
====================================================== */
export default function CustomerDashboard() {
  return (
    <CustomerProfileProvider>
      <CustomerHistoryProvider>
        <CustomerDashboardUI />
      </CustomerHistoryProvider>
    </CustomerProfileProvider>
  );
}
