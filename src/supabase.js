import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_API_KEY; // Get this from Supabase Dashboard

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
