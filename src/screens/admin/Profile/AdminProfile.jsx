import React, { useContext, useMemo } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { styles } from "./StoreProfileStyle";

import ProfileProvider from "../../../context/store/profile/profile.provider";
import ProfileContext from "../../../context/store/profile";

const StoreProfilePage = () => {
  const { profile, loading, fetchProfile } = useContext(ProfileContext);

  const owner = profile?.owner || {};
  const store = profile?.store || {};
  const stats = profile?.stats || {};
  const planMeta = profile?.plan || {};

  const ownerName = owner?.name || "Owner";
  const shopName = store?.shopName || "Your Store";

  const initials = useMemo(() => {
    return ownerName?.trim()?.charAt(0)?.toUpperCase() || "O";
  }, [ownerName]);

  const isActiveOwner = owner?.isActive === true && owner?.isBlocked !== true;
  const isPlanActive = planMeta?.planExpired === false;

  const daysLeft = planMeta?.planDaysLeft ?? 0;

  if (loading && !profile) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingWrap}>
          <ActivityIndicator size="large" color="#1fadad" />
          <Text style={{ marginTop: 10, color: "#6b7280", fontWeight: "700" }}>
            Loading profile...
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.profileWrap}>
          <View style={styles.avatarWrap}>
            <View style={styles.avatar} />
            <View style={styles.onlineDot} />
          </View>

          <View>
            <Text style={styles.greeting}>WELCOME</Text>
            <Text style={styles.username}>{ownerName}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.notifyBtn} onPress={fetchProfile}>
          <Icon name="refresh-outline" size={20} color="#121717" />
        </TouchableOpacity>
      </View>

      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scroll}>
        {/* PROFILE CARD */}
        <View style={styles.profileCard}>
          <View style={styles.bigAvatarRow}>
            <View style={styles.bigAvatar}>
              <Text style={styles.bigAvatarText}>{initials}</Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.ownerName}>{ownerName}</Text>
              <Text style={styles.storeName}>{shopName}</Text>

              <View style={styles.statusBadge}>
                <Icon
                  name="checkmark-done-circle"
                  size={18}
                  color={isActiveOwner ? "#1fadad" : "#EB6A14"}
                />
                <Text style={styles.statusText}>
                  {isActiveOwner ? "ACTIVE OWNER" : "INACTIVE OWNER"}
                </Text>
              </View>
            </View>
          </View>

          {/* OWNER INFO */}
          <View style={styles.infoRow}>
            <View style={styles.infoIconWrap}>
              <Icon name="call-outline" size={18} color="#1fadad" />
            </View>
            <Text style={styles.infoText}>{owner?.mobile || "-"}</Text>
          </View>

          <View style={styles.infoRow}>
            <View style={styles.infoIconWrap}>
              <Icon name="mail-outline" size={18} color="#1fadad" />
            </View>
            <Text style={styles.infoText}>{owner?.email || "-"}</Text>
          </View>

          <View style={styles.infoRow}>
            <View style={styles.infoIconWrap}>
              <Icon name="location-outline" size={18} color="#1fadad" />
            </View>
            <Text style={styles.infoText}>{owner?.address || "-"}</Text>
          </View>
        </View>

        {/* STATS GRID */}
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <View style={styles.statTop}>
              <View style={styles.statIconWrap}>
                <Icon name="people-outline" size={18} color="#1fadad" />
              </View>
              <Text style={styles.statTag}>TOTAL</Text>
            </View>

            <Text style={styles.statTitle}>Customers</Text>
            <Text style={styles.statValue}>
              {stats?.totalCustomers ?? 0}
            </Text>
          </View>

          <View style={styles.statCard}>
            <View style={styles.statTop}>
              <View style={styles.statIconWrap}>
                <Icon name="bicycle-outline" size={18} color="#1fadad" />
              </View>
              <Text style={styles.statTag}>TOTAL</Text>
            </View>

            <Text style={styles.statTitle}>Sellers</Text>
            <Text style={styles.statValue}>{stats?.totalSellers ?? 0}</Text>
          </View>

          <View style={styles.statCard}>
            <View style={styles.statTop}>
              <View style={styles.statIconWrap}>
                <Icon name="person-outline" size={18} color="#1fadad" />
              </View>
              <Text style={styles.statTag}>TOTAL</Text>
            </View>

            <Text style={styles.statTitle}>Vendors</Text>
            <Text style={styles.statValue}>{stats?.totalVendors ?? 0}</Text>
          </View>

          <View style={styles.statCard}>
            <View style={styles.statTop}>
              <View style={styles.statIconWrap}>
                <Icon name="map-outline" size={18} color="#1fadad" />
              </View>
              <Text style={styles.statTag}>TOTAL</Text>
            </View>

            <Text style={styles.statTitle}>Areas</Text>
            <Text style={styles.statValue}>{stats?.totalAreas ?? 0}</Text>
          </View>

          {/* PLAN DAYS LEFT */}
          <View
            style={[
              styles.statCard,
              !isPlanActive && styles.statCardAlert,
            ]}
          >
            <View style={styles.statTop}>
              <View style={styles.statIconWrap}>
                <Icon
                  name="calendar-outline"
                  size={18}
                  color={!isPlanActive ? "#EB6A14" : "#1fadad"}
                />
              </View>

              <Text
                style={[
                  styles.statTag,
                  !isPlanActive && styles.alertTag,
                ]}
              >
                PLAN
              </Text>
            </View>

            <Text style={styles.statTitle}>Days Left</Text>
            <Text
              style={[
                styles.statValue,
                !isPlanActive && styles.alertValue,
              ]}
            >
              {daysLeft}
              <Text style={styles.statUnit}> days</Text>
            </Text>
          </View>

          {/* MILK RATE */}
          <View style={styles.statCard}>
            <View style={styles.statTop}>
              <View style={styles.statIconWrap}>
                <Icon name="water-outline" size={18} color="#1fadad" />
              </View>
              <Text style={styles.statTag}>DEFAULT</Text>
            </View>

            <Text style={styles.statTitle}>Milk Rate</Text>
            <Text style={styles.statValue}>
              ₹{store?.defaultMilkRate ?? 0}
              <Text style={styles.statUnit}> /L</Text>
            </Text>
          </View>
        </View>

        {/* STORE INFO */}
        <Text style={styles.sectionTitle}>STORE INFO</Text>

        <View style={styles.storeInfoCard}>
          <View style={styles.infoRow}>
            <View style={styles.infoIconWrap}>
              <Icon name="location-outline" size={18} color="#1fadad" />
            </View>
            <Text style={styles.infoText}>{store?.shopAddress || "-"}</Text>
          </View>

          <View style={styles.infoRow}>
            <View style={styles.infoIconWrap}>
              <Icon name="call-outline" size={18} color="#1fadad" />
            </View>
            <Text style={styles.infoText}>{store?.contactNumber || "-"}</Text>
          </View>
        </View>

        {/* PLAN CARD */}
        <Text style={styles.sectionTitle}>CURRENT PLAN</Text>

        <View style={styles.planCard}>
          <View style={styles.planTopRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.planName}>
                {store?.planId?.name || "Plan"}
              </Text>

              <Text style={styles.planSub}>
                {isPlanActive
                  ? `${daysLeft} days left in plan`
                  : "Plan expired, please renew"}
              </Text>
            </View>

            <View style={styles.planActiveBadge}>
              <Text style={styles.planActiveText}>
                {isPlanActive ? "PLAN ACTIVE" : "EXPIRED"}
              </Text>
            </View>
          </View>

          <View style={styles.planInnerCard}>
            <View style={styles.planRow}>
              <Text style={styles.planLabel}>Milk Types</Text>
              <Text style={styles.planValue}>
                {store?.milkTypes?.length
                  ? store.milkTypes.join(", ")
                  : "-"}
              </Text>
            </View>

            <View style={styles.planRow}>
              <Text style={styles.planLabel}>Rate</Text>
              <Text style={styles.planValue}>
                ₹{store?.defaultMilkRate ?? 0} / liter
              </Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.planRow}>
              <Text style={styles.planLabel}>Customers Limit</Text>
              <Text style={styles.planValue}>
                {store?.planId?.maxCustomers ?? 0}
              </Text>
            </View>

            <View style={styles.planRow}>
              <Text style={styles.planLabel}>Sellers Limit</Text>
              <Text style={styles.planValue}>
                {store?.planId?.maxSellers ?? 0}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* EDIT PROFILE BUTTON (FAB STYLE) */}
      <View style={styles.fabContainer}>
        <TouchableOpacity style={styles.fabButton} activeOpacity={0.9}>
          <View style={styles.fabIconCircle}>
            <Icon name="create-outline" size={20} color="#fff" />
          </View>
          <Text style={styles.fabText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default function StoreProfileScreen() {
  return (
    <ProfileProvider>
      <StoreProfilePage />
    </ProfileProvider>
  );
}
