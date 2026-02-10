import React, { useContext, useMemo, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import RazorpayCheckout from "react-native-razorpay";
import Toast from "react-native-toast-message";

import styles from "./PublicHomeScreen.style";
import PublicHeader from "../PublicHeader";

import PlanProvider from "../../../context/common/planProvider";
import PlanContext from "../../../context/common";

import paymentService from "../../../services/common/payment.service";
import { getAuthData, setAuthData } from "../../../utils/storage";

function Home({ navigation }) {
  const [billing, setBilling] = useState("monthly");
  const [payLoading, setPayLoading] = useState(false);

  const { plans, loading } = useContext(PlanContext);

  // ✅ billing wise filter
  const filteredPlans = useMemo(() => {
    return (plans || []).filter((p) => p.planType === billing);
  }, [plans, billing]);

  const getSuffix = () => (billing === "monthly" ? "/month" : "/year");

  // ✅ MAIN PAYMENT FUNCTION
  const handleBuyPlan = async (plan) => {
    try {
      // 🔐 must login first
      const auth = await getAuthData();
      if (!auth?.accessToken) {
        Toast.show({
          type: "info",
          text1: "Please login first",
        });
        navigation.navigate("Login");
        return;
      }

      setPayLoading(true);

      // 1) Create Order (backend)
      const orderRes = await paymentService.createOrder(plan._id);

      if (!orderRes?.success) {
        Toast.show({
          type: "error",
          text1: "Order create failed",
        });
        return;
      }

      const order = orderRes.order;

      // 2) Open Razorpay Checkout
      const options = {
        description: `Buy ${plan.name}`,
        image: "https://i.imgur.com/3g7nmJC.png",
        currency: "INR",
        key: "rzp_test_S9ZwbzJa3dGU4k", // 🔥 same as backend
        amount: order.amount,
        name: "Milk Delivery App",
        order_id: order.id,
        prefill: {
          contact: "",
          email: "",
          name: "",
        },
        theme: { color: "#1fadad" },
      };

      const paymentData = await RazorpayCheckout.open(options);

      // paymentData:
      // {
      //   razorpay_payment_id,
      //   razorpay_order_id,
      //   razorpay_signature
      // }

      // 3) Verify payment + Activate Store
      // ⚠️ shopName, shopAddress, contactNumber required by your backend
      // For now we send dummy. Later you can open form screen.
      const verifyRes = await paymentService.verifyPayment({
        razorpay_order_id: paymentData.razorpay_order_id,
        razorpay_payment_id: paymentData.razorpay_payment_id,
        razorpay_signature: paymentData.razorpay_signature,

        planId: plan._id,

        shopName: "My Milk Store",
        shopAddress: "My Address",
        contactNumber: "9999999999",
      });

      if (!verifyRes?.success) {
        Toast.show({
          type: "error",
          text1: "Payment verification failed",
        });
        return;
      }

      Toast.show({
        type: "success",
        text1: "Plan Activated 🎉",
        text2: "Store activated successfully",
      });

      // ✅ IMPORTANT: user role changed in backend, so refresh auth
      // best: call /auth/me api
      // For now: just re-login OR restart checkAuth in root
      // easiest:
      navigation.navigate("LoginRedirect");
    } catch (err) {
      // Razorpay cancel error also comes here
      Toast.show({
        type: "error",
        text1: err?.description || err?.message || "Payment cancelled",
      });
    } finally {
      setPayLoading(false);
    }
  };

  return (
    <View style={styles.page}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <PublicHeader />

        {/* HEADER */}
        <View style={styles.headerBox}>
          <Text style={styles.title}>Choose your plan</Text>

          <View style={styles.trialRow}>
            <Icon name="leaf" size={16} color="#1fadad" />
            <Text style={styles.trialText}>14 days free trial</Text>
          </View>

          <Text style={styles.subTitle}>
            Get the right plan for your business. Plans can be upgraded in the
            future.
          </Text>

          {/* TOGGLE */}
          <View style={styles.toggleWrap}>
            <TouchableOpacity
              style={[
                styles.toggleBtn,
                billing === "monthly" && styles.toggleActive,
              ]}
              onPress={() => setBilling("monthly")}
            >
              <Text
                style={[
                  styles.toggleText,
                  billing === "monthly" && styles.toggleTextActive,
                ]}
              >
                Monthly
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.toggleBtn,
                billing === "yearly" && styles.toggleActive,
              ]}
              onPress={() => setBilling("yearly")}
            >
              <Text
                style={[
                  styles.toggleText,
                  billing === "yearly" && styles.toggleTextActive,
                ]}
              >
                Yearly
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* LOADING */}
        {loading && (
          <Text style={{ marginTop: 14, fontWeight: "800", color: "#64748b" }}>
            Loading plans...
          </Text>
        )}

        {/* PLAN CARDS */}
        <View style={styles.cardsColumn}>
          {filteredPlans.map((p) => {
            const active = p.name?.toLowerCase().includes("standard");

            return (
              <View
                key={p._id}
                style={[styles.planCard, active && styles.planCardActive]}
              >
                {/* TOP */}
                <View style={styles.planHead}>
                  <View
                    style={[
                      styles.dot,
                      active ? styles.dotActive : styles.dotNormal,
                    ]}
                  />
                  <Text
                    style={[
                      styles.planName,
                      active && styles.planNameActive,
                    ]}
                  >
                    {p.name}
                  </Text>
                </View>

                {/* PRICE */}
                <View style={styles.priceRow}>
                  <Text style={styles.price}>₹ {p.price}</Text>
                  <Text style={styles.priceSuffix}>{getSuffix()}</Text>
                </View>

                {/* FEATURES */}
                <View style={styles.featureList}>
                  {(p.features || []).map((f, idx) => (
                    <View key={idx} style={styles.featureRow}>
                      <Icon name="star-four-points" size={16} color="#f59e0b" />
                      <Text style={styles.featureText}>{f}</Text>
                    </View>
                  ))}
                </View>

                {/* EXTRA LIMITS */}
                <View style={{ marginTop: 10 }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "800",
                      color: "#64748b",
                    }}
                  >
                    Max Customers: {p.maxCustomers} | Max Sellers: {p.maxSellers}
                  </Text>
                </View>

                {/* BUTTON */}
                <TouchableOpacity
                  activeOpacity={0.85}
                  disabled={payLoading}
                  onPress={() => handleBuyPlan(p)}
                  style={[styles.planBtn, active && styles.planBtnActive]}
                >
                  <Text
                    style={[
                      styles.planBtnText,
                      active && styles.planBtnTextActive,
                    ]}
                  >
                    {payLoading ? "Please wait..." : "Get Plan"}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>

        {/* EMPTY */}
        {!loading && filteredPlans.length === 0 && (
          <Text style={{ marginTop: 18, fontWeight: "800", color: "#ef4444" }}>
            No {billing} plans found
          </Text>
        )}

        <View style={{ height: 130 }} />
      </ScrollView>
    </View>
  );
}

export default function PublicHomeScreen(props) {
  return (
    <PlanProvider>
      <Home {...props} />
    </PlanProvider>
  );
}
