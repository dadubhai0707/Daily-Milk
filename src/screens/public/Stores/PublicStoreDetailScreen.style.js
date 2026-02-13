import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 14,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
  },

  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: "#f1f5f9",
    alignItems: "center",
    justifyContent: "center",
  },

  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "900",
    color: "#0f172a",
  },

  card: {
    marginTop: 14,
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },

  cardTop: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  logoWrap: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: "#ecfeff",
    alignItems: "center",
    justifyContent: "center",
  },

  storeName: {
    fontSize: 16,
    fontWeight: "900",
    color: "#0f172a",
  },

  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    gap: 6,
  },

  metaText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#64748b",
  },

  statusPill: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    gap: 6,
  },

  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 999,
  },

  statusText: {
    fontSize: 11,
    fontWeight: "900",
  },

  idText: {
    marginTop: 12,
    fontSize: 12,
    fontWeight: "800",
    color: "#94a3b8",
  },

  statsGrid: {
    marginTop: 14,
    marginHorizontal: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },

  statBox: {
    width: "47%",
    paddingVertical: 16,
    paddingHorizontal: 14,
    backgroundColor: "#fff",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },

  statLabel: {
    fontSize: 12,
    fontWeight: "900",
    color: "#64748b",
  },

  statValue: {
    marginTop: 6,
    fontSize: 18,
    fontWeight: "900",
    color: "#0f172a",
  },

  joinBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingVertical: 14,
    borderRadius: 18,
    backgroundColor: "#12a19c",
  },

  joinBtnText: {
    fontSize: 15,
    fontWeight: "900",
    color: "#fff",
  },

  hintText: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: "700",
    color: "#64748b",
    textAlign: "center",
  },
});
