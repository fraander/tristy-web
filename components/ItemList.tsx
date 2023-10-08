"use client";

import { Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { createClient } from "@supabase/supabase-js";
import { useState, useEffect } from "react";

type Todo = Database["public"]["Tables"]["todos"]["Row"];

export default function ItemList() {


  return <pre>{JSON.stringify(todos, null, 2)}</pre>;
}
