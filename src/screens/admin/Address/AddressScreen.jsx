import React, { useContext, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import AddressProvider from "../../../context/store/address/address.provider";
import AddressContext from "../../../context/store/address";
import AddressFormModal from "./AddressFormModal";
import FabButton from "../Dashboard/components/FabButton";
import { styles } from "./Address.style";

const AddressListContext = () => {
  const {
    address,
    handleSubmitAddress,
    deleteAddress,
  } = useContext(AddressContext);

  const [search, setSearch] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const [edit, setEdit] = useState(null);

  const filtered = address.filter((item) =>
    `${item.areaName} ${item.city} ${item.pincode}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {/* HEADER */}
      <View style={styles.cardHeader}>
        <View style={styles.row}>
          <Icon name="location" size={22} color="#19a6b3" />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.title}>{item.areaName}</Text>
            <Text style={styles.id}>ID: #{item._id.slice(-5)}</Text>
          </View>
        </View>

        <View style={styles.activeBadge}>
          <View style={styles.dot} />
          <Text style={styles.activeText}>ACTIVE</Text>
        </View>
      </View>

      {/* ADDRESS */}
      <View style={styles.addressBox}>
        <Text style={styles.address}>{item.areaName}</Text>
        <Text style={styles.city}>{item.city} - {item.pincode}</Text>
      </View>

      {/* FOOTER */}
      <View style={styles.cardFooter}>
        <Text style={styles.customerText}>
          {item.customers || 0} Customers
        </Text>

        <TouchableOpacity
          style={styles.manageBtn}
          onPress={() => {
            setEdit(item);
            setFormOpen(true);
          }}
          onLongPress={() => deleteAddress(item._id)}
        >
          <Text style={styles.manageText}>Manage</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
     

      {/* SEARCH */}
      <View style={styles.searchBox}>
        <Icon name="search" size={18} color="#648487" />
        <TextInput
          placeholder="Search address name or area"
          placeholderTextColor="#648487"
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* LIST */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      />

      {/* FAB */}
      <FabButton
        title="Add Address"
        onPress={() => {
          setEdit(null);
          setFormOpen(true);
        }}
      />

      {/* MODAL */}
      <AddressFormModal
        visible={formOpen}
        isEdit={edit}
        onClose={() => {
          setFormOpen(false);
          setEdit(null);
        }}
        onSubmit={(value) => {
          handleSubmitAddress(value);
          setFormOpen(false);
          setEdit(null);
        }}
      />
    </SafeAreaView>
  );
};

export default function AddressScreen() {
  return (
    <AddressProvider>
      <AddressListContext />
    </AddressProvider>
  );
}
