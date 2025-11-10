import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabaseInstance = null;

// The createClient function throws an error if the URL is invalid.
// We'll check if the URL looks valid before attempting to create the client.
if (supabaseUrl && supabaseUrl.startsWith('http') && supabaseAnonKey) {
  try {
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
  } catch (error) {
    console.error("Error creating Supabase client:", error.message);
    // If it still fails, ensure the instance is null.
    supabaseInstance = null;
  }
} else {
  console.warn("Supabase credentials are not valid or not provided in .env file. Contact form will be disabled.");
}

export const supabase = supabaseInstance;
