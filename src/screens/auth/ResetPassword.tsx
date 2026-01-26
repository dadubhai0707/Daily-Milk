import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";

import PrimaryButton from "../../components/Button/PrimaryButton";
import styles from "./ResetPassword.styles";

export default function ResetPassword({ navigation }) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const hasMinLength = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);


  const handleUpdate = () => {
    if (password.length < 8) return;
    if (password !== confirm) return;

    // later: API call
    navigation.navigate("Login");
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backIcon}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Reset Password</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Title */}
      <View style={styles.titleWrap}>
        <Text style={styles.title}>New Password</Text>
        <Text style={styles.subtitle}>
          Set your new password to secure your dairy management account.
        </Text>
      </View>

      {/* New Password */}
      <View style={styles.fieldWrap}>
        <Text style={styles.label}>New Password</Text>
        <View style={styles.inputBox}>
          <TextInput
            secureTextEntry={!showPass}
            placeholder="••••••••"
            value={password}
            onChangeText={setPassword}
            style={styles.input}
          />
          <TouchableOpacity onPress={() => setShowPass(!showPass)}>
            <Text style={styles.eye}>👁</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Confirm Password */}
      <View style={styles.fieldWrap}>
        <Text style={styles.label}>Confirm Password</Text>
        <View style={styles.inputBox}>
          <TextInput
            secureTextEntry={!showConfirm}
            placeholder="••••••••"
            value={confirm}
            onChangeText={setConfirm}
            style={styles.input}
          />
          <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
            <Text style={styles.eye}>🙈</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Requirements */}
      <View style={styles.rules}>
        <Text
          style={[
            styles.rule,
            hasMinLength && styles.ruleOk
          ]}
        >
          {hasMinLength ? "✔" : "○"} At least 8 characters long
        </Text>

        <Text
          style={[
            styles.rule,
            (hasNumber && hasSymbol) && styles.ruleOk
          ]}
        >
          {(hasNumber && hasSymbol) ? "✔" : "○"} Include a number and symbol
        </Text>
      </View>


      {/* Button */}
      <PrimaryButton
        title="Update Password"
        onPress={handleUpdate}
        disabled={!(hasMinLength && hasNumber && hasSymbol)}
      />


      {/* iOS indicator */}
      <View style={styles.indicator} />
    </ScrollView>
  );
}
