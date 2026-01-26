import { StyleSheet } from "react-native";
import { COLORS, RADIUS } from "../../utils/constants";

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#FAFAF9",
    paddingHorizontal: 24,
    paddingBottom: 30
  },

  header: {
    paddingVertical: 14
  },
  backIcon: {
    fontSize: 26,
    color: "#111717"
  },

  titleWrap: {
    marginTop: 10,
    marginBottom: 30
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#111717"
  },
  subtitle: {
    fontSize: 15,
    color: "#648487",
    marginTop: 10,
    lineHeight: 22
  },

  btnWrap: {
    marginTop: "auto",
    paddingTop: 20
  },

  footer: {
    alignItems: "center",
    marginTop: 30
  },
  footerText: {
    fontSize: 13,
    color: "#648487"
  },
  login: {
    color: COLORS.primary,
    fontWeight: "700"
  },

  roles: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 24,
    marginTop: 24,
    opacity: 0.3
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
    fontWeight: "800"
  }
});
