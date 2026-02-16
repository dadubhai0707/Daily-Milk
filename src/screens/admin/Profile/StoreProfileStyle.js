import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFB",
  },

  scroll: {
    padding: 16,
    paddingBottom: 120,
  },

  /* HEADER */
  header: {
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  profileWrap: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatarWrap: {
    marginRight: 12,
  },

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#E8F3F3",
  },

  onlineDot: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 10,
    height: 10,
    backgroundColor: "#22c55e",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#fff",
  },

  greeting: {
    fontSize: 11,
    color: "#6b7280",
    fontWeight: "700",
  },

  username: {
    fontSize: 16,
    fontWeight: "800",
    color: "#121717",
  },

  notifyBtn: {
    width: 44,
    height: 44,
    backgroundColor: "#fff",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  notifyIcon: {
    fontSize: 20,
  },

  notifyDot: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    backgroundColor: "red",
    borderRadius: 4,
  },

  /* PROFILE CARD */
  profileCard: {
    backgroundColor: "#fff",
    borderRadius: 28,
    padding: 18,
    marginBottom: 16,
  },

  bigAvatarRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  bigAvatar: {
    width: 74,
    height: 74,
    borderRadius: 37,
    backgroundColor: "#F1F7F7",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  bigAvatarText: {
    fontSize: 28,
    fontWeight: "900",
    color: "#1fadad",
  },

  ownerName: {
    fontSize: 20,
    fontWeight: "900",
    color: "#121717",
  },

  storeName: {
    marginTop: 2,
    fontSize: 14,
    fontWeight: "700",
    color: "#6b7280",
  },

  statusBadge: {
    marginTop: 10,
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E9F7F7",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 14,
  },

  statusText: {
    marginLeft: 8,
    fontSize: 12,
    fontWeight: "800",
    color: "#1fadad",
    letterSpacing: 0.5,
  },

  /* INFO ROWS */
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
  },

  infoIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 14,
    backgroundColor: "#F1F7F7",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  infoText: {
    flex: 1,
    fontSize: 13,
    fontWeight: "700",
    color: "#374151",
  },

  /* STATS */
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  statCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 16,
    marginBottom: 16,
  },

  statCardAlert: {
    backgroundColor: "#FFF2E8",
  },

  statTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  statIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1F7F7",
  },

  statIcon: {
    fontSize: 18,
  },

  statTag: {
    fontSize: 10,
    fontWeight: "700",
    color: "#9aa3a3",
  },

  alertTag: {
    color: "#EB6A14",
  },

  statTitle: {
    marginTop: 12,
    fontSize: 12,
    color: "#6b7280",
    fontWeight: "600",
  },

  statValue: {
    fontSize: 26,
    fontWeight: "800",
    color: "#121717",
  },

  alertValue: {
    color: "#EB6A14",
  },

  statUnit: {
    fontSize: 14,
    color: "#9aa3a3",
  },

  /* SECTION */
  sectionTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: "#121717",
    marginTop: 6,
    marginBottom: 12,
    letterSpacing: 1,
  },

  /* STORE INFO CARD */
  storeInfoCard: {
    backgroundColor: "#fff",
    borderRadius: 28,
    padding: 18,
    marginBottom: 16,
  },

  /* PLAN CARD */
  planCard: {
    backgroundColor: "#E9F7F7",
    borderRadius: 28,
    padding: 16,
    marginBottom: 16,
  },

  planTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  planName: {
    fontSize: 20,
    fontWeight: "900",
    color: "#0f172a",
  },

  planSub: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: "700",
    color: "#475569",
  },

  planActiveBadge: {
    backgroundColor: "#DFF3E9",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 14,
  },

  planActiveText: {
    fontSize: 12,
    fontWeight: "900",
    color: "#0f766e",
    letterSpacing: 0.5,
  },

  planInnerCard: {
    marginTop: 14,
    backgroundColor: "#fff",
    borderRadius: 22,
    padding: 16,
  },

  planRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  planLabel: {
    fontSize: 13,
    fontWeight: "700",
    color: "#475569",
  },

  planValue: {
    fontSize: 13,
    fontWeight: "900",
    color: "#0f172a",
  },

  divider: {
    height: 1,
    backgroundColor: "#eef2f2",
    marginVertical: 10,
  },

  /* BUTTON */
  editBtn: {
    backgroundColor: "#1fadad",
    height: 56,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 10,
  },

  editBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "900",
  },

  /* LOADING */
  loadingWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  /* FAB */
  fabContainer: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 999,
  },

  fabButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1fadad",
    height: 64,
    width: "90%",
    borderRadius: 20,

    elevation: 10, // ANDROID
    shadowColor: "#1fadad", // iOS
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },

  fabIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(255,255,255,0.15)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  fabText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "800",
  },
});
