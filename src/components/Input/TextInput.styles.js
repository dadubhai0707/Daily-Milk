import { StyleSheet } from "react-native";
import { COLORS, SPACING, RADIUS } from "../../utils/constants";

export default StyleSheet.create({
  wrapper: {
    marginBottom: SPACING.lg
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 6,
    color: "#111717"
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    height: 56,
    borderRadius: RADIUS.lg,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#dce4e5",
    paddingHorizontal: 14,

    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 16,
    elevation: 2
  },
  prefix: {
    fontWeight: "700",
    marginRight: 6
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: "#111717"
  }
});
