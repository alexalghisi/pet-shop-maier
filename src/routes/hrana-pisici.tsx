import { createFileRoute } from "@tanstack/react-router";
import { GuidePage, guideHead } from "@/components/site";
import { KW } from "@/lib/keywords";
import img from "@/assets/food.webp";

const faqs = [
  { q: "De câte ori pe zi mănâncă o pisică?", a: "Pisicile adulte preferă mai multe mese mici pe zi, de 2–4 ori. Puii au nevoie de mese și mai dese." },
  { q: "Pisica mea bea puțină apă, ce fac?", a: "Introdu hrană umedă (plicuri, conserve) și pune o fântână de apă – pisicile beau mai mult din apă curgătoare." },
  { q: "Ce hrană e potrivită pentru pisicile sterilizate?", a: "Hrană special formulată pentru pisici sterilizate, cu mai puține calorii, care ajută la menținerea greutății și sănătatea urinară." },
  { q: "Unde găsesc hrană pentru pisici în Gilău?", a: "La PetShop Maier, în județul Cluj, avem hrană uscată și umedă, nisip și recompense pentru pisici." },
];

const TITLE = "Hrană pentru pisici în Gilău, județul Cluj – ghid complet | PetShop Maier";
const DESC = "Hrană uscată sau umedă pentru pisici, pisici sterilizate, pui și seniori. Sfaturi practice și hrană pentru pisici la PetShop Maier din Gilău, Cluj.";

export const Route = createFileRoute("/hrana-pisici")({
  head: () => guideHead(TITLE, DESC, "/hrana-pisici", faqs, { keywords: KW["/hrana-pisici"] }),
  component: () => (
    <GuidePage
      eyebrow="Ghid · Hrană pisici"
      title="Hrană pentru pisici: ce trebuie să știi"
      intro="Pisicile sunt carnivore stricte și au nevoi speciale. O alimentație bună le protejează rinichii, blana și greutatea."
      image={img}
      imageAlt="Bol cu hrană premium pentru pisici"
      sections={[
        { h: "Uscată, umedă sau mixt?", p: "Hrana umedă aduce hidratare, esențială pentru sănătatea urinară. Hrana uscată e comodă și poate sta în bol. Combinația celor două funcționează pentru majoritatea pisicilor." },
        { h: "Nutrienți esențiali", p: "Câteva elemente pe care orice hrană bună pentru pisici trebuie să le conțină:", list: ["Taurină – pentru inimă și vedere", "Proteină animală de calitate", "Acizi grași pentru blană", "Puțini carbohidrați"] },
        { h: "Pisici sterilizate", p: "După sterilizare metabolismul încetinește. Alege hrană dedicată și controlează porțiile pentru a preveni obezitatea." },
        { h: "Nu le da pisicilor", p: "Lapte de vacă, ceapă, usturoi, ciocolată, struguri sau hrană pentru câini pe termen lung." },
      ]}
      faqs={faqs}
      related={[{ to: "/hrana-animale", label: "Hrană animale" }, { to: "/hrana-caini", label: "Hrană pentru câini" }, { to: "/furaje-animale", label: "Furaje pentru animale" }]}
    />
  ),
});
