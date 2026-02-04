import React, { useState } from "react";
import {
    View,
    Text,
    Modal,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useFormik } from "formik";
import * as Yup from "yup";

import TextInput from "../../../components/Input/TextInput";
import { formStyle } from "./customerStyle"
/* =======================
   VALIDATION
======================= */
const customerValidation = Yup.object().shape({
    name: Yup.string().required("Customer name is required"),
    mobile: Yup.string()
        .matches(/^[0-9]{10}$/, "Enter valid 10 digit number")
        .required("Mobile number is required"),
    address: Yup.string().required("Address is required"),
    quantity: Yup.number().min(0.5, "Minimum 0.5 L"),
});

/* =======================
   COMPONENT
======================= */
const CustomerFormModal = ({
    visible,
    onClose,
    onSubmit,
    isEdit = false,
}) => {
    const [milkType, setMilkType] = useState("Cow");
    const [deliveryTime, setDeliveryTime] = useState("Morning");
    const [paymentCycle, setPaymentCycle] = useState(
        "Monthly (1st of month)"
    );

    const formik = useFormik({
        initialValues: {
            name: isEdit?.name || "",
            mobile: isEdit?.mobile || "",
            address: isEdit?.address || "",
            quantity: isEdit?.quantity || "",
        },
        validationSchema: customerValidation,
        enableReinitialize: true,
        onSubmit: (values) => {
            onSubmit({
                ...values,
                milkType,
                deliveryTime,
                paymentCycle,
            });
        },
    });

    return (
        <Modal visible={visible} animationType="slide">
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                style={{ flex: 1 }}
            >
                {/* HEADER */}
                <View style={formStyle.header}>
                    <TouchableOpacity onPress={onClose}>
                        <Icon name="arrow-back" size={22} />
                    </TouchableOpacity>
                    <Text style={formStyle.headerTitle}>
                        Register New Customer
                    </Text>
                    <View style={{ width: 24 }} />
                </View>

                <ScrollView
                    contentContainerStyle={formStyle.content}
                    keyboardShouldPersistTaps="handled"
                >
                    {/* ================= IDENTITY ================= */}
                    <View style={formStyle.card}>
                        <SectionTitle
                            icon="person"
                            title="Customer Identity"
                        />

                        <TextInput
                            label="Customer Name"
                            placeholder="e.g. Robert Fox"
                            value={formik.values.name}
                            onChangeText={formik.handleChange("name")}
                            onBlur={() =>
                                formik.setFieldTouched("name")
                            }
                            error={
                                formik.touched.name &&
                                formik.errors.name
                            }
                        />

                        <TextInput
                            label="Mobile Number"
                            prefix="+91"
                            keyboardType="phone-pad"
                            maxLength={10}
                            value={formik.values.mobile}
                            onChangeText={formik.handleChange("mobile")}
                            onBlur={() =>
                                formik.setFieldTouched("mobile")
                            }
                            error={
                                formik.touched.mobile &&
                                formik.errors.mobile
                            }
                        />
                    </View>

                    {/* ================= LOCATION ================= */}
                    <View style={formStyle.card}>
                        <SectionTitle icon="location" title="Location" />

                        <TextInput
                            label="Select Address"
                            placeholder="Choose predefined area"
                            value={formik.values.address}
                            onChangeText={formik.handleChange("address")}
                            onBlur={() =>
                                formik.setFieldTouched("address")
                            }
                            error={
                                formik.touched.address &&
                                formik.errors.address
                            }
                        />

                        <TouchableOpacity style={formStyle.addAddress}>
                            <Icon
                                name="add-circle"
                                size={18}
                                color="#1fadad"
                            />
                            <Text style={formStyle.addAddressText}>
                                Add New Address
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* ================= MILK ================= */}
                    <View style={formStyle.card}>
                        <SectionTitle
                            icon="water"
                            title="Milk Preference"
                        />

                        <Text style={formStyle.label}>Milk Type</Text>
                        <View style={formStyle.segment}>
                            {["Cow", "Buffalo", "Mixed"].map((t) => (
                                <TouchableOpacity
                                    key={t}
                                    style={[
                                        formStyle.segmentItem,
                                        milkType === t &&
                                        formStyle.segmentActive,
                                    ]}
                                    onPress={() => setMilkType(t)}
                                >
                                    <Text
                                        style={[
                                            formStyle.segmentText,
                                            milkType === t &&
                                            formStyle.segmentTextActive,
                                        ]}
                                    >
                                        {t}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                        <View style={formStyle.row}>
                            <TextInput
                                label="Daily Quantity"
                                placeholder="0.0"
                                keyboardType="decimal-pad"
                                value={formik.values.quantity}
                                onChangeText={formik.handleChange(
                                    "quantity"
                                )}
                            />

                            <TextInput
                                label="Delivery Time"
                                value={deliveryTime}
                                onChangeText={setDeliveryTime}
                            />
                        </View>
                    </View>

                    {/* ================= BILLING ================= */}
                    <View style={formStyle.card}>
                        <SectionTitle icon="card" title="Billing" />

                        <TextInput
                            label="Payment Cycle"
                            value={paymentCycle}
                            onChangeText={setPaymentCycle}
                        />
                    </View>
                </ScrollView>

                {/* FOOTER */}
                <View style={formStyle.footer}>
                    <TouchableOpacity
                        style={formStyle.saveBtn}
                        onPress={formik.handleSubmit}
                    >
                        <Icon
                            name="person-add"
                            size={20}
                            color="#fff"
                        />
                        <Text style={formStyle.saveText}>
                            Save Customer
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </Modal>
    );
};

export default CustomerFormModal;

/* =======================
   SMALL COMPONENT
======================= */
const SectionTitle = ({ icon, title }) => (
    <View style={formStyle.sectionTitle}>
        <Icon name={icon} size={20} color="#1fadad" />
        <Text style={formStyle.sectionText}>{title}</Text>
    </View>
);
