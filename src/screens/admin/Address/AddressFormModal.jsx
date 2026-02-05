import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import TextInput from "../../../components/Input/TextInput";
import { formStyles } from "./Address.style";
import * as Yup from "yup";
import { useFormik } from "formik";

/* =======================
   VALIDATION
======================= */
const addressValidation = Yup.object().shape({
  areaName: Yup.string().required("Area name is required"),
  city: Yup.string().required("City is required"),
  pincode: Yup.string()
    .matches(/^[0-9]{6}$/, "Enter valid 6 digit pincode")
    .required("Pincode is required"),
});

const AddressFormModal = ({
  visible,
  onClose,
  onSubmit,
  isEdit = null,
}) => {
  const formik = useFormik({
    initialValues: {
      areaName: isEdit?.areaName || "",
      city: isEdit?.city || "",
      pincode: isEdit?.pincode || "",
    },
    validationSchema: addressValidation,
    enableReinitialize: true,
    onSubmit: (values) => {
      onSubmit({
        data: values,
        isEdit: !!isEdit,
        addressId: isEdit?._id || null,
      });
    },
  });

  return (
    <Modal visible={visible} animationType="slide">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <View style={formStyles.sheet}>
          {/* HEADER */}
          <View style={formStyles.header}>
            <TouchableOpacity onPress={onClose}>
              <Icon name="close" size={26} color="#334155" />
            </TouchableOpacity>

            <Text style={formStyles.title}>
              {isEdit ? "Edit Address" : "Add Address"}
            </Text>

            <View style={{ width: 26 }} />
          </View>

          {/* FORM */}
          <ScrollView
            contentContainerStyle={formStyles.scrollContent}
            keyboardShouldPersistTaps="handled"
          >
            <TextInput
              label="Area Name *"
              placeholder="e.g. Shivaji Nagar"
              value={formik.values.areaName}
              onChangeText={formik.handleChange("areaName")}
              onBlur={() => formik.setFieldTouched("areaName")}
              error={
                formik.touched.areaName &&
                formik.errors.areaName
              }
            />

            <TextInput
              label="City *"
              placeholder="e.g. Pune"
              value={formik.values.city}
              onChangeText={formik.handleChange("city")}
              onBlur={() => formik.setFieldTouched("city")}
              error={
                formik.touched.city &&
                formik.errors.city
              }
            />

            <TextInput
              label="Pincode *"
              keyboardType="number-pad"
              maxLength={6}
              placeholder="e.g. 411005"
              value={formik.values.pincode}
              onChangeText={formik.handleChange("pincode")}
              onBlur={() => formik.setFieldTouched("pincode")}
              error={
                formik.touched.pincode &&
                formik.errors.pincode
              }
            />
          </ScrollView>

          {/* FOOTER */}
          <View style={formStyles.footer}>
            <TouchableOpacity
              style={formStyles.saveButton}
              onPress={formik.handleSubmit}
            >
              <Text style={formStyles.saveText}>
                {isEdit ? "Update Address" : "Save Address"}
              </Text>
              <Icon
                name="checkmark-circle"
                size={22}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default AddressFormModal;
