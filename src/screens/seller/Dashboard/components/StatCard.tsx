import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "../SellerDashboard.styles";

export default function StatCard({ label, title, value, unit, icon, iconBg, highlight, style }) {
  return (
    <View style={[styles.statCard, style , highlight && styles.statCardAlert]}>
      <View style={styles.statTop}>
        <View style={[styles.statIconWrap, { backgroundColor: iconBg }]}>
          <Icon
            name={icon}
            size={22}
            color={highlight ? "#EB6A14" : "#1fadad"}
          />
        </View>
        <Text style={[styles.statTag, highlight && styles.alertTag]}>
          {label}
        </Text>
      </View>

      <Text style={[styles.statTitle, highlight && styles.alertText]}>
        {title}
      </Text>

      <Text style={[styles.statValue, highlight && styles.alertValue]}>
        {value}
        <Text style={styles.statUnit}> {unit}</Text>
      </Text>
    </View>
  );
}
