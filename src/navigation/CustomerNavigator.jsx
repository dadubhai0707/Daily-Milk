import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomerDashboard from "../screens/customer/CustomerDashboard";
const Stack = createNativeStackNavigator();

export default function CustomerStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="CustomerDashboard"
                component={CustomerDashboard}
                options={{ headerShown: true, title: "Customer" }}
            />
        </Stack.Navigator>
    );
}
