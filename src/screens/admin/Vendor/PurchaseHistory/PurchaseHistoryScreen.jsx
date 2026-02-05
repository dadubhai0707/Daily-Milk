import React, { useContext, useMemo } from "react";
import { View, Text, TouchableOpacity, FlatList, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import PurchaseProvider from "../../../../context/store/vendore/purchase/purchase.provider";
import PurchaseContext from "../../../../context/store/vendore/purchase/index";
import { styles } from "./PurchaseStyle";

const PurchaseList = ({ navigation }) => {
    const { purchases = [], loading } = useContext(PurchaseContext);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todaySummary = useMemo(() => {
        const todayList = purchases.filter((p) => {
            const d = new Date(p.date);
            d.setHours(0, 0, 0, 0);
            return d.getTime() === today.getTime();
        });

        const liters = todayList.reduce((sum, p) => sum + (p.quantity || 0), 0);
        const amount = todayList.reduce((sum, p) => sum + (p.totalAmount || 0), 0);

        return { liters, amount };
    }, [purchases]);

    const renderItem = ({ item }) => {
        const vendor = item.vendorId;
        const name = vendor?.name || "Unknown Vendor";
        const milkType = item?.milkTypesSupplied?.[0] || "cow";

        return (
            <View style={styles.listCard}>
                <View style={styles.leftRow}>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>{name.charAt(0)}</Text>
                    </View>

                    <View>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.meta}>
                            {milkType} • {item.quantity}L @ ₹{item.ratePerLiter}/L
                        </Text>
                    </View>
                </View>

                <View style={styles.rightCol}>
                    <Text style={styles.amount}>₹{item.totalAmount}</Text>

                    <View style={[styles.badge, styles.badgePaid]}>
                        <Text style={styles.badgeTextPaid}>PAID</Text>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {/* HEADER */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.iconBtn}>
                    <Icon name="search-outline" size={22} />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>Purchase</Text>

                <TouchableOpacity style={styles.iconBtn}>
                    <Icon name="filter-outline" size={22} />
                </TouchableOpacity>
            </View>

            {/* CARDS */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.cardsRow}>
                    <View style={styles.card}>
                        <View style={styles.cardIcon}>
                            <Icon name="water-outline" size={20} color="#2563EB" />
                        </View>
                        <Text style={styles.cardValue}>{todaySummary.liters}L</Text>
                        <Text style={styles.cardLabel}>Today Purchased</Text>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.cardIcon}>
                            <Icon name="cash-outline" size={20} color="#16A34A" />
                        </View>
                        <Text style={styles.cardValue}>₹{todaySummary.amount}</Text>
                        <Text style={styles.cardLabel}>Today Amount</Text>
                    </View>

                    <View style={[styles.card, styles.cardOrange]}>
                        <View style={styles.cardIcon}>
                            <Icon name="time-outline" size={20} color="#EA580C" />
                        </View>
                        <Text style={styles.cardValue}>₹0</Text>
                        <Text style={styles.cardLabel}>Pending</Text>
                    </View>
                </View>
            </ScrollView>

            {/* Recent */}
            <View style={styles.sectionHead}>
                <Text style={styles.sectionTitle}>Recent Purchases</Text>
                <Text style={styles.viewAll}>View All</Text>
            </View>

            {/* LIST */}
            <FlatList
                data={purchases}
                keyExtractor={(item) => item._id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 120 }}
                refreshing={loading}
            />

            {/* FAB */}
            <TouchableOpacity
                style={styles.fab}
                onPress={() => navigation.navigate("NewPurchase")}
            >
                <Icon name="add" size={22} color="#fff" />
                <Text style={styles.fabText}>New Purchase</Text>
            </TouchableOpacity>
        </View>
    );
};

export default function PurchaseHistoryScreen({ navigation }) {
    return (
        <PurchaseProvider>
            <PurchaseList navigation={navigation} />
        </PurchaseProvider>
    );
}
