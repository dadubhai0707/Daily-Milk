import React from "react";
import { View, ScrollView, Text } from "react-native";
import styles from './ComponentPreview.styles.js'
import PrimaryButton from "./components/Button/PrimaryButton";
import InfoCard from "./components/Card/InfoCard";
import TextInput from "./components/Input/TextInput";
import StatusBadge from "./components/Badge/StatusBadge";

export default function ComponentPreview() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Component Preview</Text>

      {/* Info Cards */}
      <View style={styles.row}>
        <InfoCard icon="🥛" label="Total Milk" value="1200 L" />
        <InfoCard icon="⚠️" label="Remaining" value="400 L" highlight="#FFF3E5" />
      </View>

      {/* Inputs */}
      <TextInput placeholder="Enter mobile number" />
      <TextInput placeholder="Password" secureTextEntry />

      {/* Status Badges */}
      <View style={styles.badgeRow}>
        <StatusBadge status="PAID" />
        <StatusBadge status="PENDING" />
        <StatusBadge status="ACTIVE" />
      </View>

      {/* Buttons */}
      <PrimaryButton title="Login" />
      <PrimaryButton title="Add Seller" icon="➕" />
    </ScrollView>
  );
}
