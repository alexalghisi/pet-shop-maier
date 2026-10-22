import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header, Footer, Breadcrumbs, WhatsAppButton } from "@/components/site";
import { Gallery } from "@/components/Gallery";
import { GALLERY, photoAbs, type GalleryTag } from "@/lib/gallery";
import { seoHead, breadcrumbLd, localBusinessLd } from "@/lib/seo";
import { SITE_URL } from "@/lib/products";

const TITLE = "Galerie foto PET SHOP MAIER Gilău – pui Brahma, Furaje MAN, hrană cai";
const DESC =
  "Poze reale de la PET SHOP MAIER din Gilău: găini și pui Brahma premiați la expoziții, Furaje MAN, porumb boabe, Deli Nature HippoX și hrană pentru câini.";

export const Route = createFileRoute("/galerie")({
  head: () =>
    seoHead({
      title: TITLE,
      description: DESC,
      path: "/galerie",
      ld: [
        {
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: "Galerie PET SHOP MAIER",
          url: `${SITE_URL}/galerie`,
          image: GALLERY.map((p) => ({
            "@type": "ImageObject",
            contentUrl: photoAbs(p.slug),
            caption: p.alt,
            width: p.w,
            height: p.h,
          })),
        },
        breadcrumbLd([{ name: "Galerie", path: "/galerie" }]),
        localBusinessLd(),
      ],
    }),
  component: GaleriePage,
});

const FILTERS: { id: GalleryTag | "toate"; label: string }[] = [
  { id: "toate", label: "Toate" },
  { id: "brahma", label: "Brahma" },
  { id: "furaje", label: "Furaje" },
  { id: "cai", label: "Cai" },
  { id: "caini", label: "Câini" },
];

function GaleriePage() {
  const [f, setF] = useState<GalleryTag | "toate">("toate");
  const photos = f === "toate" ? GALLERY : GALLERY.filter((p) => p.tags.includes(f));
  return (
    <main>
      <Header />
      <section className="mx-auto max-w-6xl px-6 py-12">
        <Breadcrumbs items={[{ name: "Galerie" }]} />
        <h1 className="mt-6 text-4xl md:text-5xl">
          Galerie foto – din magazin, din curte și de la expoziții
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Poze reale de pe pagina noastră de Facebook. Apasă pe o poză ca să o vezi mare.
        </p>
        <div className="mt-8 flex flex-wrap gap-2" role="tablist">
          {FILTERS.map((x) => (
            <button
              key={x.id}
              role="tab"
              aria-selected={f === x.id}
              onClick={() => setF(x.id)}
              className={`rounded-full px-5 py-2 font-bold transition ${f === x.id ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-secondary"}`}
            >
              {x.label}
            </button>
          ))}
        </div>
        <div className="mt-8">
          <Gallery key={f} photos={photos} />
        </div>
        <div className="mt-10 text-center">
          <WhatsAppButton interest="produsele din galerie.">
            Întreabă de un produs pe WhatsApp
          </WhatsAppButton>
        </div>
      </section>
      <Footer />
    </main>
  );
}
