import React, { useContext, useMemo, useState } from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import SellerProfileProvider from "../../../context/seller/profile/profile.provider";
import SellerProfileContext from "../../../context/seller/profile";
import { styles } from "../../admin/Address/Address.style";
function SellerAssignedAreasScreen() {
    const { profile, loading, fetchSellerProfile } =
        useContext(SellerProfileContext);

    const [search, setSearch] = useState("");
    const [openId, setOpenId] = useState(null);

    const filtered = useMemo(() => {
        const areas = profile?.seller?.assignedAreaIds || [];

        return areas.filter((item) => {
            const areaName = item?.areaName || "";
            const city = item?.city || "";
            const pincode = item?.pincode || "";

            return `${areaName} ${city} ${pincode}`
                .toLowerCase()
                .includes(search.toLowerCase());
        });
    }, [profile?.seller?.assignedAreaIds, search]);


    const toggleDetails = (id) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    const renderItem = ({ item }) => {
        const isOpen = openId === item._id;

        return (
            <View style={styles.card}>
                {/* HEADER */}
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => toggleDetails(item._id)}
                    style={styles.cardHeader}
                >
                    <View style={styles.row}>
                        <Icon name="location" size={22} color="#19a6b3" />
                        <View style={{ marginLeft: 8 }}>
                            <Text style={styles.title}>{item.areaName}</Text>
                            <Text style={styles.id}>ID: #{item._id.slice(-5)}</Text>
                        </View>
                    </View>

                    <View style={styles.activeBadge}>
                        <View style={styles.dot} />
                        <Text style={styles.activeText}>ASSIGNED</Text>
                    </View>
                </TouchableOpacity>

                {/* ADDRESS */}
                <View style={styles.addressBox}>
                    <Text style={styles.address}>{item.areaName}</Text>
                    <Text style={styles.city}>
                        {item.city} - {item.pincode}
                    </Text>
                </View>

                {/* DETAILS (EXPAND) */}
                {isOpen && (
                    <View style={styles.detailsBox}>
                        <View style={styles.detailRow}>
                            <Text style={styles.detailLabel}>Area Name:</Text>
                            <Text style={styles.detailValue}>{item.areaName}</Text>
                        </View>

                        <View style={styles.detailRow}>
                            <Text style={styles.detailLabel}>City:</Text>
                            <Text style={styles.detailValue}>{item.city || "-"}</Text>
                        </View>

                        <View style={styles.detailRow}>
                            <Text style={styles.detailLabel}>Pincode:</Text>
                            <Text style={styles.detailValue}>{item.pincode || "-"}</Text>
                        </View>
                    </View>
                )}

                {/* FOOTER */}
                <View style={styles.cardFooter}>
                    <Text style={styles.customerText}>
                        Tap to {isOpen ? "hide" : "view"} details
                    </Text>

                    <TouchableOpacity
                        style={styles.manageBtn}
                        onPress={() => toggleDetails(item._id)}
                    >
                        <Text style={styles.manageText}>
                            {isOpen ? "Close" : "View"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    const EmptyList = () => (
        <View style={{ paddingVertical: 40, alignItems: "center" }}>
            <Text style={{ fontSize: 16, fontWeight: "700", color: "#64748b" }}>
                No Areas Assigned
            </Text>

            <Text style={{ marginTop: 6, color: "#94a3b8" }}>
                Owner has not assigned any areas yet.
            </Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            {/* SEARCH */}
            <View style={styles.searchBox}>
                <Icon name="search" size={18} color="#648487" />
                <TextInput
                    placeholder="Search assigned areas..."
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
                contentContainerStyle={{ paddingBottom: 40 }}
                ListEmptyComponent={!loading ? <EmptyList /> : null}
            />
        </SafeAreaView>
    );
}

export default function SellerAssignedAreas() {
    return (
        <SellerProfileProvider>
            <SellerAssignedAreasScreen />
        </SellerProfileProvider>
    );
}
