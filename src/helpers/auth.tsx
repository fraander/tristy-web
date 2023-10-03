import { supabase } from "../../lib/initSupabase";

export async function signUpWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  console.log("data:", data);
  console.log("error:", error);
}

export async function signInWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  console.log("data:", data);
  console.log("error:", error);
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
}
