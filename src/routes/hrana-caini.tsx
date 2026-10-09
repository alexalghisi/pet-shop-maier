import { createFileRoute } from "@tanstack/react-router";
import { GuidePage, guideHead } from "@/components/site";
import img from "@/assets/food.jpg";

const faqs = [
  { q: "Cât de des hrănesc un câine adult?", a: "De regulă de două ori pe zi. Cantitatea depinde de greutate și activitate – urmează tabelul de pe ambalaj și ajustează după condiția corporală." },
  { q: "Hrană uscată sau umedă?", a: "Hrana uscată e practică și ajută la igiena dentară; cea umedă e mai gustoasă și hidratează. Multe familii le combină." },
  { q: "Cum schimb hrana câinelui?", a: "Treptat, în 7–10 zile, amestecând tot mai multă hrană nouă cu cea veche, pentru a evita problemele digestive." },
  { q: "Unde cumpăr hrană pentru câini în județul Cluj?", a: "La PetShop Maier din Gilău găsești hrană pentru câini de toate vârstele și taliile, plus recomandări personalizate." },
];

const TITLE = "Hrană pentru câini în Gilău, județul Cluj – ghid și sfaturi | PetShop Maier";
const DESC = "Cum alegi hrana potrivită pentru câine: uscată sau umedă, pui, adult, senior, talie mică sau mare. Găsești hrană pentru câini la PetShop Maier, Gilău.";

export const Route = createFileRoute("/hrana-caini")({
  head: () => guideHead(TITLE, DESC, "/hrana-caini", faqs),
  component: () => (
    <GuidePage
      eyebrow="Ghid · Hrană câini"
      title="Hrană pentru câini: cum alegi corect"
      intro="Hrana potrivită înseamnă un câine sănătos, cu blană lucioasă și energie. Iată ce să urmărești când alegi mâncarea pentru câinele tău."
      image={img}
      imageAlt="Bol cu hrană uscată pentru câini"
      sections={[
        { h: "Alege după vârstă", p: "Nevoile se schimbă de-a lungul vieții.", list: ["Junior (până la 12 luni): mai multe proteine și calciu pentru creștere", "Adult: echilibru între energie și menținerea greutății", "Senior (7+ ani): mai puține calorii, suport pentru articulații"] },
        { h: "Alege după talie", p: "Câinii mici au granule mai mici și metabolism rapid; câinii mari au nevoie de suport pentru articulații și o creștere controlată." },
        { h: "Citește eticheta", p: "Primul ingredient ar trebui să fie o sursă de carne. Evită hrana cu mulți coloranți sau subproduse nespecificate.", list: ["Proteină animală pe primul loc", "Grăsimi de calitate (omega 3 și 6)", "Fără zahăr adăugat"] },
        { h: "Alimente periculoase pentru câini", p: "Nu le da niciodată: ciocolată, struguri și stafide, ceapă, usturoi, xilitol sau oase gătite." },
      ]}
      faqs={faqs}
      related={[{ to: "/hrana-pisici", label: "Hrană pentru pisici" }, { to: "/furaje-animale", label: "Furaje pentru animale" }]}
    />
  ),
});
