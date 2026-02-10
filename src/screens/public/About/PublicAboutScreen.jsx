import React, { useMemo } from "react";
import { View, Text, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./PublicAboutScreen.style";

export default function PublicAboutScreen() {
  const content = useMemo(() => {
    return {
      appName: "Daily Milk",
      tagline: "Milk delivery, billing & seller tracking system.",
      points: [
        {
          icon: "truck-delivery-outline",
          title: "Daily Milk Delivery Tracking",
          desc: "Seller daily customer ko milk deliver karta hai aur delivery mark karta hai. Duplicate delivery same day allowed nahi hoti.",
        },
        {
          icon: "clipboard-check-outline",
          title: "Stock + Assign Management",
          desc: "Owner daily stock add karta hai aur seller ko milk assign karta hai. Seller assign se jyada milk deliver nahi kar sakta.",
        },
        {
          icon: "cash-multiple",
          title: "Monthly Billing System",
          desc: "Customer ka daily milk record automatically monthly bill banata hai. Customer invoice download kar sakta hai.",
        },
        {
          icon: "chart-line",
          title: "Reports & Analytics",
          desc: "Store owner daily/monthly milk sales, remaining stock, wastage aur total delivery reports dekh sakta hai.",
        },
      ],
      roles: [
        {
          icon: "shield-account-outline",
          name: "Owner",
          desc: "Stock, seller, customer, area, billing aur reports manage karta hai.",
        },
        {
          icon: "account-tie-outline",
          name: "Seller",
          desc: "Assigned area ke customers ko milk deliver karta hai aur delivery history maintain karta hai.",
        },
        {
          icon: "account-outline",
          name: "Customer",
          desc: "Apni daily delivery, monthly total, payment status aur invoice download dekh sakta hai.",
        },
      ],
    };
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* HERO */}
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>{content.appName}</Text>
          <Text style={styles.heroSub}>{content.tagline}</Text>

          <View style={styles.heroRow}>
            <View style={styles.heroPill}>
              <Icon name="shield-check-outline" size={18} color="#1fadad" />
              <Text style={styles.heroPillText}>Secure</Text>
            </View>

            <View style={styles.heroPill}>
              <Icon name="speedometer" size={18} color="#1fadad" />
              <Text style={styles.heroPillText}>Fast</Text>
            </View>

            <View style={styles.heroPill}>
              <Icon name="check-decagram-outline" size={18} color="#1fadad" />
              <Text style={styles.heroPillText}>Reliable</Text>
            </View>
          </View>
        </View>

        {/* WHAT APP DOES */}
        <Text style={styles.sectionTitle}>What this App Does</Text>

        {content.points.map((p, idx) => (
          <View key={idx} style={styles.card}>
            <View style={styles.cardTop}>
              <View style={styles.iconWrap}>
                <Icon name={p.icon} size={22} color="#1fadad" />
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>{p.title}</Text>
                <Text style={styles.cardDesc}>{p.desc}</Text>
              </View>
            </View>
          </View>
        ))}

        {/* ROLES */}
        <Text style={styles.sectionTitle}>How it Works (Roles)</Text>

        {content.roles.map((r, idx) => (
          <View key={idx} style={styles.roleCard}>
            <View style={styles.roleLeft}>
              <Icon name={r.icon} size={26} color="#1fadad" />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.roleTitle}>{r.name}</Text>
              <Text style={styles.roleDesc}>{r.desc}</Text>
            </View>
          </View>
        ))}

        {/* NOTE */}
        <View style={styles.noteCard}>
          <Icon name="information-outline" size={20} color="#0f766e" />
          <Text style={styles.noteText}>
            Note: This app is designed to make milk delivery simple, transparent
            and easy to manage for store owners, sellers and customers.
          </Text>
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>
    </View>
  );
}
