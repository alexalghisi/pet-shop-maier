import { createFileRoute } from "@tanstack/react-router";
import { GuidePage, guideHead } from "@/components/site";
import { GALLERY, photoSrc } from "@/lib/gallery";

const faqs = [
  {
    q: "Ce furaj dau puilor de găină în primele săptămâni?",
    a: "Furaj starter pentru pui, cu proteină ridicată, din prima zi până la aproximativ 4 săptămâni. Apoi treci treptat pe furaj de creștere. La PET SHOP MAIER avem Furaje MAN pentru pui, starter și creștere.",
  },
  {
    q: "Pot da puilor furaj pentru găini ouătoare?",
    a: "Nu. Furajul de ouătoare are mult calciu, potrivit pentru găinile care ouă, dar prea mult pentru puii în creștere. Treci pe furaj de ouătoare abia când găinușele încep să ouă.",
  },
  {
    q: "Pot da puilor mici porumb?",
    a: "Porumbul întreg e prea mare și prea sărac în proteină pentru puii mici. Baza rămâne furajul combinat pentru pui; porumbul spart poate completa rația la tineretul mai mare.",
  },
  {
    q: "În ce saci găsesc furaj pentru pui?",
    a: "Furaje MAN pentru pui se găsesc la noi în saci de 5 kg și 10 kg, practici pentru câțiva pui, iar pentru mai mulți pui avem și saci mari. Întreabă pe WhatsApp ce e pe stoc.",
  },
  {
    q: "Aveți și furaj pentru pui de carne?",
    a: "Întreabă-ne pe WhatsApp la 0758 639 799: îți spunem ce sortiment avem pe stoc pentru puii de carne și cum îl folosești.",
  },
];

const TITLE = "Furaje pentru pui – starter și creștere | Gilău, Cluj";
const DESC =
  "Furaj pentru pui de găină: starter de la o zi, apoi creștere. Furaje MAN în saci de 5 și 10 kg la PET SHOP MAIER Gilău, la 15 minute de Cluj-Napoca.";

export const Route = createFileRoute("/furaje-pui")({
  head: () =>
    guideHead(TITLE, DESC, "/furaje-pui", faqs, {
      crumb: "Furaje pui",
      image: photoSrc("furaje-man-10kg-pui"),
      keywords:
        "furaje pui, furaj pui, hrana pui, mancare pui, furaj starter pui, furaj crestere pui, nutret combinat pui, furaje pui cluj, furaje pui gilau, hrana pui de gaina",
    }),
  component: () => (
    <GuidePage
      eyebrow="Furaje · Pui"
      crumb="Furaje pui"
      title="Furaje pentru pui: starter și creștere"
      intro="Primele săptămâni decid cât de sănătoasă și productivă va fi găina. Puii au nevoie de mai multă proteină decât păsările adulte și de un furaj cu granulație potrivită. La noi găsești Furaje MAN pentru pui, în saci mici și mari."
      image={photoSrc("furaje-man-10kg-pui", true)}
      imageAlt="Sac de 10 kg Furaje MAN pentru pui la PET SHOP MAIER Gilău"
      waInterest="furaj pentru pui (starter / creștere). Am ... pui."
      sections={[
        {
          h: "Furajul potrivit pentru fiecare vârstă",
          p: "Schimbă furajul treptat, amestecând câteva zile cel vechi cu cel nou, ca să nu dai peste cap digestia puilor.",
          list: [
            "0–4 săptămâni: starter pentru pui, cu proteină ridicată",
            "4–18 săptămâni: furaj de creștere pentru tineret",
            "De la primul ou: furaj pentru găini ouătoare",
            "Apă proaspătă la discreție, mereu, în adăpătoare curată",
          ],
        },
        {
          h: "Greșeli frecvente la hrana puilor",
          p: "Cele mai multe probleme apar când puii primesc hrana adulților sau doar cereale.",
          list: [
            "Furaj de ouătoare la pui: prea mult calciu",
            "Doar porumb sau mălai: prea puțină proteină, creștere lentă",
            "Furaj umezit lăsat în căldură: se acrește repede",
            "Schimbarea bruscă a furajului: diaree și stres",
          ],
        },
        {
          h: "Cât furaj îți trebuie",
          p: "Consumul crește în fiecare săptămână, odată cu puii. Pentru câțiva pui de curte, un sac de 5 sau 10 kg rămâne proaspăt până îl termini. Pentru un lot mai mare, sacii mari scad prețul pe kilogram. Calculatorul de furaje de pe site te ajută să estimezi câți saci îți trebuie.",
        },
        {
          h: "Pui Brahma crescuți la noi",
          p: "Creștem pui Brahma Columbia și potârniche în Gilău, pe aceleași furaje pe care le vindem. Dacă iei pui de la noi, îți spunem exact ce au mâncat până acum, ca să continui fără schimbări bruște.",
        },
      ]}
      photos={GALLERY.filter((p) =>
        [
          "furaje-man-10kg-pui",
          "furaje-man-saci-5kg",
          "closca-brahma-cu-pui",
          "pui-brahma-2-3-luni-vaccinati",
        ].includes(p.slug),
      )}
      faqs={faqs}
      related={[
        { to: "/furaje-gaini", label: "Furaje găini ouătoare" },
        { to: "/pui-brahma", label: "Pui Brahma de vânzare" },
        { to: "/calculator-furaje", label: "Calculator furaje" },
        { to: "/furaje-man", label: "Furaje MAN" },
      ]}
    />
  ),
});
