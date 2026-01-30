import AdminStack from "./AdminNavigator";
import SellerStack from "./SellerNavigator";
import CustomerStack from "./CustomerNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function UserNavigation({ role }) {
    // 🔐 fallback (IMPORTANT)
    if (!role) {

        return <CustomerStack />;
    }
    

    if (role === "owner") return <AdminStack />;
    if (role === "seller") return <SellerStack />;
    return <CustomerStack />;
}
