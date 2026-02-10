import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomerDashboard from "../screens/customer/dashboard/CustomerDashboard";
import CustomerBottomBar from "../screens/customer/dashboard/CustomerBottomBar";
const Stack = createNativeStackNavigator();

export default function PublicStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="CustomerBottom"
                component={CustomerBottomBar}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="CustomerDashboard"
                component={CustomerDashboard}
                options={{ headerShown: true, title: "Customer" }}
            />
        </Stack.Navigator>
    );
}
