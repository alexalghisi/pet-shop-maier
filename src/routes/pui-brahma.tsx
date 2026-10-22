import { createFileRoute } from "@tanstack/react-router";
import { GuidePage, guideHead } from "@/components/site";
import { byTag, photoSrc } from "@/lib/gallery";

const faqs = [
  {
    q: "Aveți pui Brahma de vânzare?",
    a: "Da. Avem pui Brahma Columbia galben-negru și Brahma potârniche de 2–3 luni, cu schema completă de vaccinare. Scrie-ne pe WhatsApp pentru disponibilitate și rezervare.",
  },
  {
    q: "Vindeți ouă de Brahma pentru incubat?",
    a: "Da, avem ouă fertile Brahma pentru incubație, de la părinți premiați la expoziții avicole. Stocul variază în funcție de sezon, așa că e bine să le rezervi din timp.",
  },
  {
    q: "Cu ce sunt vaccinați puii Brahma?",
    a: "Puii primesc schema completă: pseudopesta aviară, boala lui Marek, bursita (Gumboro), bronșita infecțioasă și coccidioza.",
  },
  {
    q: "De unde pot ridica puii?",
    a: "Din Gilău, județul Cluj (Strada Eroilor 1), la 15 minute de Cluj-Napoca și Florești.",
  },
  {
    q: "Ce hrană le dau puilor Brahma?",
    a: "Până la 6–8 săptămâni, nutreț combinat starter pentru pui, apoi creștere și, de la ouat, furaj pentru găini ouătoare. Găsești Furaje MAN pentru fiecare etapă în magazin.",
  },
  {
    q: "Cât de mari se fac găinile Brahma?",
    a: "Brahma este una dintre cele mai mari rase de găini: cocoșii ajung frecvent la 4–5 kg, găinile la 3–4 kg. Sunt liniștite, rezistente la frig și foarte decorative.",
  },
];

const TITLE = "Pui Brahma de vânzare Cluj – pui vaccinați și ouă de incubat | PET SHOP MAIER Gilău";
const DESC =
  "Pui Brahma Columbia galben-negru și potârniche de 2–3 luni, vaccinați, plus ouă fertile Brahma pentru incubat, de la părinți campioni la expoziții. Gilău, jud. Cluj.";

export const Route = createFileRoute("/pui-brahma")({
  head: () =>
    guideHead(TITLE, DESC, "/pui-brahma", faqs, {
      crumb: "Pui Brahma",
      image: photoSrc("pui-si-oua-brahma-columbia-galben-negru-de-vanzare"),
      keywords:
        "pui brahma de vanzare, oua brahma incubat, gaini brahma, brahma columbia, brahma potarniche, pui brahma cluj, gaini de rasa cluj",
    }),
  component: () => (
    <GuidePage
      eyebrow="Păsări de rasă · Brahma"
      crumb="Pui Brahma"
      title="Pui și ouă Brahma de vânzare – campioni la expoziții"
      intro="Creștem Brahma Columbia galben-negru și Brahma potârniche, în aer liber, în Gilău. Puii pleacă de la noi la 2–3 luni, cu toate vaccinurile făcute, iar ouăle fertile vin din părinți premiați la expozițiile avicole."
      image={photoSrc("pui-si-oua-brahma-columbia-galben-negru-de-vanzare", true)}
      imageAlt="Pui și ouă Brahma Columbia galben-negru de vânzare la PET SHOP MAIER Gilău"
      waInterest="puii / ouăle Brahma (Columbia sau potârniche)."
      sections={[
        {
          h: "Ce găsești la noi",
          p: "Două varietăți populare, crescute natural și selectate pentru conformație și penaj.",
          list: [
            "Brahma Columbia galben-negru – penaj auriu cu negru pe gât și coadă",
            "Brahma potârniche – penaj maroniu, desen fin, foarte rustice",
            "Pui de 2–3 luni, gata vaccinați",
            "Ouă fertile de calitate pentru incubație",
          ],
        },
        {
          h: "Puii sunt vaccinați și protejați",
          p: "Fiecare pui primește schema completă de vaccinare înainte să plece în noua gospodărie.",
          list: [
            "Pseudopesta aviară (Newcastle)",
            "Boala lui Marek",
            "Bursita infecțioasă (Gumboro)",
            "Bronșita infecțioasă",
            "Coccidioza",
          ],
        },
        {
          h: "De ce Brahma?",
          p: "Brahma sunt „gigantii blânzi” ai curții: păsări foarte mari, calme cu copiii, rezistente la iernile din Ardeal și cu penaj spectaculos. Ouă în special iarna, când multe rase se opresc, și sunt potrivite atât pentru hobby, cât și pentru expoziții.",
        },
        {
          h: "Premiați la expoziții",
          p: "Părinții puilor noștri au obținut diplome la expozițiile avicole din Cluj-Napoca. Poți vedea mai jos pozele reale de la expoziții și din curte.",
        },
        {
          h: "Hrana potrivită pentru Brahma",
          p: "Fiind o rasă mare, Brahma au nevoie de proteină suficientă în creștere. Avem în magazin tot ce trebuie: Furaje MAN starter și creștere pentru pui, furaj pentru găini ouătoare, porumb boabe și tărâțe. Calculează rapid de câți saci ai nevoie cu calculatorul nostru de furaje.",
        },
      ]}
      photos={byTag("brahma")}
      faqs={faqs}
      related={[
        { to: "/furaje-gaini", label: "Furaje pentru găini" },
        { to: "/furaje-man", label: "Furaje MAN" },
        { to: "/calculator-furaje", label: "Calculator furaje" },
      ]}
    />
  ),
});
