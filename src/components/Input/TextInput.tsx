import React from "react";
import { View, TextInput as RNInput, Text } from "react-native";
import styles from "./TextInput.styles";

export default function TextInput({ label, prefix, error, ...props }) {
  return (
    <View style={styles.wrapper}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={styles.inputBox}>
        {prefix && <Text style={styles.prefix}>{prefix}</Text>}
        <RNInput
          {...props}
          placeholderTextColor="#648487"
          style={styles.input}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}
