import { createFileRoute } from "@tanstack/react-router";
import { GuidePage, guideHead } from "@/components/site";
import { productOfferLd } from "@/lib/seo";
import { GALLERY, photoSrc } from "@/lib/gallery";

const faqs = [
  {
    q: "Cât costă furajul combinat?",
    a: "La PET SHOP MAIER din Gilău, furajul combinat măcinat universal costă 60 lei sacul de 30 kg, adică 2 lei pe kilogram.",
  },
  {
    q: "Pentru ce animale e bun furajul combinat universal?",
    a: "Pentru găini ouătoare și de carne, curcani, rațe, gâște, porci și iepuri. Este un amestec de cereale, proteine, vitamine și minerale.",
  },
  {
    q: "Cât ține un sac de 30 kg la găini?",
    a: "O găină mănâncă în jur de 110–130 g pe zi. La 10 găini, un sac de 30 kg ține aproximativ 3–4 săptămâni.",
  },
  {
    q: "Furaj combinat sau porumb?",
    a: "Porumbul singur dă energie, dar are puțină proteină și puțin calciu. Furajul combinat are rația deja echilibrată; porumbul și tărâțele pot completa.",
  },
  {
    q: "De unde îl cumpăr în Cluj?",
    a: "Din Gilău, Strada Eroilor 1, la 15 minute de Florești și 20 de minute de Cluj-Napoca. Deschis 7 zile din 7. Rezervă pe WhatsApp la 0758 639 799.",
  },
];

const TITLE = "Furaj combinat la sac 30 kg – 60 lei | Gilău, Cluj";
const DESC =
  "Furaj combinat măcinat universal, 60 lei sacul de 30 kg (2 lei/kg), pentru găini, curcani, rațe, gâște, porci și iepuri. Gilău, județul Cluj, deschis zilnic. WhatsApp 0758 639 799.";
const IMG = photoSrc("oferta-tarate-furaj-combinat-gilau");

export const Route = createFileRoute("/furaj-combinat")({
  head: () =>
    guideHead(TITLE, DESC, "/furaj-combinat", faqs, {
      crumb: "Furaj combinat",
      image: IMG,
      keywords:
        "furaj combinat, furaj combinat pret, furaj combinat gaini, furaj combinat porci, furaj macinat, nutret combinat, furaj combinat sac 30 kg, furaj combinat cluj, furaj combinat gilau",
      ld: [
        productOfferLd({
          name: "Furaj combinat măcinat universal – sac 30 kg",
          description:
            "Furaj combinat măcinat universal la sac de 30 kg, pentru găini, curcani, rațe, gâște, porci și iepuri.",
          path: "/furaj-combinat",
          image: IMG,
          price: "60",
        }),
      ],
    }),
  component: () => (
    <GuidePage
      eyebrow="Furaje · Furaj combinat"
      crumb="Furaj combinat"
      title="Furaj combinat măcinat universal – 60 lei sacul de 30 kg"
      intro="Un singur sac pentru toată curtea: furaj combinat măcinat universal pentru găini, curcani, rațe, gâște, porci și iepuri. 60 lei sacul de 30 kg, în Gilău, județul Cluj."
      image={photoSrc("oferta-tarate-furaj-combinat-gilau", true)}
      imageAlt="Ofertă furaj combinat măcinat universal 60 lei sacul de 30 kg la PET SHOP MAIER Gilău"
      waInterest="furaj combinat la sac de 30 kg. Aș vrea ... saci."
      priceBox={[
        {
          label: "Furaj combinat măcinat universal",
          price: "60 lei",
          unit: "sac de 30 kg · 2 lei/kg",
        },
        { label: "Tărâțe", price: "40 lei", unit: "sac de 20 kg · 2 lei/kg" },
      ]}
      sections={[
        {
          h: "Ce este furajul combinat",
          p: "Furajul combinat (nutrețul combinat) este un amestec gata făcut de cereale măcinate, surse de proteină, vitamine și minerale. Nu mai trebuie să macini și să amesteci acasă: îl dai direct din sac.",
        },
        {
          h: "Pentru ce animale",
          p: "Varianta universală merge la toată curtea:",
          list: ["Găini ouătoare și pui de carne", "Curcani", "Rațe și gâște", "Porci", "Iepuri"],
        },
        {
          h: "Cât ține un sac",
          p: "Depinde de câte animale ai. Ca reper, 10 găini consumă în jur de 1,1–1,3 kg pe zi, deci un sac de 30 kg ține 3–4 săptămâni. Calculează exact, pe specii, cu calculatorul nostru de furaje.",
        },
        {
          h: "Când alegi furaj specializat",
          p: "Pentru pui mici, curcani în creștere, prepelițe sau găini în plin ouat, un furaj dedicat etapei dă rezultate mai bune. Avem în magazin Furaje MAN pe categorii, la saci de 5 și 10 kg.",
        },
        {
          h: "Cum păstrezi furajul",
          p: "La loc uscat și răcoros, în sacul închis sau într-un butoi cu capac, ferit de rozătoare. Furajul măcinat se consumă ideal în 4–6 săptămâni de la deschidere.",
        },
      ]}
      photos={GALLERY.filter((p) =>
        [
          "oferta-tarate-furaj-combinat-gilau",
          "furaje-man-sac-mare",
          "furaje-man-10kg-gaini-ouatoare",
          "furaje-man-10kg-pui",
          "porumb-boabe-30kg-calitate-superioara",
        ].includes(p.slug),
      )}
      searches={[
        "furaj combinat pret",
        "furaj combinat gaini",
        "furaj combinat porci",
        "nutret combinat",
        "furaj macinat",
        "furaj combinat cluj",
      ]}
      faqs={faqs}
      related={[
        { to: "/tarate", label: "Tărâțe la sac 20 kg" },
        { to: "/furaje-gaini", label: "Furaj găini ouătoare" },
        { to: "/furaje-man", label: "Furaje MAN" },
        { to: "/porumb-boabe", label: "Porumb boabe" },
        { to: "/calculator-furaje", label: "Calculator furaje" },
        { to: "/oferta-furaje", label: "Ofertă furaje" },
      ]}
    />
  ),
});
