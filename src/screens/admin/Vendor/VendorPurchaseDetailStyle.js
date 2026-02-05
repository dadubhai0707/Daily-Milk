import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F6F8F8", paddingHorizontal: 16 },

  header: {
    paddingTop: 14,
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerTitle: { fontSize: 18, fontWeight: "900", color: "#111827" },

  vendorCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 14,
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    marginBottom: 14,
    marginTop:14,
  },

  vendorAvatar: {
    width: 52,
    height: 52,
    borderRadius: 50,
    backgroundColor: "#E9F3F2",
    alignItems: "center",
    justifyContent: "center",
  },

  vendorAvatarText: { fontSize: 20, fontWeight: "900", color: "#0F766E" },

  vendorName: { fontSize: 16, fontWeight: "900", color: "#111827" },
  vendorPhone: { fontSize: 13, fontWeight: "700", color: "#688280", marginTop: 2 },
  vendorAddress: { fontSize: 12, fontWeight: "700", color: "#9ca3af", marginTop: 2 },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 52,
    borderRadius: 16,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: "#dce5e4",
    marginBottom: 14,
    gap: 10,
  },

  searchInput: { flex: 1, fontSize: 15, fontWeight: "700", color: "#111827" },

  historyCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 14,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  historyTitle: { fontSize: 14, fontWeight: "900", color: "#111827" },
  historyDate: { fontSize: 11, fontWeight: "700", color: "#688280", marginTop: 4 },

  amount: { fontSize: 15, fontWeight: "900", color: "#111827" },

  purchaseBtn: {
    position: "absolute",
    bottom: 18,
    left: 16,
    right: 16,
    backgroundColor: "#12a19c",
    height: 58,
    borderRadius: 18,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  purchaseText: { color: "#fff", fontSize: 16, fontWeight: "900" },
});
