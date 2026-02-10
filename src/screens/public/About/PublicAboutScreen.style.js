import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    paddingHorizontal: 16,
  },

  scroll: {
    paddingBottom: 40,
  },

  hero: {
    marginTop: 10,
    padding: 18,
    borderRadius: 22,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#eef2f7",
  },

  heroTitle: {
    fontSize: 26,
    fontWeight: "900",
    color: "#0f172a",
  },

  heroSub: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: "700",
    color: "#64748b",
    lineHeight: 20,
  },

  heroRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 14,
    flexWrap: "wrap",
  },

  heroPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 14,
    backgroundColor: "#e9fbf9",
  },

  heroPillText: {
    fontSize: 12,
    fontWeight: "900",
    color: "#0f172a",
  },

  sectionTitle: {
    marginTop: 18,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "900",
    color: "#0f172a",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#eef2f7",
  },

  cardTop: {
    flexDirection: "row",
    gap: 12,
    alignItems: "flex-start",
  },

  iconWrap: {
    width: 46,
    height: 46,
    borderRadius: 16,
    backgroundColor: "#e9fbf9",
    alignItems: "center",
    justifyContent: "center",
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: "900",
    color: "#0f172a",
  },

  cardDesc: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: "700",
    color: "#64748b",
    lineHeight: 18,
  },

  roleCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#eef2f7",
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },

  roleLeft: {
    width: 52,
    height: 52,
    borderRadius: 18,
    backgroundColor: "#e9fbf9",
    alignItems: "center",
    justifyContent: "center",
  },

  roleTitle: {
    fontSize: 15,
    fontWeight: "900",
    color: "#0f172a",
  },

  roleDesc: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: "700",
    color: "#64748b",
    lineHeight: 18,
  },

  noteCard: {
    marginTop: 10,
    backgroundColor: "#e6fffb",
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: "#99f6e4",
    flexDirection: "row",
    gap: 10,
    alignItems: "flex-start",
  },

  noteText: {
    flex: 1,
    fontSize: 13,
    fontWeight: "800",
    color: "#0f172a",
    lineHeight: 18,
  },
});
