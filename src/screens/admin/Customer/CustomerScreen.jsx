import {
    Text,
    View,
} from "react-native";
import CustomerProvider from "../../../context/store/customer/customer.provider";
import BottomTabBar from "../Dashboard/components/BottomTabBar";
const CustomerList = () => {
    return (
        <View>
            <Text>Customer Screen</Text>
            <BottomTabBar />
        </View>
    );
};
export default function CustomerScreen() {
    return (
        <CustomerProvider>
            <CustomerList />
        </CustomerProvider>
    );
}
