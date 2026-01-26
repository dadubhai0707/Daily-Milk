import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./PrimaryButton.styles";

export default function PrimaryButton({
  title,
  onPress,
  icon,
  variant = "solid",
  disabled = false
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={disabled ? null : onPress}
      disabled={disabled}
      style={[
        styles.button,
        variant === "outline" && styles.outline,
        disabled && styles.disabled
      ]}
    >
      {icon && <Text style={styles.icon}>{icon}</Text>}
      <Text
        style={[
          styles.text,
          variant === "outline" && styles.outlineText,
          disabled && styles.disabledText
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
