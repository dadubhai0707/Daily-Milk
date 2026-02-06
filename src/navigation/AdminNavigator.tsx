import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AdminDashboard from "../screens/admin/Dashboard/AdminDashboard";
import AssignMilkScreen from "../screens/admin/AssignMilk/AssignMilkScreen";
import VendorListScreen from "../screens/admin/Vendor/VendoreScreen";
import AddressScreen from "../screens/admin/Address/AddressScreen";
import SellerScreen from "../screens/admin/Seller/SellerScreen";
import CustomerScreen from "../screens/admin/Customer/CustomerScreen";
const Stack = createNativeStackNavigator();
import AdminBottomTabs from "../screens/admin/Dashboard/components/BottomTabBar";
import NewPurchaseScreen from "../screens/admin/Vendor/PurchaseHistory/NewPurchaseScreen";
import VendorPurchaseDetailWrapper from "../screens/admin/Vendor/VendorPurchaseDetailScreen";
import SellerProfileScreen from "../screens/admin/Seller/SellerProfileScreen";




export default function AdminNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AdminTabs"
        component={AdminBottomTabs}
        options={{ headerShown: false }}
      />
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
      <Stack.Screen
        name="SellerScreen"
        component={SellerScreen}
        options={{
          title: "Seller",
        }}
      />
      <Stack.Screen
        name="AddressScreen"
        component={AddressScreen}
        options={{
          title: "Address",
        }}
      />
      <Stack.Screen
        name="CustomerScreen"
        component={CustomerScreen}
        options={{
          title: "Customer",
        }}
      />
      <Stack.Screen
        name="VendorPurchaseDetail"
        component={VendorPurchaseDetailWrapper}
        options={{ title: "VendorDetail" }}
      />
      <Stack.Screen
        name="NewPurchase"
        component={NewPurchaseScreen}
        options={{
          title: "Purchase Milk",
        }} />

      <Stack.Screen
        name="SellerProfile"
        component={SellerProfileScreen}
        options={{
          title: "Seller Profile",
        }}
      />
    </Stack.Navigator>
  );
}
