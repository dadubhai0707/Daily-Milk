import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc", // light modern bg
    paddingHorizontal: 16,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0F172A",
    marginTop: 16,
    marginBottom: 16,
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: "#0F172A",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#f1f5f9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },

  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#e6fffa",
    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#14b8a6", // teal
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0F172A",
  },

  phone: {
    fontSize: 13,
    color: "#64748B",
    marginTop: 2,
  },

  status: {
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 2,
  },

  pending: { color: "#f59e0b" },
  paid: { color: "#10b981" },

  amount: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0F172A",
  },

  addressRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },

  address: {
    marginLeft: 6,
    fontSize: 13.5,
    color: "#14b8a6",
    flex: 1,
  },

  fab: {
    position: "absolute",
    right: 20,
    // bottom will be set dynamically in JSX now
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#14b8a6",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 999,
    shadowColor: "#14b8a6",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 6,
  },

  fabText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
    marginLeft: 8,
  },
});




export const formStyles = StyleSheet.create({
  sheet: {
    height: "60%",          // 🔥 control height here
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingBottom: 20
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0f172a",
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 140,
  },
  field: {
    marginBottom: 24,
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#334155",
    marginBottom: 8,
  },
  inputWrapper: {
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  input: {
    fontSize: 16,
    color: "#0f172a",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  prefix: {
    position: "absolute",
    left: 16,
    top: 16,
    fontSize: 16,
    color: "#64748b",
    zIndex: 1,
  },
  infoBox: {
    flexDirection: "row",
    backgroundColor: "#f1f5f9",
    padding: 12,
    borderRadius: 12,
    marginTop: 8,
  },
  infoText: {
    marginLeft: 8,
    fontSize: 13,
    color: "#475569",
    flex: 1,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#f1f5f9",
    backgroundColor: "#fff",
  },
  saveButton: {
    backgroundColor: "#14b8a6",
    borderRadius: 999,
    paddingVertical: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    shadowColor: "#14b8a6",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  saveText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
  },
});
