import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Modal
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import DateTimePicker from "@react-native-community/datetimepicker";
import styles from "./AssignMilkScreen.styles";

export default function AssignMilkScreen({ navigation }) {
    const [partner, setPartner] = useState<string | null>(null);
    const [qty, setQty] = useState("");
    const [rate, setRate] = useState("");
    const [showPartnerSheet, setShowPartnerSheet] = useState(false);
    const [showDateSheet, setShowDateSheet] = useState(false);

    const [loading, setLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const partners = ["Rahul Sharma", "Amit Patel", "Suresh Kumar"];
    const selectedDate = "Today, 21 Jan 2026";

    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showPartnerModal, setShowPartnerModal] = useState(false);

    const total = Number(qty || 0) * Number(rate || 0);

    const handleAssign = () => {
        if (!partner || !qty || !rate) return;

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setShowSuccess(true);
        }, 1200);
    };

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* HEADER */}
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <TouchableOpacity
                            style={styles.iconBtn}
                            onPress={() => navigation.goBack()}
                        >
                            <Icon name="arrow-left" size={20} color="#121717" />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>Assign Milk</Text>
                    </View>

                    <TouchableOpacity style={styles.iconBtn}>
                        <Icon name="dots-horizontal" size={20} color="#121717" />
                    </TouchableOpacity>
                </View>

                {/* STATS */}
                <View style={styles.statsRow}>
                    <View style={styles.statCard}>
                        <Text style={styles.statLabel}>STOCK</Text>
                        <Text style={styles.statSub}>Available Stock</Text>
                        <Text style={styles.statValuePrimary}>850 L</Text>
                    </View>

                    <View style={styles.statCard}>
                        <Text style={styles.statLabel}>ASSIGNED</Text>
                        <Text style={styles.statSub}>Assigned Today</Text>
                        <Text style={styles.statValue}>300 L</Text>
                    </View>
                </View>

                {/* DATE */}
                <TouchableOpacity
                    style={styles.dateChip}
                    onPress={() => setShowDatePicker(true)}
                >
                    <Icon
                        name="calendar-month-outline"
                        size={18}
                        color="#1fadad"
                    />
                    <Text style={styles.dateText}>
                        {date.toDateString()}
                    </Text>
                    <Icon name="chevron-down" size={18} color="#9aa3a3" />
                </TouchableOpacity>


                {/* DELIVERY PARTNER */}
                <View style={styles.section}>
                    <Text style={styles.label}>DELIVERY PARTNER</Text>

                    <TouchableOpacity
                        style={styles.selectBox}
                        onPress={() => setShowPartnerSheet(true)}
                    >
                        <Icon name="account-search-outline" size={20} color="#9aa3a3" />
                        <Text style={styles.selectPlaceholder}>
                            {partner || "Select Delivery Man"}
                        </Text>
                        <Icon name="chevron-down" size={20} color="#9aa3a3" />
                    </TouchableOpacity>

                    {/* INPUTS */}
                    <View style={styles.inputRow}>
                        <View style={styles.inputWrap}>
                            <Text style={styles.label}>QUANTITY (L)</Text>
                            <TextInput
                                style={styles.input}
                                keyboardType="numeric"
                                placeholder="0.00"
                                value={qty}
                                onChangeText={setQty}
                            />
                        </View>

                        <View style={styles.inputWrap}>
                            <Text style={styles.label}>RATE / L</Text>
                            <TextInput
                                style={styles.input}
                                keyboardType="numeric"
                                placeholder="₹0.00"
                                value={rate}
                                onChangeText={setRate}
                            />
                        </View>
                    </View>

                    {/* TOTAL */}
                    <View style={styles.totalCard}>
                        <View>
                            <Text style={styles.totalLabel}>TOTAL AMOUNT</Text>
                            <Text style={styles.totalValue}>₹{total.toFixed(0)}</Text>
                        </View>

                        <View style={styles.totalIcon}>
                            <Icon name="cash-multiple" size={22} color="#fff" />
                        </View>
                    </View>
                </View>

                {/* RECENT */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Recent Assignments</Text>
                        <Text style={styles.seeAll}>SEE ALL</Text>
                    </View>

                    <View style={styles.recentCard}>
                        <View style={styles.recentIcon}>
                            <Icon name="truck-outline" size={22} color="#1fadad" />
                        </View>
                        <View style={{ flex: 1 }}>
                            <View style={styles.recentTop}>
                                <Text style={styles.recentName}>Rahul Sharma</Text>
                                <Text style={styles.recentTime}>06:30 AM</Text>
                            </View>
                            <Text style={styles.recentMeta}>
                                120L • Remaining: 730L
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/* BOTTOM BUTTON */}
            <View style={styles.bottomBar}>
                <TouchableOpacity
                    style={[
                        styles.assignBtn,
                        (!partner || !qty || !rate) && { opacity: 0.6 }
                    ]}
                    disabled={!partner || !qty || !rate || loading}
                    onPress={handleAssign}
                >
                    {loading ? (
                        <Icon name="loading" size={22} color="#fff" />
                    ) : (
                        <>
                            <Icon name="clipboard-check-outline" size={22} color="#fff" />
                            <Text style={styles.assignText}>Assign Milk</Text>
                        </>
                    )}
                </TouchableOpacity>
            </View>

            {/* DATE PICKER */}
            {showDatePicker && (
                <DateTimePicker
                    value={date}
                    mode="date"
                    // display={Platform.OS === "ios" ? "spinner" : "default"}
                    onChange={(event, selectedDate) => {
                        setShowDatePicker(false);
                        if (selectedDate) setDate(selectedDate);
                    }}
                />
            )}

            {/* DELIVERY MAN SHEET */}
            <Modal visible={showPartnerSheet} transparent animationType="slide">
                <View style={{ flex: 1, justifyContent: "flex-end", backgroundColor: "rgba(0,0,0,0.35)" }}>
                    <View style={{ backgroundColor: "#fff", borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 20 }}>
                        {partners.map((p) => (
                            <TouchableOpacity
                                key={p}
                                style={{ paddingVertical: 14 }}
                                onPress={() => {
                                    setPartner(p);
                                    setShowPartnerSheet(false);
                                }}
                            >
                                <Text style={{ fontSize: 16, fontWeight: "700" }}>{p}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </Modal>

            {/* SUCCESS SHEET */}
            <Modal visible={showSuccess} transparent animationType="slide">
                <View style={{ flex: 1, justifyContent: "flex-end", backgroundColor: "rgba(0,0,0,0.35)" }}>
                    <View style={{ backgroundColor: "#F8FAFB", borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 24 }}>
                        <View style={{ alignSelf: "center", width: 72, height: 72, borderRadius: 36, backgroundColor: "#EAF7F7", justifyContent: "center", alignItems: "center", marginBottom: 16 }}>
                            <Icon name="check-circle" size={42} color="#1fadad" />
                        </View>

                        <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "900", color: "#121717" }}>
                            Milk Assigned Successfully
                        </Text>

                        <Text style={{ textAlign: "center", marginTop: 6, color: "#9aa3a3" }}>
                            {partner} • {qty}L • ₹{total}
                        </Text>

                        <TouchableOpacity
                            style={[styles.assignBtn, { marginTop: 24 }]}
                            onPress={() => {
                                setShowSuccess(false);
                                setQty("");
                                setRate("");
                            }}
                        >
                            <Text style={styles.assignText}>Assign More</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.assignBtn, { backgroundColor: "#fff", borderWidth: 2, borderColor: "#1fadad", marginTop: 12 }]}
                            onPress={() => {
                                setShowSuccess(false);
                                navigation.goBack();
                            }}
                        >
                            <Text style={[styles.assignText, { color: "#1fadad" }]}>
                                Go to Dashboard
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}