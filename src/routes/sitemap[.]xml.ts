import { createFileRoute } from "@tanstack/react-router";
import { listProducts } from "@/lib/products.functions";
import { SITE_URL } from "@/lib/products";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const products = await listProducts();
        const paths = ["/", "/produse", "/hrana-caini", "/hrana-pisici", "/furaje-animale", ...products.map((p) => `/produse/${p.slug}`)];
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths
          .map((p) => `<url><loc>${SITE_URL}${p}</loc></url>`)
          .join("")}</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml" } });
      },
    },
  },
});
