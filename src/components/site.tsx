import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { whatsappLink } from "@/lib/products";
import { BUSINESS, MAPS_URL, seoHead, breadcrumbLd, faqLd, localBusinessLd } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { AdsterraSlot } from "@/components/ads";
import { Gallery } from "@/components/Gallery";
import type { GalleryPhoto } from "@/lib/gallery";

export const PHONE = "0758 639 799";
export const PHONE_HREF = "tel:+40758639799";
export const FACEBOOK_URL = BUSINESS.facebook;

const links = [
  { to: "/pui-brahma", label: "Pui Brahma" },
  { to: "/furaje-man", label: "Furaje" },
  { to: "/calculator-furaje", label: "Calculator" },
  { to: "/produse", label: "Produse" },
  { to: "/galerie", label: "Galerie" },
] as const;

export const GUIDES = [
  { to: "/pui-brahma", label: "Pui și ouă Brahma" },
  { to: "/furaje-man", label: "Furaje MAN" },
  { to: "/oferta-furaje", label: "Ofertă tărâțe și furaj combinat" },
  { to: "/calculator-furaje", label: "Calculator furaje" },
  { to: "/hrana-cai", label: "Hrană cai HippoX" },
  { to: "/furaje-vaci-de-lapte", label: "Furaje vaci de lapte" },
  { to: "/hrana-prepelite", label: "Hrană prepelițe" },
  { to: "/furaje-gaini", label: "Furaje găini" },
  { to: "/furaje-animale", label: "Furaje animale" },
  { to: "/hrana-porumbei", label: "Hrană porumbei" },
  { to: "/hrana-iepuri", label: "Hrană iepuri" },
  { to: "/hrana-caini", label: "Hrană câini" },
  { to: "/hrana-pisici", label: "Hrană pisici" },
  { to: "/nisip-pisici", label: "Nisip pisici" },
  { to: "/accesorii-caini", label: "Accesorii câini" },
  { to: "/pet-shop-cluj", label: "Pet shop Cluj" },
  { to: "/galerie", label: "Galerie foto" },
] as const;
export type GuidePath = (typeof GUIDES)[number]["to"];

const WaIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l2 1c.3.1.5.2.5.3.1.2.1.6-.1 1.1z" /></svg>
);

export function WhatsAppButton({ interest, children, className = "" }: { interest?: string; children: ReactNode; className?: string }) {
  return (
    <a href={whatsappLink(interest)} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:brightness-105 ${className}`}>
      <WaIcon size={20} />
      {children}
    </a>
  );
}

export function WhatsAppFloat() {
  return (
    <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Scrie-ne pe WhatsApp" className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-xl ring-4 ring-white/70 transition hover:scale-110">
      <WaIcon size={28} />
    </a>
  );
}

export function Header({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <header className={overlay ? "absolute inset-x-0 top-0 z-20 text-white" : "sticky top-0 z-40 border-b border-border bg-background/95 text-foreground backdrop-blur"}>
      <div className="hidden bg-primary text-xs text-primary-foreground sm:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-1.5">
          <span>📍 {BUSINESS.street}, {BUSINESS.city}, jud. Cluj · {BUSINESS.hoursText[0]} · {BUSINESS.hoursText[1]}</span>
          <span className="flex gap-4 font-semibold"><a href={PHONE_HREF}>📞 {PHONE}</a><a href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp</a><a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">Facebook</a></span>
        </div>
      </div>
      <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4" aria-label="Navigare principală">
        <Link to="/" className="flex min-w-0 items-center gap-2 font-serif text-2xl font-extrabold tracking-tight">
          <span aria-hidden="true">🐾</span>
          <span className="truncate">PET SHOP <span className="text-gold">MAIER</span></span>
        </Link>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-6 text-sm md:flex">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="font-bold transition hover:text-gold" activeProps={{ className: "text-gold" }}>{l.label}</Link>
            ))}
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="rounded-full bg-whatsapp px-4 py-2 font-bold text-white shadow hover:brightness-105">Comandă</a>
          </div>
          <Button variant="ghost" size="icon" type="button" aria-label={open ? "Închide meniul" : "Deschide meniul"} aria-expanded={open} onClick={() => setOpen((v) => !v)} className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-current/20 md:hidden">
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
          <div className="flex flex-col gap-3 text-base">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-1 font-semibold transition hover:text-gold" activeProps={{ className: "text-gold" }}>{l.label}</Link>
            ))}
            <a href={PHONE_HREF} className="mt-1 font-bold text-primary">📞 {PHONE}</a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="font-bold text-primary">WhatsApp</a>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <>
    <AdsterraSlot />
    <footer className="bg-foreground pt-14 pb-24 text-sm text-white/75">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl font-extrabold text-white">🐾 PET SHOP <span className="text-gold">MAIER</span></p>
          <p className="mt-3 leading-relaxed">Pet shop și magazin de furaje în Gilău, județul Cluj: hrană pentru câini și pisici, Furaje MAN, porumb, tărâțe, hrană pentru cai, pui și ouă Brahma de rasă.</p>
        </div>
        <address className="not-italic leading-relaxed">
          <p className="font-bold text-white">Contact</p>
          <p className="mt-2">{BUSINESS.street}, {BUSINESS.city} {BUSINESS.postal}, jud. Cluj</p>
          <p><a href={PHONE_HREF} className="hover:text-gold">{PHONE}</a> · <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-gold">WhatsApp</a> · <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold">Facebook</a></p>
          <p className="mt-2">{BUSINESS.hoursText.join(" · ")}</p>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block font-semibold text-gold">Vezi pe Google Maps →</a>
        </address>
        <div>
          <p className="font-bold text-white">Ghiduri și categorii</p>
          <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1">
            {GUIDES.map((l) => <li key={l.to}><Link to={l.to} className="hover:text-gold">{l.label}</Link></li>)}
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl border-t border-white/10 px-6 pt-6 text-xs">© {new Date().getFullYear()} PET SHOP MAIER · Pet shop Gilău · Furaje Gilău · Livrăm în Gilău, Florești, Cluj-Napoca și împrejurimi</p>
    </footer>
    </>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; path?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1 opacity-80">
        <li><Link to="/" className="hover:underline">Acasă</Link></li>
        {items.map((it) => (
          <li key={it.name} className="flex items-center gap-1"><span aria-hidden="true">/</span>{it.path ? <a href={it.path} className="hover:underline">{it.name}</a> : <span>{it.name}</span>}</li>
        ))}
      </ol>
    </nav>
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
  crumb?: string;
  waInterest?: string;
  photos?: GalleryPhoto[];
  priceBox?: { label: string; price: string; unit: string }[];
}) {
  return (
    <main>
      <Header />
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-12 md:grid-cols-2 md:gap-12 md:py-16">
          <div>
            <Breadcrumbs items={[{ name: props.crumb ?? props.eyebrow }]} />
            <p className="eyebrow mt-6">{props.eyebrow}</p>
            <h1 className="mt-3 text-4xl leading-tight md:text-5xl">{props.title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{props.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton interest={props.waInterest ?? `${(props.crumb ?? props.eyebrow).toLowerCase()}.`}>Întreabă pe WhatsApp</WhatsAppButton>
              <a href={PHONE_HREF} className="inline-flex items-center rounded-full border-2 border-primary px-6 py-3 font-bold text-primary transition hover:bg-primary hover:text-primary-foreground">Sună: {PHONE}</a>
            </div>
          </div>
          <img src={props.image} alt={props.imageAlt} className="mx-auto max-h-[520px] w-auto rounded-2xl object-contain shadow-2xl ring-1 ring-border" />
        </div>
      </section>

      {props.priceBox && (
        <section className="mx-auto max-w-6xl px-6 pt-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {props.priceBox.map((p) => (
              <div key={p.label} className="rounded-2xl border-2 border-gold/40 bg-card p-6 shadow-sm">
                <p className="font-semibold text-muted-foreground">{p.label}</p>
                <p className="mt-2 font-serif text-4xl font-extrabold text-primary">{p.price}</p>
                <p className="text-sm text-muted-foreground">{p.unit}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <article className="mx-auto max-w-3xl px-6 py-14 md:py-16">
        {props.sections.map((s, index) => (
          <div key={s.h}>
          <section key={s.h} className="mb-12">
            <h2 className="text-3xl">{s.h}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{s.p}</p>
            {s.list && (
              <ul className="mt-4 space-y-2">
                {s.list.map((i) => <li key={i} className="border-l-4 border-gold pl-4">{i}</li>)}
              </ul>
            )}
          </section>
          {index === Math.max(0, Math.floor(props.sections.length / 2) - 1) && <AdsterraSlot kind="native" />}
          </div>
        ))}

        {props.photos && props.photos.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl">Poze reale din magazin</h2>
            <div className="mt-6"><Gallery photos={props.photos} columns="columns-2 sm:columns-3" /></div>
          </section>
        )}

        <section className="mb-12">
          <h2 className="text-3xl">Întrebări frecvente</h2>
          <div className="mt-6 divide-y border-y">
            {props.faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl font-bold">
                  {f.q}
                  <span className="shrink-0 text-gold transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <aside className="rounded-2xl bg-primary p-8 text-primary-foreground shadow-lg">
          <h2 className="text-2xl">Găsești totul la PET SHOP MAIER din Gilău</h2>
          <p className="mt-3 opacity-90">
            Vino la {BUSINESS.street}, <Link to="/" className="underline">Gilău, județul Cluj</Link>, sau scrie-ne și îți spunem ce avem pe stoc. Cât ai nevoie? Încearcă <Link to="/calculator-furaje" className="font-bold underline">calculatorul de furaje</Link>.
          </p>
          <p className="mt-4 text-sm">
            Citește și:{" "}
            {props.related.map((r, i) => (
              <span key={r.to}>{i > 0 && " · "}<Link to={r.to} className="font-semibold underline">{r.label}</Link></span>
            ))}
          </p>
        </aside>
      </article>
      <Footer />
    </main>
  );
}

export function guideHead(title: string, desc: string, path: string, faqs: { q: string; a: string }[], opts: { crumb?: string; image?: string; keywords?: string } = {}) {
  return seoHead({
    title,
    description: desc,
    path,
    type: "article",
    image: opts.image,
    keywords: opts.keywords,
    ld: [faqLd(faqs), breadcrumbLd([{ name: opts.crumb ?? title.split(" – ")[0] ?? title, path }]), localBusinessLd()],
  });
}

export function Shell({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
