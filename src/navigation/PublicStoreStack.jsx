import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PublicStoreListScreen from "../screens/public/Stores/PublicStoreListScreen";
import PublicStoreDetailScreen from "../screens/public/Stores/PublicStoreDetailScreen";

const Stack = createNativeStackNavigator();

export default function PublicStoreStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="PublicStoreListScreen"
        component={PublicStoreListScreen}
      />

      <Stack.Screen
        name="PublicStoreDetailScreen"
        component={PublicStoreDetailScreen}
      />
    </Stack.Navigator>
  );
}
