import { createFileRoute } from "@tanstack/react-router";
import { GuidePage, guideHead } from "@/components/site";
import fbFuraje from "@/assets/fb-furaje.jpg.asset.json";
const img = fbFuraje.url;

const faqs = [
  { q: "Ce furaje aveți pentru păsări?", a: "Amestecuri de semințe pentru peruși, canari, papagali și porumbei, plus mei, floarea-soarelui și grit." },
  { q: "Ce mănâncă iepurii și porcușorii de Guineea?", a: "Fân de calitate la discreție, granule specifice și legume proaspete. Porcușorii de Guineea au nevoie și de vitamina C." },
  { q: "Cum păstrez furajele?", a: "În recipiente închise, la loc uscat și răcoros, ferite de umezeală și dăunători." },
  { q: "Unde cumpăr furaje în județul Cluj?", a: "La PetShop Maier din Gilău găsești furaje și semințe pentru păsări, rozătoare și iepuri." },
];

const TITLE = "Furaje pentru animale și semințe păsări în Gilău | PetShop Maier";
const DESC = "Furaje pentru păsări, porumbei, iepuri și rozătoare: ce să alegi și cum să le păstrezi. Furaje de calitate la PetShop Maier, Gilău, județul Cluj.";

export const Route = createFileRoute("/furaje-animale")({
  head: () => guideHead(TITLE, DESC, "/furaje-animale", faqs),
  component: () => (
    <GuidePage
      eyebrow="Ghid · Furaje"
      title="Furaje pentru animale: păsări, iepuri și rozătoare"
      intro="Animalele mici au nevoi foarte diferite. Un furaj potrivit speciei face diferența între un animal vioi și unul bolnăvicios."
      image={img}
      imageAlt="Semințe și furaje pentru păsări"
      sections={[
        { h: "Furaje pentru păsări", p: "Fiecare specie are amestecul ei:", list: ["Peruși și canari: mei, semințe de iarbă, ovăz decorticat", "Papagali mari: floarea-soarelui, nuci, fructe uscate", "Porumbei: porumb, mazăre, grâu, amestecuri de zbor"] },
        { h: "Iepuri și porcușori de Guineea", p: "Baza dietei este fânul (cel puțin 80%). Granulele se dau în cantități mici, iar legumele verzi zilnic." },
        { h: "Hamsteri și alte rozătoare", p: "Amestecuri de cereale și semințe, cu bețe de ros pentru dinți care cresc continuu." },
        { h: "Păstrarea corectă", p: "Furajele vechi sau umede pot face mucegai. Cumpără cantități pe care le consumi în câteva săptămâni și ține-le în recipiente închise." },
      ]}
      faqs={faqs}
      related={[{ to: "/hrana-caini", label: "Hrană pentru câini" }, { to: "/hrana-pisici", label: "Hrană pentru pisici" }]}
    />
  ),
});
