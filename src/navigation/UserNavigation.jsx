import AdminStack from "./AdminNavigator";
import SellerStack from "./SellerNavigator";
import CustomerStack from "./CustomerNavigator";
import PublicBottomBar from "../screens/public/PublicBottomBar";

export default function UserNavigation({ role, onLogoutSuccess }) {
  if (role === "owner") return <AdminStack onLogoutSuccess={onLogoutSuccess} />;
  if (role === "seller") return <SellerStack onLogoutSuccess={onLogoutSuccess} />;
  if (role === "customer") return <CustomerStack onLogoutSuccess={onLogoutSuccess} />;

  return <PublicBottomBar />;
}
