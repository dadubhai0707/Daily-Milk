import React from "react";
import { View, Text } from "react-native";
import styles from "./StatusBadge.styles";

export default function StatusBadge({ status }) {
  return (
    <View style={[styles.badge, styles[status]]}>
      <Text style={styles.text}>{status}</Text>
    </View>
  );
}
