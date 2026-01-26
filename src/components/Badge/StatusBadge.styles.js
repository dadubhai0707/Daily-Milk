import { StyleSheet } from "react-native";
import { COLORS, RADIUS, SPACING } from "../../utils/constants";

export default StyleSheet.create({
  badge: {
    paddingHorizontal: SPACING.sm,
    paddingVertical: 4,
    borderRadius: RADIUS.pill
  },
  text: {
    fontSize: 12,
    fontWeight: "600"
  },
  PAID: {
    backgroundColor: "#EAF9F0",
    color: COLORS.success
  },
  PENDING: {
    backgroundColor: "#FFF3E5",
    color: COLORS.warning
  },
  ACTIVE: {
    backgroundColor: "#E8F8F7",
    color: COLORS.primary
  }
});
