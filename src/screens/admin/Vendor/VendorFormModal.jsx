import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import TextInput from "../../../components/Input/TextInput";
import { formStyles } from "./VendoreCss"
import * as Yup from "yup";
import { useFormik } from "formik";
const vendorValidation = Yup.object({
  name: Yup.string().required("Vendor name is required"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Enter valid 10 digit number")
    .required("Mobile number is required"),
  address: Yup.string(),
});
const VendorFormModal = ({
  visible,
  onClose,
  onSubmit,
  isEdit = false,
}) => {
  const formik = useFormik({
    initialValues: {
      name: isEdit?.name || "",
      mobile: isEdit?.mobile || "",
      address: isEdit?.address || "",
    },
    validationSchema: vendorValidation,
    enableReinitialize: true,
    onSubmit: (values) => {
      onSubmit(values, isEdit);
    },
  });
  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}

      >
        <View style={formStyles.sheet}>
          <View style={formStyles.header}>
            <TouchableOpacity onPress={onClose} hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}>
              <Icon name="close" size={26} color="#334155" />
            </TouchableOpacity>

            <Text style={formStyles.title}>
              {isEdit ? "Edit Vendor" : "Add Vendor"}
            </Text>

            <View style={{ width: 26 }} />
          </View>

          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={formStyles.scrollContent}
            keyboardShouldPersistTaps="handled"
          >
            {/* CUSTOMER NAME */}
            <TextInput
              label="Vendor Name *"
              placeholder="e.g. Ramesh Bhai"
              value={formik.values.name}
              onChangeText={formik.handleChange("name")}
              error={formik.touched.name && formik.errors.name}
            />

            {/* PHONE */}
            <TextInput
              label="Mobile Number *"
              prefix="+91"
              keyboardType="phone-pad"
              maxLength={10}
              value={formik.values.mobile}
              onChangeText={formik.handleChange("mobile")}
              error={formik.touched.mobile && formik.errors.mobile}
            />

            {/* ADDRESS */}
            <TextInput
              label="Address"
              multiline
              numberOfLines={4}
              value={formik.values.address}
              onChangeText={formik.handleChange("address")}
            />
          </ScrollView>

          <View style={formStyles.footer}>
            <TouchableOpacity style={formStyles.saveButton} onPress={formik.handleSubmit}>
              <Text style={formStyles.saveText}>
                {isEdit ? "Update Customer" : "Save Customer"}
              </Text>
              <Icon name="checkmark-circle" size={22} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default VendorFormModal