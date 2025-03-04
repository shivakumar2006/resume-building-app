import supabase from "../supabase";

export const getUserDetail = async () => {
    try {
        // Get the current session
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();

        console.log("Session Data:", session); // Debugging

        if (sessionError) throw sessionError;
        if (!session) {
            throw new Error("No active session found.");
        }
        if (!session.user) {
            throw new Error("User is not authenticated.");
        }

        console.log("Authenticated User:", session.user);

        const user = session.user;

        // Fetch user details from Supabase 'users' table
        const { data: userData, error: userError } = await supabase
            .from("users")
            .select("*")
            .eq("id", user.UUID)
            .single();

        if (userError) throw userError;

        return userData;
    } catch (error) {
        console.error("Error in getUserDetail:", error.message);
        return null; // Return null if authentication fails
    }
};
