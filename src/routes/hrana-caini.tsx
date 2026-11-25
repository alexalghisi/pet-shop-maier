import { createFileRoute } from "@tanstack/react-router";
import { GuidePage, guideHead } from "@/components/site";
import { KW } from "@/lib/keywords";
import img from "@/assets/food.webp";

const faqs = [
  { q: "Cât de des hrănesc un câine adult?", a: "De regulă de două ori pe zi. Cantitatea depinde de greutate și activitate – urmează tabelul de pe ambalaj și ajustează după condiția corporală." },
  { q: "Hrană uscată sau umedă?", a: "Hrana uscată e practică și ajută la igiena dentară; cea umedă e mai gustoasă și hidratează. Multe familii le combină." },
  { q: "Cum schimb hrana câinelui?", a: "Treptat, în 7–10 zile, amestecând tot mai multă hrană nouă cu cea veche, pentru a evita problemele digestive." },
  { q: "Unde cumpăr hrană pentru câini în județul Cluj?", a: "La PetShop Maier din Gilău găsești hrană pentru câini de toate vârstele și taliile, plus recomandări personalizate." },
  { q: "Aveți Monge Artù la sac de 20 kg?", a: "Da, Monge Artù cu pui și cu vită, în saci de 20 kg. Este hrană completă pentru câini adulți de toate taliile, cu 21% proteină și fără coloranți sau conservanți artificiali adăugați. Pentru preț și ofertele la mai mulți saci, scrie-ne pe WhatsApp la 0758 639 799." },
  { q: "Livrați hrana pentru câini acasă?", a: "Da, transportăm la domiciliu în Gilău, Florești, Cluj-Napoca și împrejurimi. Sună sau scrie-ne pe WhatsApp la 0758 639 799." },
];

const TITLE = "Hrană câini la sac 20 kg – Monge Artù | Gilău, Cluj";
const DESC = "Hrană uscată pentru câini la sac mare de 20 kg: Monge Artù cu pui sau vită, plus Kudo și Wildfull. Transport la domiciliu în Gilău, Florești și Cluj-Napoca. WhatsApp 0758 639 799.";

export const Route = createFileRoute("/hrana-caini")({
  head: () => guideHead(TITLE, DESC, "/hrana-caini", faqs, { keywords: KW["/hrana-caini"] }),
  component: () => (
    <GuidePage
      eyebrow="Ghid · Hrană câini"
      title="Hrană pentru câini la sac de 20 kg și cum o alegi corect"
      intro="Hrana potrivită înseamnă un câine sănătos, cu blană lucioasă și energie. Iată ce să urmărești când alegi mâncarea pentru câinele tău."
      image={img}
      imageAlt="Bol cu hrană uscată pentru câini"
      sections={[
        { h: "Ce găsești la noi în Gilău", p: "Hrană pentru câini la sac mare și mic, plus suplimente, din magazinul nostru din Strada Eroilor 1. Stocul îl confirmăm pe WhatsApp, iar în Gilău, Florești și Cluj-Napoca transportăm și la domiciliu.", list: ["Monge Artù cu pui – sac 20 kg, pentru câini adulți de toate taliile", "Monge Artù cu vită – sac 20 kg, 21% proteină, produs în Italia", "Hrană premium Kudo și Wildfull", "Ulei de somon Omega 3, 250 ml – pentru blană lucioasă"] },
        { h: "De ce sacul mare de 20 kg iese mai ieftin", p: "La sacul mare plătești mai puțin pe kilogram decât la pungile mici și faci mai rar drumul la magazin. La o rație de circa 300 g pe zi, un sac de 20 kg ține în jur de două luni la un câine de 20 kg. Ține-l închis, la loc uscat și răcoros, ca granulele să rămână proaspete. Prețul la zi și oferta la mai mulți saci ți le spunem pe WhatsApp." },
        { h: "Alege după vârstă", p: "Nevoile se schimbă de-a lungul vieții.", list: ["Junior (până la 12 luni): mai multe proteine și calciu pentru creștere", "Adult: echilibru între energie și menținerea greutății", "Senior (7+ ani): mai puține calorii, suport pentru articulații"] },
        { h: "Alege după talie", p: "Câinii mici au granule mai mici și metabolism rapid; câinii mari au nevoie de suport pentru articulații și o creștere controlată." },
        { h: "Citește eticheta", p: "Primul ingredient ar trebui să fie o sursă de carne. Evită hrana cu mulți coloranți sau subproduse nespecificate.", list: ["Proteină animală pe primul loc", "Grăsimi de calitate (omega 3 și 6)", "Fără zahăr adăugat"] },
        { h: "Alimente periculoase pentru câini", p: "Nu le da niciodată: ciocolată, struguri și stafide, ceapă, usturoi, xilitol sau oase gătite." },
      ]}
      faqs={faqs}
      related={[{ to: "/pet-shop-cluj", label: "Pet shop Cluj" }, { to: "/accesorii-caini", label: "Accesorii câini" }, { to: "/hrana-animale", label: "Hrană animale" }, { to: "/hrana-pisici", label: "Hrană pentru pisici" }, { to: "/furaje-animale", label: "Furaje pentru animale" }]}
    />
  ),
});
