import { Link } from "@tanstack/react-router";
import { formatPrice, mediaUrl, categoryLabel, whatsappLink, type Product } from "@/lib/products";

export function ProductCard({ p }: { p: Product }) {
  const img = p.media.find((m) => m.type === "image");
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <Link to="/produse/$slug" params={{ slug: p.slug }} className="block aspect-square overflow-hidden bg-muted">
        {img ? (
          <img src={mediaUrl(img.path)} alt={p.name} width={400} height={400} loading="lazy" decoding="async" className="h-full w-full object-cover transition group-hover:scale-105" />
        ) : (
          <div className="grid h-full place-items-center text-sm text-muted-foreground">Fără poză</div>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs text-muted-foreground">{categoryLabel(p.category)}</p>
        <Link to="/produse/$slug" params={{ slug: p.slug }} className="mt-1 font-serif text-lg leading-snug hover:text-primary">{p.name}</Link>
        <div className="mt-auto flex items-center justify-between gap-2 pt-4">
          <span className="text-xl font-bold text-primary">{formatPrice(p.price)}</span>
          <a
            href={whatsappLink(`produsul ${p.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-accent-foreground transition hover:opacity-90"
          >
            {p.in_stock ? "Întreabă" : "Stoc epuizat"}
          </a>
        </div>
      </div>
    </article>
  );
}
