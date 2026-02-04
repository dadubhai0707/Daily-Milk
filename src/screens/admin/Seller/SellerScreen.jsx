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
import { styles } from "./SellerStyle";
import SellerProvider from "../../../context/store/seller/seller.provider";
import SellerContext from "../../../context/store/seller";
import FabButton from "../Dashboard/components/FabButton";
import SellerFormModal from "./SellerFormModal";

/* =========================
   INNER LIST (USES CONTEXT)
========================= */
const SellerList = () => {
    const { seller = [],
        loading,
        fetchSeller,
        handleSubmitVendor,
        deleteVendor, } = useContext(SellerContext);
    const [search, setSearch] = useState("");
    const [formOpen, setFormOpen] = useState(false);

    const filtered = seller.filter((s) =>
        `${s.name} ${s.phone}`.toLowerCase().includes(search.toLowerCase())
    );

    const renderSeller = ({ item }) => {
        const isPending = item.balance > 0;
        const isInactive = item.status === "INACTIVE";

        return (
            <View
                style={[
                    styles.card,
                    isInactive && styles.inactiveCard,
                ]}
            >
                {/* AVATAR */}
                <View style={styles.avatarWrap}>
                    <View
                        style={[
                            styles.avatar,
                            isPending
                                ? styles.pendingBorder
                                : styles.successBorder,
                        ]}
                    >
                        <Text style={styles.avatarText}>
                            {item.name.charAt(0)}
                        </Text>
                    </View>
                    <View
                        style={[
                            styles.statusDot,
                            isInactive
                                ? styles.grayDot
                                : styles.greenDot,
                        ]}
                    />
                </View>

                {/* CONTENT */}
                <View style={{ flex: 1 }}>
                    <View style={styles.rowBetween}>
                        <View>
                            <Text
                                style={[
                                    styles.name,
                                    isInactive && styles.inactiveText,
                                ]}
                            >
                                {item.name}
                            </Text>
                            <Text style={styles.meta}>
                                {item.block} • #{item.code}
                            </Text>
                        </View>

                        <View
                            style={[
                                styles.badge,
                                isInactive && styles.inactiveBadge,
                            ]}
                        >
                            <Text style={styles.badgeText}>
                                {item.status}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.footerRow}>
                        <View style={styles.phoneRow}>
                            <Icon name="call-outline" size={14} color="#6b7280" />
                            <Text style={styles.phone}>{item.phone}</Text>
                        </View>

                        {isPending ? (
                            <View style={{ alignItems: "flex-end" }}>
                                <Text style={styles.pendingText}>PENDING</Text>
                                <Text style={styles.amount}>₹{item.balance}</Text>
                            </View>
                        ) : (
                            <View style={styles.clearedRow}>
                                <Icon
                                    name="checkmark-circle"
                                    size={18}
                                    color="#4D994D"
                                />
                                <Text style={styles.clearedText}>Cleared</Text>
                            </View>
                        )}
                    </View>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* HEADER */}
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <View style={styles.storeIcon}>
                        <Icon name="storefront" size={20} color="#12a19c" />
                    </View>
                    <Text style={styles.headerTitle}>Sellers</Text>
                </View>

                <TouchableOpacity style={styles.menuBtn}>
                    <Icon name="ellipsis-vertical" size={18} />
                </TouchableOpacity>
            </View>

            {/* SEARCH */}
            <View style={styles.searchBox}>
                <Icon name="search-outline" size={18} color="#9ca3af" />
                <TextInput
                    placeholder="Search sellers by name or number"
                    placeholderTextColor="#9ca3af"
                    style={styles.searchInput}
                    value={search}
                    onChangeText={setSearch}
                />
            </View>

            {/* LIST */}
            <FlatList
                data={filtered}
                keyExtractor={(item) => item.id}
                renderItem={renderSeller}
                contentContainerStyle={{ paddingBottom: 140 }}
                showsVerticalScrollIndicator={false}
            />

            {/* FAB */}
            <FabButton
                title="Add Seller"
                onPress={() => setFormOpen(true)}
            />
            <SellerFormModal
                visible={formOpen}
                onClose={() => setFormOpen(false)}
                onSubmit={(data) => {
                    console.log("SELLER DATA:", data);
                    setFormOpen(false);
                }}
            />
        </SafeAreaView>
    );
};

/* =========================
   PROVIDER WRAPPER
========================= */
export default function SellerScreen() {
    return (
        <SellerProvider>
            <SellerList />
        </SellerProvider>
    );
}

