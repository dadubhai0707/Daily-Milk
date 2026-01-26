import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from './DashboardHeader.styles'

export default function DashboardHeader() {
  return (
    <View style={styles.container}>
      {/* Left: Profile */}
      <View style={styles.profileWrap}>
        <View style={styles.avatarWrap}>
          <Image
            source={{
              uri: "https://i.pravatar.cc/150?img=12"
            }}
            style={styles.avatar}
          />
          <View style={styles.onlineDot} />
        </View>

        <View>
          <Text style={styles.greeting}>Good Morning 👋</Text>
          <Text style={styles.name}>Alex Rivera</Text>
        </View>
      </View>

      {/* Right: Notification */}
      <TouchableOpacity style={styles.notifyBtn}>
        <Text style={styles.notifyIcon}>🔔</Text>
        <View style={styles.notifyDot} />
      </TouchableOpacity>
    </View>
  );
}
