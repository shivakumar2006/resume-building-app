import { supabase } from "../supabase";

export const getUserDetail = (callback) => {
    try {
        const { data: subscription, error } = supabase.auth.onAuthStateChange((event, session) => {
            if (error) {
                console.error("onListener error:", error);
                callback(null);
                return;
            }
            callback(session?.user || null);
        });

        if (!subscription) {
            throw new Error("Auth listener failed to initialize...");
        }

        return () => {
            console.log("Unsubscribing from auth listener...");
            subscription?.unsubscribe(); // Correct way to unsubscribe
        };
    } catch (err) {
        console.error("Error in ListenOnAuthChanges:", err);
        return () => {};
    }
};
