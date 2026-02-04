const { StyleSheet } = require("react-native");

/* =========================
   STYLES (PURE RN)
========================= */
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f6f8f8",
        paddingHorizontal: 16,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 16,
        paddingBottom: 12,
    },

    headerTitle: {
        fontSize: 28,
        fontWeight: "800",
        color: "#121717",
    },

    headerIcons: {
        flexDirection: "row",
        gap: 12,
    },

    searchBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 14,
        paddingHorizontal: 12,
        height: 50,
        marginBottom: 16,
    },

    searchInput: {
        flex: 1,
        marginLeft: 8,
        fontSize: 15,
        color: "#121717",
    },

    card: {
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        elevation: 2,
    },

    topRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    leftRow: {
        flexDirection: "row",
        gap: 12,
    },

    avatar: {
        width: 52,
        height: 52,
        borderRadius: 26,
        backgroundColor: "#1fadad20",
        alignItems: "center",
        justifyContent: "center",
    },

    avatarText: {
        fontSize: 18,
        fontWeight: "700",
        color: "#1fadad",
    },

    name: {
        fontSize: 17,
        fontWeight: "700",
        color: "#121717",
    },

    phoneRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        marginTop: 4,
    },

    phone: {
        fontSize: 13,
        color: "#658686",
    },

    statusLabel: {
        fontSize: 11,
        fontWeight: "700",
        color: "#658686",
        marginBottom: 4,
        textAlign: "right",
    },

    pendingAmount: {
        fontSize: 18,
        fontWeight: "800",
        color: "#FD892F",
    },

    paidRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },

    paidText: {
        fontSize: 14,
        fontWeight: "700",
        color: "#33A354",
    },

    addressRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        marginTop: 14,
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: "#eef2f2",
    },

    address: {
        flex: 1,
        fontSize: 14,
        fontWeight: "600",
        color: "#1fadad",
    },
});




/* =======================
   formStyle
======================= */
export const formStyle = StyleSheet.create({
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
        fontSize: 17,
        fontWeight: "700",
    },

    content: {
        padding: 16,
        paddingBottom: 140,
    },

    card: {
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
    },

    sectionTitle: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        marginBottom: 16,
    },
    sectionText: {
        fontSize: 16,
        fontWeight: "700",
    },

    addAddress: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        marginTop: 10,
    },
    addAddressText: {
        color: "#1fadad",
        fontWeight: "700",
    },

    label: {
        fontSize: 13,
        fontWeight: "600",
        color: "#6b7280",
        marginBottom: 8,
    },

    segment: {
        flexDirection: "row",
        backgroundColor: "#f1f5f5",
        borderRadius: 12,
        padding: 4,
        marginBottom: 16,
    },
    segmentItem: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: "center",
    },
    segmentActive: {
        backgroundColor: "#fff",
    },
    segmentText: {
        color: "#6b7280",
        fontWeight: "700",
    },
    segmentTextActive: {
        color: "#1fadad",
    },

    row: {
        flexDirection: "row",
        gap: 12,
    },

    footer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderColor: "#eee",
    },

    saveBtn: {
        backgroundColor: "#1fadad",
        height: 56,
        borderRadius: 16,
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
