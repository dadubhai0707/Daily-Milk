import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import PublicHomeScreen from "./Home/PublicHomeScreen";
import PublicStoreListScreen from "./Stores/PublicStoreListScreen";
import PublicAboutScreen from "./About/PublicAboutScreen";
import PublicLoginRedirectScreen from "./Login/PublicLoginRedirectScreen";

const Tab = createBottomTabNavigator();

export default function PublicBottomBar() {
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
            Home: "home-variant-outline",
            Store: "storefront-outline",
            About: "information-outline",
            Login: "login",
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
      <Tab.Screen name="Home" component={PublicHomeScreen} />
      <Tab.Screen name="Store" component={PublicStoreListScreen} />
      <Tab.Screen name="About" component={PublicAboutScreen} />
    </Tab.Navigator>
  );
}
