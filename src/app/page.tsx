"use client";

import { Auth } from "@supabase/auth-ui-react";
import { supabase } from "../../lib/initSupabase";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 max-w-sm w-full bg-slate-100 mx-auto p-4">
      <Auth
        supabaseClient={supabase}
        appearance={{
          theme: ThemeSupa,
        }}
        theme="dark"
        providers={[]}
      />
    </main>
  );
}
