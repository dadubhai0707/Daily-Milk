import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import styles from "./Home/PublicHomeScreen.style";
import { clearAuthData } from "../../utils/storage";

export default function PublicHeader() {
  const navigation = useNavigation();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const checkAuth = async () => {
    const isAuth = await AsyncStorage.getItem("isAuthenticated");
    const userData = await AsyncStorage.getItem("user");

    if (isAuth === "true" && userData) {
      setIsAuthenticated(true);
      setUser(JSON.parse(userData));
    } else {
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const handleLogout = async () => {
    await clearAuthData();
    await checkAuth();
  };

  return (
    <View style={styles.topHeader}>
      <View style={styles.userLeft}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {user?.name ? user.name[0].toUpperCase() : "👤"}
          </Text>
        </View>

        <View>
          <Text style={styles.helloText}>
            {isAuthenticated ? "Welcome 👋" : "Hello 👋"}
          </Text>

          <Text style={styles.userName}>
            {isAuthenticated ? user?.name || "User" : "Guest User"}
          </Text>
        </View>
      </View>

      {isAuthenticated ? (
        <TouchableOpacity
          style={styles.logoutBtn}
          activeOpacity={0.85}
          onPress={handleLogout}
        >
          <Icon name="logout" size={18} color="#ef4444" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.loginBtn}
          activeOpacity={0.85}
          onPress={() => navigation.navigate("Auth", { screen: "Login" })}
        >
          <Icon name="login" size={18} color="#fff" />
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
