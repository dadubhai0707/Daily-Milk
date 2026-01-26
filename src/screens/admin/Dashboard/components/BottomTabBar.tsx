import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "../AdminDashboard.styles";

export default function BottomTabBar() {
    const [active, setActive] = useState("Home");

    const tabs = [
        { key: "Home", icon: "🏠" },
        { key: "Analytics", icon: "📈" },
        { key: "Stock", icon: "📦" },
        { key: "Profile", icon: "👤" }
    ];

    return (
        <View style={styles.bottomTab}>
            <Icon name="home" size={22} color={active ? "#1fadad" : "#9aa3a3"} />
            <Icon name="chart-box-outline" size={22} />
            <Icon name="cube-outline" size={22} />
            <Icon name="account-outline" size={22} />
        </View>
    );
}
