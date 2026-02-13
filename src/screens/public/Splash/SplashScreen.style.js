import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 60,
    paddingHorizontal: 22,
  },

  brandWrap: {
    width: "100%",
    alignItems: "center",
    marginTop: 40,
  },

  logoWrap: {
    width: 120,
    height: 120,
    borderRadius: 34,
    backgroundColor: "#e6fffb",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#1fadad",
    marginBottom: 18,
  },

  logo: {
    width: 74,
    height: 74,
    resizeMode: "contain",
  },

  appName: {
    fontSize: 34,
    fontWeight: "900",
    color: "#0f172a",
    letterSpacing: 0.6,
  },

  tagline: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: "900",
    color: "#1fadad",
    letterSpacing: 0.4,
    textTransform: "uppercase",
  },

  description: {
    marginTop: 12,
    fontSize: 13,
    fontWeight: "700",
    color: "#64748b",
    textAlign: "center",
    lineHeight: 18,
    maxWidth: 320,
  },

  footerWrap: {
    width: "100%",
    alignItems: "center",
  },

  loadingText: {
    fontSize: 13,
    fontWeight: "900",
    color: "#1fadad",
    letterSpacing: 0.5,
  },

  createdBy: {
    marginTop: 18,
    fontSize: 12,
    fontWeight: "800",
    color: "#0f172a",
    opacity: 0.75,
  },

  versionText: {
    marginTop: 6,
    fontSize: 11,
    fontWeight: "800",
    color: "#64748b",
  },
});
