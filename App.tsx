import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigation/AuthNavigator";

// import AdminNavigator from "./navigation/AdminNavigator";
// import SellerNavigator from "./navigation/SellerNavigator";

const isLoggedIn = false; // MUST be false for testing
const userRole: "admin" | "seller" = "admin";

export default function App() {
  const renderNavigator = () => {
    if (!isLoggedIn) return <AuthNavigator/>;
    // if (userRole === "admin") return <AdminNavigator />;
    // return <SellerNavigator />;
  };

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      {renderNavigator()}
    </NavigationContainer>
  );
}
