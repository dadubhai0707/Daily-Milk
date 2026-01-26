import { StyleSheet } from "react-native";
import { COLORS, RADIUS } from "../../utils/constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: "#FFFFFF"
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16
  },
  backIcon: {
    fontSize: 28,
    color: "#111717"
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    color: "#111717"
  },

  iconWrap: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#E8F8F7",
    alignSelf: "center",
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    fontSize: 36
  },

  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "700",
    marginTop: 24,
    color: "#111717"
  },
  subtitle: {
    textAlign: "center",
    fontSize: 14,
    color: "#64748B",
    marginTop: 10,
    lineHeight: 20
  },
  phone: {
    fontWeight: "600",
    color: "#111717"
  },

  otpRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginVertical: 32
  },
  otpBox: {
    width: 48,
    height: 56,
    borderRadius: RADIUS.lg,
    backgroundColor: "#F7F7F7",
    borderWidth: 1,
    borderColor: "#EBECEC",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    color: "#111717"
  },

  resendWrap: {
    alignItems: "center",
    marginBottom: 30
  },
  resendText: {
    fontSize: 13,
    color: "#64748B"
  },
  resendTimer: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.primary
  },

  blobBottom: {
    position: "absolute",
    bottom: -80,
    right: -80,
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: "rgba(25,166,179,0.08)"
  },
  blobTop: {
    position: "absolute",
    top: -60,
    left: -60,
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "rgba(25,166,179,0.08)"
  }
});
