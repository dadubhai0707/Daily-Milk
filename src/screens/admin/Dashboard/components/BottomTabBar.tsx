import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "../AdminDashboard.styles";

const TABS = [
  { key: "Home", icon: "home-variant-outline", label: "Home" },
  { key: "Analytics", icon: "chart-box-outline", label: "Analytics" },
  { key: "Stock", icon: "cube-outline", label: "Stock" },
  { key: "Profile", icon: "account-outline", label: "Profile" }
];

export default function BottomTabBar() {
  const [active, setActive] = useState("Home");

  return (
    <View style={styles.bottomTab}>
      {TABS.map(tab => {
        const isActive = active === tab.key;

        return (
          <TouchableOpacity
            key={tab.key}
            style={styles.tabItem}
            activeOpacity={0.7}
            onPress={() => setActive(tab.key)}
          >
            <Icon
              name={tab.icon}
              size={22}
              color={isActive ? "#1fadad" : "#9aa3a3"}
            />
            <Text
              style={[
                styles.tabLabel,
                { color: isActive ? "#1fadad" : "#9aa3a3" }
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
