import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SellerBottomBar from "../screens/seller/Dashboard/components/BottomTabBar";
import SellerDashboard from "../screens/seller/Dashboard/SellerDashboard";
import SellerAssignedAreas from "../screens/seller/Areas/SellerAssignedAreas";
import SellerMilkDeliveryScreen from "../screens/seller/MilkDelivery/SellerMilkDeliveryScreen";

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
      <Stack.Screen
        name="SellerArea"
        component={SellerAssignedAreas}
      />
      <Stack.Screen
        name="SellerMilkDelivery"
        component={SellerMilkDeliveryScreen}
      />
      {/*  */}
    </Stack.Navigator>
  );
}