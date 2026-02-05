import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F6F8F8", paddingHorizontal: 16 },

  header: {
    paddingTop: 14,
    paddingBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerTitle: { fontSize: 20, fontWeight: "800", color: "#111827" },

  iconBtn: { width: 42, height: 42, alignItems: "center", justifyContent: "center" },

  cardsRow: {
    flexDirection: "row",
    gap: 12,
    paddingVertical: 10,
  },

  card: {
    width: 150,
    padding: 16,
    borderRadius: 18,
    backgroundColor: "#D2E4EF",
  },

  cardOrange: { backgroundColor: "#FDEBD0" },

  cardIcon: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.6)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  cardValue: { fontSize: 22, fontWeight: "900", color: "#111827" },
  cardLabel: { fontSize: 12, fontWeight: "700", color: "#688280", marginTop: 3 },

  sectionHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },

  sectionTitle: { fontSize: 18, fontWeight: "900", color: "#111827" },
  viewAll: { fontSize: 13, fontWeight: "900", color: "#12a19c" },

  listCard: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 18,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  leftRow: { flexDirection: "row", alignItems: "center", gap: 12 },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 50,
    backgroundColor: "#E9F3F2",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: { fontSize: 18, fontWeight: "900", color: "#0F766E" },

  name: { fontSize: 16, fontWeight: "900", color: "#111827" },
  meta: { fontSize: 12, fontWeight: "700", color: "#688280", marginTop: 3 },

  rightCol: { alignItems: "flex-end" },
  amount: { fontSize: 16, fontWeight: "900", color: "#111827" },

  badge: {
    marginTop: 6,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
  },

  badgePaid: { backgroundColor: "#D1FAE5" },
  badgePending: { backgroundColor: "#FFEDD5" },

  badgeTextPaid: { fontSize: 10, fontWeight: "900", color: "#047857" },
  badgeTextPending: { fontSize: 10, fontWeight: "900", color: "#C2410C" },

  fab: {
    position: "absolute",
    right: 18,
    bottom: 22,
    backgroundColor: "#12a19c",
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 999,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  fabText: { color: "#fff", fontWeight: "900", fontSize: 14 },
});
