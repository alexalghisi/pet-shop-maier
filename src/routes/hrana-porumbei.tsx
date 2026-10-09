import { createFileRoute } from "@tanstack/react-router";
import { GuidePage, guideHead } from "@/components/site";
import img from "@/assets/food.jpg";

const faqs = [
  { q: "Cât mănâncă un porumbel pe zi?", a: "Aproximativ 30–40 g de amestec pe zi, în funcție de rasă și activitate." },
  { q: "Pot da pâine porumbeilor?", a: "Nu e recomandat – pâinea nu are nutrienții necesari și poate cauza probleme digestive." },
  { q: "De unde iau hrană pentru porumbei în județul Cluj?", a: "De la PetShop Maier din Gilău, unde găsești amestecuri de semințe și cereale." },
];

const TITLE = "Hrană pentru porumbei în Gilău, Cluj – amestecuri de semințe | PetShop Maier";
const DESC = "Ce mănâncă porumbeii: amestecuri de semințe pentru porumbei voiajori și de rasă, vitamine și grit. Hrană porumbei la PetShop Maier, Gilău.";

export const Route = createFileRoute("/hrana-porumbei")({
  head: () => guideHead(TITLE, DESC, "/hrana-porumbei", faqs),
  component: () => (
    <GuidePage
      eyebrow="Ghid · Hrană porumbei"
      title="Hrană pentru porumbei: amestecuri și sfaturi"
      intro="Porumbeii au nevoie de un amestec variat de semințe, ajustat după sezon: zbor, reproducție sau năpârlire."
      image={img}
      imageAlt="Amestec de semințe pentru porumbei"
      sections={[
        { h: "Ce conține un amestec bun", p: "Un amestec echilibrat combină cereale și leguminoase.", list: ["Porumb, grâu, orz – energie", "Mazăre, fasole mung – proteine", "Semințe mici (cânepă, rapiță) – grăsimi sănătoase"] },
        { h: "Hrană pe sezoane", p: "În reproducție și năpârlire crește proteina (mai multe leguminoase); în perioada de zbor – mai multă energie; iarna – amestec de întreținere." },
        { h: "Grit și minerale", p: "Porumbeii au nevoie mereu de grit și minerale pentru digestie și oase puternice." },
      ]}
      faqs={faqs}
      related={[{ to: "/furaje-gaini", label: "Furaje pentru găini" }, { to: "/furaje-animale", label: "Furaje pentru animale" }]}
    />
  ),
});
