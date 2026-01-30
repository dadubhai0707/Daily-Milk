import React from "react";
import { Text, View } from "react-native";

export default function CustomerDashboard() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "#000", fontSize: 20 }}>
        Customer Dashboard 👋
      </Text>
    </View>
  );
}
