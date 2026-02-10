import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function PublicLoginRedirectScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const parent = navigation.getParent();
    if (parent) {
      navigation.navigate("Auth", { screen: "Login" });
    }
  },[]);



  
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <ActivityIndicator size="large" color="#1fadad" /> */}
    </View>
  );
}
