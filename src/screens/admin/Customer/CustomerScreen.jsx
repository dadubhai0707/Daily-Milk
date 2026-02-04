import {
    Text,
    View,
} from "react-native";
import CustomerProvider from "../../../context/store/customer/customer.provider";
import FabButton from "../Dashboard/components/FabButton";
import { useState } from "react";
const CustomerList = () => {
    const [formOpen, setFormOpen] = useState(false);

    return (
        <View>
            <Text>Customer Screen</Text>
            <FabButton
                title="Add Customer"
                onPress={() => setFormOpen(true)}
            />
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
