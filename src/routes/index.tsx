import { createFileRoute, Link } from "@tanstack/react-router";
import { Header, Footer, PHONE, PHONE_HREF, WhatsAppButton } from "@/components/site";
import { ProductCard } from "@/components/ProductCard";
import { Gallery } from "@/components/Gallery";
import { AdsterraSlot } from "@/components/ads";
import { PromoVideo, promoVideoLd } from "@/components/PromoVideo";
import { productsQuery } from "@/lib/products.queries";
import { GALLERY, photoSrc, photoThumb } from "@/lib/gallery";
import { BUSINESS, MAPS_URL, seoHead, localBusinessLd, faqLd } from "@/lib/seo";
import { SITE_URL } from "@/lib/products";

const TITLE = "Pet shop și furaje Gilău, Cluj – pui Brahma, Furaje MAN, hrană câini | PET SHOP MAIER";
const DESC =
  "PET SHOP MAIER Gilău: furaje (tărâțe 40 lei/20 kg, furaj combinat 60 lei/30 kg, Furaje MAN, porumb), pui și ouă Brahma vaccinați, hrană pentru cai, câini și pisici. Deschis 7 zile din 7, la 15 minute de Cluj-Napoca.";

const faqs = [
  { q: "Unde se află PET SHOP MAIER?", a: "Pe Strada Eroilor 1, în comuna Gilău, județul Cluj – la aproximativ 15 minute de Cluj-Napoca și 10 minute de Florești." },
  { q: "Care este programul?", a: "Luni–Vineri 09:00–19:00, Sâmbătă–Duminică 09:00–17:00. Suntem deschiși 7 zile din 7." },
  { q: "Ce vindeți?", a: "Furaje (tărâțe, furaj combinat, porumb boabe, Furaje MAN pentru găini, pui, curcani, prepelițe, pești și vaci de lapte), hrană pentru cai Deli Nature HippoX, hrană pentru câini și pisici, accesorii, plus pui și ouă Brahma de rasă." },
  { q: "Pot comanda pe WhatsApp?", a: "Da. Scrie-ne pe WhatsApp la 0758 639 799 ce îți trebuie și îți pregătim comanda pentru ridicare din Gilău." },
  { q: "Aveți pui Brahma de vânzare?", a: "Da, pui Brahma Columbia galben-negru și potârniche de 2–3 luni, vaccinați complet, și ouă fertile pentru incubat." },
];

export const Route = createFileRoute("/")({
  loader: ({ context }) => context.queryClient.ensureQueryData(productsQuery),
  head: () =>
    seoHead({
      title: TITLE,
      description: DESC,
      path: "/",
      keywords: "pet shop gilau, furaje gilau, furaje cluj, pui brahma de vanzare, furaje man, tarate pret, furaj combinat, hrana caini cluj, hrana cai, petshop judetul cluj",
      ld: [
        localBusinessLd(),
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          url: `${SITE_URL}/`,
          name: "PET SHOP MAIER",
          inLanguage: "ro-RO",
          publisher: { "@id": `${SITE_URL}/#store` },
        },
        faqLd(faqs),
        promoVideoLd(),
      ],
    }),
  component: Index,
});

const categories = [
  { to: "/pui-brahma" as const, t: "Pui și ouă Brahma", d: "Columbia galben-negru și potârniche, vaccinați. Campioni la expoziții.", img: "pui-brahma-2-3-luni-vaccinati" },
  { to: "/furaje-man" as const, t: "Furaje MAN", d: "Găini ouătoare, pui, curcani, prepelițe, pești – saci de 5 și 10 kg.", img: "furaje-man-10kg-gaini-ouatoare" },
  { to: "/oferta-furaje" as const, t: "Tărâțe și furaj combinat", d: "Tărâțe 40 lei/20 kg, furaj combinat 60 lei/30 kg.", img: "porumb-boabe-30kg-calitate-superioara" },
  { to: "/furaje-vaci-de-lapte" as const, t: "Furaje vaci de lapte", d: "Furaj granulat cu 22% proteină pentru mai mult lapte.", img: "furaje-man-vaci-de-lapte" },
  { to: "/hrana-cai" as const, t: "Hrană pentru cai", d: "Deli Nature HippoX pentru cai de agrement și de muncă.", img: "deli-nature-hippox-hrana-cai" },
  { to: "/hrana-caini" as const, t: "Hrană câini și pisici", d: "Kudo, Wildfull și alte branduri premium.", img: "hrana-premium-caini-kudo-wildfull-pet-shop-maier" },
];

const featured = GALLERY.filter((p) => !p.slug.startsWith("oferta")).slice(0, 12);

function Index() {
  const products = Route.useLoaderData();
  return (
    <main>
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 md:grid-cols-[1.15fr_1fr] md:py-20">
          <div>
            <p className="inline-flex rounded-full bg-white/10 px-4 py-1 text-sm font-bold">📍 Gilău · județul Cluj · deschis 7 zile din 7</p>
            <h1 className="mt-5 text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
              Pet shop și <span className="text-accent">furaje</span> în Gilău
            </h1>
            <p className="mt-6 max-w-xl text-lg opacity-90">
              Furaje la sac pentru toată curtea, pui Brahma de rasă vaccinați și hrană pentru câini, pisici și cai — la 15 minute de Cluj-Napoca.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsAppButton className="text-lg">Comandă pe WhatsApp</WhatsAppButton>
              <Link to="/calculator-furaje" className="rounded-full bg-accent px-6 py-3 text-center text-lg font-bold text-accent-foreground shadow-lg transition hover:-translate-y-0.5">🧮 Calculează furajele</Link>
            </div>
            <ul className="mt-8 grid max-w-lg grid-cols-2 gap-3 text-sm font-semibold">
              <li className="rounded-xl bg-white/10 px-3 py-2">✔ Tărâțe 2 lei/kg</li>
              <li className="rounded-xl bg-white/10 px-3 py-2">✔ Furaje MAN</li>
              <li className="rounded-xl bg-white/10 px-3 py-2">✔ Pui Brahma premiați</li>
              <li className="rounded-xl bg-white/10 px-3 py-2">✔ Comenzi pe WhatsApp</li>
            </ul>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <img src={photoSrc("pui-si-oua-brahma-columbia-galben-negru-de-vanzare", true)} alt="Pui și ouă Brahma de vânzare la PET SHOP MAIER Gilău" width={640} height={960} fetchPriority="high" className="w-full rounded-3xl shadow-2xl ring-4 ring-white/20" />
            <img src={photoSrc("furaje-man-10kg-gaini-ouatoare", true)} alt="Furaje MAN 10 kg pentru găini ouătoare" width={640} height={853} loading="lazy" decoding="async" className="absolute -bottom-6 -left-8 hidden w-40 rotate-[-6deg] rounded-2xl shadow-2xl ring-4 ring-white sm:block" />
          </div>
        </div>
      </section>

      <PromoVideo />

      <AdsterraSlot />

      {/* OFERTA */}
      <section className="mx-auto max-w-6xl px-6 pt-16">
        <div className="grid items-center gap-6 rounded-3xl bg-secondary p-6 md:grid-cols-[1fr_auto_auto] md:p-8">
          <div>
            <p className="eyebrow">Ofertă la furaje</p>
            <h2 className="mt-2 text-3xl">Prețuri bune, la sac</h2>
            <p className="mt-2 text-muted-foreground">Tărâțe și furaj combinat măcinat universal pentru găini, curcani, rațe, porci și iepuri.</p>
          </div>
          <PriceCard t="Tărâțe" p="40 lei" u="sac 20 kg" />
          <PriceCard t="Furaj combinat" p="60 lei" u="sac 30 kg" />
        </div>
        <p className="mt-3 text-right"><Link to="/oferta-furaje" className="font-bold text-primary">Detalii ofertă →</Link></p>
      </section>

      {/* CATEGORII */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="eyebrow">Ce găsești la noi</p>
        <h2 className="mt-2 text-4xl md:text-5xl">Furaje, păsări de rasă și hrană</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link key={c.to} to={c.to} className="group flex gap-4 rounded-2xl border bg-card p-4 shadow-sm transition hover:-translate-y-1 hover:border-gold hover:shadow-xl">
              <div className="grid h-28 w-24 shrink-0 place-items-center overflow-hidden rounded-xl bg-muted">
                <img src={photoThumb(c.img)} alt={c.t} loading="lazy" decoding="async" className="max-h-full max-w-full object-contain" />
              </div>
              <div>
                <h3 className="text-xl">{c.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
                <span className="mt-2 inline-block text-sm font-bold text-primary group-hover:text-gold">Vezi →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="bg-accent text-accent-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-6 px-6 py-12 md:grid-cols-[1fr_auto]">
          <div>
            <h2 className="text-3xl md:text-4xl">Cât mănâncă o găină pe zi? Câți saci îți trebuie?</h2>
            <p className="mt-3 text-lg">Folosește calculatorul nostru gratuit: alegi animalul și numărul, afli kilogramele, sacii și costul — și comanzi direct pe WhatsApp.</p>
          </div>
          <Link to="/calculator-furaje" className="rounded-full bg-primary px-8 py-4 text-center text-lg font-bold text-primary-foreground shadow-lg transition hover:-translate-y-0.5">Deschide calculatorul</Link>
        </div>
      </section>

      {products.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 pt-16">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl md:text-4xl">Produse noi</h2>
            <Link to="/produse" className="font-semibold text-primary">Toate produsele →</Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {products.slice(0, 8).map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        </section>
      )}

      {/* GALERIE */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="eyebrow">Din magazinul nostru</p>
        <h2 className="mt-2 text-4xl">Furaje, păsări de rasă și hrană — la PET SHOP MAIER Gilău</h2>
        <div className="mt-8"><Gallery photos={featured} /></div>
        <p className="mt-6 text-center"><Link to="/galerie" className="inline-block rounded-full border-2 border-primary px-6 py-3 font-bold text-primary transition hover:bg-primary hover:text-primary-foreground">Vezi toate pozele ({GALLERY.length})</Link></p>
      </section>

      {/* DESPRE + FAQ */}
      <section className="bg-secondary py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="eyebrow">Despre noi</p>
            <h2 className="mt-2 text-4xl">Magazinul de cartier pentru gospodari și iubitori de animale</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              La PET SHOP MAIER din Gilău găsești hrană de calitate pentru animalele de companie și de fermă. Creștem noi înșine găini Brahma premiate la expoziții, așa că știm din experiență ce furaj merge și ce nu. Îți dăm un sfat sincer, fără grabă.
            </p>
            <ul className="mt-6 space-y-2 font-semibold">
              <li>✔ Furaje la sac și la saci mici</li>
              <li>✔ Hrană premium pentru câini și pisici</li>
              <li>✔ Pui Brahma vaccinați și ouă de incubat</li>
              <li>✔ Comenzi rapide pe WhatsApp</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Întrebări frecvente</p>
            <h2 className="mt-2 text-4xl">Ce ne întreabă clienții</h2>
            <div className="mt-6 divide-y border-y">
              {faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl font-bold">
                    {f.q}
                    <span className="shrink-0 text-gold transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
          <div>
            <p className="eyebrow">Te așteptăm</p>
            <h2 className="mt-2 text-4xl md:text-5xl">Vizitează-ne în Gilău</h2>
            <dl className="mt-8 space-y-5 text-lg">
              <div><dt className="font-bold">Adresă</dt><dd className="opacity-90">{BUSINESS.street}, {BUSINESS.city} {BUSINESS.postal}, județul Cluj</dd></div>
              <div><dt className="font-bold">Program</dt><dd className="opacity-90">{BUSINESS.hoursText[0]}<br />{BUSINESS.hoursText[1]}</dd></div>
              <div><dt className="font-bold">Telefon</dt><dd><a href={PHONE_HREF} className="opacity-90 hover:text-accent">{PHONE}</a></dd></div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton>Scrie-ne pe WhatsApp</WhatsAppButton>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-6 py-3 font-bold text-primary">Traseu Google Maps</a>
            </div>
          </div>
          <iframe
            title="Harta PET SHOP MAIER Gilău"
            src="https://www.google.com/maps?q=Strada%20Eroilor%201%2C%20Gil%C4%83u%2C%20Cluj&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-80 w-full rounded-3xl border-0 shadow-2xl md:h-full md:min-h-80"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}

function PriceCard({ t, p, u }: { t: string; p: string; u: string }) {
  return (
    <div className="rounded-2xl bg-card px-6 py-4 text-center shadow ring-1 ring-border">
      <p className="text-sm font-semibold text-muted-foreground">{t}</p>
      <p className="font-serif text-3xl font-extrabold text-primary">{p}</p>
      <p className="text-xs text-muted-foreground">{u}</p>
    </div>
  );
}
