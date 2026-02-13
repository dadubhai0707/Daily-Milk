import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./SplashScreen.style";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      {/* Top Branding */}
      <View style={styles.brandWrap}>
        <View style={styles.logoWrap}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/3082/3082037.png",
            }}
            style={styles.logo}
          />
        </View>

        <Text style={styles.appName}>Milk Book</Text>
        <Text style={styles.tagline}>Roz ka Doodh Hisab</Text>

        <Text style={styles.description}>
          Smart Dairy Management App for Vendors, Sellers, Customers & Billing.
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footerWrap}>
        <Text style={styles.loadingText}>Loading...</Text>

        <Text style={styles.createdBy}>Developed by Sanjay Suthar</Text>
        <Text style={styles.versionText}>v1.0</Text>
      </View>
    </View>
  );
}
