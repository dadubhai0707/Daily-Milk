import AdminStack from "./AdminNavigator";
import SellerStack from "./SellerNavigator";
import CustomerStack from "./CustomerNavigator";
import PublicBottomBar from "../screens/public/PublicBottomBar";

export default function UserNavigation({ role }) {
    if (role === "owner") return <AdminStack />;
  if (role === "seller") return <SellerStack />;
  if (role === "customer") return <CustomerStack />;

  // ✅ role === "user" OR unknown role
  return <PublicBottomBar />;
}
