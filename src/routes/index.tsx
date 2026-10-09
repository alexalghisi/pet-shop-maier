import { createFileRoute, Link } from "@tanstack/react-router";
import { Header, Footer, PHONE, PHONE_HREF } from "@/components/site";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ProductCard } from "@/components/ProductCard";
import { productsQuery } from "@/lib/products.queries";
import hero from "@/assets/hero.jpg";
import fbShop from "@/assets/fb-shop.jpg.asset.json";
import fbFuraje from "@/assets/fb-furaje.jpg.asset.json";
import fbGalerie from "@/assets/fb-galerie.jpg.asset.json";

const TITLE = "PetShop Maier Gilău – Hrană și furaje pentru animale, județul Cluj";
const DESC =
  "Pet shop în Gilău, județul Cluj: hrană pentru câini și pisici, furaje, semințe pentru păsări, accesorii și jucării. Branduri premium, prețuri corecte, consiliere prietenoasă.";

export const Route = createFileRoute("/")({
  loader: ({ context }) => context.queryClient.ensureQueryData(productsQuery),
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "pet shop Gilău, petshop județul Cluj, hrană câini, hrană pisici, furaje animale, mâncare animale Cluj, semințe păsări, accesorii animale" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ro_RO" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "PetStore",
          name: "PetShop Maier",
          telephone: "+40758639799",
          description: DESC,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Strada Eroilor 1",
            addressLocality: "Gilău",
            addressRegion: "Cluj",
            addressCountry: "RO",
          },
          areaServed: ["Gilău", "județul Cluj", "Cluj"],
          openingHours: ["Mo-Fr 09:00-19:00", "Sa 09:00-17:00"],
          sameAs: ["https://www.facebook.com/p/PET-SHOP-MAIER-61574444792704/"],
        }),
      },
    ],
  }),
  component: Index,
});

const categories = [
  { to: "/hrana-caini" as const, t: "Hrană pentru câini", d: "Hrană uscată și umedă, diete pentru pui, adulți și seniori, recompense." },
  { to: "/hrana-pisici" as const, t: "Hrană pentru pisici", d: "Granule, conserve, plicuri, nisip de calitate și snacks-uri." },
  { to: "/furaje-animale" as const, t: "Furaje și semințe", d: "Amestecuri pentru păsări, porumbei, rozătoare, iepuri și furaje la sac." },
  { to: undefined, t: "Accesorii și îngrijire", d: "Lese, zgărzi, culcușuri, jucării, șampoane și produse antiparazitare." },
];

const faqs = [
  { q: "Unde se află PetShop Maier?", a: "Ne găsești pe Strada Eroilor 1, în comuna Gilău, județul Cluj." },
  { q: "Ce hrană pentru animale aveți?", a: "Hrană pentru câini și pisici de la branduri cunoscute, furaje și semințe pentru păsări, hrană pentru rozătoare și pești." },
  { q: "Pot comanda telefonic?", a: "Da, sunați-ne și vă pregătim comanda pentru ridicare din magazin." },
];

function Index() {
  const { data: products } = useSuspenseQuery(productsQuery);
  return (
    <main>
      <Header overlay />

      <section className="relative flex min-h-[70vh] items-center py-24">
        <img src={hero} alt="Interiorul pet shop-ului Maier din Gilău cu hrană pentru câini și pisici" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-6 text-primary-foreground">
          <p className="eyebrow">Gilău · județul Cluj</p>
          <h1 className="mt-5 max-w-3xl text-4xl leading-[1.08] font-medium sm:text-5xl md:text-7xl">
            Pet shop în Gilău — hrană și furaje pentru animale
          </h1>
          <p className="mt-6 max-w-xl text-base opacity-90 sm:text-lg">
            Tot ce au nevoie prietenii tăi necuvântători: hrană pentru câini și pisici, semințe pentru păsări, accesorii — cu grijă de cartier.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a href="#contact" className="rounded-md bg-accent px-7 py-3 text-center font-semibold text-accent-foreground shadow-lg transition hover:-translate-y-0.5 hover:opacity-90">Vino în magazin</a>
            <Link to="/produse" className="rounded-md border border-primary-foreground/40 px-7 py-3 text-center font-semibold transition hover:bg-primary-foreground/10">Vezi produsele și prețurile</Link>
          </div>
        </div>
      </section>

      {products.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 pt-20">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl md:text-4xl">Produse noi</h2>
            <Link to="/produse" className="font-semibold text-primary">Toate produsele →</Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {products.slice(0, 8).map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        </section>
      )}

      <section id="produse" className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <p className="eyebrow">Ce găsești la noi</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Mâncare și accesorii pentru animale</h2>
          <div className="ornament mx-auto mt-6" />
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <article key={c.t} className="group rounded-xl border bg-card p-8 shadow-sm transition hover:-translate-y-1 hover:border-gold hover:shadow-xl">
              <div className="ornament" />
              <h3 className="mt-4 text-2xl">{c.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              {c.to && <Link to={c.to} className="mt-4 inline-block text-sm font-semibold text-primary transition group-hover:text-gold">Citește ghidul →</Link>}
            </article>
          ))}
        </div>
      </section>

      <section id="despre" className="bg-secondary py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2">
          <img src={fbShop.url} alt="Raft cu hrană pentru animale, adăpători și hrănitori pentru păsări în PET SHOP MAIER Gilău" loading="lazy" width={726} height={225} className="w-full rounded-lg shadow-xl" />
          <div>
            <p className="eyebrow">Despre noi</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Petshop-ul de cartier în care ai încredere</h2>
            <div className="ornament mt-6" />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              La PetShop Maier din Gilău alegem cu atenție fiecare produs. Te ajutăm să găsești hrana potrivită pentru vârsta, talia și sensibilitățile animalului tău — fie că ai un câine, o pisică, un papagal sau un iepuraș.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              <li>— Branduri de hrană premium și super-premium</li>
              <li>— Furaje și semințe vândute și la kilogram</li>
              <li>— Consiliere sinceră, fără grabă</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-24">
        <p className="eyebrow">Din magazinul nostru</p>
        <h2 className="mt-3 text-4xl">Furaje, păsări de rasă și hrană — la PET SHOP MAIER Gilău</h2>
        <img src={fbGalerie.url} alt="Furaje MAN, Deli Nature HippoX, porumb boabe și păsări Brahma de la PET SHOP MAIER din Gilău" loading="lazy" width={1234} height={610} className="mt-8 w-full rounded-lg shadow-xl" />
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-2">
        <div className="md:order-2">
          <img src={fbFuraje.url} alt="Furaj combinat granulat Novaticom pentru găini ouătoare, sac 20 kg, la PET SHOP MAIER Gilău" loading="lazy" width={726} height={511} className="w-full rounded-lg shadow-xl" />
        </div>
        <div>
          <p className="eyebrow">Întrebări frecvente</p>
          <h2 className="mt-3 text-4xl">Ce ne întreabă clienții</h2>
          <div className="mt-8 divide-y border-y">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl">
                  {f.q}
                  <span className="shrink-0 text-gold transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-primary py-24 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="eyebrow">Te așteptăm</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Vizitează-ne în Gilău</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <div><h3 className="text-2xl">Adresă</h3><p className="mt-2 opacity-80">Strada Eroilor 1, Gilău, județul Cluj</p></div>
            <div><h3 className="text-2xl">Program</h3><p className="mt-2 opacity-80">Luni–Vineri 09:00–19:00<br />Sâmbătă 09:00–17:00<br />Duminică închis</p></div>
            <div><h3 className="text-2xl">Telefon</h3><a href={PHONE_HREF} className="mt-2 block opacity-80 hover:text-gold">{PHONE}</a></div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
