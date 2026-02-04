import React, { useContext, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "./Address.style";
import AddressFormModal from "./AddressFormModal";

import AddressProvider from "../../../context/store/address/address.provider";
import AddressContext from "../../../context/store/address";
import FabButton from "../Dashboard/components/FabButton";

/* =========================
   INNER SCREEN (USES CONTEXT)
========================= */
const AddressListContext = () => {
    const {
        address,
        loading,
        fetchAddress,
        handleSubmitAddress,
        deleteAddress,
    } = useContext(AddressContext);
    const [search, setSearch] = useState("");
    const [formOpen, setFormOpen] = useState(false);
    const [edit, setEdit] = useState(null);


    const filtered = address.filter((item) =>
        `${item.name} ${item.area} ${item.city}`
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
                        <Text style={styles.title}>{item.name}</Text>
                        <Text style={styles.id}>ID: #{item.id}</Text>
                    </View>
                </View>

                <View style={styles.activeBadge}>
                    <View style={styles.dot} />
                    <Text style={styles.activeText}>ACTIVE</Text>
                </View>
            </View>

            {/* ADDRESS */}
            <View style={styles.addressBox}>
                <Text style={styles.address}>{item.area}</Text>
                <Text style={styles.city}>{item.city}</Text>
            </View>

            {/* FOOTER */}
            <View style={styles.cardFooter}>
                <Text style={styles.customerText}>
                    {item.customers} Customers
                </Text>

                <TouchableOpacity style={styles.manageBtn}>
                    <Text style={styles.manageText}>Manage</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            {/* HEADER */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backBtn}>
                    <Icon name="arrow-back" size={18} />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>Addresses</Text>

                <Icon name="filter" size={22} color="#19a6b3" />
            </View>

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
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 120 }}
            />

            {/* FAB */}
            <FabButton
                title="Add Address"
                onPress={() => setFormOpen(true)}
            />

            {/* Later: AddAddressModal → formOpen */}
            <AddressFormModal
                visible={formOpen}
                onClose={() => setFormOpen(false)}
                isEdit={!!edit}
                onSubmit={(value) => {
                    handleSubmitAddress(value)
                    setFormOpen(false);
                }}
            />
        </SafeAreaView>
    );
};

/* =========================
   PROVIDER WRAPPER
========================= */
export default function AddressScreen() {
    return (
        <AddressProvider>
            <AddressListContext />
        </AddressProvider>
    );
}

