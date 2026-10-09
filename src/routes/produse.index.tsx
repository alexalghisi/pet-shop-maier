import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Header, Footer } from "@/components/site";
import { ProductCard } from "@/components/ProductCard";
import { productsQuery } from "@/lib/products.queries";
import { CATEGORIES } from "@/lib/products";


const TITLE = "Produse pentru animale cu prețuri – PetShop Mayer Gilău";
const DESC = "Hrană pentru câini și pisici, furaje, semințe și accesorii cu prețuri afișate. Comandă online de la PetShop Mayer, Gilău, județul Cluj.";

export const Route = createFileRoute("/produse/")({
  loader: ({ context }) => context.queryClient.ensureQueryData(productsQuery),
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/produse" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/produse" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const { data } = useSuspenseQuery(productsQuery);
  const [cat, setCat] = useState<string>("toate");
  const list = cat === "toate" ? data : data.filter((p) => p.category === cat);
  return (
    <main>
      <Header />
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-4xl md:text-5xl">Produse pentru animale</h1>
        <p className="mt-3 text-muted-foreground">Prețuri actualizate, ridicare din magazinul din Gilău sau comandă online.</p>
        <div className="mt-8 flex flex-wrap gap-2">
          {[{ id: "toate", label: "Toate" }, ...CATEGORIES].map((c) => (
            <button
              key={c.id}
              onClick={() => setCat(c.id)}
              className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition ${cat === c.id ? "border-primary bg-primary text-primary-foreground" : "hover:border-primary"}`}
            >
              {c.label}
            </button>
          ))}
        </div>
        {list.length === 0 ? (
          <p className="mt-16 text-center text-muted-foreground">Produsele vor apărea aici în curând.</p>
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {list.map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}
