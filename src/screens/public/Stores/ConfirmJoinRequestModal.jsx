import React from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function ConfirmJoinRequestModal({
  visible,
  onCancel,
  onConfirm,
  roleRequested,
  loading,
}) {
  if (!visible) return null;

  const roleText = roleRequested === "customer" ? "Customer" : "Seller";

  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.35)",
          alignItems: "center",
          justifyContent: "center",
          padding: 18,
        }}
      >
        <View
          style={{
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: 22,
            padding: 18,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                width: 56,
                height: 56,
                borderRadius: 18,
                backgroundColor: "#ecfeff",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon name="help-circle-outline" size={28} color="#12a19c" />
            </View>

            <Text
              style={{
                marginTop: 12,
                fontSize: 16,
                fontWeight: "900",
                color: "#0f172a",
              }}
            >
              Are you sure?
            </Text>

            <Text
              style={{
                marginTop: 8,
                fontSize: 13,
                fontWeight: "700",
                color: "#64748b",
                textAlign: "center",
                lineHeight: 18,
              }}
            >
              You are sending a request to join as{" "}
              <Text style={{ fontWeight: "900", color: "#0f172a" }}>
                {roleText}
              </Text>
              .{"\n"}
              You can send only one request at a time.
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              gap: 12,
              marginTop: 18,
            }}
          >
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={onCancel}
              disabled={loading}
              style={{
                flex: 1,
                paddingVertical: 14,
                borderRadius: 18,
                backgroundColor: "#f1f5f9",
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "900", color: "#0f172a" }}>
                Cancel
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.9}
              onPress={onConfirm}
              disabled={loading}
              style={{
                flex: 1,
                paddingVertical: 14,
                borderRadius: 18,
                backgroundColor: "#12a19c",
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "900", color: "#fff" }}>
                {loading ? "Sending..." : "Yes, Send"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
