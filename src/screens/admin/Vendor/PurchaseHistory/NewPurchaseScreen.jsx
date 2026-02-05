import React, { useContext, useMemo, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import PurchaseContext from "../../../../context/store/vendore/purchase";
import VendorContext from "../../../../context/store/vendore";
import { styles } from "./NewPurchaseStyle";

function NewPurchaseScreen({ navigation, route }) {
  const { handleSubmitPurchase } = useContext(PurchaseContext);

  const { vendorId, vendor } = route?.params || {}; // ✅ vendorId auto
  const [milkType, setMilkType] = useState("cow");
  const [quantity, setQuantity] = useState("");
  const [ratePerLiter, setRatePerLiter] = useState("");
  const [notes, setNotes] = useState("");

  const totalAmount = useMemo(() => {
    return Number(quantity || 0) * Number(ratePerLiter || 0);
  }, [quantity, ratePerLiter]);

  const handleSave = async () => {
    if (!vendorId || !quantity || !ratePerLiter) return;

    const payload = {
      vendorId,
      milkTypesSupplied: [milkType],
      quantity: Number(quantity),
      ratePerLiter: Number(ratePerLiter),
      date: new Date(),
      notes,
    };

    const ok = await handleSubmitPurchase({
      data: payload,
      isEdit: false,
      purchaseId: null,
    });

    if (ok) navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={22} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>New Purchase</Text>
        <View style={{ width: 22 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* DATE */}
        <View style={styles.dateCard}>
          <View>
            <Text style={styles.smallLabel}>Purchase Date</Text>
            <Text style={styles.dateText}>{new Date().toDateString()}</Text>
          </View>
          <Icon name="calendar-outline" size={22} color="#12a19c" />
        </View>

        {/* SUPPLIER */}
        <Text style={styles.sectionTitle}>SUPPLIER INFORMATION</Text>

        <View style={styles.selectBox}>
          <Text style={styles.selectLabel}>Selected Vendor</Text>

          {/* ✅ vendor name show */}
          <TextInput
            editable={false}
            value={vendor?.name || ""}
            style={styles.input}
          />
        </View>

        {/* MILK TYPE */}
        <Text style={styles.sectionTitle}>MILK TYPE</Text>
        <View style={styles.segment}>
          {["cow", "buffalo"].map((t) => (
            <TouchableOpacity
              key={t}
              style={[styles.segmentBtn, milkType === t && styles.segmentActive]}
              onPress={() => setMilkType(t)}
            >
              <Text
                style={[
                  styles.segmentText,
                  milkType === t && styles.segmentTextActive,
                ]}
              >
                {t.toUpperCase()}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* QTY + RATE */}
        <View style={styles.row}>
          <View style={{ flex: 1 }}>
            <Text style={styles.sectionTitle}>QUANTITY (L)</Text>
            <TextInput
              placeholder="0.00"
              keyboardType="decimal-pad"
              value={quantity}
              onChangeText={setQuantity}
              style={styles.input}
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.sectionTitle}>RATE (₹/L)</Text>
            <TextInput
              placeholder="0.00"
              keyboardType="decimal-pad"
              value={ratePerLiter}
              onChangeText={setRatePerLiter}
              style={styles.input}
            />
          </View>
        </View>

        {/* TOTAL */}
        <View style={styles.totalBox}>
          <Text style={styles.totalLabel}>TOTAL AMOUNT</Text>
          <Text style={styles.totalAmount}>₹ {totalAmount.toFixed(2)}</Text>
        </View>

        {/* NOTES */}
        <Text style={styles.sectionTitle}>NOTES</Text>
        <TextInput
          placeholder="Optional notes..."
          value={notes}
          onChangeText={setNotes}
          style={[styles.input, { height: 90 }]}
          multiline
        />
      </ScrollView>

      {/* SAVE */}
      <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
        <Icon name="checkmark-circle-outline" size={22} color="#fff" />
        <Text style={styles.saveText}>Save Purchase Entry</Text>
      </TouchableOpacity>
    </View>
  );
}

import PurchaseProvider from "../../../../context/store/vendore/purchase/purchase.provider";

export default function NewPurchaseWrapper(props) {
  return (
    <PurchaseProvider>
      <NewPurchaseScreen {...props} />
    </PurchaseProvider>
  );
}
