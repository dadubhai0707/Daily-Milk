import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function SellerStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      {/* <Stack.Screen name="SellerDashboard" component={SellerDashboard} /> */}
    </Stack.Navigator>
  );
}