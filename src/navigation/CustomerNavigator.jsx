import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomerHome from "../screens/customer/CustomerDashboard";

const Stack = createNativeStackNavigator();

export default function CustomerStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="CustomerHome"
                component={CustomerHome}
                options={{ headerShown: true, title: "Customer" }}
            />
        </Stack.Navigator>
    );
}
