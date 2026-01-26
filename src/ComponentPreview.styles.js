import { StyleSheet } from "react-native";
import { COLORS, SPACING } from "./utils/constants";
// import { SPACING, COLORS } from "../../utils/constants";

export default StyleSheet.create({
  container: {
    padding: SPACING.lg,
    backgroundColor: COLORS.background
  },
  heading: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: SPACING.lg
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  badgeRow: {
    flexDirection: "row",
    gap: 10,
    marginVertical: SPACING.md
  }
});
