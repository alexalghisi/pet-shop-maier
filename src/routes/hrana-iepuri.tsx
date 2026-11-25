import { createFileRoute } from "@tanstack/react-router";
import { GuidePage, guideHead } from "@/components/site";
import { KW } from "@/lib/keywords";
import img from "@/assets/food.webp";

const faqs = [
  {
    q: "Ce mănâncă un iepure de casă?",
    a: "În principal fân, plus legume verzi și puține granule. Fânul ajută și la tocirea dinților.",
  },
  { q: "Pot da morcovi iepurelui?", a: "Da, dar ca recompensă – morcovul are mult zahăr." },
  {
    q: "Câte granule dau unui iepure pe zi?",
    a: "Orientativ 20–25 g pe kilogram de greutate corporală la iepurele adult de companie. Iepurii în creștere, femelele gestante și cei crescuți pentru carne primesc mai mult.",
  },
  {
    q: "Ce fân este cel mai bun pentru iepuri?",
    a: "Fânul de fâneață, verzui și fără praf, pentru adulți. Fânul de lucernă, mai bogat în calciu și proteină, se dă puilor și femelelor care alăptează.",
  },
  {
    q: "Câtă apă bea un iepure?",
    a: "Aproximativ 50–100 ml pe kilogram de greutate pe zi, mai mult vara. Apa trebuie să fie mereu proaspătă.",
  },
  {
    q: "Unde găsesc hrană pentru iepuri în Gilău?",
    a: "La PetShop Maier, Str. Eroilor 1 – fân, granule și cereale pentru iepuri.",
  },
];

const TITLE = "Hrană pentru iepuri – fân, granule | Gilău, Cluj";
const DESC =
  "Ce mănâncă iepurii de casă și de crescătorie: fân, granule, legume, ce e interzis. Hrană pentru iepuri la PetShop Maier, Gilău, județul Cluj.";

export const Route = createFileRoute("/hrana-iepuri")({
  head: () => guideHead(TITLE, DESC, "/hrana-iepuri", faqs, { keywords: KW["/hrana-iepuri"] }),
  component: () => (
    <GuidePage
      eyebrow="Ghid · Hrană iepuri"
      title="Hrană pentru iepuri: ghid complet"
      intro="Fânul e baza alimentației oricărui iepure. Iată cum faci o rație sănătoasă pentru iepurii de companie și cei de crescătorie."
      image={img}
      imageAlt="Fân și granule pentru iepuri"
      sections={[
        {
          h: "Rația ideală",
          p: "Proporții orientative pentru un iepure adult:",
          list: [
            "Fân la discreție – ~80% din hrană",
            "Legume verzi proaspete – o mână pe zi",
            "Granule – o lingură la kg corp",
            "Apă proaspătă mereu",
          ],
        },
        {
          h: "Iepuri de crescătorie",
          p: "Pentru creștere rapidă se folosesc granule complete pentru iepuri, completate cu fân și cereale (ovăz, orz).",
        },
        {
          h: "De ce fânul este baza",
          p: "Dinții iepurelui cresc toată viața, cu câțiva milimetri pe lună, și se tocesc doar prin rosul îndelungat al fibrelor. Tot fibrele lungi din fân țin în mișcare intestinul, care la iepure se oprește ușor. Un iepure hrănit mai ales cu granule și legume ajunge la dinți crescuți strâmb, balonare și scaun moale.",
          more: [
            "Fânul bun este verzui, miroase plăcut și nu face praf. Fânul de lucernă are mult calciu și proteină: este potrivit pentru pui și pentru femelele care alăptează, dar la adulți se dă rar. Pentru adulți, cel mai bun este fânul de fâneață sau de ierburi.",
          ],
        },
        {
          h: "Granulele: câte și de care",
          p: "Granulele sunt un supliment concentrat, nu masa principală. La iepurele de companie, orientativ 20–25 g pe kilogram de greutate corporală pe zi, adică o lingură plină pentru un iepure de 2 kg. Alege granule simple, uniforme; amestecurile colorate cu semințe și fulgi îl lasă să aleagă ce e dulce și să lase restul.",
        },
        {
          h: "Legume, verdețuri și fructe",
          p: "Introdu orice aliment nou pe rând, în cantitate mică, și urmărește scaunul timp de o zi. Verdețurile se dau spălate și zvântate, la temperatura camerei.",
          list: [
            "Zilnic: frunze de păpădie, pătrunjel, mărar, frunze de morcov, salată romană, andive, țelină",
            "De câteva ori pe săptămână: morcov, ardei gras, broccoli în cantitate mică, frunze de varză",
            "Rar, ca recompensă: măr fără sâmburi, pară, căpșuni – o felie, nu un fruct întreg",
          ],
        },
        {
          h: "Apa",
          p: "Un iepure bea surprinzător de mult, cam 50–100 ml pe kilogram de greutate pe zi, și mai mult vara sau dacă mănâncă mai ales fân uscat. Bolul greu, din ceramică, este mai natural pentru el decât biberonul, dar trebuie spălat zilnic. Iarna, la iepurii ținuți afară, apa se schimbă de două ori pe zi, ca să nu înghețe.",
        },
        {
          h: "Pui, femele gestante și iepuri de carne",
          p: "Puii încep să roadă fân și granule de la aproximativ trei săptămâni și se înțarcă pe la șase-opt săptămâni; până la șase luni pot primi granule la discreție și fân de lucernă. Femelele gestante și cele care alăptează au nevoie de mai multă proteină și energie, deci de porții mai mari de granule. La iepurii crescuți pentru carne, baza o fac granulele complete, cu fân și apă permanent la dispoziție.",
        },
        {
          h: "Cum schimbi hrana",
          p: "Flora din intestinul iepurelui se adaptează încet. Orice schimbare de granule se face în 7–10 zile, amestecând treptat hrana nouă cu cea veche. Un iepure care nu mănâncă și nu face bobițe de 10–12 ore este o urgență veterinară, nu o toană.",
        },
        {
          h: "Ce NU dai iepurilor",
          p: "Ciocolată, pâine, dulciuri, ceapă, avocado, cartofi cruzi sau salată iceberg în cantitate mare.",
        },
      ]}
      faqs={faqs}
      related={[
        { to: "/hrana-animale", label: "Hrană animale" },
        { to: "/furaje-animale", label: "Furaje pentru animale" },
        { to: "/pet-shop-cluj", label: "Pet shop lângă Cluj" },
      ]}
    />
  ),
});
