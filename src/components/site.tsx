import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const PHONE = "+40 758 639 799";
export const PHONE_HREF = "tel:+40758639799";

const links = [
  { to: "/hrana-caini", label: "Hrană câini" },
  { to: "/hrana-pisici", label: "Hrană pisici" },
  { to: "/furaje-animale", label: "Furaje" },
] as const;

export function Header({ overlay = false }: { overlay?: boolean }) {
  return (
    <header className={overlay ? "absolute inset-x-0 top-0 z-20 text-primary-foreground" : "bg-primary text-primary-foreground"}>
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6">
        <Link to="/" className="font-serif text-2xl font-semibold">PetShop Mayer</Link>
        <div className="flex flex-wrap gap-5 text-sm">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-gold" activeProps={{ className: "text-gold" }}>{l.label}</Link>
          ))}
          <a href={PHONE_HREF} className="hidden font-semibold text-gold sm:inline">{PHONE}</a>
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary py-10 text-center text-sm text-primary-foreground/70">
      <div className="mb-4 flex flex-wrap justify-center gap-6">
        {links.map((l) => <Link key={l.to} to={l.to} className="hover:text-gold">{l.label}</Link>)}
      </div>
      <p>PetShop Mayer · Pet shop Giulești, Sector 6, București · <a href={PHONE_HREF} className="hover:text-gold">{PHONE}</a></p>
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
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2">
          <div>
            <p className="eyebrow">{props.eyebrow}</p>
            <h1 className="mt-4 text-4xl leading-tight md:text-6xl">{props.title}</h1>
            <div className="ornament mt-6" />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{props.intro}</p>
            <a href={PHONE_HREF} className="mt-8 inline-block rounded-md bg-primary px-7 py-3 font-semibold text-primary-foreground hover:opacity-90">Sună: {PHONE}</a>
          </div>
          <img src={props.image} alt={props.imageAlt} width={1024} height={1024} className="rounded-lg shadow-xl" />
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-20">
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
              <details key={f.q} className="py-5">
                <summary className="cursor-pointer list-none font-serif text-xl">{f.q}</summary>
                <p className="mt-3 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <aside className="rounded-lg border bg-card p-8">
          <h2 className="text-2xl">Găsești totul la PetShop Mayer din Giulești</h2>
          <p className="mt-3 text-muted-foreground">
            Vino în magazinul nostru din <Link to="/" className="text-primary underline">Giulești, Sector 6</Link> sau sună-ne la{" "}
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
