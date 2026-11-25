import { createFileRoute } from "@tanstack/react-router";
import { GuidePage, guideHead } from "@/components/site";
import { productOfferLd } from "@/lib/seo";
import { GALLERY, photoSrc } from "@/lib/gallery";

const faqs = [
  {
    q: "Cât costă un sac de tărâțe?",
    a: "La PET SHOP MAIER din Gilău, tărâțele costă 40 lei sacul de 20 kg, adică 2 lei pe kilogram.",
  },
  {
    q: "De unde cumpăr tărâțe la sac în Cluj?",
    a: "Din Gilău, Strada Eroilor 1, la 15 minute de Florești și 20 de minute de Cluj-Napoca. Suntem deschiși 7 zile din 7; scrie-ne pe WhatsApp la 0758 639 799 și îți pregătim sacii.",
  },
  {
    q: "La ce animale se dau tărâțele?",
    a: "La găini ouătoare și de carne, porci, iepuri, viței și alte animale de fermă. Se dau în amestec cu alte furaje, nu ca hrană unică.",
  },
  {
    q: "Câte tărâțe dau la găini?",
    a: "Ca orientare, tărâțele pot fi 10–15% din rația zilnică a găinilor, amestecate cu furaj combinat sau cereale. Prea multe tărâțe scad numărul de ouă, pentru că au puțină energie.",
  },
  {
    q: "Cum păstrez sacul de tărâțe?",
    a: "La loc uscat, răcoros și aerisit, ridicat de pe pardoseală. Tărâțele trag umezeală ușor, așa că e mai bine să cumperi cât consumi în câteva săptămâni.",
  },
  {
    q: "Pot rezerva mai mulți saci?",
    a: "Da. Trimite-ne pe WhatsApp numărul de saci și îi ținem pregătiți pentru ridicare din Gilău.",
  },
];

const TITLE = "Tărâțe la sac 20 kg – 40 lei | Gilău, Cluj";
const DESC =
  "Tărâțe pentru animale la sac de 20 kg, 40 lei (2 lei/kg), în Gilău, județul Cluj. Pentru găini, porci, iepuri și viței. Deschis 7 zile din 7. Rezervă pe WhatsApp: 0758 639 799.";
const IMG = photoSrc("oferta-tarate-furaj-combinat-gilau");

export const Route = createFileRoute("/tarate")({
  head: () =>
    guideHead(TITLE, DESC, "/tarate", faqs, {
      crumb: "Tărâțe",
      image: IMG,
      keywords:
        "tarate, tarate pret, tarate la sac, sac tarate 20 kg, tarate de grau pret, tarate animale, tarate gaini, tarate porci, tarate cluj, tarate gilau, tarate floresti",
      ld: [
        productOfferLd({
          name: "Tărâțe – sac 20 kg",
          description:
            "Tărâțe pentru animale la sac de 20 kg, pentru găini, porci, iepuri și viței.",
          path: "/tarate",
          image: IMG,
          price: "40",
        }),
      ],
    }),
  component: () => (
    <GuidePage
      eyebrow="Furaje · Tărâțe"
      crumb="Tărâțe"
      title="Tărâțe la sac de 20 kg – 40 lei"
      intro="Tărâțe pentru găini, porci, iepuri și viței, la sac de 20 kg, cu 40 lei sacul. Le găsești în Gilău, la 15 minute de Florești și 20 de minute de Cluj-Napoca, 7 zile din 7."
      image={photoSrc("oferta-tarate-furaj-combinat-gilau", true)}
      imageAlt="Ofertă tărâțe 40 lei sacul de 20 kg la PET SHOP MAIER Gilău, județul Cluj"
      waInterest="tărâțe la sac de 20 kg. Aș vrea ... saci."
      priceBox={[
        { label: "Tărâțe", price: "40 lei", unit: "sac de 20 kg · 2 lei/kg" },
        {
          label: "Furaj combinat măcinat universal",
          price: "60 lei",
          unit: "sac de 30 kg · 2 lei/kg",
        },
      ]}
      sections={[
        {
          h: "Ce sunt tărâțele și la ce ajută",
          p: "Tărâțele sunt învelișul bobului de cereale, rămas după măcinat. Au multe fibre, ceva proteină și fosfor, și ajută digestia. Sunt un furaj de completare ieftin: întind rația și dau volum, dar nu țin loc de furaj combinat sau de cereale.",
        },
        {
          h: "La ce animale se dau",
          p: "Se folosesc în aproape orice gospodărie:",
          list: [
            "Găini ouătoare și pui de carne – în amestec umed sau uscat",
            "Porci – în uruială, mai ales la scroafe și la porcii în creștere",
            "Iepuri – alături de fân și granule",
            "Viței, oi și capre – în amestecul de concentrate",
          ],
        },
        {
          h: "Cât dai",
          p: "Ca orientare, tărâțele pot ajunge la 10–15% din rația găinilor și la 15–25% din amestecul pentru porci la îngrășat. Rația exactă depinde de vârstă și de celelalte furaje; dacă nu ești sigur, întreabă-ne și te ajutăm să o împarți. Pentru numărul de saci, folosește calculatorul de furaje.",
        },
        {
          h: "Tărâțe cu ce se amestecă",
          p: "Cel mai des cu porumb măcinat, furaj combinat, grâu sau orz. La găini mulți le opăresc cu apă caldă iarna, împreună cu resturi de legume. Pune mereu apă proaspătă la discreție: tărâțele absorb multă apă.",
        },
        {
          h: "Cum ridici sacii",
          p: "Vii direct la magazin, pe Strada Eroilor 1, în centrul comunei Gilău, cu parcare ușoară. Dacă vrei mai mulți saci, anunță-ne pe WhatsApp și îi pregătim dinainte.",
        },
      ]}
      photos={GALLERY.filter((p) =>
        [
          "oferta-tarate-furaj-combinat-gilau",
          "porumb-boabe-30kg-calitate-superioara",
          "furaje-man-sac-mare",
          "furaje-man-10kg-gaini-ouatoare",
        ].includes(p.slug),
      )}
      searches={[
        "tarate pret",
        "tarate la sac",
        "sac tarate 20 kg",
        "tarate gaini",
        "tarate porci",
        "tarate cluj",
        "tarate gilau",
      ]}
      faqs={faqs}
      related={[
        { to: "/furaj-combinat", label: "Furaj combinat la sac 30 kg" },
        { to: "/porumb-boabe", label: "Porumb boabe" },
        { to: "/furaje-gaini", label: "Furaj găini ouătoare" },
        { to: "/calculator-furaje", label: "Calculator furaje" },
        { to: "/oferta-furaje", label: "Ofertă furaje" },
        { to: "/furaje-floresti", label: "Furaje Florești" },
      ]}
    />
  ),
});
