import { StyleSheet } from "react-native";
import { COLORS, SPACING, RADIUS } from "../../utils/constants";

export default StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.lg,
    paddingBottom: 40,
    backgroundColor: "#FAFAF9",
    flexGrow: 1
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  backIcon: {
    fontSize: 26,
    color: "#111717"
  },
  dots: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center"
  },
  activeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.primary
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc"
  },

  brandBox: {
    width: 64,
    height: 64,
    borderRadius: RADIUS.lg,
    backgroundColor: "#E8F8F7",
    borderWidth: 1,
    borderColor: "#BFEDEC",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40
  },
  brandIcon: {
    fontSize: 34
  },

  title: {
    fontSize: 32,
    fontWeight: "800",
    marginTop: 30,
    color: "#111717"
  },
  subtitle: {
    fontSize: 16,
    color: "#648487",
    marginTop: 6,
    marginBottom: 30
  },

  forgotWrap: {
    alignItems: "flex-end",
    marginBottom: 10
  },
  forgotText: {
    color: COLORS.primary,
    fontWeight: "700",
    fontSize: 13
  },

  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 26
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#DCE4E5"
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 11,
    color: "#648487",
    fontWeight: "800",
    letterSpacing: 1
  },

  footerText: {
    textAlign: "center",
    marginTop: 30,
    color: "#648487",
    fontSize: 13
  },
  signup: {
    color: COLORS.primary,
    fontWeight: "800"
  },

  roles: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 24,
    marginTop: 30,
    opacity: 0.4
  },
  roleItem: {
    alignItems: "center"
  },
  roleDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#111717",
    marginBottom: 4
  },
  roleText: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 0.5
  }
});
