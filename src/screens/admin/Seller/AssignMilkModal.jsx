import React, { useEffect } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextInput from "../../../components/Input/TextInput";
import { ProfileStyle } from "./SellerStyle";

const assignValidation = Yup.object().shape({
  milkType: Yup.string()
    .oneOf(["cow", "buffalo"])
    .required("Milk type required"),

  quantity: Yup.number()
    .typeError("Quantity must be a number")
    .min(0.1, "Quantity must be > 0")
    .required("Quantity required"),

  date: Yup.string().required("Date required"),
});

const AssignMilkModal = ({ visible, onClose, onSubmit, initialValues }) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues || {
      milkType: "cow",
      quantity: "",
      date: new Date().toISOString().slice(0, 10),
    },
    validationSchema: assignValidation,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  useEffect(() => {
    if (!visible) formik.resetForm();
  }, [visible]);

  return (
    <Modal visible={visible} animationType="slide">
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: "#fff" }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        {/* HEADER */}
        <View style={ProfileStyle.headers}>
          <TouchableOpacity onPress={onClose}>
            <Icon name="arrow-back" size={22} />
          </TouchableOpacity>

          <Text style={ProfileStyle.title}>Assign Milk</Text>

          <View style={{ width: 22 }} />
        </View>

        {/* BODY */}
        <ScrollView contentContainerStyle={ProfileStyle.content}>
          {/* DATE */}
          <TextInput
            label="DATE (YYYY-MM-DD)"
            placeholder="2026-02-06"
            value={formik.values.date}
            onChangeText={formik.handleChange("date")}
            onBlur={() => formik.setFieldTouched("date")}
            error={formik.touched.date && formik.errors.date}
          />

          {/* MILK TYPE SEGMENT */}
          <Text style={ProfileStyle.label}>MILK TYPE</Text>

          <View style={ProfileStyle.segmentWrap}>
            <TouchableOpacity
              style={[
                ProfileStyle.segmentBtn,
                formik.values.milkType === "cow" && ProfileStyle.segmentActive,
              ]}
              onPress={() => formik.setFieldValue("milkType", "cow")}
            >
              <Text
                style={[
                  ProfileStyle.segmentText,
                  formik.values.milkType === "cow" &&
                    ProfileStyle.segmentTextActive,
                ]}
              >
                Cow
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                ProfileStyle.segmentBtn,
                formik.values.milkType === "buffalo" &&
                  ProfileStyle.segmentActive,
              ]}
              onPress={() => formik.setFieldValue("milkType", "buffalo")}
            >
              <Text
                style={[
                  ProfileStyle.segmentText,
                  formik.values.milkType === "buffalo" &&
                    ProfileStyle.segmentTextActive,
                ]}
              >
                Buffalo
              </Text>
            </TouchableOpacity>
          </View>

          {/* MILK TYPE ERROR */}
          {formik.touched.milkType && formik.errors.milkType ? (
            <Text style={{ color: "#ef4444", marginTop: 8, fontWeight: "700" }}>
              {formik.errors.milkType}
            </Text>
          ) : null}

          {/* QUANTITY */}
          <TextInput
            label="QUANTITY (Liters)"
            placeholder="10"
            keyboardType="numeric"
            value={String(formik.values.quantity)}
            onChangeText={formik.handleChange("quantity")}
            onBlur={() => formik.setFieldTouched("quantity")}
            error={formik.touched.quantity && formik.errors.quantity}
          />

          {/* INFO BOX */}
          <View style={ProfileStyle.infoBox}>
            <Icon name="information-circle-outline" size={18} color="#0284c7" />
            <Text style={ProfileStyle.infoText}>
              Assign milk only if today's stock is available. This will update
              seller assigned and remaining milk automatically.
            </Text>
          </View>
        </ScrollView>

        {/* FOOTER */}
        <View style={ProfileStyle.footer}>
          <TouchableOpacity
            style={ProfileStyle.saveBtn}
            activeOpacity={0.9}
            onPress={formik.handleSubmit}
          >
            <Icon name="checkmark-circle" size={20} color="#fff" />
            <Text style={ProfileStyle.saveText}>Save Assign</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default AssignMilkModal;
