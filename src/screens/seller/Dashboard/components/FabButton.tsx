import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "../SellerDashboard.styles";

export default function FabButton({
  title,
  onPress = () => {} // ✅ DEFAULT FUNCTION (IMPORTANT)
}) {
  return (
    <View style={styles.fabContainer} pointerEvents="box-none">
      <TouchableOpacity
        style={styles.fabButton}
        activeOpacity={0.9}
        onPress={onPress}
      >
        <Icon
          name="plus-circle"
          size={26}
          color="#fff"
          style={{ marginRight: 10 }}
        />
        <Text style={styles.fabText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
