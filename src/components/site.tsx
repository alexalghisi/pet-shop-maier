import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { whatsappLink } from "@/lib/products";
import { Button } from "@/components/ui/button";

export const PHONE = "+40 758 639 799";
export const PHONE_HREF = "tel:+40758639799";
export const FACEBOOK_URL = "https://www.facebook.com/p/PET-SHOP-MAIER-61574444792704/";

const links = [
  { to: "/produse", label: "Produse" },
  { to: "/hrana-caini", label: "Hrană câini" },
  { to: "/hrana-pisici", label: "Hrană pisici" },
  { to: "/furaje-animale", label: "Furaje" },
] as const;

export const GUIDES = [
  { to: "/pet-shop-cluj", label: "Pet shop Cluj" },
  { to: "/hrana-caini", label: "Hrană câini" },
  { to: "/hrana-pisici", label: "Hrană pisici" },
  { to: "/nisip-pisici", label: "Nisip pisici" },
  { to: "/furaje-animale", label: "Furaje animale" },
  { to: "/furaje-gaini", label: "Furaje găini" },
  { to: "/hrana-porumbei", label: "Hrană porumbei" },
  { to: "/hrana-iepuri", label: "Hrană iepuri" },
  { to: "/accesorii-caini", label: "Accesorii câini" },
] as const;
export type GuidePath = (typeof GUIDES)[number]["to"];

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
    <header className={overlay ? "absolute inset-x-0 top-0 z-20 text-primary-foreground" : "border-b border-border bg-background text-foreground"}>
      <div className={overlay ? "hidden bg-foreground/90 text-xs text-primary-foreground sm:block" : "hidden border-b border-border bg-muted text-xs text-muted-foreground sm:block"}>
        <div className="mx-auto flex max-w-6xl justify-between px-6 py-1.5">
          <span>Str. Eroilor 1, Gilău, jud. Cluj</span>
          <span className="flex gap-4"><a href={PHONE_HREF}>📞 {PHONE}</a><a href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp</a><a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">Facebook</a></span>
        </div>
      </div>
      <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4">
        <Link to="/" className="min-w-0 truncate font-serif text-2xl font-semibold tracking-wide">
          PetShop <span className="text-gold">Maier</span>
        </Link>
        <div className="flex items-center gap-3">
        <div className="hidden items-center gap-6 text-sm md:flex">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="font-semibold transition hover:text-gold" activeProps={{ className: "text-gold" }}>{l.label}</Link>
          ))}
        </div>
        <Button
          variant="ghost"
          size="icon"
          type="button"
          aria-label={open ? "Închide meniul" : "Deschide meniul"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
           className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-current/20 md:hidden"
        >
          <span className="relative block h-3.5 w-5">
            <span className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-3 h-0.5 w-5 bg-current transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </span>
        </Button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-border bg-background px-6 py-4 text-foreground md:hidden">
          <div className="flex flex-col gap-4 text-sm">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-1 transition hover:text-gold" activeProps={{ className: "text-gold" }}>{l.label}</Link>
            ))}
            <a href={PHONE_HREF} className="mt-1 font-semibold text-gold">{PHONE}</a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="font-semibold text-gold">WhatsApp</a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-gold">Facebook</a>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted py-10 text-center text-sm text-muted-foreground">
      <p className="font-serif text-2xl font-semibold text-foreground">PetShop <span className="text-primary">Maier</span></p>
      <div className="ornament mx-auto mt-4" />
      <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
        {[{ to: "/produse", label: "Produse" } as const, ...GUIDES].map((l) => <Link key={l.to} to={l.to} className="transition hover:text-gold">{l.label}</Link>)}
      </div>
      <p className="mt-6 px-6">Pet shop Gilău · Str. Eroilor 1, județul Cluj · <a href={PHONE_HREF} className="transition hover:text-gold">{PHONE}</a> · <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="transition hover:text-gold">WhatsApp</a> · <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="transition hover:text-gold">Facebook</a></p>
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
  related: { to: GuidePath; label: string }[];
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
          <h2 className="text-2xl">Găsești totul la PetShop Maier din Gilău</h2>
          <p className="mt-3 text-muted-foreground">
            Vino în magazinul nostru din <Link to="/" className="text-primary underline">Gilău, județul Cluj</Link> sau sună-ne la{" "}
            <a href={PHONE_HREF} className="text-primary underline">{PHONE}</a> și îți spunem ce avem pe stoc și ce ți se potrivește.
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
