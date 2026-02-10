import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import CustomerDashboard from "./CustomerDashboard";
import CustomerHistoryScreen from "./CustomerDashboard";
import CustomerInvoiceScreen from "./CustomerDashboard";
import CustomerPlanScreen from "./CustomerDashboard";

const Tab = createBottomTabNavigator();

export default function CustomerBottomBar() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarStyle: {
          height: 80,
          paddingBottom: 12,
          paddingTop: 8,
        },

        tabBarActiveTintColor: "#1fadad",
        tabBarInactiveTintColor: "#9aa3a3",

        tabBarIcon: ({ color, focused }) => {
          const icons = {
            Dashboard: "home-variant-outline",
            History: "calendar-clock",
            Invoice: "file-document-outline",
            Plan: "crown-outline",
          };

          return (
            <Icon
              name={icons[route.name]}
              size={focused ? 30 : 26}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={CustomerDashboard} />
      <Tab.Screen name="History" component={CustomerHistoryScreen} />
      <Tab.Screen name="Invoice" component={CustomerInvoiceScreen} />
      <Tab.Screen name="Plan" component={CustomerPlanScreen} />
    </Tab.Navigator>
  );
}
