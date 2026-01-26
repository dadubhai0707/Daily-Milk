import { StyleSheet } from "react-native";
import { COLORS, RADIUS } from "../../utils/constants";

export default StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#F9FAFB",
        paddingHorizontal: 24,
        paddingBottom: 30
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 16
    },
    backIcon: {
        fontSize: 26,
        color: "#111717"
    },
    headerTitle: {
        flex: 1,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "700",
        color: "#111717"
    },

    titleWrap: {
        marginTop: 10,
        marginBottom: 24
    },
    title: {
        fontSize: 28,
        fontWeight: "800",
        color: "#111717"
    },
    subtitle: {
        fontSize: 15,
        color: "#648487",
        marginTop: 6,
        lineHeight: 22
    },

    fieldWrap: {
        marginBottom: 22
    },
    label: {
        fontSize: 14,
        fontWeight: "600",
        color: "#111717",
        marginBottom: 8
    },
    inputBox: {
        flexDirection: "row",
        alignItems: "center",
        height: 56,
        backgroundColor: "#fff",
        borderRadius: RADIUS.lg,
        borderWidth: 1,
        borderColor: "#DCE4E5",
        paddingHorizontal: 16
    },
    input: {
        flex: 1,
        fontSize: 15,
        color: "#111717"
    },
    eye: {
        fontSize: 18,
        color: "#648487"
    },

    rules: {
        marginTop: 10
    },
    ruleOk: {
        fontSize: 13,
        color: COLORS.primary,
        marginBottom: 6
    },
    rule: {
        fontSize: 13,
        color: "#9CA3AF"
    },

    btnWrap: {
        marginTop: "auto",
        paddingTop: 20
    },

    indicator: {
        alignSelf: "center",
        width: 120,
        height: 5,
        borderRadius: 3,
        backgroundColor: "#D1D5DB",
        marginTop: 24
    },

    rules: {
        marginTop: 12
    },
    rule: {
        fontSize: 13,
        color: "#9CA3AF",
        marginBottom: 6
    },
    ruleOk: {
        color: COLORS.primary,
        fontWeight: "600"
    }

});

