import React, { useEffect, useState, useCallback } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import UserNavigation from "./UserNavigation";
import SplashScreen from "../screens/public/Splash/SplashScreen";
import PublicBottomBar from "../screens/public/PublicBottomBar";
import AuthNavigator from "./AuthNavigator";

import { AuthProvider } from "../context/AuthContext";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const [isSplashDone, setIsSplashDone] = useState(false);
  const [loading, setLoading] = useState(true);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  // ✅ Main Auth Checker
  const checkAuth = useCallback(async () => {
    try {
      setLoading(true);

      const isAuth = await AsyncStorage.getItem("isAuthenticated");
      const userData = await AsyncStorage.getItem("user");

      if (isAuth === "true" && userData) {
        const user = JSON.parse(userData);
        setIsAuthenticated(true);
        setUserRole(user?.role || null);
      } else {
        setIsAuthenticated(false);
        setUserRole(null);
      }
    } catch (e) {
      setIsAuthenticated(false);
      setUserRole(null);
    } finally {
      setLoading(false);
    }
  }, []);

  // Splash Timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashDone(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // After splash check auth
  useEffect(() => {
    if (isSplashDone) checkAuth();
  }, [isSplashDone, checkAuth]);

  if (!isSplashDone) return <SplashScreen />;
  if (loading) return null;

  return (
    <AuthProvider checkAuth={checkAuth}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuthenticated ? (
          <>
            <Stack.Screen name="Public" component={PublicBottomBar} />

            <Stack.Screen name="Auth">
              {(props) => (
                <AuthNavigator
                  {...props}
                  onLoginSuccess={() => checkAuth()}
                />
              )}
            </Stack.Screen>
          </>
        ) : (
          <Stack.Screen name="User">
            {(props) => <UserNavigation {...props} role={userRole} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </AuthProvider>
  );
}
