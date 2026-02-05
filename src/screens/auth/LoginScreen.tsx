import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Toast from "react-native-toast-message";
import TextInput from "../../components/Input/TextInput";
import PrimaryButton from "../../components/Button/PrimaryButton";
import styles from "./LoginScreen.styles";
import { useFormik } from "formik";
import AuthService from "../../services/authService/auth.service";
import { setAuthData } from "../../utils/storage";

export default function LoginScreen({ navigation, onLoginSuccess }) {
  const [mode, setMode] = useState("password"); // "password" | "otp"
  const [isLoading, setIsloading] = useState(false)
  const LoginForm = useFormik({
    initialValues: { mobile: "", password: "" },

    onSubmit: async (values, { resetForm }) => {
      try {
        setIsloading(true);

        const res = await AuthService.Login(values);

        if (!res?.success) {
          Toast.show({
            type: "error",
            text1: "Login Failed",
          });
          return;
        }

        await setAuthData({
          accessToken: res.accessToken,
          refreshToken: res.refreshToken,
          user: res.data.user,
        });

        Toast.show({
          type: "success",
          text1: "Login Successful 🎉",
        });

        resetForm();

        // ✅ बस ये call करो
        onLoginSuccess();

        // ❌ navigation.reset हटाओ
        // navigation.reset({
        //   index: 0,
        //   routes: [{ name: "User" }],
        // });

      } catch (error) {
        Toast.show({
          type: "error",
          text1: "Network error",
        });
      } finally {
        setIsloading(false);
      }
    },
  })
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
        value={LoginForm.values.mobile}
        onChangeText={LoginForm.handleChange("mobile")}
      />

      {/* Password (only if password mode) */}
      {mode === "password" && (
        <>
          <TextInput
            label="Password"
            placeholder="••••••••"
            secureTextEntry
            value={LoginForm.values.password}
            onChangeText={LoginForm.handleChange("password")}
          />

          <TouchableOpacity
            style={styles.forgotWrap}
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </>
      )}

      {/* Primary Action */}
      <PrimaryButton
        title={mode === "password" ? isLoading ? "wait..." : "Login" : "Send OTP"}
        onPress={LoginForm.handleSubmit}
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
