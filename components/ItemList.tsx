"use client";

import { Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { createClient } from "@supabase/supabase-js";
import { useState, useEffect } from "react";

type Todo = Database["public"]["Tables"]["todos"]["Row"];

export default function ItemList() {
  const supabase = createClientComponentClient<Database>();

  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const getTodos = async () => {
      // This assumes you have a `todos` table in Supabase. Check out
      // the `Create Table and seed with data` section of the README 👇
      // https://github.com/vercel/next.js/blob/canary/examples/with-supabase/README.md
      const { data } = await supabase.from("todos").select();
      if (data) {
        setTodos(data);
      }
    };

    getTodos();
  }, [supabase, setTodos]);

  return <pre>{JSON.stringify(todos, null, 2)}</pre>;
}
