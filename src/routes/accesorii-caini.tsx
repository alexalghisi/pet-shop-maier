import { createFileRoute } from "@tanstack/react-router";
import { GuidePage, guideHead } from "@/components/site";
import { KW } from "@/lib/keywords";
import img from "@/assets/accessories.webp";

const faqs = [
  {
    q: "Ce mărime de ham aleg?",
    a: "Măsoară circumferința pieptului, în spatele picioarelor din față, și adaugă 2–3 cm.",
  },
  {
    q: "Aveți accesorii pentru câini mari?",
    a: "Da, avem lese, zgărzi și boluri pentru toate taliile.",
  },
  {
    q: "Unde cumpăr accesorii pentru câini lângă Cluj-Napoca?",
    a: "La PetShop Maier din Gilău, aproape de Cluj-Napoca și Florești.",
  },
];

const TITLE = "Accesorii pentru câini: lese, zgărzi, boluri | Gilău, Cluj";
const DESC =
  "Accesorii pentru câini: lese, zgărzi, hamuri, boluri, jucării și produse de îngrijire. Le găsești la PetShop Maier, Str. Eroilor 1, Gilău.";

export const Route = createFileRoute("/accesorii-caini")({
  head: () =>
    guideHead(TITLE, DESC, "/accesorii-caini", faqs, { keywords: KW["/accesorii-caini"] }),
  component: () => (
    <GuidePage
      eyebrow="Ghid · Accesorii câini"
      title="Accesorii pentru câini: ce îți trebuie"
      intro="De la primul pui până la câinele senior – lista de accesorii de care chiar ai nevoie."
      image={img}
      imageAlt="Accesorii pentru câini la PetShop Maier Gilău"
      sections={[
        {
          h: "Lista de bază",
          p: "Pentru un câine nou în casă:",
          list: [
            "Zgardă sau ham + lesă",
            "Boluri pentru apă și hrană",
            "Pat sau cușcă",
            "Jucării de ros",
            "Perie și șampon pentru câini",
          ],
        },
        {
          h: "Zgardă sau ham?",
          p: "Hamul e mai sigur pentru câinii mici și pentru cei care trag în lesă; zgarda e bună pentru câinii educați și pentru medalionul cu nume.",
        },
        {
          h: "Cum măsori câinele pentru zgardă și ham",
          p: "Măsoară cu un centimetru de croitorie, cu câinele în picioare. Pentru zgardă, ia circumferința gâtului la baza lui și adaugă cât să intre două degete între zgardă și gât. Pentru ham, măsoară circumferința pieptului în spatele picioarelor din față, în punctul cel mai lat. La pui, verifică potrivirea o dată pe săptămână: cresc mai repede decât pare.",
          more: [
            "Hamul în formă de Y lasă umerii liberi și este potrivit pentru plimbările lungi. Hamul cu inel în față îi întoarce ușor pe câinii care trag. La rasele cu botul scurt și la câinii cu probleme de trahee, hamul este de preferat zgărzii.",
          ],
        },
        {
          h: "Lesa potrivită",
          p: "Pentru plimbarea zilnică, o lesă fixă de 1,5–2 m îți dă cel mai bun control. Lesa lungă, de 5–10 m, este bună pentru exerciții de chemare pe câmp, nu pe trotuar. Lesa retractabilă pare comodă, dar se rupe ușor la câinii puternici și poate provoca arsuri și tăieturi; folosește-o doar la câini mici și liniștiți, departe de trafic.",
        },
        {
          h: "Boluri",
          p: "Bolurile din inox sau din ceramică se spală ușor și nu rețin miros; cele din plastic se zgârie și adună bacterii. Pentru câinii care mănâncă foarte repede există boluri cu obstacole, care încetinesc masa. Apa se schimbă zilnic, iar bolul se spală ca orice vas din bucătărie.",
        },
        {
          h: "Jucării sigure",
          p: "Alege jucăria după mărimea și forța câinelui: trebuie să fie destul de mare încât să nu poată fi înghițită. Aruncă jucăriile din care se rup bucăți. Nu da oase gătite, care se sparg în așchii, și nu arunca bețe, care pot răni gura și gâtul. Mingile de tenis tocesc dinții dacă sunt roase zilnic.",
        },
        {
          h: "Îngrijire: perie, șampon, unghii",
          p: "Câinii cu blană lungă se piaptănă de câteva ori pe săptămână, cei cu blană scurtă o dată. Folosește doar șampon pentru câini: pielea lor are alt pH decât a omului, iar șamponul nostru o usucă. Unghiile se taie când se aud pe gresie, cu un clește pentru câini, puțin câte puțin, ca să nu atingi partea vie.",
        },
        {
          h: "Pentru câinele de curte",
          p: "Un câine care stă afară are nevoie de o cușcă ridicată de la pământ, cu intrarea ferită de vânt și cu paie uscate iarna, de umbră și de apă proaspătă vara. Lanțul scurt nu este o soluție: un țarc sau o curte împrejmuită îi dau mișcarea de care are nevoie.",
        },
        {
          h: "Antiparazitare",
          p: "Zgărzile și pipetele antiparazitare protejează de purici și căpușe, mai ales din primăvară până toamna târziu. Alege produsul după greutatea câinelui și respectă intervalul de pe ambalaj. Nu folosi niciodată la pisici un produs făcut pentru câini: unele substanțe sunt toxice pentru ele. Pentru deparazitarea internă și vaccinuri, urmează schema medicului veterinar.",
        },
      ]}
      faqs={faqs}
      related={[
        { to: "/hrana-animale", label: "Hrană animale" },
        { to: "/hrana-caini", label: "Hrană pentru câini" },
        { to: "/pet-shop-cluj", label: "Pet shop lângă Cluj" },
      ]}
    />
  ),
});
