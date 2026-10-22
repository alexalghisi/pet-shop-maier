import { createFileRoute } from "@tanstack/react-router";
import { listProducts } from "@/lib/products.functions";
import { SITE_URL, mediaUrl } from "@/lib/products";
import { GALLERY, byTag, photoAbs } from "@/lib/gallery";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

type Entry = {
  path: string;
  priority: string;
  freq: string;
  images?: { loc: string; caption: string }[];
};

const img = (slugs: { slug: string; alt: string }[]) =>
  slugs.map((p) => ({ loc: photoAbs(p.slug), caption: p.alt }));

const STATIC: Entry[] = [
  { path: "/", priority: "1.0", freq: "daily", images: img(GALLERY.slice(0, 12)) },
  { path: "/pui-brahma", priority: "0.9", freq: "weekly", images: img(byTag("brahma")) },
  { path: "/furaje-man", priority: "0.9", freq: "weekly", images: img(byTag("furaje")) },
  { path: "/oferta-furaje", priority: "0.9", freq: "weekly" },
  { path: "/calculator-furaje", priority: "0.9", freq: "monthly" },
  { path: "/produse", priority: "0.8", freq: "daily" },
  { path: "/galerie", priority: "0.7", freq: "weekly", images: img(GALLERY) },
  { path: "/furaje-vaci-de-lapte", priority: "0.8", freq: "monthly" },
  { path: "/hrana-cai", priority: "0.8", freq: "monthly", images: img(byTag("cai")) },
  { path: "/hrana-prepelite", priority: "0.8", freq: "monthly" },
  { path: "/furaje-gaini", priority: "0.8", freq: "monthly" },
  { path: "/furaje-animale", priority: "0.7", freq: "monthly" },
  { path: "/pet-shop-cluj", priority: "0.7", freq: "monthly" },
  { path: "/hrana-caini", priority: "0.7", freq: "monthly" },
  { path: "/hrana-pisici", priority: "0.7", freq: "monthly" },
  { path: "/nisip-pisici", priority: "0.6", freq: "monthly" },
  { path: "/hrana-porumbei", priority: "0.6", freq: "monthly" },
  { path: "/hrana-iepuri", priority: "0.6", freq: "monthly" },
  { path: "/accesorii-caini", priority: "0.6", freq: "monthly" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const products = await listProducts();
        const today = new Date().toISOString().slice(0, 10);
        const entries: Entry[] = [
          ...STATIC,
          ...products.map((p) => ({
            path: `/produse/${p.slug}`,
            priority: "0.7",
            freq: "weekly",
            images: p.media
              .filter((m) => m.type === "image")
              .map((m) => ({ loc: `${SITE_URL}${mediaUrl(m.path)}`, caption: p.name })),
          })),
        ];
        const body = entries
          .map(
            (e) =>
              `<url><loc>${SITE_URL}${e.path}</loc><lastmod>${today}</lastmod><changefreq>${e.freq}</changefreq><priority>${e.priority}</priority>${(
                e.images ?? []
              )
                .map(
                  (i) =>
                    `<image:image><image:loc>${esc(i.loc)}</image:loc><image:caption>${esc(i.caption)}</image:caption></image:image>`,
                )
                .join("")}</url>`,
          )
          .join("");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${body}</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
