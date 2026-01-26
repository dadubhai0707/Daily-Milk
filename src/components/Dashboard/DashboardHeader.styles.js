import { StyleSheet } from "react-native";
import { COLORS, RADIUS } from "../../utils/constants";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 16
  },

  profileWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12
  },

  avatarWrap: {
    position: "relative"
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#E5E7EB"
  },
  onlineDot: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#22C55E",
    borderWidth: 2,
    borderColor: "#FFFFFF"
  },

  greeting: {
    fontSize: 11,
    fontWeight: "700",
    color: "#9CA3AF",
    letterSpacing: 0.6
  },
  name: {
    fontSize: 16,
    fontWeight: "800",
    color: "#121717",
    marginTop: 2
  },

  notifyBtn: {
    width: 44,
    height: 44,
    borderRadius: RADIUS.xl,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3
  },
  notifyIcon: {
    fontSize: 20
  },
  notifyDot: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#EF4444",
    borderWidth: 2,
    borderColor: "#FFFFFF"
  }
});
