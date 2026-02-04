import React, { useState, useContext } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "./customerStyle"
import CustomerFormModal from "./CustomeFormModal"
import CustomerProvider from "../../../context/store/customer/customer.provider";
import CustomerContext from "../../../context/store/customer";
import FabButton from "../Dashboard/components/FabButton";

/* =========================
   INNER LIST (USES CONTEXT)
========================= */
const CustomerList = () => {
    const { customers = [] } = useContext(CustomerContext);
    const [search, setSearch] = useState("");
    const [formOpen, setFormOpen] = useState(false);

    const filtered = customers.filter((c) =>
        `${c.name} ${c.phone} ${c.address}`
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    const renderItem = ({ item }) => {
        const isPaid = item.status === "PAID";

        return (
            <View style={styles.card}>
                {/* TOP ROW */}
                <View style={styles.topRow}>
                    <View style={styles.leftRow}>
                        <View style={styles.avatar}>
                            <Text style={styles.avatarText}>
                                {item.name.charAt(0)}
                            </Text>
                        </View>

                        <View>
                            <Text style={styles.name}>{item.name}</Text>
                            <View style={styles.phoneRow}>
                                <Icon name="call-outline" size={13} color="#658686" />
                                <Text style={styles.phone}>{item.phone}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ alignItems: "flex-end" }}>
                        <Text style={styles.statusLabel}>
                            {isPaid ? "STATUS" : "PENDING"}
                        </Text>

                        {isPaid ? (
                            <View style={styles.paidRow}>
                                <Icon
                                    name="checkmark-circle"
                                    size={16}
                                    color="#33A354"
                                />
                                <Text style={styles.paidText}>Paid</Text>
                            </View>
                        ) : (
                            <Text style={styles.pendingAmount}>
                                ${item.amount}
                            </Text>
                        )}
                    </View>
                </View>

                {/* ADDRESS */}
                <View style={styles.addressRow}>
                    <Icon
                        name="location-outline"
                        size={14}
                        color="#1fadad"
                    />
                    <Text style={styles.address} numberOfLines={1}>
                        {item.address}
                    </Text>
                    <Icon
                        name="chevron-forward"
                        size={16}
                        color="#1fadad"
                    />
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
                        <Icon
                            name="person-circle-outline"
                            size={26}
                            color="#1fadad"
                        />
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
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={{ paddingBottom: 140 }}
                showsVerticalScrollIndicator={false}
            />

            {/* FAB */}
            <FabButton
                title="Add Customer"
                onPress={() => setFormOpen(true)}
            />
            <CustomerFormModal
                visible={formOpen}
                onClose={() => setFormOpen(false)}
                onSubmit={(data) => {
                    console.log("Customer Data:", data);
                    setFormOpen(false);
                }}
            />

        </SafeAreaView>
    );
};

/* =========================
   PROVIDER WRAPPER
========================= */
export default function CustomerScreen() {
    return (
        <CustomerProvider>
            <CustomerList />
        </CustomerProvider>
    );
}
