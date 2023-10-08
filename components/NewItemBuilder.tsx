"use client";

import { Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";

type Todo = Database["public"]["Tables"]["todos"]["Row"];

export default function NewItemBuilder() {
  const [title, setTitle] = useState<string>("");
  const [isComplete, setIsComplete] = useState<string>("");

  const supabase = createClientComponentClient<Database>();

  async function insert() {
    const { data, error } = await supabase.from("todos").insert({
      is_complete: isComplete === "true" ? true : false,
      title: title,
    });
  }

  return (
    <div className="flex flex-col gap-4">
      <input className="" placeholder="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input
        className=""
        placeholder="is complete"
        type="checkbox"
        value={isComplete}
        onChange={(e) => setIsComplete(e.target.value)}
      />
      <button disabled={title.length === 0} className="" onClick={() => insert()}>
        Insert
      </button>
    </div>
  );
}
