import React from "react";
import {
    View,
    Text,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import BottomTabBar from "../Dashboard/components/BottomTabBar";
import AddressProvider from "../../../context/store/address/address.provider";
import AddressContext from "../../../context/store/address/index";

const AddressListContext = () => {
    return (
        <View >
            <Text>Address Screen</Text>
            <BottomTabBar />
        </View>
    );
};

export default function AddressScreen() {
    return (
        <AddressProvider>
            <AddressListContext />
        </AddressProvider>
    );
}
