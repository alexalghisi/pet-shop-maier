import { createFileRoute } from "@tanstack/react-router";
import { GuidePage, guideHead } from "@/components/site";
import { KW } from "@/lib/keywords";
import img from "@/assets/accessories.webp";

const faqs = [
  { q: "Ce mărime de ham aleg?", a: "Măsoară circumferința pieptului, în spatele picioarelor din față, și adaugă 2–3 cm." },
  { q: "Aveți accesorii pentru câini mari?", a: "Da, avem lese, zgărzi și boluri pentru toate taliile." },
  { q: "Unde cumpăr accesorii pentru câini lângă Cluj-Napoca?", a: "La PetShop Maier din Gilău, aproape de Cluj-Napoca și Florești." },
];

const TITLE = "Accesorii pentru câini în Gilău, Cluj – lese, zgărzi, boluri, jucării | PetShop Maier";
const DESC = "Accesorii pentru câini: lese, zgărzi, hamuri, boluri, jucării și produse de îngrijire. Le găsești la PetShop Maier, Str. Eroilor 1, Gilău.";

export const Route = createFileRoute("/accesorii-caini")({
  head: () => guideHead(TITLE, DESC, "/accesorii-caini", faqs, { keywords: KW["/accesorii-caini"] }),
  component: () => (
    <GuidePage
      eyebrow="Ghid · Accesorii câini"
      title="Accesorii pentru câini: ce îți trebuie"
      intro="De la primul pui până la câinele senior – lista de accesorii de care chiar ai nevoie."
      image={img}
      imageAlt="Accesorii pentru câini la PetShop Maier Gilău"
      sections={[
        { h: "Lista de bază", p: "Pentru un câine nou în casă:", list: ["Zgardă sau ham + lesă", "Boluri pentru apă și hrană", "Pat sau cușcă", "Jucării de ros", "Perie și șampon pentru câini"] },
        { h: "Zgardă sau ham?", p: "Hamul e mai sigur pentru câinii mici și pentru cei care trag în lesă; zgarda e bună pentru câinii educați și pentru medalionul cu nume." },
        { h: "Antiparazitare", p: "Zgărzile și pipetele antiparazitare protejează de purici și căpușe, mai ales primăvara și vara." },
      ]}
      faqs={faqs}
      related={[{ to: "/hrana-animale", label: "Hrană animale" }, { to: "/hrana-caini", label: "Hrană pentru câini" }, { to: "/pet-shop-cluj", label: "Pet shop lângă Cluj" }]}
    />
  ),
});
