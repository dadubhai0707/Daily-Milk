import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";

import TextInput from "../../components/Input/TextInput";
import PrimaryButton from "../../components/Button/PrimaryButton";
import styles from "./ForgotPassword.styles";

export default function ForgotPassword({ navigation }) {
  const [mobile, setMobile] = useState("");

  const handleSendOtp = () => {
    if (mobile.length < 10) return;

    navigation.navigate("Otp", {
      phone: `+91 ${mobile}`
    });
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
      </View>

      {/* Title */}
      <View style={styles.titleWrap}>
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.subtitle}>
          Enter your registered mobile number to receive a verification code
        </Text>
      </View>

      {/* Mobile Input */}
      <TextInput
        label="Mobile Number"
        prefix="+91"
        placeholder="Enter 10 digit number"
        keyboardType="number-pad"
        value={mobile}
        onChangeText={setMobile}
      />

      {/* Send OTP */}
      <View style={styles.btnWrap}>
        <PrimaryButton
          title="Send OTP"
          icon="➡️"
          onPress={handleSendOtp}
          disabled={mobile.length < 10}
        />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Remember password?
          <Text
            style={styles.login}
            onPress={() => navigation.navigate("Login")}
          >
            {" "}Login
          </Text>
        </Text>
      </View>

      {/* Roles */}
      <View style={styles.roles}>
        {["Admin", "Seller", "Customer"].map((r) => (
          <View key={r} style={styles.roleItem}>
            <View style={styles.roleDot} />
            <Text style={styles.roleText}>{r}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
