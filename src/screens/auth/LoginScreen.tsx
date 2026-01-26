import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";

import TextInput from "../../components/Input/TextInput";
import PrimaryButton from "../../components/Button/PrimaryButton";
import styles from "./LoginScreen.styles";

export default function LoginScreen({ navigation }) {
  const [mode, setMode] = useState("password"); // "password" | "otp"
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backIcon}>‹</Text>
        </TouchableOpacity>

        <View style={styles.dots}>
          <View style={styles.activeDot} />
          <View style={styles.dot} />
        </View>
      </View>

      {/* Brand Icon */}
      <View style={styles.brandBox}>
        <Text style={styles.brandIcon}>💧</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>Welcome Back 👋</Text>
      <Text style={styles.subtitle}>Login to manage your dairy</Text>

      {/* Mobile */}
      <TextInput
        label="Mobile Number"
        prefix="+91"
        placeholder="Enter 10 digit number"
        keyboardType="number-pad"
        value={mobile}
        onChangeText={setMobile}
      />

      {/* Password (only if password mode) */}
      {mode === "password" && (
        <>
          <TextInput
            label="Password"
            placeholder="••••••••"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.forgotWrap}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </>
      )}

      {/* Primary Action */}
      <PrimaryButton
        title={mode === "password" ? "Login" : "Send OTP"} onPress={() => {
          navigation.navigate("Otp", {
            phone: "+91 1234567890"
          });
        }}
        icon={mode === "password" ? "🔐" : "📲"}
      />

      {/* OR Divider */}
      <View style={styles.divider}>
        <View style={styles.line} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line} />
      </View>

      {/* Toggle Button */}
      <PrimaryButton
        variant="outline"
        title={
          mode === "password"
            ? "Login with OTP"
            : "Login with Password"
        }
        icon={mode === "password" ? "📱" : "🔑"}
        onPress={() =>
          setMode(mode === "password" ? "otp" : "password")
        }
      />

      {/* Footer */}
      <Text style={styles.footerText}>
        Don’t have an account?
        <Text style={styles.signup}> Sign Up</Text>
      </Text>

      {/* Role indicators */}
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
