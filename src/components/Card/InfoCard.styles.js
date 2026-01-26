import { StyleSheet } from "react-native";
import { COLORS, RADIUS } from "../../utils/constants";

export default StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: RADIUS.xl,
    padding: 18,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 4
  },
  iconBox: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: "#E8F8F7",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10
  },
  icon: {
    fontSize: 20
  },
  label: {
    fontSize: 12,
    color: "#8A9A9A",
    fontWeight: "600"
  },
  value: {
    fontSize: 22,
    fontWeight: "800",
    color: "#121717"
  },
  unit: {
    fontSize: 13,
    color: "#8A9A9A"
  }
});
