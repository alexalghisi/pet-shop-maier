import { createFileRoute, Link } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Header, Footer } from "@/components/site";
import { ProductCard } from "@/components/ProductCard";
import { productsQuery } from "@/lib/products.queries";
import { CATEGORIES, whatsappLink } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, PackageOpen } from "lucide-react";
import hero from "@/assets/hero.jpg";
import fbShop from "@/assets/fb-shop.jpg.asset.json";


const TITLE = "Produse pentru animale cu prețuri – PetShop Maier Gilău";
const DESC = "Hrană pentru câini și pisici, furaje, semințe și accesorii cu prețuri afișate. Comandă online de la PetShop Maier, Gilău, județul Cluj.";

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
    <main className="min-h-screen">
      <Header />
      <section className="relative isolate flex min-h-72 items-center overflow-hidden py-12 sm:min-h-80">
        <img src={hero} alt="Hrană și accesorii pentru câini și pisici" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
        <div className="hero-overlay absolute inset-0 -z-10" />
        <div className="mx-auto w-full max-w-6xl px-6 text-primary-foreground">
          <Link to="/" className="text-sm underline-offset-4 hover:underline">PetShop Maier · Gilău</Link>
          <h1 className="mt-4 max-w-xl text-4xl leading-tight md:text-5xl">Produse pentru animale</h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed">Hrană, furaje și accesorii pentru cei de care ai grijă.</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-10 sm:py-12">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-5">
          <h2 className="text-2xl">Alege categoria</h2>
          <span className="text-sm text-muted-foreground">{data.length > 0 ? `${list.length} produse` : "Magazinul din Str. Eroilor 1"}</span>
        </div>
        <div className="mt-6 flex flex-wrap gap-2" aria-label="Categorii de produse">
          {[{ id: "toate", label: "Toate" }, ...CATEGORIES].map((c) => (
            <Button
              key={c.id}
              variant={cat === c.id ? "default" : "secondary"}
              aria-pressed={cat === c.id}
              onClick={() => setCat(c.id)}
              className="h-10 px-5"
            >
              {c.label}
            </Button>
          ))}
        </div>
        {list.length === 0 ? (
          <div className="mt-10 grid items-center gap-8 border-t border-border pt-10 md:grid-cols-2 md:gap-12">
            <img src={fbShop.url} alt="Rafturi cu hrană și accesorii din magazinul PetShop Maier din Gilău" width={726} height={225} className="w-full rounded-lg object-contain" />
            <div>
              <PackageOpen className="size-7 text-primary" aria-hidden="true" />
              <h3 className="mt-4 text-2xl">{data.length === 0 ? "Catalogul online se pregătește" : "Momentan nu sunt produse în această categorie"}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{data.length === 0 ? "Până apar produsele și prețurile aici, ne găsești în magazinul din Gilău. Scrie-ne despre hrana sau accesoriile pe care le cauți." : "Vezi celelalte categorii sau întreabă-ne despre produsul pe care îl cauți."}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="lg"><a href={whatsappLink("Bună! Aș dori informații despre produsele disponibile în magazin.")} target="_blank" rel="noopener noreferrer"><MessageCircle />Întreabă pe WhatsApp</a></Button>
                <Button asChild variant="secondary" size="lg"><Link to="/">Pagina principală<ArrowRight /></Link></Button>
              </div>
            </div>
          </div>
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
