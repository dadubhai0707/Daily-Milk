import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./SplashScreen.style";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logoWrap}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/2935/2935410.png",
          }}
          style={styles.logo}
        />
      </View>

      <Text style={styles.title}>Daily Milk</Text>
      <Text style={styles.subTitle}>Milk Management System</Text>

      <Text style={styles.footerText}>Loading...</Text>
    </View>
  );
}
