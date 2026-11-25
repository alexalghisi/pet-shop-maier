import { createFileRoute } from "@tanstack/react-router";
import { GuidePage, guideHead } from "@/components/site";
import { KW } from "@/lib/keywords";
import img from "@/assets/accessories.webp";

const faqs = [
  {
    q: "Care e cel mai bun nisip pentru pisici?",
    a: "Depinde de tine și de pisică: bentonita e cea mai economică, silicatul ține cel mai mult mirosul, iar nisipul din tofu e cel mai prietenos cu mediul.",
  },
  {
    q: "Pot arunca nisipul la toaletă?",
    a: "Doar nisipul vegetal (tofu sau porumb) marcat ca dizolvabil. Bentonita și silicatul se aruncă la gunoi.",
  },
  {
    q: "Cât de des se schimbă nisipul de tot?",
    a: "La bentonită, scoți bulgării zilnic și schimbi tot nisipul la 1–2 săptămâni. Silicatul ține de obicei 3–4 săptămâni pentru o singură pisică, dacă îl amesteci zilnic. La fiecare schimbare completă, spală litiera cu apă caldă și detergent blând.",
  },
  {
    q: "Ce nisip folosesc pentru un pui de pisică?",
    a: "Unul neparfumat, cu granule fine și puțin praf. Până pe la 3–4 luni evită nisipul aglomerant, pentru că puii îl gustă.",
  },
  {
    q: "Câte litiere îmi trebuie?",
    a: "Câte una pentru fiecare pisică, plus una în plus, așezate în locuri diferite.",
  },
  {
    q: "Unde găsesc nisip pentru pisici lângă Cluj-Napoca?",
    a: "La PetShop Maier din Gilău, Str. Eroilor 1 – la 15 minute de Cluj-Napoca și Florești.",
  },
];

const TITLE = "Nisip pentru pisici – bentonită, silicat | Gilău, Cluj";
const DESC =
  "Ce nisip pentru pisici alegi: bentonită aglomerantă, silicat, tofu sau lemn. Sfaturi și nisip pentru pisici la PetShop Maier, Str. Eroilor 1, Gilău.";

export const Route = createFileRoute("/nisip-pisici")({
  head: () => guideHead(TITLE, DESC, "/nisip-pisici", faqs, { keywords: KW["/nisip-pisici"] }),
  component: () => (
    <GuidePage
      eyebrow="Ghid · Nisip pisici"
      title="Nisip pentru pisici: care e cel mai bun?"
      intro="Nisipul potrivit înseamnă o casă fără mirosuri și o pisică ce folosește litiera fără probleme. Iată diferențele dintre tipurile de nisip."
      image={img}
      imageAlt="Nisip pentru pisici și accesorii la PetShop Maier Gilău"
      sections={[
        {
          h: "Nisip bentonită (aglomerant)",
          p: "Cel mai folosit. Formează bulgări care se scot ușor, e ieftin și pisicile îl acceptă repede.",
          list: ["Economic", "Se curăță zilnic doar bulgării", "Variante parfumate sau neutre"],
        },
        {
          h: "Nisip silicat",
          p: "Absoarbe foarte bine umezeala și mirosul, ține mai mult, e ușor de cărat.",
        },
        {
          h: "Nisip vegetal (tofu, porumb, lemn)",
          p: "Biodegradabil, se poate arunca la toaletă (tofu) și face mai puțin praf – bun pentru pisici sensibile și pui.",
        },
        {
          h: "Comparație pe scurt",
          p: "Nu există un nisip bun la toate; alegi după ce contează mai mult pentru tine:",
          list: [
            "Preț mic la cumpărare – bentonita",
            "Cel mai puțin miros între două schimbări – silicatul",
            "Cel mai ușor de cărat – silicatul și nisipul vegetal",
            "Cel mai puțin praf – nisipul vegetal și silicatul cu granule mari",
            "Pentru pui de pisică – nisip neparfumat, cu granule fine; puii gustă nisipul, așa că evită bentonita aglomerantă până pe la 3–4 luni",
          ],
        },
        {
          h: "Parfumat sau neparfumat?",
          p: "Nasul pisicii este mult mai sensibil decât al nostru. Un nisip puternic parfumat poate fi motivul pentru care pisica începe să ocolească litiera. Dacă mirosul te deranjează, soluția este curățarea mai deasă, nu parfumul mai tare. Alege variante neparfumate sau ușor parfumate, mai ales la pisicile cu probleme respiratorii.",
        },
        {
          h: "Litiera și locul ei",
          p: "Litiera trebuie să fie de aproximativ o dată și jumătate lungimea pisicii, ca să se poată întoarce și săpa. Pune-o într-un loc liniștit, departe de bolurile cu mâncare și apă și de mașina de spălat. Unele pisici preferă litiera acoperită, altele nu o suportă; dacă schimbi modelul, păstrează-l și pe cel vechi câteva zile.",
        },
        {
          h: "Cum schimbi tipul de nisip",
          p: "Pisicile țin la obiceiuri. Amestecă nisipul nou cu cel vechi timp de o săptămână, crescând treptat partea nouă. Dacă ai două litiere, poți pune cele două tipuri de nisip una lângă alta și vezi pe care o alege.",
        },
        {
          h: "Când pisica nu mai folosește litiera",
          p: "Cauzele obișnuite sunt litiera murdară, un nisip nou care nu îi place, locul gălăgios sau prea puține litiere pentru câte pisici sunt în casă. Dacă însă pisica merge des la litieră, stă mult, miaună sau urinează câteva picături, mai ales la motani, mergi imediat la medicul veterinar: poate fi un blocaj urinar, care este o urgență.",
        },
        {
          h: "Cât nisip și cât de des schimbi",
          p: "Pune un strat de 5–7 cm, scoate bulgării zilnic și schimbă tot nisipul o dată la 1–2 săptămâni. Regula: o litieră pentru fiecare pisică, plus una.",
        },
      ]}
      faqs={faqs}
      related={[
        { to: "/hrana-animale", label: "Hrană animale" },
        { to: "/hrana-pisici", label: "Hrană pentru pisici" },
        { to: "/pet-shop-cluj", label: "Pet shop lângă Cluj" },
      ]}
    />
  ),
});
