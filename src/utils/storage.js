import AsyncStorage from "@react-native-async-storage/async-storage";

export const setAuthData = async (data) => {
    try {
        await AsyncStorage.setItem("accessToken", data.accessToken);
        await AsyncStorage.setItem("refreshToken", data.refreshToken);
        await AsyncStorage.setItem("user", JSON.stringify(data.user));
        await AsyncStorage.setItem("isAuthenticated", "true");
    } catch (e) {
        console.log("Storage error", e);
    }
};

export const getAuthData = async () => {
    try {
        const token = await AsyncStorage.getItem("accessToken");
        const user = await AsyncStorage.getItem("user");
        return {
            token,
            user: user ? JSON.parse(user) : null
        };
    } catch (e) {
        return null;
    }
};

export const clearAuthData = async () => {
    await AsyncStorage.multiRemove([
        "accessToken",
        "refreshToken",
        "user",
        "isAuthenticated"
    ]);
};
