import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./src/screens/auth/LoginScreen";
import AdminDashboard from "./src/screens/admin/Dashboard/AdminDashboard";
import AssignMilkScreen from "./src/screens/admin/AssignMilk/AssignMilkScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        {/* Login (later enable karish) */}
        {/* <Stack.Screen name="Login" component={LoginScreen} /> */}

        {/* Admin Home */}
        <Stack.Screen
          name="AdminDashboard"
          component={AdminDashboard}
        />

        {/* Assign Milk */}
        <Stack.Screen
          name="AssignMilk"
          component={AssignMilkScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
