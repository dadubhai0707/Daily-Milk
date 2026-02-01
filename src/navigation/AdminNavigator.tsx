import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AdminDashboard from "../screens/admin/Dashboard/AdminDashboard";
import AssignMilkScreen from "../screens/admin/AssignMilk/AssignMilkScreen";
import VendorListScreen from "../screens/admin/Vendor/VendoreScreen";
const Stack = createNativeStackNavigator();

export default function AdminNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AdminDashboard"
        component={AdminDashboard}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="AssignMilk"
        component={AssignMilkScreen}
        options={{ title: "Assign Milk" }}
      />

        <Stack.Screen
          name="VendorListScreen"
          component={VendorListScreen}
          options={{
            title: "Vendors",
          }}
        />
    </Stack.Navigator>
  );
}
