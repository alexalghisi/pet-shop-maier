import { createFileRoute } from "@tanstack/react-router";
import { GuidePage, guideHead } from "@/components/site";
import { byTag, photoSrc } from "@/lib/gallery";

const faqs = [
  {
    q: "Cât de mari se fac găinile Brahma?",
    a: "Brahma este una dintre cele mai mari rase de găini: cocoșii ajung frecvent la 4–5 kg, iar găinile la 3–4 kg.",
  },
  {
    q: "Câte ouă face o găină Brahma?",
    a: "În jur de 120–150 de ouă pe an, cu coajă maronie deschisă. Ouă bine și iarna, când multe alte rase se opresc.",
  },
  {
    q: "La ce vârstă încep să ouă găinile Brahma?",
    a: "Mai târziu decât rasele ușoare: de regulă la 6–7 luni, pentru că sunt păsări mari, care cresc încet.",
  },
  {
    q: "Găinile Brahma rezistă la frig?",
    a: "Da. Penajul des și picioarele încălțate le fac foarte rezistente la iernile din Ardeal. Au nevoie doar de un adăpost uscat, fără curent.",
  },
  {
    q: "Unde găsesc găini Brahma de vânzare în Cluj?",
    a: "La PET SHOP MAIER din Gilău avem pui Brahma Columbia galben-negru și potârniche de 2–3 luni, vaccinați, și ouă fertile pentru incubat. Scrie-ne pe WhatsApp la 0758 639 799 pentru disponibilitate.",
  },
  {
    q: "Ce mănâncă găinile Brahma?",
    a: "Furaj pentru pui cu proteină multă în creștere, apoi furaj pentru găini ouătoare, completat cu porumb și tărâțe. Fiind o rasă mare, consumă mai mult decât o găină obișnuită.",
  },
];

const TITLE = "Găini Brahma – rasă uriașă, ouă și îngrijire | Cluj";
const DESC =
  "Găini Brahma: cât cresc, câte ouă fac, când încep să ouă și cum le îngrijești. Pui Brahma Columbia și potârniche vaccinați, de vânzare în Gilău, județul Cluj. WhatsApp 0758 639 799.";
const IMG = photoSrc("gaini-brahma-crescute-liber-gilau");

export const Route = createFileRoute("/gaini-brahma")({
  head: () =>
    guideHead(TITLE, DESC, "/gaini-brahma", faqs, {
      crumb: "Găini Brahma",
      image: IMG,
      keywords:
        "gaini brahma, gaini brahma de vanzare, gaina brahma, rasa brahma, brahma columbia, brahma potarniche, cocos brahma, gaini brahma oua, gaini brahma greutate, gaini de rasa cluj",
    }),
  component: () => (
    <GuidePage
      eyebrow="Păsări de rasă · Găini Brahma"
      crumb="Găini Brahma"
      title="Găini Brahma: uriașii blânzi ai curții"
      intro="Brahma este rasa pe care o creștem noi, în aer liber, în Gilău. Sunt păsări foarte mari, liniștite și spectaculoase. Aici găsești pe scurt tot ce trebuie să știi înainte să-ți iei: greutate, ouă, îngrijire și hrană."
      image={photoSrc("gaini-brahma-crescute-liber-gilau", true)}
      imageAlt="Găini Brahma crescute în aer liber la PET SHOP MAIER Gilău, județul Cluj"
      waInterest="găini / pui Brahma."
      sections={[
        {
          h: "Rasa pe scurt",
          p: "Brahma este o rasă grea, formată în secolul al XIX-lea din păsări asiatice mari. Se recunoaște ușor după talie, penajul bogat și picioarele acoperite cu pene.",
          list: [
            "Cocoș: 4–5 kg · Găină: 3–4 kg",
            "Ouă: circa 120–150 pe an, coajă maronie deschisă",
            "Încep să ouă la 6–7 luni",
            "Temperament calm, potrivit lângă copii",
          ],
        },
        {
          h: "Varietățile pe care le creștem",
          p: "Avem două varietăți, selectate pentru conformație și penaj, din părinți premiați la expozițiile avicole din Cluj-Napoca.",
          list: [
            "Brahma Columbia galben-negru – penaj auriu, cu negru pe gât și coadă",
            "Brahma potârniche – penaj maroniu, cu desen fin",
          ],
        },
        {
          h: "De ce să alegi Brahma",
          p: "Sunt rezistente la frig și ouă în special iarna. Nu zboară peste gard, așa că se țin ușor în curte. Cloștile sunt mame bune. Cresc însă încet și mănâncă mai mult decât rasele ușoare, deci nu sunt alegerea potrivită dacă vrei doar cât mai multe ouă.",
        },
        {
          h: "Adăpost și îngrijire",
          p: "Au nevoie de mai mult loc decât o găină obișnuită și de stinghii joase, late, ca să nu-și rănească picioarele la coborâre. Ține așternutul uscat: penele de pe picioare adună ușor noroi.",
        },
        {
          h: "Hrana pentru Brahma",
          p: "În creștere au nevoie de proteină suficientă: furaj starter și de creștere pentru pui, apoi furaj pentru găini ouătoare, cu porumb și tărâțe ca supliment. Toate le găsești la noi în magazin, iar numărul de saci îl afli cu calculatorul de furaje.",
        },
        {
          h: "Pui și ouă Brahma de vânzare",
          p: "Puii pleacă de la noi la 2–3 luni, cu schema completă de vaccinare. Avem și ouă fertile pentru incubat, în funcție de sezon. Ridicarea se face din Gilău, Strada Eroilor 1.",
        },
      ]}
      photos={byTag("brahma")}
      searches={[
        "gaini brahma",
        "gaini brahma de vanzare",
        "pui brahma de vanzare",
        "brahma columbia",
        "brahma potarniche",
        "cocos brahma",
      ]}
      faqs={faqs}
      related={[
        { to: "/pui-brahma", label: "Pui Brahma de vânzare" },
        { to: "/oua-brahma-incubat", label: "Ouă Brahma de incubat" },
        { to: "/furaje-gaini", label: "Furaj găini ouătoare" },
        { to: "/furaje-pui", label: "Furaje pentru pui" },
        { to: "/calculator-furaje", label: "Calculator furaje" },
      ]}
    />
  ),
});
