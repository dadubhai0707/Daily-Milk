import {
    Text,
    View,
} from "react-native";
import SellerProvider from "../../../context/store/seller/seller.provider";
import BottomTabBar from "../Dashboard/components/BottomTabBar";

const SellerList = () => {
    return (
        <View>
            <Text>Seller Screen Screen</Text>
            <BottomTabBar />
        </View>
    );
};
export default function SellerScreen() {
    return (
        <SellerProvider>
            <SellerList />
        </SellerProvider>
    );
}
