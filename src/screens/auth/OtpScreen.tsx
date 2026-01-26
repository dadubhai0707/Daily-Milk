import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

import PrimaryButton from "../../components/Button/PrimaryButton";
import styles from "./OtpScreen.styles";

export default function OtpScreen({ navigation, route }) {
  const phone = route?.params?.phone || "12345 67890";

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputs = useRef([]);

  console.log("OTP PARAMS:", route.params);

  useEffect(() => {
    inputs.current[0]?.focus();
  }, []);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleVerify = () => {
    const code = otp.join("");
    if (code.length === 6) {
      // later: redux / api verify
      // navigation.replace("AdminNavigator") OR handled in App.tsx
      console.log("OTP Verified:", code);
    }
  };

  console.log("CAN GO BACK:", navigation.canGoBack());


  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}>
          <Text style={styles.backIcon}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Verify OTP</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Icon */}
      <View style={styles.iconWrap}>
        <Text style={styles.icon}>📩</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>Verification Code</Text>
      <Text style={styles.subtitle}>
        Enter the 6-digit OTP sent to{"\n"}
        <Text style={styles.phone}>{phone}</Text>
      </Text>

      {/* OTP Boxes */}
      <View style={styles.otpRow}>
        {otp.map((digit, i) => (
          <TextInput
            key={i}
            ref={(ref) => (inputs.current[i] = ref)}
            value={digit}
            onChangeText={(v) => handleChange(v, i)}
            onKeyPress={(e) => handleBackspace(e, i)}
            keyboardType="number-pad"
            maxLength={1}
            style={styles.otpBox}
          />
        ))}
      </View>

      {/* Resend */}
      <View style={styles.resendWrap}>
        <Text style={styles.resendText}>Didn’t receive code?</Text>
        <Text style={styles.resendTimer}>Resend in 30s</Text>
      </View>

      {/* Verify Button */}
      <PrimaryButton
        title="Verify & Login"
        onPress={handleVerify}
      />

      {/* Decorative blobs */}
      <View style={styles.blobBottom} />
      <View style={styles.blobTop} />
    </View>
  );
}
