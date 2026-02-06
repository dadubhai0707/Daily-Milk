const { StyleSheet } = require("react-native");

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2f2f2",
        paddingHorizontal: 16,
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
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 16,
    },

    headerLeft: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },

    storeIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#12a19c20",
        alignItems: "center",
        justifyContent: "center",
    },

    headerTitle: {
        fontSize: 22,
        fontWeight: "800",
        color: "#111817",
    },

    menuBtn: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    searchBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 14,
        paddingHorizontal: 12,
        height: 52,
        marginBottom: 16,
        marginTop: 16,
    },

    searchInput: {
        flex: 1,
        marginLeft: 8,
        fontSize: 15,
        color: "#111817",
    },

    card: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 14,
        marginBottom: 14,
        elevation: 2,
    },

    inactiveCard: {
        backgroundColor: "#f8f8f8",
        borderStyle: "dashed",
        borderWidth: 1,
        borderColor: "#d1d5db",
    },

    avatarWrap: {
        marginRight: 12,
        position: "relative",
    },

    avatar: {
        width: 56,
        height: 56,
        borderRadius: 28,
        alignItems: "center",
        justifyContent: "center",
    },

    avatarText: {
        fontSize: 22,
        fontWeight: "700",
        color: "#fff",
    },

    pendingBorder: {
        backgroundColor: "#E8740B",
    },

    successBorder: {
        backgroundColor: "#4D994D",
    },

    statusDot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        position: "absolute",
        bottom: 4,
        right: -2,
        borderWidth: 2,
        borderColor: "#fff",
    },

    greenDot: {
        backgroundColor: "#4D994D",
    },

    grayDot: {
        backgroundColor: "#9ca3af",
    },

    rowBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    name: {
        fontSize: 17,
        fontWeight: "700",
        color: "#111817",
    },

    inactiveText: {
        color: "#9ca3af",
    },

    meta: {
        fontSize: 11,
        fontWeight: "600",
        color: "#9ca3af",
        marginTop: 2,
        textTransform: "uppercase",
    },

    badge: {
        backgroundColor: "#f3f4f6",
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 6,
        height:22,
    },

    inactiveBadge: {
        backgroundColor: "#e5e7eb",
    },

    badgeText: {
        fontSize: 10,
        fontWeight: "700",
        color: "#6b7280",
    },

    footerRow: {
        marginTop: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
    },

    phoneRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },

    phone: {
        fontSize: 14,
        color: "#6b7280",
    },

    pendingText: {
        fontSize: 10,
        fontWeight: "700",
        color: "#E8740B",
    },

    amount: {
        fontSize: 20,
        fontWeight: "800",
        color: "#E8740B",
    },

    clearedRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },

    clearedText: {
        fontSize: 14,
        fontWeight: "700",
        color: "#4D994D",
    },
    redDot: {
        backgroundColor: "#EF4444",
    },



    inactiveBadgeText: {
        color: "#b91c1c",
    },

    activeBadge: {
        backgroundColor: "#dcfce7",
    },

    activeBadgeText: {
        color: "#166534",
    },

});





/* =========================
   FormStyle
========================= */
export const FormStyle = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        borderBottomWidth: 1,
        borderColor: "#eee",
    },
    headerTitle: {
        flex: 1,
        textAlign: "center",
        fontSize: 18,
        fontWeight: "700",
    },
    content: {
        padding: 16,
        paddingBottom: 120,
    },
    sectionLabel: {
        fontSize: 12,
        fontWeight: "700",
        color: "#6b7280",
        marginBottom: 6,
        marginTop: 16,
    },
    segment: {
        flexDirection: "row",
        backgroundColor: "#f3f4f6",
        borderRadius: 12,
        padding: 6,
    },
    segmentItem: {
        flex: 1,
        height: 44,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    segmentActive: {
        backgroundColor: "#1fadad",
    },
    segmentText: {
        fontWeight: "700",
        color: "#6b7280",
    },
    segmentTextActive: {
        color: "#fff",
    },
    footer: {
        padding: 16,
        backgroundColor: "#fff",
    },
    saveBtn: {
        height: 56,
        borderRadius: 14,
        backgroundColor: "#1fadad",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
    },
    saveText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "700",
    },
});





export const ProfileStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 12,
    justifyContent: "space-between",
    backgroundColor: "#fafafa",
  },

  headerBtn: {
    height: 42,
    width: 42,
    borderRadius: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#eef2f7",
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#0f172a",
  },

  pagePadding: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },

  profileCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: "#eef2f7",
  },

  profileRow: {
    flexDirection: "row",
    gap: 14,
    marginBottom: 18,
    alignItems: "center",
  },

  avatarWrap: {
    position: "relative",
  },

  avatar: {
    height: 64,
    width: 64,
    borderRadius: 100,
    backgroundColor: "#f1f5f9",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    fontSize: 22,
    fontWeight: "900",
    color: "#0f172a",
  },

  statusDot: {
    position: "absolute",
    height: 14,
    width: 14,
    borderRadius: 100,
    right: 2,
    bottom: 2,
    borderWidth: 2,
    borderColor: "#fff",
  },

  greenDot: {
    backgroundColor: "#16a34a",
  },

  redDot: {
    backgroundColor: "#ef4444",
  },

  sellerName: {
    fontSize: 20,
    fontWeight: "900",
    color: "#0f172a",
  },

  sellerId: {
    marginTop: 3,
    fontSize: 13,
    color: "#64748b",
    fontWeight: "600",
  },

  verifiedRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 6,
  },

  verifiedText: {
    fontSize: 12,
    fontWeight: "800",
    color: "#0f766e",
    letterSpacing: 1,
  },

  statsGrid: {
    flexDirection: "row",
    gap: 12,
  },

  statBox: {
    flex: 1,
    backgroundColor: "#f8fafc",
    borderRadius: 16,
    padding: 14,
  },

  statLabel: {
    fontSize: 11,
    fontWeight: "800",
    color: "#94a3b8",
    letterSpacing: 1,
  },

  statValue: {
    marginTop: 6,
    fontSize: 22,
    fontWeight: "900",
    color: "#0f172a",
  },

  statUnit: {
    fontSize: 13,
    fontWeight: "700",
    color: "#94a3b8",
  },

  primaryText: {
    color: "#0f766e",
  },

  pendingCard: {
    marginTop: 14,
    padding: 16,
    borderRadius: 18,
    backgroundColor: "#fff7ed",
    borderWidth: 1,
    borderColor: "#fed7aa",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  pendingLabel: {
    fontSize: 11,
    fontWeight: "900",
    color: "#f97316",
    letterSpacing: 1,
  },

  pendingValue: {
    marginTop: 4,
    fontSize: 28,
    fontWeight: "900",
    color: "#f97316",
  },

  walletIconWrap: {
    height: 52,
    width: 52,
    borderRadius: 100,
    backgroundColor: "#ffedd5",
    alignItems: "center",
    justifyContent: "center",
  },

  sectionHeader: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "900",
    color: "#0f172a",
    letterSpacing: 1,
  },

  latestBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    backgroundColor: "#e0f2fe",
  },

  latestBadgeText: {
    fontSize: 12,
    fontWeight: "800",
    color: "#0284c7",
  },

  historyCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: "#eef2f7",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  historyLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  calendarBox: {
    height: 48,
    width: 48,
    borderRadius: 14,
    backgroundColor: "#f1f5f9",
    alignItems: "center",
    justifyContent: "center",
  },

  calendarBoxPrimary: {
    backgroundColor: "#ccfbf1",
  },

  historyDate: {
    fontSize: 14,
    fontWeight: "900",
    color: "#0f172a",
  },

  historyMeta: {
    marginTop: 2,
    fontSize: 12,
    fontWeight: "600",
    color: "#64748b",
  },

  historyRight: {
    alignItems: "flex-end",
  },

  historyAmount: {
    fontSize: 16,
    fontWeight: "900",
    color: "#0f172a",
  },

  historyStatus: {
    marginTop: 4,
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1,
  },

  settled: {
    color: "#16a34a",
  },

  unpaid: {
    color: "#f97316",
  },

  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 18,
    backgroundColor: "rgba(250,250,250,0.98)",
    borderTopWidth: 1,
    borderTopColor: "#eef2f7",
  },

  payBtn: {
    height: 56,
    borderRadius: 18,
    backgroundColor: "#0f766e",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  payBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "900",
  },

  bottomNote: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 10,
    fontWeight: "800",
    color: "#94a3b8",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
   headers: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#eef2f7",
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 16,
    fontWeight: "900",
    color: "#0f172a",
  },

  content: {
    padding: 16,
    paddingBottom: 120,
    backgroundColor: "#fff",
  },

  label: {
    fontSize: 12,
    fontWeight: "900",
    color: "#334155",
    letterSpacing: 1,
    marginBottom: 8,
    marginTop: 16,
  },

  inputBox: {
    height: 54,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    backgroundColor: "#fff",
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  input: {
    flex: 1,
    fontSize: 15,
    fontWeight: "700",
    color: "#0f172a",
  },

  segmentWrap: {
    flexDirection: "row",
    backgroundColor: "#f1f5f9",
    borderRadius: 16,
    padding: 6,
    gap: 6,
  },

  segmentBtn: {
    flex: 1,
    height: 44,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  segmentActive: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#0f766e",
  },

  segmentText: {
    fontSize: 14,
    fontWeight: "900",
    color: "#64748b",
  },

  segmentTextActive: {
    color: "#0f766e",
  },

  infoBox: {
    marginTop: 18,
    backgroundColor: "#ecfeff",
    borderWidth: 1,
    borderColor: "#a5f3fc",
    padding: 14,
    borderRadius: 16,
    flexDirection: "row",
    gap: 10,
    alignItems: "flex-start",
  },

  infoText: {
    flex: 1,
    fontSize: 13,
    fontWeight: "700",
    color: "#0f172a",
    lineHeight: 18,
  },

  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 18,
    borderTopWidth: 1,
    borderTopColor: "#eef2f7",
    backgroundColor: "#fff",
  },

  saveBtn: {
    height: 56,
    borderRadius: 18,
    backgroundColor: "#0f766e",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  saveText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "900",
  },
});

