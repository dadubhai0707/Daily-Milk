import React, { useContext, useState } from "react";
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


import SellerProfileContext from "../../../context/seller/profile";
import SellerProfileProvider from "../../../context/seller/profile/profile.provider";

import StatCard from "./components/StatCard";
import MenuCard from "./components/MenuCard";
import FabButton from "./components/FabButton";
import styles from "./SellerDashboard.styles";

import AuthService from "../../../services/authService/auth.service";
import { clearAuthData, getAuthData } from "../../../utils/storage";

function SellerDashboardScreen() {
  const navigation = useNavigation();
  const [logoutLoading, setLogoutLoading] = useState(false);

  // ✅ PROFILE CONTEXT
  const { profile, loading, fetchSellerProfile } =
    useContext(SellerProfileContext);

  // ✅ Data
  const user = profile?.user;
  const todaySummary = profile?.todaySummary;

  const totalAssign = todaySummary?.totalAssign || 0;
  const sold = todaySummary?.sold || 0;
  const remaining = todaySummary?.remaining || 0;

  const sellerName = user?.name || "Seller";
  const profileImage =
    user?.profileImage && user?.profileImage !== ""
      ? user.profileImage
      : "https://i.pravatar.cc/100";

  const handleLogout = async () => {
    if (logoutLoading) return;

    try {
      setLogoutLoading(true);

      const auth = await getAuthData();
      const refreshToken = auth?.refreshToken;

      if (refreshToken) {
        await AuthService.Logout(refreshToken);
      }

      await clearAuthData();

      Toast.show({
        type: "success",
        text1: "Logged out ✅",
      });

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
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.profileWrap}>
          <View style={styles.avatarWrap}>
            <Image
              source={{
                uri: profileImage,
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
              {sellerName}
            </Text>

            {/* ✅ Store name show */}
            <Text style={{ fontSize: 12, color: "#6b7280", marginTop: 2 }}>
              {profile?.store?.shopName || ""}
            </Text>
          </View>
        </View>

        {/* LOGOUT */}
        <TouchableOpacity
          style={styles.notifyBtn}
          onPress={handleLogout}
          activeOpacity={0.7}
          hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
        >
          <View style={{ position: "relative" }}>
            <Icon
              name={logoutLoading ? "progress-clock" : "logout"}
              size={22}
              color="#121717"
            />
          </View>
        </TouchableOpacity>


      </View >

      {/* BODY */}
      < ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* STATS */}
        <View View style={styles.statsGrid} >
          <StatCard
            style={{ width: "100%" }}
            label="TOTAL"
            title="To Day Assign"
            value={String(totalAssign)}
            unit="L"
            icon="lightning-bolt"
            iconBg="#E9FBF9"
          />

          <StatCard
            label="BUY"
            title="Today's Sell"
            value={String(sold)}
            unit="L"
            icon="cart-outline"
            iconBg="#EAF2FF"
          />

          <StatCard
            label="ALERT"
            title="Remaining"
            value={String(remaining)}
            unit="L"
            icon="timer-sand"
            iconBg="#FFF1E6"
            highlight
          />
        </View>

        {/* MANAGE BUSINESS */}
        <View View style={styles.manageHeader} >
          <Text style={styles.manageTitle}>Manage Business</Text>
          <Text style={styles.viewAll}>View All</Text>
        </View >

        <View style={styles.menuGrid}>
          <MenuCard
            icon="map-marker-outline"
            label="Area"
            color="#EAF7EE"
            onPress={() => navigation.navigate("SellerArea")}
          />
          <MenuCard
            icon="account-group-outline"
            label="MilkDelivery"
            color="#EAF7EE"
            onPress={() => navigation.navigate("SellerMilkDelivery")}
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
      </ScrollView >

      {/* FAB */}
      < FabButton
        title="Assign Milk"
        onPress={() => navigation.navigate("SellerAssignHistory")
        }
      />
    </View >
  );
}

export default function SellerDashboard() {
  return (
    <SellerProfileProvider>
      <SellerDashboardScreen />
    </SellerProfileProvider>
  );
}
