import React, { useEffect, useState } from "react";
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
import { FormStyle } from "./SellerStyle";

import TextInput from "../../../components/Input/TextInput";

// ✅ Address service
import AddressService from "../../../services/store/address.service";

/* =========================
   VALIDATION
========================= */
const sellerValidation = Yup.object().shape({
  userId: Yup.string().required("UserId is required"),
});

const SellerFormModal = ({ visible, onClose, onSubmit }) => {
  const [addressList, setAddressList] = useState([]);
  const [selectedAreas, setSelectedAreas] = useState([]);

  const fetchAddresses = async () => {
    try {
      const res = await AddressService.listAddress();
      setAddressList(res?.data || []);
    } catch (err) {
      console.log("Address fetch error:", err?.message);
    }
  };

  useEffect(() => {
    if (visible) {
      fetchAddresses();
      setSelectedAreas([]);
    }
  }, [visible]);

  const toggleArea = (id) => {
    setSelectedAreas((prev) => {
      if (prev.includes(id)) {
        return prev.filter((x) => x !== id);
      }
      return [...prev, id];
    });
  };

  const formik = useFormik({
    initialValues: {
      userId: "",
    },
    validationSchema: sellerValidation,
    onSubmit: (values) => {
      onSubmit({
        userId: values.userId,
        assignedAreaIds: selectedAreas,
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
          {/* USER ID */}
          <TextInput
            label="USER ID *"
            placeholder="Paste userId here"
            value={formik.values.userId}
            onChangeText={formik.handleChange("userId")}
            onBlur={() => formik.setFieldTouched("userId")}
            error={formik.touched.userId && formik.errors.userId}
          />

          {/* ASSIGN AREAS */}
          <Text style={FormStyle.sectionLabel}>ASSIGN AREAS</Text>

          {addressList.length === 0 ? (
            <Text style={{ color: "#6b7280", marginTop: 6 }}>
              No address found. Please create address first.
            </Text>
          ) : (
            addressList.map((area) => {
              const active = selectedAreas.includes(area._id);

              return (
                <TouchableOpacity
                  key={area._id}
                  onPress={() => toggleArea(area._id)}
                  style={[
                    FormStyle.segmentItem,
                    active && FormStyle.segmentActive,
                    { marginBottom: 10 },
                  ]}
                >
                  <Text
                    style={[
                      FormStyle.segmentText,
                      active && FormStyle.segmentTextActive,
                    ]}
                  >
                    {area.areaName} ({area.city})
                  </Text>
                </TouchableOpacity>
              );
            })
          )}
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
