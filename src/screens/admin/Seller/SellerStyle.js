const { StyleSheet } = require("react-native");

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2f2f2",
        paddingHorizontal: 16,
    },

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
        bottom: -2,
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
