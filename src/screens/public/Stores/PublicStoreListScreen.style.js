import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8fafc",
        paddingHorizontal: 16,
    },

    header: {
        paddingTop: 10,
        paddingBottom: 12,
    },

    pageTitle: {
        fontSize: 24,
        fontWeight: "900",
        color: "#0f172a",
    },

    pageSub: {
        marginTop: 4,
        fontSize: 13,
        fontWeight: "700",
        color: "#64748b",
    },

    searchBox: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        height: 52,
        borderRadius: 18,
        paddingHorizontal: 14,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#eef2f7",
        marginBottom: 14,
        marginTop: 14,
    },

    searchInput: {
        flex: 1,
        fontSize: 14,
        fontWeight: "700",
        color: "#0f172a",
    },

    card: {
        backgroundColor: "#fff",
        borderRadius: 22,
        padding: 16,
        marginBottom: 14,
        borderWidth: 1,
        borderColor: "#eef2f7",
        elevation: 1,
    },

    cardTop: {
        flexDirection: "row",
        gap: 12,
        alignItems: "flex-start",
    },

    logoWrap: {
        width: 46,
        height: 46,
        borderRadius: 16,
        backgroundColor: "#e9fbf9",
        alignItems: "center",
        justifyContent: "center",
    },

    storeName: {
        fontSize: 16,
        fontWeight: "900",
        color: "#0f172a",
    },

    metaRow: {
        marginTop: 4,
        flexDirection: "row",
        alignItems: "center",
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
        gap: 6,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 14,
    },

    statusDot: {
        width: 7,
        height: 7,
        borderRadius: 10,
    },

    statusText: {
        fontSize: 11,
        fontWeight: "900",
        letterSpacing: 0.6,
    },

    statsGrid: {
        marginTop: 14,
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
    },

    statBox: {
        width: "48%",
        backgroundColor: "#f1f5f9",
        borderRadius: 18,
        paddingVertical: 12,
        paddingHorizontal: 12,
    },

    statLabel: {
        fontSize: 11,
        fontWeight: "900",
        color: "#64748b",
        letterSpacing: 0.7,
    },

    statValue: {
        marginTop: 6,
        fontSize: 16,
        fontWeight: "900",
        color: "#0f172a",
    },

    footerRow: {
        marginTop: 14,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    smallHint: {
        fontSize: 12,
        fontWeight: "800",
        color: "#94a3b8",
    },

    viewBtn: {
        height: 40,
        paddingHorizontal: 14,
        borderRadius: 14,
        backgroundColor: "#1fadad",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
    },

    viewBtnText: {
        fontSize: 13,
        fontWeight: "900",
        color: "#fff",
    },
});
