import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8fafc" },

  header: {
    paddingTop: 18,
    paddingHorizontal: 18,
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  profileWrap: { flexDirection: "row", alignItems: "center", gap: 12 },

  avatarWrap: {
    width: 52,
    height: 52,
    borderRadius: 18,
    overflow: "hidden",
    backgroundColor: "#e2e8f0",
  },

  avatar: { width: "100%", height: "100%" },

  greeting: {
    fontSize: 11,
    fontWeight: "900",
    color: "#9AA3A3",
    letterSpacing: 1,
  },

  name: { fontSize: 18, fontWeight: "900", color: "#0f172a" },

  shop: { marginTop: 2, fontSize: 12, fontWeight: "700", color: "#64748b" },

  notifyBtn: {
    width: 44,
    height: 44,
    borderRadius: 16,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#eef2f7",
  },

  scroll: { padding: 18, paddingBottom: 20 },

  sectionTitle: {
    fontSize: 13,
    fontWeight: "900",
    color: "#64748b",
    marginBottom: 10,
    letterSpacing: 0.6,
    marginTop: 12,
  },

  /* TODAY CARD */
  todayCard: {
    backgroundColor: "#fff",
    borderRadius: 22,
    padding: 16,
    borderWidth: 1,
    borderColor: "#eef2f7",
  },

  todayTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  todayTitle: { fontSize: 16, fontWeight: "900", color: "#0f172a" },

  todaySub: { marginTop: 4, fontSize: 13, fontWeight: "800", color: "#64748b" },

  statusPill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },

  statusText: { fontSize: 11, fontWeight: "900", color: "#fff" },

  linkRow: {
    marginTop: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  linkText: { fontSize: 13, fontWeight: "900", color: "#1fadad" },

  /* TWO GRID */
  twoGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },

  smallCard: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 14,
    borderWidth: 1,
    borderColor: "#eef2f7",
    gap: 6,
  },

  smallLabel: { fontSize: 12, fontWeight: "900", color: "#94a3b8" },

  smallValue: { fontSize: 18, fontWeight: "900", color: "#0f172a" },

  /* PAYMENT */
  paymentCard: {
    marginTop: 14,
    backgroundColor: "#fff",
    borderRadius: 22,
    padding: 16,
    borderWidth: 1,
    borderColor: "#eef2f7",
  },

  paymentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  paymentTitle: { fontSize: 15, fontWeight: "900", color: "#0f172a" },

  paymentSub: {
    marginTop: 4,
    fontSize: 13,
    fontWeight: "900",
    color: "#1fadad",
  },

  paymentBottom: { marginTop: 12 },

  lastPayText: { fontSize: 13, fontWeight: "900", color: "#0f172a" },

  lastPayMeta: { marginTop: 4, fontSize: 12, fontWeight: "800", color: "#64748b" },

  /* INVOICE */
  invoiceCard: {
    marginTop: 14,
    backgroundColor: "#fff",
    borderRadius: 22,
    padding: 16,
    borderWidth: 1,
    borderColor: "#eef2f7",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  invoiceTitle: { fontSize: 15, fontWeight: "900", color: "#0f172a" },

  invoiceSub: { marginTop: 4, fontSize: 12, fontWeight: "700", color: "#64748b" },

  invoiceBtn: {
    height: 44,
    paddingHorizontal: 14,
    borderRadius: 16,
    backgroundColor: "#1fadad",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  invoiceBtnText: { color: "#fff", fontSize: 13, fontWeight: "900" },

  /* HISTORY */
  historyRow: {
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 14,
    borderWidth: 1,
    borderColor: "#eef2f7",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  dot: { width: 10, height: 10, borderRadius: 999 },

  historyDate: { width: 60, fontSize: 13, fontWeight: "900", color: "#0f172a" },

  historyStatus: { flex: 1, fontSize: 13, fontWeight: "800", color: "#64748b" },

  historyQty: { fontSize: 13, fontWeight: "900", color: "#0f172a" },
});
