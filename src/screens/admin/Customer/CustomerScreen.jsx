import React, { useState, useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "./customerStyle";
import CustomerFormModal from "./CustomeFormModal";
import CustomerProvider from "../../../context/store/customer/customer.provider";
import CustomerContext from "../../../context/store/customer";
import FabButton from "../Dashboard/components/FabButton";

const CustomerList = () => {
  const { customers = [], handleSubmitCustomer, deleteCustomer } =
    useContext(CustomerContext);

  const [search, setSearch] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const [edit, setEdit] = useState(null);

  const filtered = customers.filter((c) =>
    `${c?.userId?.name || ""} ${c?.userId?.mobile || ""} ${c?.fullAddress || ""}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const renderItem = ({ item }) => {
    const name = item?.userId?.name || "Unknown";
    const phone = item?.userId?.mobile || "-";

    return (
      <View style={styles.card}>
        <View style={styles.topRow}>
          <View style={styles.leftRow}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{name.charAt(0)}</Text>
            </View>

            <View>
              <Text style={styles.name}>{name}</Text>
              <View style={styles.phoneRow}>
                <Icon name="call-outline" size={13} color="#658686" />
                <Text style={styles.phone}>{phone}</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              setEdit(item);
              setFormOpen(true);
            }}
          >
            <Icon name="create-outline" size={22} color="#1fadad" />
          </TouchableOpacity>
        </View>

        <View style={styles.addressRow}>
          <Icon name="location-outline" size={14} color="#1fadad" />
          <Text style={styles.address} numberOfLines={1}>
            {item.fullAddress}
          </Text>

          <TouchableOpacity onPress={() => deleteCustomer(item._id)}>
            <Icon name="trash-outline" size={18} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Customers</Text>

        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Icon name="filter-outline" size={22} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="person-circle-outline" size={26} color="#1fadad" />
          </TouchableOpacity>
        </View>
      </View>

      {/* SEARCH */}
      <View style={styles.searchBox}>
        <Icon name="search-outline" size={18} color="#658686" />
        <TextInput
          placeholder="Search by name, phone or address"
          placeholderTextColor="#658686"
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
        contentContainerStyle={{ paddingBottom: 140 }}
        showsVerticalScrollIndicator={false}
      />

      {/* FAB */}
      <FabButton
        title="Add Customer"
        onPress={() => {
          setEdit(null);
          setFormOpen(true);
        }}
      />

      {/* MODAL */}
      <CustomerFormModal
        visible={formOpen}
        isEdit={edit}
        onClose={() => {
          setFormOpen(false);
          setEdit(null);
        }}
        onSubmit={async (data) => {
          const ok = await handleSubmitCustomer({
            data,
            isEdit: !!edit,
            customerId: edit?._id || null,
          });

          if (ok) {
            setFormOpen(false);
            setEdit(null);
          }
        }}
      />
    </SafeAreaView>
  );
};

export default function CustomerScreen() {
  return (
    <CustomerProvider>
      <CustomerList />
    </CustomerProvider>
  );
}
