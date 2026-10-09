import { createFileRoute } from "@tanstack/react-router";
import { GuidePage, guideHead } from "@/components/site";
import img from "@/assets/food.jpg";

const faqs = [
  { q: "Ce furaj e cel mai bun pentru găini ouătoare?", a: "Un nutreț combinat pentru ouătoare, cu 16–17% proteină și calciu adăugat. În magazin avem furaje de la producători cunoscuți." },
  { q: "De ce nu mai ouă găinile?", a: "Cauze frecvente: lumină puțină iarna, năpârlire, hrană fără calciu sau stres. O rație echilibrată ajută mult." },
  { q: "Vindeți furaje la sac în Gilău?", a: "Da, la PetShop Maier găsești furaje la sac și porumb boabe. Sună la +40 758 639 799 pentru stoc." },
];

const TITLE = "Furaje pentru găini ouătoare în Gilău, Cluj – nutreț combinat și porumb | PetShop Maier";
const DESC = "Ce furaje dai găinilor ouătoare și puilor: nutreț combinat, porumb, grâu, calciu. Furaje pentru găini la PetShop Maier, Gilău, județul Cluj.";

export const Route = createFileRoute("/furaje-gaini")({
  head: () => guideHead(TITLE, DESC, "/furaje-gaini", faqs),
  component: () => (
    <GuidePage
      eyebrow="Ghid · Furaje găini"
      title="Furaje pentru găini ouătoare și pui"
      intro="Găinile hrănite corect fac mai multe ouă, cu coaja tare. Iată ce furaje să alegi pentru fiecare etapă."
      image={img}
      imageAlt="Saci cu furaje pentru găini ouătoare la PetShop Maier Gilău"
      sections={[
        { h: "Furaje pe etape", p: "Fiecare vârstă are nevoile ei.", list: ["Pui (0–8 săptămâni): starter cu multă proteină", "Tineret (8–18 săptămâni): furaj de creștere", "Găini ouătoare: nutreț combinat cu calciu și vitamine"] },
        { h: "Nutreț combinat sau porumb?", p: "Porumbul singur îngrașă și dă puține ouă. Nutrețul combinat pentru ouătoare are proteinele, calciul și vitaminele necesare; porumbul și grâul pot completa rația." },
        { h: "Cât mănâncă o găină pe zi?", p: "În jur de 110–130 g de furaj pe zi, plus apă proaspătă mereu. Iarna rația crește puțin." },
        { h: "Pentru coajă tare", p: "Adaugă scoici măcinate sau grit calcaros la discreție, separat de furaj." },
      ]}
      faqs={faqs}
      related={[{ to: "/furaje-animale", label: "Furaje pentru animale" }, { to: "/hrana-porumbei", label: "Hrană pentru porumbei" }]}
    />
  ),
});
