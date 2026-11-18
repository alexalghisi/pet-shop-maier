import { createFileRoute } from "@tanstack/react-router";
import { GuidePage, guideHead } from "@/components/site";
import { byTag, photoSrc } from "@/lib/gallery";

const faqs = [
  {
    q: "Vindeți ouă Brahma pentru incubat?",
    a: "Da. Avem ouă fertile Brahma Columbia galben-negru și Brahma potârniche, de la părinți premiați la expoziții avicole. Stocul depinde de sezon, așa că e bine să rezervi pe WhatsApp la 0758 639 799.",
  },
  {
    q: "Cât durează incubația ouălor de găină?",
    a: "În jur de 21 de zile. Ouăle mari, cum sunt cele de Brahma, pot ecloza cu o zi mai târziu, așa că nu opri incubatorul prea devreme.",
  },
  {
    q: "Cât timp pot păstra ouăle înainte să le pun la incubat?",
    a: "Cel mai bine, maximum 7 zile, la răcoare (nu în frigider), cu vârful în jos. Cu cât stau mai mult, cu atât scade procentul de eclozare.",
  },
  {
    q: "Se garantează că eclozează toate ouăle?",
    a: "Nu poate garanta nimeni asta: eclozarea depinde și de transport, de cât au stat ouăle și de incubator. Noi îți dăm ouă proaspete, de la părinți selectați, și te ajutăm cu sfaturi.",
  },
  {
    q: "Pot lua și pui Brahma gata crescuți?",
    a: "Da, avem și pui Brahma de 2–3 luni, cu schema completă de vaccinare. Găsești detaliile pe pagina Pui Brahma de vânzare.",
  },
];

const TITLE = "Ouă Brahma de incubat – ouă fertile | Gilău, Cluj";
const DESC =
  "Ouă fertile Brahma Columbia și potârniche pentru incubat, de la părinți premiați la expoziții. Ridicare din Gilău, Cluj. Ghid de incubație pe 21 de zile.";

export const Route = createFileRoute("/oua-brahma-incubat")({
  head: () =>
    guideHead(TITLE, DESC, "/oua-brahma-incubat", faqs, {
      crumb: "Ouă Brahma de incubat",
      image: photoSrc("pui-si-oua-brahma-potarniche-de-vanzare"),
      keywords:
        "oua brahma, oua brahma de incubat, oua de incubat, oua fertile, oua pentru incubat, oua brahma pret, oua de incubat cluj, oua brahma columbia, oua brahma potarniche, oua gaini de rasa",
    }),
  component: () => (
    <GuidePage
      eyebrow="Păsări de rasă · Ouă de incubat"
      crumb="Ouă Brahma de incubat"
      title="Ouă Brahma de incubat, de la părinți premiați"
      intro="Vrei să-ți crești singur Brahma? Avem ouă fertile Brahma Columbia galben-negru și Brahma potârniche, din păsările noastre crescute în aer liber în Gilău și premiate la expoziții avicole. Mai jos ai și pașii de incubație."
      image={photoSrc("pui-si-oua-brahma-potarniche-de-vanzare", true)}
      imageAlt="Ouă și pui Brahma potârniche de vânzare la PET SHOP MAIER Gilău"
      waInterest="ouă Brahma de incubat (Columbia / potârniche). Aș vrea ... ouă."
      sections={[
        {
          h: "Ce ouă avem",
          p: "Ouăle vin direct din efectivul nostru, de la găini și cocoși selectați pentru conformație și penaj.",
          list: [
            "Brahma Columbia galben-negru",
            "Brahma potârniche",
            "Părinți premiați la expoziții avicole",
            "Stoc după sezon, rezervare pe WhatsApp",
          ],
        },
        {
          h: "Înainte de incubator",
          p: "Cum păstrezi ouăle până le pui la incubat contează la fel de mult ca incubatorul.",
          list: [
            "Nu le spăla: pierd stratul protector",
            "Păstrează-le la răcoare, nu în frigider",
            "Cu vârful în jos, cel mult 7 zile",
            "Lasă-le câteva ore la temperatura camerei înainte de incubator",
          ],
        },
        {
          h: "Incubația pe scurt",
          p: "Urmează instrucțiunile incubatorului tău. Ca reper general pentru ouăle de găină:",
          list: [
            "Durată: aproximativ 21 de zile",
            "Temperatură: în jur de 37,5 °C",
            "Întoarcerea ouălor de câteva ori pe zi, până în ziua 18",
            "Din ziua 18: fără întoarcere și umiditate mai mare, până la eclozare",
          ],
        },
        {
          h: "După eclozare",
          p: "Lasă puii în incubator până se usucă, apoi mută-i într-un loc cald, cu furaj starter pentru pui și apă curată. Găsești în magazin și furajele pentru primele săptămâni.",
        },
      ]}
      photos={byTag("brahma")}
      faqs={faqs}
      related={[
        { to: "/pui-brahma", label: "Pui Brahma de vânzare" },
        { to: "/furaje-pui", label: "Furaje pentru pui" },
        { to: "/furaje-gaini", label: "Furaje găini ouătoare" },
      ]}
    />
  ),
});
