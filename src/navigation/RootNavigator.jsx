import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthNavigator from "./AuthNavigator";
import UserNavigation from "./UserNavigation";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
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
                }
            } catch (err) {
                setIsAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    if (loading) return null;

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {!isAuthenticated ? (
                <Stack.Screen name="Auth" component={AuthNavigator} />
            ) : (
                <Stack.Screen
                    name="User"
                    component={UserNavigation}
                    initialParams={{ role: userRole }}
                />
            )}
        </Stack.Navigator>
    );
}
