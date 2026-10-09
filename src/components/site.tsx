import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { useCart } from "@/lib/cart";
import { whatsappLink } from "@/lib/products";

export const PHONE = "+40 758 639 799";
export const PHONE_HREF = "tel:+40758639799";

const links = [
  { to: "/produse", label: "Produse" },
  { to: "/hrana-caini", label: "Hrană câini" },
  { to: "/hrana-pisici", label: "Hrană pisici" },
  { to: "/furaje-animale", label: "Furaje" },
] as const;

function CartLink() {
  const { count } = useCart();
  return (
    <Link to="/cos" aria-label="Coș" className="relative grid h-10 w-10 place-items-center rounded-full bg-primary-foreground/15">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6h15l-1.5 9h-12z" /><path d="M6 6 5 3H2" /><circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" /></svg>
      {count > 0 && <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-accent px-1 text-xs font-bold text-accent-foreground">{count}</span>}
    </Link>
  );
}

export function WhatsAppFloat() {
  return (
    <a href={whatsappLink("Bună! Am o întrebare.")} target="_blank" rel="noopener noreferrer" aria-label="Scrie-ne pe WhatsApp" className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-primary-foreground shadow-xl transition hover:scale-110">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l2 1c.3.1.5.2.5.3.1.2.1.6-.1 1.1z"/></svg>
    </a>
  );
}

export function Header({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <header className={overlay ? "absolute inset-x-0 top-0 z-20 text-primary-foreground" : "border-b bg-primary text-primary-foreground"}>
      <div className="hidden bg-foreground/90 text-xs text-primary-foreground sm:block">
        <div className="mx-auto flex max-w-6xl justify-between px-6 py-1.5">
          <span>Str. Eroilor 1, Gilău, jud. Cluj</span>
          <span className="flex gap-4"><a href={PHONE_HREF}>📞 {PHONE}</a><a href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp</a></span>
        </div>
      </div>
      <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4">
        <Link to="/" className="min-w-0 truncate font-serif text-2xl font-semibold tracking-wide">
          PetShop <span className="text-gold">Mayer</span>
        </Link>
        <div className="flex items-center gap-3">
        <div className="hidden items-center gap-6 text-sm md:flex">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="font-semibold transition hover:text-gold" activeProps={{ className: "text-gold" }}>{l.label}</Link>
          ))}
        </div>
        <CartLink />
        <button
          type="button"
          aria-label={open ? "Închide meniul" : "Deschide meniul"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-primary-foreground/30 md:hidden"
        >
          <span className="relative block h-3.5 w-5">
            <span className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-3 h-0.5 w-5 bg-current transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </span>
        </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-primary-foreground/15 bg-primary px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-1 transition hover:text-gold" activeProps={{ className: "text-gold" }}>{l.label}</Link>
            ))}
            <a href={PHONE_HREF} className="mt-1 font-semibold text-gold">{PHONE}</a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="font-semibold text-gold">WhatsApp</a>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary py-12 text-center text-sm text-primary-foreground/70">
      <p className="font-serif text-2xl font-semibold text-primary-foreground">PetShop <span className="text-gold">Mayer</span></p>
      <div className="ornament mx-auto mt-4" />
      <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
        {links.map((l) => <Link key={l.to} to={l.to} className="transition hover:text-gold">{l.label}</Link>)}
      </div>
      <p className="mt-6 px-6">Pet shop Gilău · Str. Eroilor 1, județul Cluj · <a href={PHONE_HREF} className="transition hover:text-gold">{PHONE}</a> · <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="transition hover:text-gold">WhatsApp</a></p>
    </footer>
  );
}

export type GuideSection = { h: string; p: string; list?: string[] };

export function GuidePage(props: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  sections: GuideSection[];
  faqs: { q: string; a: string }[];
  related: { to: "/hrana-caini" | "/hrana-pisici" | "/furaje-animale"; label: string }[];
}) {
  return (
    <main>
      <Header />
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 md:grid-cols-2 md:gap-12 md:py-20">
          <div>
            <p className="eyebrow">{props.eyebrow}</p>
            <h1 className="mt-4 text-4xl leading-tight md:text-6xl">{props.title}</h1>
            <div className="ornament mt-6" />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{props.intro}</p>
            <a href={PHONE_HREF} className="mt-8 inline-block rounded-md bg-primary px-7 py-3 font-semibold text-primary-foreground shadow-lg transition hover:-translate-y-0.5 hover:opacity-90">Sună: {PHONE}</a>
          </div>
          <img src={props.image} alt={props.imageAlt} width={1024} height={1024} className="w-full rounded-xl shadow-2xl ring-1 ring-border" />
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        {props.sections.map((s) => (
          <section key={s.h} className="mb-12">
            <h2 className="text-3xl">{s.h}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{s.p}</p>
            {s.list && (
              <ul className="mt-4 space-y-2">
                {s.list.map((i) => <li key={i} className="border-l-2 border-gold pl-4">{i}</li>)}
              </ul>
            )}
          </section>
        ))}

        <section className="mb-12">
          <h2 className="text-3xl">Întrebări frecvente</h2>
          <div className="mt-6 divide-y border-y">
            {props.faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl">
                  {f.q}
                  <span className="shrink-0 text-gold transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <aside className="rounded-xl border bg-card p-8 shadow-lg">
          <h2 className="text-2xl">Găsești totul la PetShop Mayer din Gilău</h2>
          <p className="mt-3 text-muted-foreground">
            Vino în magazinul nostru din <Link to="/" className="text-primary underline">Gilău, județul Cluj</Link> sau sună-ne la{" "}
            <a href={PHONE_HREF} className="text-primary underline">{PHONE}</a> și îți pregătim comanda.
          </p>
          <p className="mt-4 text-sm">
            Citește și:{" "}
            {props.related.map((r, i) => (
              <span key={r.to}>{i > 0 && " · "}<Link to={r.to} className="text-primary underline">{r.label}</Link></span>
            ))}
          </p>
        </aside>
      </article>
      <Footer />
    </main>
  );
}

export function guideHead(title: string, desc: string, path: string, faqs: { q: string; a: string }[]) {
  return {
    meta: [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:type", content: "article" },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: path }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }),
      },
    ],
  };
}

export function Shell({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
