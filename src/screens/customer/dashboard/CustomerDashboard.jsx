import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Toast from "react-native-toast-message";

import styles from "./CustomerDashboard.Style";

import AuthService from "../../../services/authService/auth.service";
import { clearAuthData, getAuthData } from "../../../utils/storage";
import { useNavigation } from "@react-navigation/native";

export default function CustomerDashboard() {
  const navigation = useNavigation();
  const [logoutLoading, setLogoutLoading] = useState(false);

  const profile = useMemo(() => {
    return {
      user: {
        name: "Ramesh Kumar",
        profileImage: "",
      },
      store: {
        shopName: "Shree Milk Center",
      },
      today: {
        status: "delivered",
        milkQty: 1,
        milkType: "buffalo",
      },
      month: {
        totalMilk: 32,
        totalAmount: 1600,
        paymentStatus: "unpaid",
      },
      lastPayment: {
        amount: 500,
        date: "02 Feb 2026",
        mode: "upi",
      },
      recentHistory: [
        { date: "06 Feb", status: "delivered", qty: 1 },
        { date: "05 Feb", status: "delivered", qty: 1 },
        { date: "04 Feb", status: "skipped", qty: 0 },
      ],
    };
  }, []);

  const user = profile.user;
  const today = profile.today;
  const month = profile.month;

  const profileImage =
    user?.profileImage && user?.profileImage !== ""
      ? user.profileImage
      : "https://i.pravatar.cc/100";

  const statusColor =
    today.status === "delivered"
      ? "#16a34a"
      : today.status === "skipped"
      ? "#f59e0b"
      : "#ef4444";

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
            <Text style={styles.shop}>{profile?.store?.shopName || ""}</Text>
          </View>
        </View>

        {/* ✅ LOGOUT ICON (bell ki jagah) */}
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
      >
        {/* TODAY CARD */}
        <View style={styles.todayCard}>
          <View style={styles.todayTop}>
            <View>
              <Text style={styles.todayTitle}>Today’s Milk</Text>
              <Text style={styles.todaySub}>
                {String(today.milkType).toUpperCase()} • {today.milkQty} L
              </Text>
            </View>

            <View style={[styles.statusPill, { backgroundColor: statusColor }]}>
              <Text style={styles.statusText}>
                {String(today.status).toUpperCase()}
              </Text>
            </View>
          </View>

          <TouchableOpacity style={styles.linkRow}>
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
              Last Payment: ₹ {profile.lastPayment.amount}
            </Text>
            <Text style={styles.lastPayMeta}>
              {profile.lastPayment.date} •{" "}
              {profile.lastPayment.mode.toUpperCase()}
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

          <TouchableOpacity style={styles.invoiceBtn}>
            <Icon name="download" size={18} color="#fff" />
            <Text style={styles.invoiceBtnText}>Download</Text>
          </TouchableOpacity>
        </View>

        {/* RECENT HISTORY */}
        <Text style={styles.sectionTitle}>Recent (Last 3 Days)</Text>

        {profile.recentHistory.map((h, idx) => {
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
        })}

        <View style={{ height: 120 }} />
      </ScrollView>
    </View>
  );
}
