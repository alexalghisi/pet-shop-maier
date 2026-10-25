import { createFileRoute } from "@tanstack/react-router";
import { GuidePage, guideHead } from "@/components/site";
import img from "@/assets/accessories.webp";

const faqs = [
  { q: "Care e cel mai bun nisip pentru pisici?", a: "Depinde de tine și de pisică: bentonita e cea mai economică, silicatul ține cel mai mult mirosul, iar nisipul din tofu e cel mai prietenos cu mediul." },
  { q: "Pot arunca nisipul la toaletă?", a: "Doar nisipul vegetal (tofu sau porumb) marcat ca dizolvabil. Bentonita și silicatul se aruncă la gunoi." },
  { q: "Unde găsesc nisip pentru pisici lângă Cluj-Napoca?", a: "La PetShop Maier din Gilău, Str. Eroilor 1 – la 15 minute de Cluj-Napoca și Florești." },
];

const TITLE = "Nisip pentru pisici în Gilău, Cluj – bentonită, silicat sau vegetal | PetShop Maier";
const DESC = "Ce nisip pentru pisici alegi: bentonită aglomerantă, silicat, tofu sau lemn. Sfaturi și nisip pentru pisici la PetShop Maier, Str. Eroilor 1, Gilău.";

export const Route = createFileRoute("/nisip-pisici")({
  head: () => guideHead(TITLE, DESC, "/nisip-pisici", faqs),
  component: () => (
    <GuidePage
      eyebrow="Ghid · Nisip pisici"
      title="Nisip pentru pisici: care e cel mai bun?"
      intro="Nisipul potrivit înseamnă o casă fără mirosuri și o pisică ce folosește litiera fără probleme. Iată diferențele dintre tipurile de nisip."
      image={img}
      imageAlt="Nisip pentru pisici și accesorii la PetShop Maier Gilău"
      sections={[
        { h: "Nisip bentonită (aglomerant)", p: "Cel mai folosit. Formează bulgări care se scot ușor, e ieftin și pisicile îl acceptă repede.", list: ["Economic", "Se curăță zilnic doar bulgării", "Variante parfumate sau neutre"] },
        { h: "Nisip silicat", p: "Absoarbe foarte bine umezeala și mirosul, ține mai mult, e ușor de cărat." },
        { h: "Nisip vegetal (tofu, porumb, lemn)", p: "Biodegradabil, se poate arunca la toaletă (tofu) și face mai puțin praf – bun pentru pisici sensibile și pui." },
        { h: "Cât nisip și cât de des schimbi", p: "Pune un strat de 5–7 cm, scoate bulgării zilnic și schimbă tot nisipul o dată la 1–2 săptămâni. Regula: o litieră pentru fiecare pisică, plus una." },
      ]}
      faqs={faqs}
      related={[{ to: "/hrana-pisici", label: "Hrană pentru pisici" }, { to: "/pet-shop-cluj", label: "Pet shop lângă Cluj" }]}
    />
  ),
});
