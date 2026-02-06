import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SellerDashboard from "../screens/seller/Dashboard/SellerDashboard";
import SellerBottomBar from "../screens/seller/Dashboard/components/BottomTabBar";

const Stack = createNativeStackNavigator();

export default function SellerStack() {
  return (

    <Stack.Navigator  >
      <Stack.Screen
        name="AdminTabs"
        component={SellerBottomBar}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SellerDashboard"
        component={SellerDashboard}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
}