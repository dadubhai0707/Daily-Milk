import RazorpayCheckout from "react-native-razorpay";
import StoreService from "../services/store.service";

const plan = {
    id: "697ade66ab3df15b45cffcd0",
    name: "Basic",
    price: 999
};

const startPayment = async () => {
    try {
        // 1️⃣ Backend se order banao
        const data = await StoreService.createOrder();

        const options = {
            key: "rzp_test_S9ZwbzJa3dGU4k", // ONLY key_id
            amount: data.order.amount,
            currency: "INR",
            order_id: data.order.id,
            name: "Milk Management App",
            description: `${plan.name} Plan`,
            prefill: {
                name: "Test User",
                contact: "9999999999"
            },
            theme: { color: "#3399cc" }
        };

        // 2️⃣ Razorpay open
        RazorpayCheckout.open(options)
            .then(async (response) => {
                // 3️⃣ Payment verify
                const verifyRes = await StoreService.verifyPayment({
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_signature: response.razorpay_signature,

                    planId: plan.id,
                    shopName: "My Milk Store",
                    shopAddress: "Ahmedabad",
                    contactNumber: "9999999999"
                });

                console.log("✅ PAYMENT SUCCESS:", verifyRes);
            })
            .catch((error) => {
                console.log("❌ Payment cancelled", error);
            });

    } catch (error) {
        console.log("❌ Error:", error.message);
    }
};
