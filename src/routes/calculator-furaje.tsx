import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Header, Footer, Breadcrumbs, WhatsAppButton } from "@/components/site";
import { seoHead, breadcrumbLd, faqLd, localBusinessLd } from "@/lib/seo";
import { SITE_URL } from "@/lib/products";

type Animal = { id: string; label: string; gPerDay: number; note: string; perKg?: boolean };

// Consum mediu de nutreț combinat / concentrat pe cap de animal (valori orientative din practica zootehnică).
const ANIMALS: Animal[] = [
  { id: "gaini", label: "Găini ouătoare", gPerDay: 120, note: "110–130 g/zi pe găină adultă" },
  {
    id: "brahma",
    label: "Găini Brahma (rasă mare)",
    gPerDay: 150,
    note: "rasă grea: 140–170 g/zi",
  },
  {
    id: "pui-carne",
    label: "Pui de carne (medie 0–7 săpt.)",
    gPerDay: 100,
    note: "crește de la 20 g la 200 g/zi",
  },
  { id: "curcani", label: "Curcani", gPerDay: 280, note: "250–350 g/zi la adult" },
  { id: "rate", label: "Rațe", gPerDay: 170, note: "150–200 g/zi" },
  { id: "gaste", label: "Gâște", gPerDay: 250, note: "plus pășune" },
  { id: "prepelite", label: "Prepelițe", gPerDay: 30, note: "25–35 g/zi" },
  { id: "porumbei", label: "Porumbei", gPerDay: 40, note: "35–50 g/zi amestec semințe" },
  { id: "iepuri", label: "Iepuri", gPerDay: 130, note: "concentrat, plus fân la discreție" },
  {
    id: "porci",
    label: "Porci la îngrășat",
    gPerDay: 2500,
    note: "2–3 kg/zi în funcție de greutate",
  },
  {
    id: "caine",
    label: "Câine (hrană uscată)",
    gPerDay: 0,
    note: "calculat după greutate",
    perKg: true,
  },
];

type Feed = { id: string; label: string; sackKg: number; pricePerSack?: number };
const FEEDS: Feed[] = [
  {
    id: "combinat",
    label: "Furaj combinat măcinat universal (sac 30 kg)",
    sackKg: 30,
    pricePerSack: 60,
  },
  { id: "tarate", label: "Tărâțe (sac 20 kg)", sackKg: 20, pricePerSack: 40 },
  { id: "man10", label: "Furaje MAN (sac 10 kg)", sackKg: 10 },
  { id: "man5", label: "Furaje MAN (sac 5 kg)", sackKg: 5 },
  { id: "porumb", label: "Porumb boabe (sac 30 kg)", sackKg: 30 },
];

const faqs = [
  {
    q: "Cât mănâncă o găină pe zi?",
    a: "O găină ouătoare adultă mănâncă în medie 110–130 g de nutreț combinat pe zi, adică aproximativ 3,6 kg pe lună. Rasele mari, ca Brahma, ajung la 140–170 g/zi.",
  },
  {
    q: "Câte kilograme de furaj trebuie pentru 10 găini pe lună?",
    a: "Aproximativ 36 kg pe lună (10 × 120 g × 30 de zile) – puțin peste un sac de 30 kg de furaj combinat.",
  },
  {
    q: "Cât mănâncă un curcan pe zi?",
    a: "Un curcan adult consumă 250–350 g de furaj pe zi, în funcție de greutate și sex.",
  },
  {
    q: "Cât mănâncă o prepeliță pe zi?",
    a: "O prepeliță adultă consumă 25–35 g de nutreț combinat pe zi.",
  },
  {
    q: "Cât de exact este calculatorul?",
    a: "Valorile sunt orientative, bazate pe consumul mediu din practică. Consumul real variază cu vârsta, rasa, sezonul și cât pășunează animalele.",
  },
];

const TITLE =
  "Calculator furaje – cât mănâncă o găină pe zi, curcan, prepeliță, porc | PET SHOP MAIER";
const DESC =
  "Calculator gratuit de furaje: află câte kilograme și câți saci îți trebuie pentru găini, curcani, rațe, prepelițe, iepuri sau porci, plus costul estimat. Comanzi direct pe WhatsApp.";

export const Route = createFileRoute("/calculator-furaje")({
  head: () =>
    seoHead({
      title: TITLE,
      description: DESC,
      path: "/calculator-furaje",
      keywords:
        "calculator furaje, cat mananca o gaina pe zi, cat furaj pentru gaini, consum furaj curcani, cat mananca o prepelita, ratie furaj porci",
      ld: [
        {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Calculator furaje PET SHOP MAIER",
          url: `${SITE_URL}/calculator-furaje`,
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "Any",
          inLanguage: "ro",
          offers: { "@type": "Offer", price: "0", priceCurrency: "RON" },
        },
        faqLd(faqs),
        breadcrumbLd([{ name: "Calculator furaje", path: "/calculator-furaje" }]),
        localBusinessLd(),
      ],
    }),
  component: CalculatorPage,
});

const fmt = (n: number, d = 1) =>
  new Intl.NumberFormat("ro-RO", { maximumFractionDigits: d }).format(n);

function dogGrams(kg: number) {
  // Energie de întreținere ~ 130 kcal × kg^0.75, hrană uscată ~ 3,6 kcal/g.
  return (130 * Math.pow(Math.max(kg, 1), 0.75)) / 3.6;
}

function CalculatorPage() {
  const [animalId, setAnimalId] = useState("gaini");
  const [count, setCount] = useState(10);
  const [days, setDays] = useState(30);
  const [dogKg, setDogKg] = useState(20);
  const [feedId, setFeedId] = useState("combinat");

  const animal = ANIMALS.find((a) => a.id === animalId)!;
  const feed = FEEDS.find((f) => f.id === feedId)!;

  const r = useMemo(() => {
    const g = animal.perKg ? dogGrams(dogKg) : animal.gPerDay;
    const perDayKg = (g * Math.max(count, 0)) / 1000;
    const totalKg = perDayKg * Math.max(days, 0);
    const sacks = Math.ceil(totalKg / feed.sackKg);
    const cost = feed.pricePerSack ? sacks * feed.pricePerSack : undefined;
    const sackLasts = perDayKg > 0 ? feed.sackKg / perDayKg : 0;
    return { g, perDayKg, totalKg, sacks, cost, sackLasts };
  }, [animal, count, days, dogKg, feed]);

  const interest = `${r.sacks} ${r.sacks === 1 ? "sac" : "saci"} de ${feed.label.toLowerCase()} pentru ${count} × ${animal.label.toLowerCase()}${animal.perKg ? ` de ${dogKg} kg` : ""}, pe ${days} zile (calculat pe site: ~${fmt(r.totalKg)} kg).`;

  const inputCls =
    "mt-2 w-full rounded-xl border-2 border-input bg-background px-4 py-3 text-lg font-semibold focus:border-primary focus:outline-none";

  return (
    <main>
      <Header />
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <Breadcrumbs items={[{ name: "Calculator furaje" }]} />
          <p className="eyebrow mt-6">Unealtă gratuită</p>
          <h1 className="mt-3 max-w-3xl text-4xl leading-tight md:text-5xl">
            Calculator furaje: cât mănâncă animalele tale și câți saci îți trebuie
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Alege animalul, numărul și perioada. Îți arătăm consumul zilnic, kilogramele totale,
            numărul de saci și costul estimat – apoi comanzi dintr-un click pe WhatsApp.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr]">
            <form
              className="rounded-3xl bg-card p-6 shadow-xl ring-1 ring-border md:p-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="block font-bold">
                Animal
                <select
                  value={animalId}
                  onChange={(e) => setAnimalId(e.target.value)}
                  className={inputCls}
                >
                  {ANIMALS.map((a) => (
                    <option key={a.id} value={a.id}>
                      {a.label}
                    </option>
                  ))}
                </select>
              </label>
              <p className="mt-1 text-sm text-muted-foreground">{animal.note}</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <label className="block font-bold">
                  Câte?
                  <input
                    type="number"
                    min={1}
                    max={100000}
                    value={count}
                    onChange={(e) => setCount(Number(e.target.value))}
                    className={inputCls}
                  />
                </label>
                <label className="block font-bold">
                  Câte zile?
                  <input
                    type="number"
                    min={1}
                    max={365}
                    value={days}
                    onChange={(e) => setDays(Number(e.target.value))}
                    className={inputCls}
                  />
                </label>
              </div>
              {animal.perKg && (
                <label className="mt-6 block font-bold">
                  Greutatea câinelui (kg)
                  <input
                    type="number"
                    min={1}
                    max={100}
                    value={dogKg}
                    onChange={(e) => setDogKg(Number(e.target.value))}
                    className={inputCls}
                  />
                </label>
              )}
              <label className="mt-6 block font-bold">
                Furaj
                <select
                  value={feedId}
                  onChange={(e) => setFeedId(e.target.value)}
                  className={inputCls}
                >
                  {FEEDS.map((f) => (
                    <option key={f.id} value={f.id}>
                      {f.label}
                      {f.pricePerSack ? ` – ${f.pricePerSack} lei` : ""}
                    </option>
                  ))}
                </select>
              </label>
            </form>

            <div
              className="rounded-3xl bg-primary p-6 text-primary-foreground shadow-xl md:p-8"
              aria-live="polite"
            >
              <p className="font-semibold opacity-80">Rezultat</p>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <Stat label="pe zi / animal" value={`${fmt(r.g, 0)} g`} />
                <Stat label="pe zi / total" value={`${fmt(r.perDayKg)} kg`} />
                <Stat label={`în ${days} zile`} value={`${fmt(r.totalKg)} kg`} />
                <Stat label="saci necesari" value={`${r.sacks}`} highlight />
              </div>
              <p className="mt-6 text-lg">
                Un sac de {feed.sackKg} kg îți ajunge cam <b>{fmt(r.sackLasts, 0)} zile</b>.
              </p>
              <p className="mt-2 text-lg">
                {r.cost !== undefined ? (
                  <>
                    Cost estimat: <b className="text-accent">{r.cost} lei</b>
                  </>
                ) : (
                  "Preț: întreabă-ne pe WhatsApp pentru prețul zilei."
                )}
              </p>
              <WhatsAppButton interest={interest} className="mt-8 w-full text-lg">
                Comandă {r.sacks} {r.sacks === 1 ? "sac" : "saci"} pe WhatsApp
              </WhatsAppButton>
              <p className="mt-3 text-center text-xs opacity-75">
                Valori orientative. Ridicare din Gilău, Str. Eroilor 1.
              </p>
            </div>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-14">
        <h2 className="text-3xl">Consum orientativ de furaj pe zi</h2>
        <div className="mt-6 overflow-x-auto rounded-2xl ring-1 ring-border">
          <table className="w-full text-left">
            <thead className="bg-muted">
              <tr>
                <th className="p-3">Animal</th>
                <th className="p-3">g / zi</th>
                <th className="p-3">kg / lună</th>
              </tr>
            </thead>
            <tbody>
              {ANIMALS.filter((a) => !a.perKg).map((a) => (
                <tr key={a.id} className="border-t">
                  <td className="p-3">{a.label}</td>
                  <td className="p-3">{a.gPerDay}</td>
                  <td className="p-3">{fmt((a.gPerDay * 30) / 1000)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="mt-14 text-3xl">Întrebări frecvente</h2>
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
        <p className="mt-10">
          Vezi și:{" "}
          <Link to="/oferta-furaje" className="font-semibold text-primary underline">
            ofertă tărâțe și furaj combinat
          </Link>{" "}
          ·{" "}
          <Link to="/furaje-man" className="font-semibold text-primary underline">
            Furaje MAN
          </Link>{" "}
          ·{" "}
          <Link to="/pui-brahma" className="font-semibold text-primary underline">
            pui Brahma
          </Link>
        </p>
      </article>
      <Footer />
    </main>
  );
}

function Stat({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div
      className={`rounded-2xl p-4 ${highlight ? "bg-accent text-accent-foreground" : "bg-white/10"}`}
    >
      <p className="font-serif text-3xl font-extrabold">{value}</p>
      <p className="text-sm opacity-80">{label}</p>
    </div>
  );
}
