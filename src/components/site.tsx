import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

export const PHONE = "+40 758 639 799";
export const PHONE_HREF = "tel:+40758639799";

const links = [
  { to: "/hrana-caini", label: "Hrană câini" },
  { to: "/hrana-pisici", label: "Hrană pisici" },
  { to: "/furaje-animale", label: "Furaje" },
] as const;

export function Header({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <header className={overlay ? "absolute inset-x-0 top-0 z-20 text-primary-foreground" : "border-b bg-primary text-primary-foreground"}>
      <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-5">
        <Link to="/" className="min-w-0 truncate font-serif text-2xl font-semibold tracking-wide">
          PetShop <span className="text-gold">Mayer</span>
        </Link>
        <div className="hidden items-center gap-7 text-sm md:flex">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="transition hover:text-gold" activeProps={{ className: "text-gold" }}>{l.label}</Link>
          ))}
          <a href={PHONE_HREF} className="rounded-full border border-gold/60 px-4 py-1.5 font-semibold text-gold transition hover:bg-gold hover:text-accent-foreground">{PHONE}</a>
        </div>
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
      </nav>
      {open && (
        <div className="border-t border-primary-foreground/15 bg-primary px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-1 transition hover:text-gold" activeProps={{ className: "text-gold" }}>{l.label}</Link>
            ))}
            <a href={PHONE_HREF} className="mt-1 font-semibold text-gold">{PHONE}</a>
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
      <p className="mt-6 px-6">Pet shop Gilău · Str. Eroilor 1, județul Cluj · <a href={PHONE_HREF} className="transition hover:text-gold">{PHONE}</a></p>
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
