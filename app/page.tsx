import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import LogoutButton from "../components/LogoutButton";
import ItemList from "@/components/ItemList";
import NewItemBuilder from "@/components/NewItemBuilder";

export const dynamic = "force-dynamic";

interface Todo {
  id: number;
  created_at: Date;
  title: string;
  is_complete: boolean | null;
  user_id: string;
}

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm text-foreground">
        {user ? (
          <div className="flex items-center gap-4">
            Hey, {user.email}!
            <LogoutButton />
          </div>
        ) : (
          <Link
            href="/login"
            className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
          >
            Login
          </Link>
        )}
      </div>
      <div>
        <NewItemBuilder />
        <ItemList />
      </div>
    </div>
  );
}
