import { StyleSheet } from "react-native";
import { COLORS, SPACING, RADIUS } from "../../utils/constants";

export default StyleSheet.create({
  button: {
    height: 56,
    borderRadius: RADIUS.lg,
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,

    // soft shadow (like Tailwind)
    shadowColor: COLORS.primary,
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 6
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700"
  },
  icon: {
    color: "#fff",
    fontSize: 20
  },

  outline: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#dce4e5",
    shadowOpacity: 0
  },
  outlineText: {
    color: "#111717"
  }
});
