import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styles from "./PrimaryButton.styles";

export default function PrimaryButton({ title, icon, onPress, variant = "solid" }) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[
        styles.button,
        variant === "outline" && styles.outline
      ]}
    >
      {icon && <Text style={styles.icon}>{icon}</Text>}
      <Text
        style={[
          styles.text,
          variant === "outline" && styles.outlineText
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
