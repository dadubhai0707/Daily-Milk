import React, { useContext, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import BottomTabBar from "../Dashboard/components/BottomTabBar";
import VendorFormModal from "./VendorFormModal";
import { styles } from "./VendoreCss"; // we'll update this too
import VendorProvider from "../../../context/store/vendore/vendore.provider";
import VendorContext from "../../../context/store/vendore";

const TAB_HEIGHT = 80;
const FAB_MARGIN = 16;
const CONTENT_BOTTOM_PADDING = TAB_HEIGHT + 90;
const VendorListContent = () => {
  const { vendors, fetchVendors, handleSubmitVendor, } = useContext(VendorContext);
  const [search, setSearch] = useState("");
  const [editVendor, setEditVendor] = useState(null);
  const [formOpen, setFormOpen] = useState(false);

  const filtered = vendors.filter(c =>
    `${c.name} ${c.phone} ${c.address}`.toLowerCase().includes(search.toLowerCase())
  );

  const renderCustomer = ({ item }) => {
    const isPending = item.status === "PENDING";
    return (
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.7}
      // onPress → detail screen if needed
      >
        <View style={styles.cardTop}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{item.name.charAt(0)}</Text>
            </View>
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.phone}>{item.phone}</Text>
            </View>
          </View>

          <View style={{ alignItems: "flex-end" }}>
            <Text style={[styles.status, isPending ? styles.pending : styles.paid]}>
              {isPending ? "PENDING" : "Active"}
            </Text>
          </View>
        </View>

        <View style={styles.addressRow}>
          <Icon name="location-outline" size={16} color="#26A69A" />
          <Text style={styles.address} numberOfLines={1}>{item.address}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8fafc" />


      <View style={styles.searchContainer}>
        <Icon name="search-outline" size={20} color="#94A3B8" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search by name, phone or address"
          placeholderTextColor="#94A3B8"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <FlatList
        data={filtered}
        renderItem={renderCustomer}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: CONTENT_BOTTOM_PADDING,   // ← this prevents list items going under tab
          paddingTop: 8,
        }}
      />

      <TouchableOpacity
        style={[styles.fab, { bottom: TAB_HEIGHT + FAB_MARGIN }]}
        onPress={() => setFormOpen(true)}
      >
        <Icon name="add" size={24} color="#fff" />
        <Text style={styles.fabText}>Add Customer</Text>
      </TouchableOpacity>

      <VendorFormModal
        visible={formOpen}
        onClose={() => setFormOpen(false)}
        isEdit={!!editVendor}
        onSubmit={() => {
          handleSubmitVendor
          setFormOpen(false);
        }}
      />
      <BottomTabBar />
    </View>
  );
};



export default function VendorListScreen() {
  return (
    <VendorProvider>
      <VendorListContent />
    </VendorProvider>
  );
}
