import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import food from "@/assets/food.jpg";
import accessories from "@/assets/accessories.jpg";

const TITLE = "PetShop Mayer Giulești – Hrană și furaje pentru animale, Sector 6 București";
const DESC =
  "Pet shop în Giulești, Sector 6: hrană pentru câini și pisici, furaje, semințe pentru păsări, accesorii și jucării. Branduri premium, prețuri corecte, consiliere prietenoasă.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "pet shop Giulești, petshop sector 6, hrană câini, hrană pisici, furaje animale, mâncare animale București, semințe păsări, accesorii animale" },
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
          name: "PetShop Mayer",
          description: DESC,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Calea Giulești",
            addressLocality: "București",
            addressRegion: "Sector 6",
            addressCountry: "RO",
          },
          areaServed: ["Giulești", "Sector 6", "București"],
          openingHours: ["Mo-Sa 09:00-20:00", "Su 09:00-14:00"],
        }),
      },
    ],
  }),
  component: Index,
});

const categories = [
  { t: "Hrană pentru câini", d: "Hrană uscată și umedă, diete pentru pui, adulți și seniori, recompense." },
  { t: "Hrană pentru pisici", d: "Granule, conserve, plicuri, nisip de calitate și snacks-uri." },
  { t: "Furaje și semințe", d: "Amestecuri pentru păsări, porumbei, rozătoare, iepuri și furaje la sac." },
  { t: "Accesorii și îngrijire", d: "Lese, zgărzi, culcușuri, jucării, șampoane și produse antiparazitare." },
];

const faqs = [
  { q: "Unde se află PetShop Mayer?", a: "Suntem în cartierul Giulești, Sector 6, București, pe Calea Giulești." },
  { q: "Ce hrană pentru animale aveți?", a: "Hrană pentru câini și pisici de la branduri cunoscute, furaje și semințe pentru păsări, hrană pentru rozătoare și pești." },
  { q: "Pot comanda telefonic?", a: "Da, sunați-ne și vă pregătim comanda pentru ridicare din magazin." },
];

function Index() {
  return (
    <main>
      <header className="absolute inset-x-0 top-0 z-20">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-primary-foreground">
          <a href="#" className="font-serif text-2xl font-semibold">PetShop Mayer</a>
          <div className="hidden gap-8 text-sm md:flex">
            <a href="#produse" className="hover:text-gold">Produse</a>
            <a href="#despre" className="hover:text-gold">Despre noi</a>
            <a href="#contact" className="hover:text-gold">Contact</a>
          </div>
        </nav>
      </header>

      <section className="relative flex min-h-[92vh] items-center">
        <img src={hero} alt="Interiorul pet shop-ului Mayer din Giulești cu hrană pentru câini și pisici" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-6 text-primary-foreground">
          <p className="eyebrow">Giulești · Sector 6 · București</p>
          <h1 className="mt-5 max-w-3xl text-5xl leading-[1.05] font-medium md:text-7xl">
            Pet shop în Giulești — hrană și furaje pentru animale
          </h1>
          <p className="mt-6 max-w-xl text-lg opacity-90">
            Tot ce au nevoie prietenii tăi necuvântători: hrană pentru câini și pisici, semințe pentru păsări, accesorii — cu grijă de cartier.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-md bg-accent px-7 py-3 font-semibold text-accent-foreground transition hover:opacity-90">Vino în magazin</a>
            <a href="#produse" className="rounded-md border border-primary-foreground/40 px-7 py-3 font-semibold transition hover:bg-primary-foreground/10">Vezi produsele</a>
          </div>
        </div>
      </section>

      <section id="produse" className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <p className="eyebrow">Ce găsești la noi</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Mâncare și accesorii pentru animale</h2>
          <div className="ornament mx-auto mt-6" />
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <article key={c.t} className="bg-card p-8">
              <h3 className="text-2xl">{c.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="despre" className="bg-secondary py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2">
          <img src={food} alt="Hrană premium pentru câini, pisici și semințe pentru păsări" loading="lazy" width={1024} height={1024} className="rounded-lg shadow-xl" />
          <div>
            <p className="eyebrow">Despre noi</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Petshop-ul de cartier în care ai încredere</h2>
            <div className="ornament mt-6" />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              La PetShop Mayer din Giulești alegem cu atenție fiecare produs. Te ajutăm să găsești hrana potrivită pentru vârsta, talia și sensibilitățile animalului tău — fie că ai un câine, o pisică, un papagal sau un iepuraș.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              <li>— Branduri de hrană premium și super-premium</li>
              <li>— Furaje și semințe vândute și la kilogram</li>
              <li>— Consiliere sinceră, fără grabă</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-2">
        <div className="md:order-2">
          <img src={accessories} alt="Accesorii pentru animale: lese, zgărzi, jucării și perii" loading="lazy" width={1024} height={1024} className="rounded-lg shadow-xl" />
        </div>
        <div>
          <p className="eyebrow">Întrebări frecvente</p>
          <h2 className="mt-3 text-4xl">Ce ne întreabă clienții</h2>
          <div className="mt-8 divide-y border-y">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="cursor-pointer list-none font-serif text-xl">{f.q}</summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-primary py-24 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="eyebrow">Te așteptăm</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Vizitează-ne în Giulești</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <div><h3 className="text-2xl">Adresă</h3><p className="mt-2 opacity-80">Calea Giulești, Sector 6, București</p></div>
            <div><h3 className="text-2xl">Program</h3><p className="mt-2 opacity-80">Luni–Sâmbătă 09:00–20:00<br />Duminică 09:00–14:00</p></div>
            <div><h3 className="text-2xl">Telefon</h3><p className="mt-2 opacity-80">07xx xxx xxx</p></div>
          </div>
        </div>
      </section>

      <footer className="bg-primary py-8 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} PetShop Mayer · Pet shop Giulești, Sector 6, București
      </footer>
    </main>
  );
}
