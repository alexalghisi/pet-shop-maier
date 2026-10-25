import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { useState } from "react";
import { AdsterraSlot } from "@/components/ads";
import { Header, Footer } from "@/components/site";
import { getProduct } from "@/lib/products.functions";
import { seoHead, breadcrumbLd } from "@/lib/seo";
import { formatPrice, mediaUrl, categoryLabel, whatsappLink, SITE_URL } from "@/lib/products";

const productQuery = (slug: string) =>
  queryOptions({ queryKey: ["product", slug], queryFn: () => getProduct({ data: { slug } }) });

export const Route = createFileRoute("/produse/$slug")({
  loader: async ({ context, params }) => {
    const p = await context.queryClient.ensureQueryData(productQuery(params.slug));
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData: p, params }) => {
    if (!p) return seoHead({ title: "Produs negăsit | PET SHOP MAIER", description: "Produsul nu a fost găsit.", path: `/produse/${params.slug}`, noindex: true });
    const title = `${p.seo_title || p.name} – ${formatPrice(p.price)} | PET SHOP MAIER Gilău`;
    const desc = `${(p.description || p.name).replace(/\s+/g, " ").slice(0, 140)} Preț ${formatPrice(p.price)}, Gilău, jud. Cluj.`;
    const imgs = p.media.filter((m) => m.type === "image").map((m) => `${SITE_URL}${mediaUrl(m.path)}`);
    const path = `/produse/${params.slug}`;
    return seoHead({
      title,
      description: desc,
      path,
      type: "product",
      image: imgs[0],
      ld: [
        {
          "@context": "https://schema.org",
          "@type": "Product",
          name: p.name,
          description: p.description,
          image: imgs,
          sku: p.id,
          category: categoryLabel(p.category),
          offers: {
            "@type": "Offer",
            price: p.price.toFixed(2),
            priceCurrency: "RON",
            availability: p.in_stock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
            itemCondition: "https://schema.org/NewCondition",
            url: `${SITE_URL}${path}`,
            seller: { "@id": `${SITE_URL}/#store` },
          },
        },
        breadcrumbLd([{ name: "Produse", path: "/produse" }, { name: p.name, path }]),
      ],
    });
  },
  notFoundComponent: ProductNotFound,
  component: ProductPage,
});

function ProductNotFound() {
  return (
    <main>
      <Header />
      <div className="py-24 text-center">
        <h1 className="text-3xl">Produsul nu a fost găsit</h1>
        <Link to="/produse" className="mt-4 inline-block text-primary underline">Vezi toate produsele</Link>
      </div>
    </main>
  );
}

function ProductPage() {
  const { slug } = Route.useParams();
  const { data: p } = useSuspenseQuery(productQuery(slug));
  const [active, setActive] = useState(0);
  if (!p) return <ProductNotFound />;
  const m = p.media[active];
  return (
    <main>
      <Header />
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-2">
        <div>
          <div className="aspect-square overflow-hidden rounded-xl border bg-muted">
            {m ? (
              m.type === "video" ? (
                <video src={mediaUrl(m.path)} controls className="h-full w-full object-contain" />
              ) : (
                <img src={mediaUrl(m.path)} alt={p.name} className="h-full w-full object-cover" />
              )
            ) : (
              <div className="grid h-full place-items-center text-muted-foreground">Fără poză</div>
            )}
          </div>
          {p.media.length > 1 && (
            <div className="mt-3 grid grid-cols-5 gap-2">
              {p.media.map((x, i) => (
                <button key={x.path} onClick={() => setActive(i)} className={`aspect-square overflow-hidden rounded-lg border-2 ${i === active ? "border-primary" : "border-transparent"}`}>
                  {x.type === "video" ? <div className="grid h-full place-items-center bg-muted text-xs">▶ Video</div> : <img src={mediaUrl(x.path)} alt="" className="h-full w-full object-cover" />}
                </button>
              ))}
            </div>
          )}
        </div>
        <div>
          <Link to="/produse" className="text-sm text-muted-foreground hover:text-primary">← {categoryLabel(p.category)}</Link>
          <h1 className="mt-2 text-3xl md:text-4xl">{p.name}</h1>
          <p className="mt-4 text-3xl font-bold text-primary">{formatPrice(p.price)}</p>
          <p className={`mt-2 text-sm font-semibold ${p.in_stock ? "text-primary" : "text-destructive"}`}>{p.in_stock ? "✓ În stoc" : "Stoc epuizat"}</p>
          <a href={whatsappLink(`produsul ${p.name}.`)} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-whatsapp px-6 py-3 font-semibold text-primary-foreground hover:opacity-90">
            Întreabă pe WhatsApp despre acest produs
          </a>
          <p className="mt-3 text-sm text-muted-foreground">Vino în magazin la Str. Eroilor 1, Gilău, sau sună-ne pentru disponibilitate.</p>
          <AdsterraSlot kind="native" />
          <div className="mt-8 whitespace-pre-line leading-relaxed text-muted-foreground">{p.description}</div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
