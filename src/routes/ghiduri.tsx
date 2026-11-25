import { createFileRoute, Link } from "@tanstack/react-router";
import { ARTICLES, GUIDES, Breadcrumbs, Footer, Header } from "@/components/site";
import { seoHead, breadcrumbLd, localBusinessLd, abs } from "@/lib/seo";

const TITLE = "Ghiduri: hrănirea și îngrijirea animalelor | PET SHOP MAIER";
const DESC =
  "Ghiduri practice scrise de crescători din Gilău: hrănirea găinilor ouătoare, creșterea puilor de o zi, alegerea hranei pentru câini, depozitarea furajelor, furajarea iarna și necesarul lunar.";

const SKIP = new Set(["/galerie", "/calculator-furaje", "/oferta-furaje"]);
const TOPICS = GUIDES.filter((g) => !SKIP.has(g.to));

export const Route = createFileRoute("/ghiduri")({
  head: () =>
    seoHead({
      title: TITLE,
      description: DESC,
      path: "/ghiduri",
      ld: [
        breadcrumbLd([{ name: "Ghiduri", path: "/ghiduri" }]),
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: TITLE,
          description: DESC,
          url: abs("/ghiduri"),
          hasPart: ARTICLES.map((a) => ({
            "@type": "Article",
            headline: a.label,
            description: a.blurb,
            url: abs(a.to),
          })),
        },
        localBusinessLd(),
      ],
    }),
  component: GuidesHub,
});

function GuidesHub() {
  return (
    <main>
      <Header />
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <Breadcrumbs items={[{ name: "Ghiduri" }]} />
          <p className="eyebrow mt-6">Ghiduri</p>
          <h1 className="mt-3 text-4xl leading-tight md:text-5xl">
            Ghiduri pentru hrănirea și îngrijirea animalelor
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Răspunsuri pe larg la întrebările pe care le auzim zilnic în magazin. Sunt scrise pentru
            gospodăria obișnuită, cu cantități concrete și exemple calculate, de oameni care cresc
            ei înșiși păsări. Află mai multe{" "}
            <Link to="/despre-noi" className="font-semibold text-primary underline">
              despre noi
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl">Ghiduri pas cu pas</h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a) => (
            <li key={a.to}>
              <Link
                to={a.to}
                className="block h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-gold hover:shadow-md"
              >
                <h3 className="font-serif text-xl font-bold">{a.label}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{a.blurb}</p>
                <span className="mt-4 inline-block font-semibold text-primary">
                  Citește ghidul →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-3xl">Pe categorii de animale și produse</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
          Fiecare pagină de mai jos explică ce hrană se potrivește, în ce cantitate și ce găsești în
          magazinul din Gilău.
        </p>
        <ul className="mt-6 grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
          {TOPICS.map((g) => (
            <li key={g.to} className="border-l-4 border-gold pl-4">
              <Link to={g.to} className="font-semibold hover:text-primary hover:underline">
                {g.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-10 rounded-2xl bg-primary p-6 text-primary-foreground">
          Vrei doar cifrele? Încearcă{" "}
          <Link to="/calculator-furaje" className="font-bold underline">
            calculatorul de furaje
          </Link>
          : alegi animalul, numărul și perioada și afli câți saci îți trebuie.
        </p>
      </section>
      <Footer />
    </main>
  );
}
