import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    alignItems: "center",
    justifyContent: "center",
  },

  logoWrap: {
    width: 110,
    height: 110,
    borderRadius: 32,
    backgroundColor: "#e6fffb",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#1fadad",
    marginBottom: 18,
  },

  logo: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },

  title: {
    fontSize: 28,
    fontWeight: "900",
    color: "#0f172a",
  },

  subTitle: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: "800",
    color: "#64748b",
  },

  footerText: {
    marginTop: 40,
    fontSize: 13,
    fontWeight: "800",
    color: "#1fadad",
  },
});
