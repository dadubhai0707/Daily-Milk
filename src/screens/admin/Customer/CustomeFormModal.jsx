import React, { useEffect, useMemo, useState, useContext } from "react";
import {
    View,
    Text,
    Modal,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useFormik } from "formik";
import * as Yup from "yup";

import TextInput from "../../../components/Input/TextInput";
import AddressContext from "../../../context/store/address";

/* =======================
   VALIDATION
======================= */
const customerValidation = Yup.object().shape({
    userId: Yup.string().required("UserId is required"),
    addressId: Yup.string().required("Address is required"),
    fullAddress: Yup.string().required("Full address is required"),
    dailyQty: Yup.number().min(0.5, "Minimum 0.5 L").required("Daily Qty required"),
    ratePerLiter: Yup.number().min(1, "Rate must be >= 1").required("Rate required"),
});

const CustomerFormModal = ({ visible, onClose, onSubmit, isEdit = null }) => {
    const [milkType, setMilkType] = useState(isEdit?.milkType || "cow");

    // ✅ Address context
    const { address = [], fetchAddress, loading } = useContext(AddressContext);

    // ✅ selected address state
    const [selectedAddress, setSelectedAddress] = useState(null);

    // ✅ Load address list when modal opens
    useEffect(() => {
        if (visible) fetchAddress();
    }, [visible]);

    const formik = useFormik({
        initialValues: {
            userId: isEdit?.userId?._id || "",
            addressId: isEdit?.addressId || "",
            fullAddress: isEdit?.fullAddress || "",
            dailyQty: String(isEdit?.dailyQty || "1"),
            ratePerLiter: String(isEdit?.ratePerLiter || "50"),
        },

        validationSchema: customerValidation,
        enableReinitialize: true,

        onSubmit: (values) => {
            const payload = {
                userId: values.userId,
                addressId: values.addressId,
                fullAddress: values.fullAddress,
                milkType: milkType,
                dailyQty: Number(values.dailyQty),
                ratePerLiter: Number(values.ratePerLiter),
                billingStartDate: new Date(), // ✅ required
            };


            onSubmit(payload);
        },
    });

    // ✅ When edit modal opens → find address object
    useEffect(() => {
        if (isEdit?.addressId && address?.length > 0) {
            const found = address.find((a) => a?._id === isEdit.addressId);
            if (found) setSelectedAddress(found);
        }
    }, [isEdit, address]);

    // ✅ dropdown list
    const addressOptions = useMemo(() => {
        return address.map((a) => ({
            id: a._id,
            label: `${a.areaName}, ${a.city} - ${a.pincode}`,
            full: `${a.areaName}, ${a.city} - ${a.pincode}`,
            raw: a,
        }));
    }, [address]);

    // ✅ select handler
    const handleSelectAddress = (addrObj) => {
        setSelectedAddress(addrObj);

        // Auto fill formik
        formik.setFieldValue("addressId", addrObj._id);
        formik.setFieldValue(
            "fullAddress",
            `${addrObj.areaName}, ${addrObj.city} - ${addrObj.pincode}`
        );
    };

    return (
        <Modal visible={visible} animationType="slide" transparent>
            <View style={styles.backdrop}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : undefined}
                    style={{ flex: 1, justifyContent: "flex-end" }}
                >
                    {/* SHEET */}
                    <View style={styles.sheet}>
                        {/* HEADER */}
                        <View style={styles.header}>
                            <TouchableOpacity onPress={onClose} style={styles.iconBtn}>
                                <Icon name="close" size={22} color="#0f172a" />
                            </TouchableOpacity>

                            <View style={{ flex: 1 }}>
                                <Text style={styles.headerTitle}>
                                    {isEdit ? "Edit Customer" : "Add Customer"}
                                </Text>
                                <Text style={styles.headerSub}>
                                    Fill details carefully before saving
                                </Text>
                            </View>

                            <TouchableOpacity onPress={formik.handleSubmit} style={styles.saveMini}>
                                <Icon name="checkmark" size={18} color="#fff" />
                            </TouchableOpacity>
                        </View>

                        <ScrollView
                            contentContainerStyle={styles.content}
                            keyboardShouldPersistTaps="handled"
                            showsVerticalScrollIndicator={false}
                        >
                            {/* USER */}
                            <View style={styles.card}>
                                <Text style={styles.sectionLabel}>CUSTOMER USER ID</Text>

                                <TextInput
                                    label="UserId *"
                                    placeholder="Paste userId here"
                                    value={formik.values.userId}
                                    onChangeText={formik.handleChange("userId")}
                                    onBlur={() => formik.setFieldTouched("userId")}
                                    error={formik.touched.userId && formik.errors.userId}
                                />
                            </View>

                            {/* ADDRESS */}
                            <View style={styles.card}>
                                <View style={styles.sectionRow}>
                                    <Text style={styles.sectionLabel}>SELECT ADDRESS</Text>

                                    <TouchableOpacity onPress={fetchAddress}>
                                        <Text style={styles.reloadText}>
                                            {loading ? "Loading..." : "Reload"}
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                {/* Address dropdown buttons */}
                                <View style={{ gap: 10 }}>
                                    {addressOptions.length === 0 ? (
                                        <View style={styles.emptyBox}>
                                            <Text style={styles.emptyText}>No Address Found</Text>
                                        </View>
                                    ) : (
                                        addressOptions.map((opt) => {
                                            const active = selectedAddress?._id === opt.id;

                                            return (
                                                <TouchableOpacity
                                                    key={opt.id}
                                                    style={[
                                                        styles.addressItem,
                                                        active && styles.addressItemActive,
                                                    ]}
                                                    onPress={() => handleSelectAddress(opt.raw)}
                                                >
                                                    <Icon
                                                        name={active ? "radio-button-on" : "radio-button-off"}
                                                        size={18}
                                                        color={active ? "#0f766e" : "#94a3b8"}
                                                    />

                                                    <Text
                                                        style={[
                                                            styles.addressText,
                                                            active && styles.addressTextActive,
                                                        ]}
                                                        numberOfLines={2}
                                                    >
                                                        {opt.label}
                                                    </Text>
                                                </TouchableOpacity>
                                            );
                                        })
                                    )}
                                </View>

                                {/* Hidden values (auto fill) */}
                                <TextInput
                                    label="AddressId *"
                                    placeholder="Auto selected"
                                    value={formik.values.addressId}
                                    editable={false}
                                    error={formik.touched.addressId && formik.errors.addressId}
                                />

                                <TextInput
                                    label="Full Address *"
                                    placeholder="Auto filled"
                                    value={formik.values.fullAddress}
                                    editable={false}
                                    error={formik.touched.fullAddress && formik.errors.fullAddress}
                                />
                            </View>

                            {/* MILK TYPE */}
                            <View style={styles.card}>
                                <Text style={styles.sectionLabel}>MILK TYPE</Text>

                                <View style={styles.segment}>
                                    {["cow", "buffalo", "mixed"].map((t) => {
                                        const active = milkType === t;

                                        return (
                                            <TouchableOpacity
                                                key={t}
                                                style={[
                                                    styles.segmentItem,
                                                    active && styles.segmentActive,
                                                ]}
                                                onPress={() => setMilkType(t)}
                                            >
                                                <Text
                                                    style={[
                                                        styles.segmentText,
                                                        active && styles.segmentTextActive,
                                                    ]}
                                                >
                                                    {t.toUpperCase()}
                                                </Text>
                                            </TouchableOpacity>
                                        );
                                    })}
                                </View>
                            </View>

                            {/* QTY + RATE */}
                            <View style={styles.card}>
                                <Text style={styles.sectionLabel}>MILK SETTINGS</Text>

                                <View style={styles.row}>
                                    <View style={{ flex: 1 }}>
                                        <TextInput
                                            label="Daily Qty (L) *"
                                            placeholder="1"
                                            keyboardType="decimal-pad"
                                            value={formik.values.dailyQty}
                                            onChangeText={formik.handleChange("dailyQty")}
                                            onBlur={() => formik.setFieldTouched("dailyQty")}
                                            error={formik.touched.dailyQty && formik.errors.dailyQty}
                                        />
                                    </View>

                                    <View style={{ flex: 1 }}>
                                        <TextInput
                                            label="Rate (₹/L) *"
                                            placeholder="50"
                                            keyboardType="number-pad"
                                            value={formik.values.ratePerLiter}
                                            onChangeText={formik.handleChange("ratePerLiter")}
                                            onBlur={() => formik.setFieldTouched("ratePerLiter")}
                                            error={
                                                formik.touched.ratePerLiter && formik.errors.ratePerLiter
                                            }
                                        />
                                    </View>
                                </View>
                            </View>

                            <View style={{ height: 110 }} />
                        </ScrollView>

                        {/* FOOTER */}
                        <View style={styles.footer}>
                            <TouchableOpacity style={styles.saveBtn} onPress={formik.handleSubmit}>
                                <Icon name="save-outline" size={20} color="#fff" />
                                <Text style={styles.saveText}>
                                    {isEdit ? "Update Customer" : "Save Customer"}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.cancelBtn} onPress={onClose}>
                                <Text style={styles.cancelText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </Modal>
    );
};

export default CustomerFormModal;

/* =======================
   STYLES
======================= */
const styles = StyleSheet.create({
    backdrop: { flex: 1, backgroundColor: "rgba(0,0,0,0.45)" },

    sheet: {
        height: "92%",
        backgroundColor: "#f8fafc",
        borderTopLeftRadius: 26,
        borderTopRightRadius: 26,
        overflow: "hidden",
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 14,
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#eef2f7",
        gap: 12,
    },

    iconBtn: {
        width: 40,
        height: 40,
        borderRadius: 14,
        backgroundColor: "#f1f5f9",
        alignItems: "center",
        justifyContent: "center",
    },

    headerTitle: { fontSize: 18, fontWeight: "900", color: "#0f172a" },
    headerSub: { marginTop: 2, fontSize: 12, fontWeight: "600", color: "#64748b" },

    saveMini: {
        width: 42,
        height: 42,
        borderRadius: 14,
        backgroundColor: "#0f766e",
        alignItems: "center",
        justifyContent: "center",
    },

    content: { padding: 16, paddingBottom: 10 },

    card: {
        backgroundColor: "#fff",
        borderRadius: 18,
        padding: 16,
        marginBottom: 14,
        borderWidth: 1,
        borderColor: "#eef2f7",
        elevation: 1,
    },

    sectionRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12,
    },

    reloadText: {
        fontSize: 12,
        fontWeight: "900",
        color: "#0f766e",
    },

    sectionLabel: {
        fontSize: 12,
        fontWeight: "900",
        color: "#64748b",
        letterSpacing: 0.6,
    },

    emptyBox: {
        paddingVertical: 18,
        borderRadius: 14,
        backgroundColor: "#f1f5f9",
        alignItems: "center",
    },

    emptyText: {
        fontSize: 14,
        fontWeight: "800",
        color: "#64748b",
    },

    addressItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        padding: 12,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: "#e2e8f0",
        backgroundColor: "#fff",
    },

    addressItemActive: {
        borderColor: "#0f766e",
        backgroundColor: "#e6fffb",
    },

    addressText: {
        flex: 1,
        fontSize: 14,
        fontWeight: "800",
        color: "#0f172a",
    },

    addressTextActive: {
        color: "#0f766e",
    },

    segment: {
        flexDirection: "row",
        backgroundColor: "#f1f5f9",
        borderRadius: 14,
        padding: 6,
        gap: 6,
    },

    segmentItem: {
        flex: 1,
        height: 44,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
    },

    segmentActive: { backgroundColor: "#0f766e" },

    segmentText: { fontSize: 13, fontWeight: "900", color: "#64748b" },
    segmentTextActive: { color: "#fff" },

    row: { flexDirection: "row", gap: 12 },

    footer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderTopColor: "#eef2f7",
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

    saveText: { color: "#fff", fontSize: 16, fontWeight: "900" },

    cancelBtn: {
        marginTop: 10,
        height: 48,
        borderRadius: 18,
        backgroundColor: "#f1f5f9",
        alignItems: "center",
        justifyContent: "center",
    },

    cancelText: { fontSize: 14, fontWeight: "900", color: "#334155" },
});
