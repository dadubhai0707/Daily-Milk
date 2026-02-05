import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#F6F8F8" },

    header: {
        paddingTop: 14,
        paddingHorizontal: 16,
        paddingBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    headerTitle: { fontSize: 20, fontWeight: "900", color: "#111827" },

    content: { padding: 16, paddingBottom: 120 },

    dateCard: {
        backgroundColor: "#fff",
        borderRadius: 18,
        padding: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },

    smallLabel: { fontSize: 12, fontWeight: "700", color: "#658683" },
    dateText: { fontSize: 16, fontWeight: "900", color: "#111827", marginTop: 4 },

    sectionTitle: {
        fontSize: 12,
        fontWeight: "900",
        color: "#111827",
        marginBottom: 10,
        letterSpacing: 1,
    },

    selectBox: { marginBottom: 18 },

    selectLabel: { fontSize: 16, fontWeight: "800", marginBottom: 10 },

    input: {
        backgroundColor: "#fff",
        height: 54,
        borderRadius: 16,
        paddingHorizontal: 14,
        borderWidth: 1,
        borderColor: "#dce5e4",
        fontSize: 16,
        fontWeight: "800",
    },

    segment: {
        flexDirection: "row",
        backgroundColor: "rgba(0,0,0,0.06)",
        padding: 6,
        borderRadius: 18,
        marginBottom: 18,
    },

    segmentBtn: {
        flex: 1,
        height: 44,
        borderRadius: 14,
        alignItems: "center",
        justifyContent: "center",
    },

    segmentActive: { backgroundColor: "#fff" },

    segmentText: { fontWeight: "900", color: "#658683" },
    segmentTextActive: { color: "#111827" },

    row: { flexDirection: "row", gap: 12, marginBottom: 18 },

    totalBox: {
        backgroundColor: "rgba(18,161,156,0.10)",
        borderRadius: 22,
        padding: 24,
        borderWidth: 2,
        borderStyle: "dashed",
        borderColor: "rgba(18,161,156,0.3)",
        alignItems: "center",
        marginBottom: 20,
    },

    totalLabel: {
        fontSize: 12,
        fontWeight: "900",
        color: "#12a19c",
        letterSpacing: 3,
    },

    totalAmount: {
        fontSize: 40,
        fontWeight: "1000",
        color: "#111827",
        marginTop: 10,
    },

    saveBtn: {
        position: "absolute",
        left: 16,
        right: 16,
        bottom: 18,
        backgroundColor: "#12a19c",
        height: 60,
        borderRadius: 18,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 10,
    },

    saveText: { color: "#fff", fontWeight: "900", fontSize: 16 },
});
