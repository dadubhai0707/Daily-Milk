import React from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function JoinRequestModal({
  visible,
  onClose,
  roleRequested,
  message,
  setMessage,
  onNext,
}) {
  if (!visible) return null;

  const title =
    roleRequested === "customer"
      ? "Customer Join Request"
      : "Seller Join Request";

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <KeyboardAvoidingView
        style={{
          flex: 1,
          justifyContent: "flex-end",
          backgroundColor: "rgba(0,0,0,0.35)",
        }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View
          style={{
            backgroundColor: "#fff",
            borderTopLeftRadius: 22,
            borderTopRightRadius: 22,
            padding: 16,
          }}
        >
          {/* HEADER */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "900", color: "#0f172a" }}>
              {title}
            </Text>

            <TouchableOpacity onPress={onClose}>
              <Icon name="close" size={24} color="#0f172a" />
            </TouchableOpacity>
          </View>

          {/* MESSAGE */}
          <Text style={{ fontSize: 12, fontWeight: "900", color: "#64748b" }}>
            MESSAGE (OPTIONAL)
          </Text>

          <TextInput
            value={message}
            onChangeText={setMessage}
            placeholder="Write something for the owner..."
            placeholderTextColor="#94a3b8"
            multiline
            style={{
              marginTop: 10,
              minHeight: 90,
              borderWidth: 1,
              borderColor: "#e2e8f0",
              borderRadius: 16,
              padding: 12,
              fontSize: 14,
              fontWeight: "700",
              color: "#0f172a",
            }}
          />

          {/* NEXT BTN */}
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={onNext}
            style={{
              marginTop: 16,
              backgroundColor: "#12a19c",
              paddingVertical: 14,
              borderRadius: 18,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            }}
          >
            <Icon name="send" size={18} color="#fff" />
            <Text style={{ color: "#fff", fontWeight: "900", fontSize: 15 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
