import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { CATEGORIES, formatPrice, mediaUrl, slugify, type MediaItem, type Product } from "@/lib/products";

export const Route = createFileRoute("/admin")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Administrare – PetShop Maier" },
      { name: "description", content: "Panou de administrare produse." },
      { property: "og:title", content: "Administrare – PetShop Maier" },
      { property: "og:description", content: "Panou de administrare produse." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminPage,
});

const input = "w-full rounded-lg border bg-background px-3 py-2";

function AdminPage() {
  const [session, setSession] = useState<"loading" | "out" | "in">("loading");
  const [isAdmin, setIsAdmin] = useState(false);
  const check = async () => {
    const { data } = await supabase.auth.getUser();
    if (!data.user) return setSession("out");
    const { data: ok } = await supabase.rpc("has_role", { _user_id: data.user.id, _role: "admin" });
    setIsAdmin(!!ok);
    setSession("in");
  };
  useEffect(() => {
    check();
    const { data } = supabase.auth.onAuthStateChange((e) => {
      if (e === "SIGNED_IN" || e === "SIGNED_OUT") check();
    });
    return () => data.subscription.unsubscribe();
  }, []);

  if (session === "loading") return <p className="p-10">Se încarcă…</p>;
  if (session === "out") return <Login />;
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl">Administrare produse</h1>
        <div className="flex gap-4 text-sm">
          <Link to="/produse" className="underline">Vezi magazinul</Link>
          <button onClick={() => supabase.auth.signOut()} className="underline">Ieșire</button>
        </div>
      </div>
      {isAdmin ? <ProductsAdmin /> : <p className="mt-8 text-destructive">Contul tău nu are drept de administrator.</p>}
    </main>
  );
}

function Login() {
  const [mode, setMode] = useState<"in" | "up">("in");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [msg, setMsg] = useState("");
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setMsg("");
    if (mode === "in") {
      const { error } = await supabase.auth.signInWithPassword({ email, password: pw });
      if (error) setMsg("Email sau parolă greșite.");
    } else {
      const { error } = await supabase.auth.signUp({ email, password: pw, options: { emailRedirectTo: `${window.location.origin}/admin` } });
      setMsg(error ? error.message : "Verifică emailul și apasă pe linkul de confirmare.");
    }
  };
  return (
    <main className="mx-auto max-w-sm px-6 py-20">
      <h1 className="text-3xl">{mode === "in" ? "Autentificare admin" : "Creează contul de admin"}</h1>
      <form onSubmit={submit} className="mt-6 space-y-3">
        <input className={input} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input className={input} type="password" placeholder="Parolă" value={pw} onChange={(e) => setPw(e.target.value)} required minLength={6} />
        <button className="w-full rounded-lg bg-primary py-2 font-semibold text-primary-foreground">{mode === "in" ? "Intră" : "Creează cont"}</button>
      </form>
      {msg && <p className="mt-3 text-sm">{msg}</p>}
    </main>
  );
}

type Draft = { id?: string; name: string; seo_title: string; description: string; price: string; category: string; in_stock: boolean; media: MediaItem[] };
const empty: Draft = { name: "", seo_title: "", description: "", price: "", category: "caini", in_stock: true, media: [] };

function ProductsAdmin() {
  const [items, setItems] = useState<Product[]>([]);
  const [draft, setDraft] = useState<Draft | null>(null);
  const load = async () => {
    const { data } = await supabase.from("products").select("*").order("created_at", { ascending: false });
    setItems((data ?? []).map((p) => ({ ...p, price: Number(p.price) })) as unknown as Product[]);
  };
  useEffect(() => { load(); }, []);

  const del = async (p: Product) => {
    if (!confirm(`Ștergi „${p.name}”?`)) return;
    await supabase.from("products").delete().eq("id", p.id);
    if (p.media.length) await supabase.storage.from("product-media").remove(p.media.map((m) => m.path));
    load();
  };

  return (
    <>
      <button onClick={() => setDraft({ ...empty })} className="mt-6 rounded-lg bg-accent px-5 py-2 font-semibold text-accent-foreground">+ Adaugă produs</button>
      {draft && <Editor draft={draft} onClose={() => setDraft(null)} onSaved={() => { setDraft(null); load(); }} />}
      <ul className="mt-6 divide-y rounded-xl border">
        {items.length === 0 && <li className="p-6 text-muted-foreground">Niciun produs încă.</li>}
        {items.map((p) => (
          <li key={p.id} className="flex items-center gap-4 p-4">
            <div className="h-14 w-14 shrink-0 overflow-hidden rounded bg-muted">{p.media[0]?.type === "image" && <img src={mediaUrl(p.media[0].path)} alt="" className="h-full w-full object-cover" />}</div>
            <div className="flex-1"><p className="font-semibold">{p.name}</p><p className="text-sm text-muted-foreground">{formatPrice(p.price)} · {p.in_stock ? "în stoc" : "epuizat"}</p></div>
            <button className="text-sm underline" onClick={() => setDraft({ id: p.id, name: p.name, seo_title: p.seo_title ?? "", description: p.description, price: String(p.price), category: p.category, in_stock: p.in_stock, media: p.media })}>Editează</button>
            <button className="text-sm text-destructive underline" onClick={() => del(p)}>Șterge</button>
          </li>
        ))}
      </ul>
    </>
  );
}

function Editor({ draft, onClose, onSaved }: { draft: Draft; onClose: () => void; onSaved: () => void }) {
  const [d, setD] = useState(draft);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const set = (k: keyof Draft, v: unknown) => setD((x) => ({ ...x, [k]: v }));

  const upload = async (files: FileList | null) => {
    if (!files) return;
    const room = 10 - d.media.length;
    const list = Array.from(files).slice(0, room);
    setBusy(true);
    const added: MediaItem[] = [];
    for (const f of list) {
      const path = `${crypto.randomUUID()}-${slugify(f.name.replace(/\.[^.]+$/, ""))}.${f.name.split(".").pop()}`;
      const { error } = await supabase.storage.from("product-media").upload(path, f, { contentType: f.type });
      if (error) { setErr(error.message); continue; }
      added.push({ path, type: f.type.startsWith("video") ? "video" : "image" });
    }
    setD((x) => ({ ...x, media: [...x.media, ...added] }));
    setBusy(false);
  };

  const save = async (e: FormEvent) => {
    e.preventDefault();
    setErr("");
    const price = Number(d.price.replace(",", "."));
    if (!d.name.trim() || !(price >= 0)) return setErr("Completează denumirea și un preț valid.");
    setBusy(true);
    const row = { name: d.name.trim(), seo_title: d.seo_title.trim() || null, description: d.description, price, category: d.category, in_stock: d.in_stock, media: d.media, updated_at: new Date().toISOString() };
    const { error } = d.id
      ? await supabase.from("products").update(row).eq("id", d.id)
      : await supabase.from("products").insert({ ...row, slug: `${slugify(d.name)}-${Math.random().toString(36).slice(2, 6)}` });
    setBusy(false);
    if (error) return setErr(error.message);
    onSaved();
  };

  return (
    <form onSubmit={save} className="mt-6 space-y-4 rounded-xl border bg-secondary p-6">
      <h2 className="text-2xl">{d.id ? "Editează produsul" : "Produs nou"}</h2>
      <label className="block text-sm font-semibold">Denumire<input className={input} value={d.name} onChange={(e) => set("name", e.target.value)} required /></label>
      <label className="block text-sm font-semibold">Titlu pentru Google (opțional)<input className={input} value={d.seo_title} onChange={(e) => set("seo_title", e.target.value)} placeholder="ex: Hrană uscată câini adulți 15 kg" /></label>
      <label className="block text-sm font-semibold">Descriere<textarea className={input} rows={5} value={d.description} onChange={(e) => set("description", e.target.value)} /></label>
      <div className="grid gap-4 sm:grid-cols-3">
        <label className="block text-sm font-semibold">Preț (lei)<input className={input} inputMode="decimal" value={d.price} onChange={(e) => set("price", e.target.value)} required /></label>
        <label className="block text-sm font-semibold">Categorie
          <select className={input} value={d.category} onChange={(e) => set("category", e.target.value)}>
            {CATEGORIES.map((c) => <option key={c.id} value={c.id}>{c.label}</option>)}
          </select>
        </label>
        <label className="flex items-center gap-2 pt-6 text-sm font-semibold"><input type="checkbox" checked={d.in_stock} onChange={(e) => set("in_stock", e.target.checked)} /> În stoc</label>
      </div>
      <div>
        <p className="text-sm font-semibold">Poze și video ({d.media.length}/10)</p>
        <div className="mt-2 grid grid-cols-5 gap-2">
          {d.media.map((m, i) => (
            <div key={m.path} className="relative aspect-square overflow-hidden rounded-lg border bg-muted">
              {m.type === "video" ? <div className="grid h-full place-items-center text-xs">▶ Video</div> : <img src={mediaUrl(m.path)} alt="" className="h-full w-full object-cover" />}
              <button type="button" onClick={() => set("media", d.media.filter((_, j) => j !== i))} className="absolute right-1 top-1 rounded bg-background px-1.5 text-xs">✕</button>
            </div>
          ))}
        </div>
        {d.media.length < 10 && <input type="file" accept="image/*,video/*" multiple className="mt-3 text-sm" onChange={(e) => upload(e.target.files)} />}
      </div>
      {err && <p className="text-sm text-destructive">{err}</p>}
      <div className="flex gap-3">
        <button disabled={busy} className="rounded-lg bg-primary px-6 py-2 font-semibold text-primary-foreground disabled:opacity-50">{busy ? "Se salvează…" : "Salvează"}</button>
        <button type="button" onClick={onClose} className="rounded-lg border px-6 py-2">Renunță</button>
      </div>
    </form>
  );
}
