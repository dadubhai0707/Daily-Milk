import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8FAFB"
    },

    scroll: {
        padding: 16,
        paddingBottom: 220
    },

    /* HEADER */
    header: {
        paddingHorizontal: 16,
        paddingTop: 32,
        paddingBottom: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    profileWrap: {
        flexDirection: "row",
        alignItems: "center"
    },

    avatarWrap: {
        marginRight: 12
    },

    avatar: {
        width: 44,
        height: 44,
        borderRadius: 22
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
        borderColor: "#fff"
    },

    greeting: {
        fontSize: 11,
        color: "#6b7280",
        fontWeight: "700"
    },

    username: {
        fontSize: 16,
        fontWeight: "800",
        color: "#121717"
    },

    notifyBtn: {
        width: 44,
        height: 44,
        backgroundColor: "#fff",
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center"
    },

    notifyIcon: {
        fontSize: 20
    },

    notifyDot: {
        position: "absolute",
        top: 8,
        right: 8,
        width: 8,
        height: 8,
        backgroundColor: "red",
        borderRadius: 4
    },

    /* STATS */
    statsGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },

    statCard: {
        width: "48%",
        backgroundColor: "#fff",
        borderRadius: 24,
        padding: 16,
        marginBottom: 16
    },

    statCardAlert: {
        backgroundColor: "#FFF2E8"
    },

    statTop: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    statIconWrap: {
        width: 36,
        height: 36,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center"
    },

    statIcon: {
        fontSize: 18
    },

    statTag: {
        fontSize: 10,
        fontWeight: "700",
        color: "#9aa3a3"
    },

    alertTag: {
        color: "#EB6A14"
    },

    statTitle: {
        marginTop: 12,
        fontSize: 12,
        color: "#6b7280",
        fontWeight: "600"
    },

    statValue: {
        fontSize: 26,
        fontWeight: "800",
        color: "#121717"
    },

    alertValue: {
        color: "#EB6A14"
    },

    statUnit: {
        fontSize: 14,
        color: "#9aa3a3"
    },

    

    /* MANAGE */
    manageHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 16
    },

    manageTitle: {
        fontSize: 18,
        fontWeight: "800"
    },

    viewAll: {
        fontSize: 12,
        color: "#1fadad",
        fontWeight: "700"
    },

    menuGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },

    menuCard: {
        width: "30%",
        backgroundColor: "#fff",
        borderRadius: 24,
        paddingVertical: 16,
        alignItems: "center",
        marginBottom: 16
    },

    menuIconWrap: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: "#F1F7F7",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 8
    },

    menuIcon: {
        fontSize: 22
    },

    menuLabel: {
        fontSize: 11,
        fontWeight: "700",
        color: "#6b7280"
    },

    /* FAB */
    fabWrap: {
        position: "absolute",
        bottom: 90,
        left: 0,
        right: 0,
        alignItems: "center"
    },

    fabBtn: {
        flexDirection: "row",
        backgroundColor: "#1fadad",
        height: 64,
        width: "90%",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },

    fabIcon: {
        fontSize: 24,
        marginRight: 8
    },

    fabText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "800"
    },
    fabIconCircle: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: "rgba(255,255,255,0.15)",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10
    },
    fabContainer: {
        position: "absolute",
        bottom: 90, // bottom tab upar
        left: 0,
        right: 0,
        alignItems: "center",
        zIndex: 999
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
        shadowOffset: { width: 0, height: 6 }
    },
    /* BOTTOM TAB */
    bottomTab: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 18,
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderTopColor: "#eee"
    },

    tabItem: {
        alignItems: "center"
    },

    tabIcon: {
        fontSize: 22,
        color: "#9aa3a3"
    },

    tabLabel: {
        fontSize: 10,
        fontWeight: "700",
        color: "#9aa3a3"
    },

    tabActive: {
        color: "#1fadad"
    },

    bottomTab: {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  height: 72,
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: "rgba(255,255,255,0.95)",
  borderTopWidth: 1,
  borderTopColor: "#eef2f2"
},

tabItem: {
  alignItems: "center",
  justifyContent: "center",
  gap: 4
},

tabLabel: {
  fontSize: 10,
  fontWeight: "700",
  textTransform: "uppercase",
  letterSpacing: 0.5
}

});
