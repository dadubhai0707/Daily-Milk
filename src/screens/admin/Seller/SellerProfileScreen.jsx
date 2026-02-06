import React, { useContext, useEffect, useMemo, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { ProfileStyle } from "./SellerStyle";

import AssignMilkProvider from "../../../context/store/assignMilk/assignMilk.provider";
import AssignMilkContext from "../../../context/store/assignMilk";
import AssignMilkModal from "./AssignMilkModal";

const SellerProfileUI = ({ navigation, route }) => {
  const seller = route?.params?.seller;

  const sellerId = seller?._id; // Seller document id
  const sellerName = seller?.userId?.name || "Seller Name";
  const sellerMobile = seller?.userId?.mobile || "0000000000";
  const isActive = seller?.isActive === true;

  const { assignHistory, summary, loading, fetchAssignHistory, fetchSellerSummary, createAssign } =
    useContext(AssignMilkContext);

  const [assignOpen, setAssignOpen] = useState(false);

  useEffect(() => {
    if (sellerId) {
      fetchAssignHistory(sellerId);
      fetchSellerSummary(sellerId, { date: new Date().toISOString().slice(0, 10), milkType: "cow" });
    }
  }, [sellerId]);

  // UI list format
  const history = useMemo(() => {
    return (assignHistory || []).map((x) => {
      const d = new Date(x.date);
      const dateLabel = d.toDateString();

      return {
        id: x._id,
        date: dateLabel,
        session: x.milkType === "cow" ? "Cow Milk" : "Buffalo Milk",
        qty: `${x.quantity}L`,
        amount: "-", // assign me amount nahi hai
        status: "assigned",
        raw: x,
      };
    });
  }, [assignHistory]);

  const renderHistory = ({ item }) => {
    return (
      <View style={ProfileStyle.historyCard}>
        <View style={ProfileStyle.historyLeft}>
          <View style={[ProfileStyle.calendarBox, ProfileStyle.calendarBoxPrimary]}>
            <Icon name="calendar-outline" size={18} color={"#0f766e"} />
          </View>

          <View>
            <Text style={ProfileStyle.historyDate}>{item.date}</Text>
            <Text style={ProfileStyle.historyMeta}>
              {item.session} • {item.qty}
            </Text>
          </View>
        </View>

        <View style={ProfileStyle.historyRight}>
          <Text style={ProfileStyle.historyAmount}>{item.amount}</Text>
          <Text style={[ProfileStyle.historyStatus, ProfileStyle.settled]}>
            ASSIGNED
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={ProfileStyle.container}>
      {/* TOP CARD */}
      <View style={ProfileStyle.pagePadding}>
        <View style={ProfileStyle.profileCard}>
          <View style={ProfileStyle.profileRow}>
            <View style={ProfileStyle.avatarWrap}>
              <View style={ProfileStyle.avatar}>
                <Text style={ProfileStyle.avatarText}>{sellerName.charAt(0)}</Text>
              </View>

              <View style={[ProfileStyle.statusDot, isActive ? ProfileStyle.greenDot : ProfileStyle.redDot]} />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={ProfileStyle.sellerName}>{sellerName}</Text>
              <Text style={ProfileStyle.sellerId}>Mobile: {sellerMobile}</Text>

              <View style={ProfileStyle.verifiedRow}>
                <Icon name="checkmark-circle" size={14} color="#0f766e" />
                <Text style={ProfileStyle.verifiedText}>
                  {isActive ? "ACTIVE SELLER" : "INACTIVE SELLER"}
                </Text>
              </View>
            </View>
          </View>

          {/* STATS (summary API se) */}
          <View style={ProfileStyle.statsGrid}>
            <View style={ProfileStyle.statBox}>
              <Text style={ProfileStyle.statLabel}>TODAY STOCK</Text>
              <Text style={ProfileStyle.statValue}>
                {summary?.closingStock ?? 0} <Text style={ProfileStyle.statUnit}>L</Text>
              </Text>
            </View>

            <View style={ProfileStyle.statBox}>
              <Text style={ProfileStyle.statLabel}>TOTAL PROCURED</Text>
              <Text style={[ProfileStyle.statValue, ProfileStyle.primaryText]}>
                {summary?.totalProcured ?? 0}
              </Text>
            </View>
          </View>

          {/* PENDING CARD */}
          <TouchableOpacity style={ProfileStyle.pendingCard} activeOpacity={0.9}>
            <View>
              <Text style={ProfileStyle.pendingLabel}>SELLER REMAINING</Text>
              <Text style={ProfileStyle.pendingValue}>
                {summary?.sellerRemainingMilk ?? 0}L
              </Text>
            </View>

            <View style={ProfileStyle.walletIconWrap}>
              <Icon name="cube-outline" size={22} color="#f97316" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* HISTORY HEADER */}
      <View style={ProfileStyle.sectionHeader}>
        <Text style={ProfileStyle.sectionTitle}>ASSIGN HISTORY</Text>
        <View style={ProfileStyle.latestBadge}>
          <Text style={ProfileStyle.latestBadgeText}>
            {loading ? "Loading..." : "Latest first"}
          </Text>
        </View>
      </View>

      {/* HISTORY LIST */}
      <FlatList
        data={history}
        keyExtractor={(item) => item.id}
        renderItem={renderHistory}
        contentContainerStyle={{ paddingBottom: 130, paddingHorizontal: 16 }}
        showsVerticalScrollIndicator={false}
      />

      {/* BOTTOM ACTION */}
      <View style={ProfileStyle.bottomBar}>
        <TouchableOpacity
          style={ProfileStyle.payBtn}
          activeOpacity={0.9}
          onPress={() => setAssignOpen(true)}
        >
          <Icon name="checkmark-circle" size={20} color="#fff" />
          <Text style={ProfileStyle.payBtnText}>Assign Milk</Text>
        </TouchableOpacity>

        <Text style={ProfileStyle.bottomNote}>
          Tap to assign today’s milk to this seller
        </Text>
      </View>

      {/* ASSIGN MODAL */}
      <AssignMilkModal
        visible={assignOpen}
        onClose={() => setAssignOpen(false)}
        onSubmit={async (values) => {
          const ok = await createAssign({
            sellerId,
            payload: {
              sellerId,
              milkType: values.milkType,
              quantity: Number(values.quantity),
              date: values.date,
            },
          });

          if (ok) setAssignOpen(false);
        }}
      />
    </SafeAreaView>
  );
};

export default function SellerProfileScreen({ navigation, route }) {
  return (
    <AssignMilkProvider>
      <SellerProfileUI navigation={navigation} route={route} />
    </AssignMilkProvider>
  );
}
