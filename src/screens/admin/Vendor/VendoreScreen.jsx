import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import VendorFormModal from "./VendorFormModal";
import { styles } from "./VendoreCss";
import VendorProvider from "../../../context/store/vendore/vendore.provider";
import VendorContext from "../../../context/store/vendore";
import FabButton from "../Dashboard/components/FabButton";

const VendorListContent = () => {
  const {
    vendors,
    fetchVendors,
    handleSubmitVendor,
    deleteVendor,
  } = useContext(VendorContext);
  const [search, setSearch] = useState("");
  const [editVendor, setEditVendor] = useState(null);
  const [formOpen, setFormOpen] = useState(false);
  useEffect(() => {
    fetchVendors()
  }, [])
  const filtered = vendors.filter(c =>
    `${c.name} ${c.phone} ${c.address}`.toLowerCase().includes(search.toLowerCase())
  );


  const renderVendor = ({ item }) => (
    <TouchableOpacity style={styles.card} activeOpacity={0.8}>
      <View style={styles.cardTop}>
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.phone}>{item.phone}</Text>
        </View>

        {/* ACTIONS */}
        <View style={{ flexDirection: "row", gap: 12 }}>
          <TouchableOpacity
            onPress={() => {
              setEditVendor(item);
              setFormOpen(true);
            }}
          >
            <Icon name="create-outline" size={20} color="#2563EB" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => deleteVendor(item.id)}>
            <Icon name="trash-outline" size={20} color="#EF4444" />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.address}>{item.address}</Text>
    </TouchableOpacity>
  );

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

      {/* <FlatList
        data={filtered}
        renderItem={renderVendor}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: CONTENT_BOTTOM_PADDING,   // ← this prevents list items going under tab
          paddingTop: 8,
        }}
      /> */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={renderVendor}
      />
      <FabButton
        title="Add Vendor"
        onPress={() => setFormOpen(true)}
      />
      <VendorFormModal
        visible={formOpen}
        onClose={() => setFormOpen(false)}
        isEdit={!!editVendor}
        onSubmit={(value) => {
          handleSubmitVendor(value)
          setFormOpen(false);
        }}
      />
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
