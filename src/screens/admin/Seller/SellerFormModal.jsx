import React, { useState } from "react";
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
import { FormStyle } from "./SellerStyle";

import TextInput from "../../../components/Input/TextInput";

/* =========================
   VALIDATION
========================= */
const sellerValidation = Yup.object().shape({
    name: Yup.string().trim().required("Seller name is required"),
    phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Enter valid 10 digit number")
        .required("Phone number is required"),
    address: Yup.string().required("Address is required"),
    vehicleNumber: Yup.string().required("Vehicle number is required"),
    password: Yup.string().min(4, "Minimum 4 characters"),
    confirmPassword: Yup.string().oneOf(
        [Yup.ref("password"), ""],
        "Passwords do not match"
    ),
});

/* =========================
   MODAL
========================= */
const SellerFormModal = ({ visible, onClose, onSubmit }) => {
    const [milkType, setMilkType] = useState("COW");
    const [showPass, setShowPass] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            address: "",
            vehicleNumber: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: sellerValidation,
        onSubmit: (values) => {
            onSubmit({
                ...values,
                milkType,
            });
        },
    });

    return (
        <Modal visible={visible} animationType="slide">
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
                {/* HEADER */}
                <View style={FormStyle.header}>
                    <TouchableOpacity onPress={onClose}>
                        <Icon name="arrow-back" size={22} />
                    </TouchableOpacity>
                    <Text style={FormStyle.headerTitle}>Add New Seller</Text>
                    <View style={{ width: 22 }} />
                </View>

                {/* FORM */}
                <ScrollView contentContainerStyle={FormStyle.content}>
                    <TextInput
                        label="SELLER NAME"
                        placeholder="e.g. Rajesh Kumar"
                        value={formik.values.name}
                        onChangeText={formik.handleChange("name")}
                        onBlur={() => formik.setFieldTouched("name")}
                        error={formik.touched.name && formik.errors.name}
                    />

                    <TextInput
                        label="PHONE NUMBER"
                        prefix="+91"
                        keyboardType="phone-pad"
                        maxLength={10}
                        placeholder="00000 00000"
                        value={formik.values.phone}
                        onChangeText={formik.handleChange("phone")}
                        onBlur={() => formik.setFieldTouched("phone")}
                        error={formik.touched.phone && formik.errors.phone}
                    />

                    <TextInput
                        label="ADDRESS"
                        multiline
                        numberOfLines={4}
                        placeholder="Enter village, sector or street address"
                        value={formik.values.address}
                        onChangeText={formik.handleChange("address")}
                        onBlur={() => formik.setFieldTouched("address")}
                        error={formik.touched.address && formik.errors.address}
                    />

                    <TextInput
                        label="VEHICLE NUMBER"
                        placeholder="e.g. MH 12 AB 1234"
                        value={formik.values.vehicleNumber}
                        onChangeText={formik.handleChange("vehicleNumber")}
                        onBlur={() => formik.setFieldTouched("vehicleNumber")}
                        error={
                            formik.touched.vehicleNumber &&
                            formik.errors.vehicleNumber
                        }
                    />

                    {/* MILK TYPE */}
                    <Text style={FormStyle.sectionLabel}>MILK TYPE</Text>
                    <View style={FormStyle.segment}>
                        {["COW", "BUFFALO", "MIXED"].map((type) => (
                            <TouchableOpacity
                                key={type}
                                style={[
                                    FormStyle.segmentItem,
                                    milkType === type && FormStyle.segmentActive,
                                ]}
                                onPress={() => setMilkType(type)}
                            >
                                <Text
                                    style={[
                                        FormStyle.segmentText,
                                        milkType === type && FormStyle.segmentTextActive,
                                    ]}
                                >
                                    {type}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* PASSWORD */}
                    <TextInput
                        label="PASSWORD"
                        placeholder="Set a password (Optional)"
                        secureTextEntry={!showPass}
                        value={formik.values.password}
                        onChangeText={formik.handleChange("password")}
                        rightIcon={
                            <Icon
                                name={showPass ? "eye-off" : "eye"}
                                size={18}
                                onPress={() => setShowPass(!showPass)}
                            />
                        }
                    />

                    <TextInput
                        label="CONFIRM PASSWORD"
                        placeholder="Re-enter password"
                        secureTextEntry={!showConfirm}
                        value={formik.values.confirmPassword}
                        onChangeText={formik.handleChange("confirmPassword")}
                        error={
                            formik.touched.confirmPassword &&
                            formik.errors.confirmPassword
                        }
                        rightIcon={
                            <Icon
                                name={showConfirm ? "eye-off" : "eye"}
                                size={18}
                                onPress={() => setShowConfirm(!showConfirm)}
                            />
                        }
                    />
                </ScrollView>

                {/* FOOTER */}
                <View style={FormStyle.footer}>
                    <TouchableOpacity
                        style={FormStyle.saveBtn}
                        onPress={formik.handleSubmit}
                    >
                        <Icon name="person-add" size={20} color="#fff" />
                        <Text style={FormStyle.saveText}>Save Seller</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </Modal>
    );
};

export default SellerFormModal;
