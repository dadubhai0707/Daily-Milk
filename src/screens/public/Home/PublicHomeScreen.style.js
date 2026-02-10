import { StyleSheet } from "react-native";

export default StyleSheet.create({
  topHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  userLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  avatar: {
    width: 46,
    height: 46,
    borderRadius: 18,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#eef2f7",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    fontSize: 18,
    fontWeight: "900",
    color: "#1fadad",
  },

  helloText: {
    fontSize: 12,
    fontWeight: "800",
    color: "#64748b",
  },

  userName: {
    fontSize: 15,
    fontWeight: "900",
    color: "#0f172a",
  },

  loginBtn: {
    height: 40,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: "#1fadad",
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },

  loginText: {
    fontSize: 13,
    fontWeight: "900",
    color: "#fff",
  },

  logoutBtn: {
    height: 40,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#ef4444",
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },

  logoutText: {
    fontSize: 13,
    fontWeight: "900",
    color: "#ef4444",
  },


  page: {
    flex: 1,
    backgroundColor: "#eaf3f1",
  },

  scroll: {
    padding: 16,
    paddingBottom: 40,
  },

  headerBox: {
    backgroundColor: "#fff",
    borderRadius: 26,
    padding: 18,
    borderWidth: 1,
    borderColor: "#eef2f7",
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 2,
  },

  title: {
    fontSize: 24,
    fontWeight: "900",
    color: "#0f172a",
  },

  trialRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 6,
  },

  trialText: {
    fontSize: 13,
    fontWeight: "800",
    color: "#0f766e",
  },

  subTitle: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: "700",
    color: "#64748b",
    lineHeight: 18,
  },

  toggleWrap: {
    marginTop: 16,
    flexDirection: "row",
    backgroundColor: "#f1f5f9",
    borderRadius: 14,
    padding: 4,
    height: 44,
    alignSelf: "flex-start",
  },

  toggleBtn: {
    paddingHorizontal: 18,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  toggleActive: {
    backgroundColor: "#1fadad",
  },

  toggleText: {
    fontSize: 13,
    fontWeight: "900",
    color: "#64748b",
  },

  toggleTextActive: {
    color: "#fff",
  },

  cardsColumn: {
    marginTop: 16,
    gap: 14,
  },

  planCard: {
    backgroundColor: "#fff",
    borderRadius: 22,
    padding: 16,
    borderWidth: 1,
    borderColor: "#eef2f7",
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 1,
  },

  planCardActive: {
    borderColor: "#bff7f0",
    backgroundColor: "#fbfffe",
  },

  planHead: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 10,
  },

  dotNormal: {
    backgroundColor: "#1fadad",
    opacity: 0.35,
  },

  dotActive: {
    backgroundColor: "#1fadad",
  },

  planName: {
    fontSize: 14,
    fontWeight: "900",
    color: "#334155",
  },

  planNameActive: {
    color: "#0f766e",
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 14,
    gap: 6,
  },

  price: {
    fontSize: 34,
    fontWeight: "900",
    color: "#0f172a",
  },

  priceSuffix: {
    fontSize: 14,
    fontWeight: "800",
    color: "#94a3b8",
    marginBottom: 6,
  },

  featureList: {
    marginTop: 14,
    gap: 10,
  },

  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  featureText: {
    fontSize: 13,
    fontWeight: "800",
    color: "#334155",
  },

  planBtn: {
    marginTop: 18,
    height: 46,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#1fadad",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },

  planBtnActive: {
    backgroundColor: "#1fadad",
  },

  planBtnText: {
    fontSize: 14,
    fontWeight: "900",
    color: "#1fadad",
  },

  planBtnTextActive: {
    color: "#fff",
  },
});
