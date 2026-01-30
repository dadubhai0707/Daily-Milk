import React, { useEffect, useState, useCallback } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthNavigator from "./AuthNavigator";
import UserNavigation from "./UserNavigation";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  const checkAuth = async () => {
    try {
      const isAuth = await AsyncStorage.getItem("isAuthenticated");
      const userData = await AsyncStorage.getItem("user");

      if (isAuth === "true" && userData) {
        const user = JSON.parse(userData);
        setIsAuthenticated(true);
        setUserRole(user.role);
      } else {
        setIsAuthenticated(false);
        setUserRole(null);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  if (loading) return null;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isAuthenticated ? (
        // Hum checkAuth function pass kar rahe hain login screen ke liye
        <Stack.Screen name="Auth">
          {(props) => <AuthNavigator {...props} onLoginSuccess={checkAuth} />}
        </Stack.Screen>
      ) : (
        <Stack.Screen name="User">
          {(props) => <UserNavigation {...props} role={userRole} />}
        </Stack.Screen>
      )}
    </Stack.Navigator>
  );
}