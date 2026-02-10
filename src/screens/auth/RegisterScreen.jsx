import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Toast from "react-native-toast-message";

import TextInput from "../../components/Input/TextInput";
import PrimaryButton from "../../components/Button/PrimaryButton";
import styles from "./LoginScreen.styles"; // ✅ same styles use
import { useFormik } from "formik";

import AuthService from "../../services/authService/auth.service";

export default function RegisterScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);

  const RegisterForm = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      email: "",
      password: "",
      address: "",
    },

    onSubmit: async (values, { resetForm }) => {
      try {
        setIsLoading(true);

        const res = await AuthService.Register(values);

        // ❌ if backend returns string error
        if (typeof res === "string") {
          Toast.show({
            type: "error",
            text1: res,
          });
          return;
        }

        if (!res?.success) {
          Toast.show({
            type: "error",
            text1: "Register Failed",
          });
          return;
        }

        Toast.show({
          type: "success",
          text1: "Registered Successfully 🎉",
          text2: "Now login to continue",
        });

        resetForm();

        // ✅ go to login page
        navigation.navigate("Login");

      } catch (error) {
        Toast.show({
          type: "error",
          text1: "Network error",
        });
      } finally {
        setIsLoading(false);
      }
    },
  });

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
      <Text style={styles.title}>Create Account ✨</Text>
      <Text style={styles.subtitle}>Register to manage your dairy</Text>

      {/* Name */}
      <TextInput
        label="Full Name"
        placeholder="Enter your name"
        value={RegisterForm.values.name}
        onChangeText={RegisterForm.handleChange("name")}
      />

      {/* Mobile */}
      <TextInput
        label="Mobile Number"
        prefix="+91"
        placeholder="Enter 10 digit number"
        keyboardType="number-pad"
        value={RegisterForm.values.mobile}
        onChangeText={RegisterForm.handleChange("mobile")}
      />

      {/* Password */}
      <TextInput
        label="Password"
        placeholder="••••••••"
        secureTextEntry
        value={RegisterForm.values.password}
        onChangeText={RegisterForm.handleChange("password")}
      />

      {/* Address */}
      <TextInput
        label="Address"
        placeholder="Enter your address"
        value={RegisterForm.values.address}
        onChangeText={RegisterForm.handleChange("address")}
      />

      {/* Register Button */}
      <PrimaryButton
        title={isLoading ? "wait..." : "Register"}
        onPress={RegisterForm.handleSubmit}
        icon="📝"
      />

      {/* Footer */}
      <Text style={styles.footerText}>
        Already have an account?
        <Text
          style={styles.signup}
          onPress={() => navigation.navigate("Login")}
        >
          {" "}
          Login
        </Text>
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
