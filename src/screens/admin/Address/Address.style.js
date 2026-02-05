const { StyleSheet } = require("react-native");
/* =========================
   STYLES (CORE RN ONLY)
========================= */
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9fafa",
        paddingHorizontal: 16,
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 16,
    },

    backBtn: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        elevation: 2,
    },

    headerTitle: {
        fontSize: 22,
        fontWeight: "700",
        color: "#111717",
    },

    searchBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 14,
        height: 48,
        paddingHorizontal: 12,
        marginBottom: 16,
        marginTop: 16,
    },

    searchInput: {
        flex: 1,
        marginLeft: 8,
        fontSize: 15,
        color: "#111717",
    },

    card: {
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        elevation: 2,
    },

    cardHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },

    row: {
        flexDirection: "row",
        alignItems: "flex-start",
    },

    title: {
        fontSize: 18,
        fontWeight: "700",
        color: "#111717",
    },

    id: {
        fontSize: 12,
        color: "#19a6b3",
        marginTop: 2,
    },

    activeBadge: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#e6f9f5",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8,
    },

    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: "#22c55e",
        marginRight: 6,
    },

    activeText: {
        fontSize: 10,
        fontWeight: "700",
        color: "#16a34a",
    },

    addressBox: {
        marginTop: 10,
        marginLeft: 28,
    },

    address: {
        fontSize: 15,
        fontWeight: "500",
        color: "#455a5c",
    },

    city: {
        fontSize: 13,
        color: "#648487",
        marginTop: 2,
    },

    cardFooter: {
        marginTop: 14,
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: "#f1f5f9",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    customerText: {
        fontSize: 14,
        fontWeight: "600",
        color: "#19a6b3",
    },

    manageBtn: {
        backgroundColor: "#f1f5f9",
        paddingHorizontal: 16,
        height: 36,
        borderRadius: 10,
        justifyContent: "center",
    },

    manageText: {
        fontSize: 14,
        fontWeight: "600",
        color: "#111717",
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
