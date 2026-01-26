import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";


import StatCard from "./components/StatCard";
import MenuCard from "./components/MenuCard";
import FabButton from "./components/FabButton";
import BottomTabBar from "./components/BottomTabBar";
import styles from "./AdminDashboard.styles";

export default function AdminDashboard() {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.profileWrap}>
          <View style={styles.avatarWrap}>
            <Image
              source={{
                uri: "https://i.pravatar.cc/100"
              }}
              style={styles.avatar}
            />
            <View style={styles.onlineDot} />
          </View>

          <View>
            <Text style={styles.greeting}>Good Morning 👋</Text>
            <Text style={styles.username}>Alex Rivera</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.notifyBtn}>
          <Text style={styles.notifyIcon}>🔔</Text>
          <View style={styles.notifyDot} />
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
            label="TOTAL"
            title="Total Milk"
            value="1200"
            unit="L"
            icon="lightning-bolt"
            iconBg="#E9FBF9"
          />

          <StatCard
            label="BUY"
            title="Today's Buy"
            value="450"
            unit="L"
            icon="cart-outline"
            iconBg="#EAF2FF"
          />

          <StatCard
            label="SOLD"
            title="Sold Milk"
            value="800"
            unit="L"
            icon="truck-outline"
            iconBg="#EEF0FF"
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
          <MenuCard icon="office-building" label="Purchase" color="#EAF2FF" />
          <MenuCard icon="water" label="Milk" color="#E9FBF9" />
          <MenuCard icon="check-circle-outline" label="Assign" color="#EEF0FF" />
          <MenuCard icon="storefront-outline" label="Seller" color="#FFF4E8" />
          <MenuCard icon="account-group-outline" label="Customer" color="#EAF7EE" />
          <MenuCard icon="map-marker-outline" label="Address" color="#FFECEC" />
          <MenuCard icon="wallet-outline" label="Payment" color="#F1ECFF" />
          <MenuCard icon="chart-bar" label="Reports" color="#FFF1E6" />
          <MenuCard icon="tune" label="Settings" color="#F2F4F7" />

        </View>
      </ScrollView>
  {/* FAB */}
      <FabButton
        title="Add / Assign Milk"
        onPress={() => console.log("FAB pressed")}
      />


      {/* BOTTOM TAB */}
      <BottomTabBar />
    </View>
  );
}
