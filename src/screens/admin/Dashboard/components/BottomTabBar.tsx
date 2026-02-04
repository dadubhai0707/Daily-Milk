import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import AdminDashboard from "../AdminDashboard";
import VendorListScreen from "../../Vendor/VendoreScreen";
import CustomerScreen from "../../Customer/CustomerScreen";
import AddressScreen from "../../Address/AddressScreen";

const Tab = createBottomTabNavigator();

export default function AdminBottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        // 🔥 TAB BAR HEIGHT
        tabBarStyle: {
          height: 80,          // ⬅️ height badha di
          paddingBottom: 12,
          paddingTop: 8,
        },

        // 🎨 COLORS
        tabBarActiveTintColor: "#1fadad",
        tabBarInactiveTintColor: "#9aa3a3",


        // 🧿 ICON STYLE
        tabBarIcon: ({ color, focused }) => {
          const icons = {
            Dashboard: "home-variant-outline",
            Vendors: "office-building",
            Customers: "account-group-outline",
            Address: "map-marker-outline",
          };

          return (
            <Icon
              name={icons[route.name]}
              size={focused ? 30 : 26}   // ⬅️ icon size bada
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={AdminDashboard} />
      <Tab.Screen name="Vendors" component={VendorListScreen} />
      <Tab.Screen name="Customers" component={CustomerScreen} />
      <Tab.Screen name="Address" component={AddressScreen} />
    </Tab.Navigator>
  );
}
