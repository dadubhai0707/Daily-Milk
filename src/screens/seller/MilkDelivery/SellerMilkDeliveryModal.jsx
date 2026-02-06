import React, { useEffect, useState } from "react";
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

/* =======================
   VALIDATION
======================= */
const deliveryValidation = Yup.object().shape({
  customerId: Yup.string().required("Customer is required"),
  milkQty: Yup.number()
    .min(0.1, "Minimum 0.1 L")
    .required("Milk Qty required"),
  milkType: Yup.string().required("Milk type required"),
});

const SellerMilkDeliveryModal = ({ visible, onClose, onSubmit, customer }) => {
  const [milkType, setMilkType] = useState(customer?.milkType || "cow");

  useEffect(() => {
    if (visible) {
      setMilkType(customer?.milkType || "cow");
    }
  }, [visible, customer]);

  const formik = useFormik({
    initialValues: {
      customerId: customer?._id || "",
      milkQty: String(customer?.dailyQty || "1"),
      milkType: customer?.milkType || "cow",
    },

    validationSchema: deliveryValidation,
    enableReinitialize: true,

    onSubmit: (values) => {
      const payload = {
        customerId: values.customerId,
        milkQty: Number(values.milkQty),
        milkType: milkType,
        date: new Date(), // static
      };

      onSubmit(payload);
    },
  });

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.backdrop}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={{ flex: 1, justifyContent: "flex-end" }}
        >
          <View style={styles.sheet}>
            {/* HEADER */}
            <View style={styles.header}>
              <TouchableOpacity onPress={onClose} style={styles.iconBtn}>
                <Icon name="close" size={22} color="#0f172a" />
              </TouchableOpacity>

              <View style={{ flex: 1 }}>
                <Text style={styles.headerTitle}>Milk Delivery</Text>
                <Text style={styles.headerSub}>
                  Fill details carefully before saving
                </Text>
              </View>

              <TouchableOpacity
                onPress={formik.handleSubmit}
                style={styles.saveMini}
              >
                <Icon name="checkmark" size={18} color="#fff" />
              </TouchableOpacity>
            </View>

            <ScrollView
              contentContainerStyle={styles.content}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
            >
              {/* CUSTOMER */}
              <View style={styles.card}>
                <Text style={styles.sectionLabel}>CUSTOMER</Text>

                <Text style={styles.customerName}>
                  {customer?.name || "Select customer from list"}
                </Text>

                <Text style={styles.customerMeta}>
                  {customer?.mobile || "-"}
                </Text>

                <Text style={styles.customerMeta}>
                  {customer?.fullAddress || "-"}
                </Text>

                <TextInput
                  label="CustomerId *"
                  placeholder="Auto filled"
                  value={formik.values.customerId}
                  editable={false}
                  error={formik.touched.customerId && formik.errors.customerId}
                />
              </View>

              {/* MILK TYPE */}
              <View style={styles.card}>
                <Text style={styles.sectionLabel}>MILK TYPE</Text>

                <View style={styles.segment}>
                  {["cow", "buffalo"].map((t) => {
                    const active = milkType === t;

                    return (
                      <TouchableOpacity
                        key={t}
                        style={[
                          styles.segmentItem,
                          active && styles.segmentActive,
                        ]}
                        onPress={() => {
                          setMilkType(t);
                          formik.setFieldValue("milkType", t);
                        }}
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

              {/* QTY */}
              <View style={styles.card}>
                <Text style={styles.sectionLabel}>DELIVERY QTY</Text>

                <TextInput
                  label="Milk Qty (L) *"
                  placeholder="1"
                  keyboardType="decimal-pad"
                  value={formik.values.milkQty}
                  onChangeText={formik.handleChange("milkQty")}
                  onBlur={() => formik.setFieldTouched("milkQty")}
                  error={formik.touched.milkQty && formik.errors.milkQty}
                />
              </View>

              <View style={{ height: 110 }} />
            </ScrollView>

            {/* FOOTER */}
            <View style={styles.footer}>
              <TouchableOpacity
                style={styles.saveBtn}
                onPress={formik.handleSubmit}
              >
                <Icon name="save-outline" size={20} color="#fff" />
                <Text style={styles.saveText}>Save Delivery</Text>
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

export default SellerMilkDeliveryModal;

/* =======================
   STYLES (same format)
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

  sectionLabel: {
    fontSize: 12,
    fontWeight: "900",
    color: "#64748b",
    letterSpacing: 0.6,
  },

  customerName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "900",
    color: "#0f172a",
  },

  customerMeta: {
    marginTop: 4,
    fontSize: 13,
    fontWeight: "700",
    color: "#64748b",
  },

  segment: {
    marginTop: 12,
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
