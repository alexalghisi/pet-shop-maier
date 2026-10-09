import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Header, Footer } from "@/components/site";
import { getProduct } from "@/lib/products.functions";
import { formatPrice, mediaUrl, categoryLabel, whatsappLink, SITE_URL } from "@/lib/products";
import { useCart } from "@/lib/cart";

const productQuery = (slug: string) =>
  queryOptions({ queryKey: ["product", slug], queryFn: () => getProduct({ data: { slug } }) });

export const Route = createFileRoute("/produse/$slug")({
  loader: async ({ context, params }) => {
    const p = await context.queryClient.ensureQueryData(productQuery(params.slug));
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData: p, params }) => {
    if (!p) return { meta: [{ title: "Produs negăsit" }, { name: "robots", content: "noindex" }] };
    const title = `${p.seo_title || p.name} – ${formatPrice(p.price)} | PetShop Mayer Gilău`;
    const desc = (p.description || p.name).slice(0, 155);
    const img = p.media.find((m) => m.type === "image");
    const imgUrl = img ? `${SITE_URL}${mediaUrl(img.path)}` : undefined;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/produse/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
        ...(imgUrl ? [{ property: "og:image", content: imgUrl }, { name: "twitter:image", content: imgUrl }] : []),
      ],
      links: [{ rel: "canonical", href: `/produse/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: p.name,
            description: p.description,
            image: p.media.filter((m) => m.type === "image").map((m) => `${SITE_URL}${mediaUrl(m.path)}`),
            category: categoryLabel(p.category),
            brand: { "@type": "Brand", name: "PetShop Mayer" },
            offers: {
              "@type": "Offer",
              price: p.price.toFixed(2),
              priceCurrency: "RON",
              availability: p.in_stock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
              url: `${SITE_URL}/produse/${params.slug}`,
            },
          }),
        },
      ],
    };
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
  const cart = useCart();
  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  if (!p) return <ProductNotFound />;
  const m = p.media[active];
  const firstImg = p.media.find((x) => x.type === "image");
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
          <div className="mt-6 flex items-center gap-3">
            <div className="flex items-center rounded-lg border">
              <button className="px-3 py-2" onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
              <span className="w-8 text-center">{qty}</span>
              <button className="px-3 py-2" onClick={() => setQty(qty + 1)}>+</button>
            </div>
            <button
              disabled={!p.in_stock}
              onClick={() => {
                cart.add({ id: p.id, slug: p.slug, name: p.name, price: p.price, image: firstImg?.path }, qty);
                setAdded(true);
              }}
              className="flex-1 rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground transition hover:opacity-90 disabled:opacity-40"
            >
              Adaugă în coș
            </button>
          </div>
          {added && <p className="mt-3 text-sm">Adăugat! <Link to="/cos" className="font-semibold text-primary underline">Vezi coșul</Link></p>}
          <a href={whatsappLink(`Bună! Sunt interesat de: ${p.name}`)} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-lg border border-primary px-4 py-2 text-sm font-semibold text-primary hover:bg-secondary">
            Întreabă pe WhatsApp despre acest produs
          </a>
          <div className="mt-8 whitespace-pre-line leading-relaxed text-muted-foreground">{p.description}</div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
