import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Toast from "react-native-toast-message";

import StatCard from "./components/StatCard";
import MenuCard from "./components/MenuCard";
import FabButton from "./components/FabButton";
import styles from "./SellerDashboard.styles";

import AuthService from "../../../services/authService/auth.service";
import { clearAuthData, getAuthData } from "../../../utils/storage";

export default function SellerDashboard() {
  const navigation = useNavigation();
  const [logoutLoading, setLogoutLoading] = useState(false);

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

              // 3) reset navigation to Login
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
            <Image
              source={{
                uri: "https://i.pravatar.cc/100",
              }}
              style={styles.avatar}
            />
            <View style={styles.onlineDot} />
          </View>

          <View>
            <Text
              style={{
                fontSize: 11,
                fontWeight: "800",
                color: "#9AA3A3",
                letterSpacing: 1,
                marginBottom: 2,
              }}
            >
              GOOD MORNING 👋
            </Text>

            <Text
              style={{
                fontSize: 18,
                fontWeight: "800",
                color: "#121717",
              }}
            >
              Seller
            </Text>
          </View>
        </View>

        {/* LOGOUT BUTTON (BELL ICON) */}
        <TouchableOpacity style={styles.notifyBtn} onPress={handleLogout}>
          <View style={{ position: "relative" }}>
            <Icon
              name={logoutLoading ? "loading" : "logout"}
              size={22}
              color="#121717"
            />
          </View>
        </TouchableOpacity>
      </View>

      {/* BODY */}
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* STATS */}
        <View style={styles.statsGrid}>
          <StatCard
            style={{ width: "100%" }}
            label="TOTAL"
            title="To Day Assign"
            value="1200"
            unit="L"
            icon="lightning-bolt"
            iconBg="#E9FBF9"
          />

          <StatCard
            label="BUY"
            title="Today's Sell"
            value="450"
            unit="L"
            icon="cart-outline"
            iconBg="#EAF2FF"
          />

          <StatCard
            label="ALERT"
            title="Remaining"
            value="400"
            unit="L"
            icon="timer-sand"
            iconBg="#FFF1E6"
            highlight
          />
        </View>

        {/* MANAGE BUSINESS */}
        <View style={styles.manageHeader}>
          <Text style={styles.manageTitle}>Manage Business</Text>
          <Text style={styles.viewAll}>View All</Text>
        </View>

        <View style={styles.menuGrid}>
          <MenuCard
            icon="map-marker-outline"
            label="Area"
            color="#EAF7EE"
            onPress={() => navigation.navigate("CustomerScreen")}
          />
          <MenuCard
            icon="account-group-outline"
            label="Customers"
            color="#EAF7EE"
            onPress={() => navigation.navigate("CustomerScreen")}
          />

          <MenuCard
            icon="check-circle-outline"
            label="Assigned Milk"
            color="#EEF0FF"
            onPress={() => navigation.navigate("SellerAssignHistory")}
          />

          <MenuCard
            icon="wallet-outline"
            label="Payments"
            color="#F1ECFF"
            onPress={() => navigation.navigate("SellerPayments")}
          />

          <MenuCard
            icon="chart-bar"
            label="Reports"
            color="#FFF1E6"
            onPress={() => navigation.navigate("SellerReports")}
          />

          <MenuCard
            icon="tune"
            label="Settings"
            color="#F2F4F7"
            onPress={() => navigation.navigate("SellerSettings")}
          />
        </View>

      </ScrollView>

      {/* FAB */}
      <FabButton
        title="Assign Milk"
        onPress={() => navigation.navigate("SellerAssignHistory")}
      />
    </View>
  );
}
