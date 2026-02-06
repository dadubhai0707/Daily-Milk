import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "../SellerDashboard.styles";

export default function MenuCard({ icon, label, color, onPress }) {
  return (
    <TouchableOpacity style={styles.menuCard} activeOpacity={0.85}   onPress={onPress}>
      <View style={[styles.menuIconWrap, { backgroundColor: color }]}>
        <Icon name={icon} size={26} color="#1A1C1E" />
      </View>
      <Text style={styles.menuLabel}>{label}</Text>
    </TouchableOpacity>
  );
}
