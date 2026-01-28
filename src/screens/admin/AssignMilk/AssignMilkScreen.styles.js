import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFB"
  },

  /* ================= HEADER ================= */

  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#121717"
  },

  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3
  },

  /* ================= STATS ================= */

  statsRow: {
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 12
  },

  statCard: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3
  },

  statLabel: {
    fontSize: 10,
    fontWeight: "800",
    color: "#9aa3a3"
  },

  statSub: {
    fontSize: 12,
    color: "#9aa3a3",
    marginVertical: 4
  },

  statValuePrimary: {
    fontSize: 24,
    fontWeight: "800",
    color: "#1fadad"
  },

  statValue: {
    fontSize: 24,
    fontWeight: "800",
    color: "#121717"
  },

  /* ================= DATE ================= */

  dateChip: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginHorizontal: 20,
    marginTop: 18,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 30,
    backgroundColor: "#fff",
    gap: 8,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2
  },

  dateText: {
    fontWeight: "700",
    color: "#121717"
  },

  /* ================= FORM ================= */

  section: {
    paddingHorizontal: 20,
    marginBottom: 20
  },

  label: {
    fontSize: 10,
    fontWeight: "800",
    color: "#9aa3a3",
    marginBottom: 6
  },

  selectBox: {
    height: 56,
    borderRadius: 22,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 10,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3
  },

  selectPlaceholder: {
    flex: 1,
    color: "#9aa3a3",
    fontWeight: "600"
  },

  inputRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 16
  },

  inputWrap: {
    flex: 1
  },

  input: {
    height: 56,
    borderRadius: 22,
    backgroundColor: "#fff",
    paddingHorizontal: 18,
    fontSize: 20,
    fontWeight: "800",
    color: "#121717",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3
  },

  /* ================= TOTAL ================= */

  totalCard: {
    marginTop: 20,
    backgroundColor: "#EAF7F7",
    borderRadius: 24,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  totalLabel: {
    fontSize: 10,
    fontWeight: "800",
    color: "#1fadad"
  },

  totalValue: {
    fontSize: 28,
    fontWeight: "900",
    color: "#1fadad"
  },

  totalIcon: {
    width: 48,
    height: 48,
    borderRadius: 18,
    backgroundColor: "#1fadad",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#1fadad",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4
  },

  /* ================= RECENT ================= */

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#121717"
  },

  seeAll: {
    fontSize: 12,
    fontWeight: "800",
    color: "#1fadad"
  },

  recentCard: {
    backgroundColor: "#fff",
    borderRadius: 26,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3
  },

  recentIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: "#EAF7F7",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12
  },

  recentTop: {
    flexDirection: "row",
    justifyContent: "space-between"
  },

  recentName: {
    fontWeight: "800",
    color: "#121717"
  },

  recentTime: {
    fontSize: 12,
    color: "#9aa3a3"
  },

  recentMeta: {
    fontSize: 12,
    color: "#9aa3a3",
    marginTop: 4
  },

  /* ================= BOTTOM ================= */

  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: "#F8FAFB"
  },

  assignBtn: {
    height: 64,
    borderRadius: 26,
    backgroundColor: "#1fadad",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    shadowColor: "#1fadad",
    shadowOpacity: 0.35,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6
  },

  assignText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "800"
  }
});
