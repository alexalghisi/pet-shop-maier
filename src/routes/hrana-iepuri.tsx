import { createFileRoute } from "@tanstack/react-router";
import { GuidePage, guideHead } from "@/components/site";
import img from "@/assets/food.webp";

const faqs = [
  { q: "Ce mănâncă un iepure de casă?", a: "În principal fân, plus legume verzi și puține granule. Fânul ajută și la tocirea dinților." },
  { q: "Pot da morcovi iepurelui?", a: "Da, dar ca recompensă – morcovul are mult zahăr." },
  { q: "Unde găsesc hrană pentru iepuri în Gilău?", a: "La PetShop Maier, Str. Eroilor 1 – fân, granule și cereale pentru iepuri." },
];

const TITLE = "Hrană pentru iepuri în Gilău, Cluj – fân, granule și legume | PetShop Maier";
const DESC = "Ce mănâncă iepurii de casă și de crescătorie: fân, granule, legume, ce e interzis. Hrană pentru iepuri la PetShop Maier, Gilău, județul Cluj.";

export const Route = createFileRoute("/hrana-iepuri")({
  head: () => guideHead(TITLE, DESC, "/hrana-iepuri", faqs),
  component: () => (
    <GuidePage
      eyebrow="Ghid · Hrană iepuri"
      title="Hrană pentru iepuri: ghid complet"
      intro="Fânul e baza alimentației oricărui iepure. Iată cum faci o rație sănătoasă pentru iepurii de companie și cei de crescătorie."
      image={img}
      imageAlt="Fân și granule pentru iepuri"
      sections={[
        { h: "Rația ideală", p: "Proporții orientative pentru un iepure adult:", list: ["Fân la discreție – ~80% din hrană", "Legume verzi proaspete – o mână pe zi", "Granule – o lingură la kg corp", "Apă proaspătă mereu"] },
        { h: "Iepuri de crescătorie", p: "Pentru creștere rapidă se folosesc granule complete pentru iepuri, completate cu fân și cereale (ovăz, orz)." },
        { h: "Ce NU dai iepurilor", p: "Ciocolată, pâine, dulciuri, ceapă, avocado, cartofi cruzi sau salată iceberg în cantitate mare." },
      ]}
      faqs={faqs}
      related={[{ to: "/furaje-animale", label: "Furaje pentru animale" }, { to: "/pet-shop-cluj", label: "Pet shop lângă Cluj" }]}
    />
  ),
});
