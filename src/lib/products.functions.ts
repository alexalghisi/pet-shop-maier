import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import type { Product } from "./products";

function publicClient() {
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
  return createClient<Database>(process.env["SUPABASE_URL"]!, key, {
    auth: { persistSession: false, autoRefreshToken: false, storage: undefined },
    global: {
      fetch: (input, init) => {
        const h = new Headers(init?.headers);
        if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
        h.set("apikey", key);
        return fetch(input, { ...init, headers: h });
      },
    },
  });
}

const COLS = "id, slug, name, seo_title, description, price, category, in_stock, media";

// Short in-memory cache per server instance: public pages render without waiting on
// the database for every request. Admin edits show up within PRODUCTS_TTL_MS.
const PRODUCTS_TTL_MS = 60_000;
const STALE_WAIT_MS = 1_500;
let productsCache: { at: number; data: Product[] } | null = null;
let productsInflight: Promise<Product[] | null> | null = null;

async function fetchProducts(): Promise<Product[] | null> {
  const { data, error } = await publicClient().from("products").select(COLS).order("created_at", { ascending: false });
  if (error) {
    console.error(error);
    return null;
  }
  const list = (data ?? []).map((p) => ({ ...p, price: Number(p.price) })) as unknown as Product[];
  productsCache = { at: Date.now(), data: list };
  return list;
}

function refreshProducts() {
  productsInflight ??= fetchProducts().finally(() => {
    productsInflight = null;
  });
  return productsInflight;
}

export const listProducts = createServerFn({ method: "GET" }).handler(async () => {
  const cached = productsCache;
  if (cached && Date.now() - cached.at < PRODUCTS_TTL_MS) return cached.data;
  const fresh = refreshProducts();
  if (!cached) return (await fresh) ?? ([] as Product[]);
  // A stale copy exists: never block the page for long on a slow database.
  const timeout = new Promise<null>((r) => setTimeout(() => r(null), STALE_WAIT_MS));
  return (await Promise.race([fresh, timeout])) ?? cached.data;
});

export const getProduct = createServerFn({ method: "GET" })
  .inputValidator((d: { slug: string }) => ({ slug: String(d.slug).slice(0, 200) }))
  .handler(async ({ data }) => {
    const { data: p } = await publicClient().from("products").select(COLS).eq("slug", data.slug).maybeSingle();
    return p ? ({ ...p, price: Number(p.price) } as unknown as Product) : null;
  });
