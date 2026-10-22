import { createFileRoute } from "@tanstack/react-router";
import { GuidePage, guideHead } from "@/components/site";
import { byTag, photoSrc } from "@/lib/gallery";

const faqs = [
  {
    q: "Unde găsesc Furaje MAN în Cluj?",
    a: "La PET SHOP MAIER din Gilău, județul Cluj, la 15 minute de Cluj-Napoca. Avem Furaje MAN în saci de 5 kg și 10 kg, plus saci mari pentru fermă.",
  },
  {
    q: "Ce tipuri de Furaje MAN aveți?",
    a: "Nutreț combinat pentru găini ouătoare, pui (starter și creștere), curcani, prepelițe, pești și furaj granulat pentru vaci de lapte cu 22% proteină. Întreabă-ne pe WhatsApp ce e pe stoc azi.",
  },
  {
    q: "Cât furaj mănâncă o găină pe zi?",
    a: "O găină ouătoare adultă consumă în medie 110–130 g de nutreț combinat pe zi. Pentru calculul exact pe numărul tău de păsări, folosește calculatorul de furaje de pe site.",
  },
  {
    q: "Se vinde și la sac mic?",
    a: "Da, multe sortimente MAN sunt disponibile în saci de 5 kg și 10 kg – practic pentru gospodării mici, prepelițe sau pești.",
  },
  {
    q: "Pot rezerva furajele înainte să vin?",
    a: "Da, scrie-ne pe WhatsApp ce și câți saci îți trebuie și îi pregătim pentru ridicare din Gilău.",
  },
];

const TITLE =
  "Furaje MAN Cluj – găini ouătoare, pui, curcani, prepelițe, vaci | PET SHOP MAIER Gilău";
const DESC =
  "Furaje MAN în saci de 5 kg, 10 kg și saci mari: nutreț combinat pentru găini ouătoare, pui, curcani, prepelițe, pești și vaci de lapte. Magazin de furaje în Gilău, jud. Cluj.";

export const Route = createFileRoute("/furaje-man")({
  head: () =>
    guideHead(TITLE, DESC, "/furaje-man", faqs, {
      crumb: "Furaje MAN",
      image: photoSrc("furaje-man-10kg-gaini-ouatoare"),
      keywords:
        "furaje man, nutret combinat gaini ouatoare, furaj pui, furaj curcani, hrana prepelite, furaje cluj, furaje gilau, magazin furaje",
    }),
  component: () => (
    <GuidePage
      eyebrow="Furaje pentru fermă"
      crumb="Furaje MAN"
      title="Furaje MAN – nutreț combinat pentru fiecare animal din curte"
      intro="Furaje MAN sunt rețete complete, gata de dat, pentru păsări, pești și animale mari. La PET SHOP MAIER le găsești în saci mici, ușor de cărat, dar și în saci mari pentru fermă."
      image={photoSrc("furaje-man-10kg-gaini-ouatoare", true)}
      imageAlt="Saci de 10 kg Furaje MAN pentru găini ouătoare la PET SHOP MAIER Gilău"
      waInterest="Furaje MAN (ce sortimente aveți pe stoc?)."
      sections={[
        {
          h: "Sortimente Furaje MAN",
          p: "Fiecare rețetă are nivelul de proteină potrivit vârstei și scopului.",
          list: [
            "Găini ouătoare – coajă tare, ouat constant",
            "Pui – starter (0–4 săptămâni) și creștere",
            "Curcani și boboci de curcă – proteină ridicată pentru creștere rapidă",
            "Prepelițe – granulație fină, ouat intens",
            "Pești – granule pentru iazuri și heleșteie",
            "Vaci de lapte – furaj granulat cu 22% proteină",
          ],
        },
        {
          h: "Saci de 5 kg, 10 kg și saci mari",
          p: "Pentru câteva găini sau prepelițe, sacul de 5–10 kg rămâne proaspăt până îl termini. Pentru fermă, sacii mari scad costul pe kilogram.",
        },
        {
          h: "Cum alegi furajul corect",
          p: "Nu da furaj de ouătoare puilor mici (prea mult calciu) și nici starter găinilor adulte (prea multă proteină, cost inutil). Pentru păsări crescute liber, poți completa cu porumb boabe și tărâțe, dar nutrețul combinat trebuie să rămână baza.",
        },
      ]}
      photos={byTag("furaje")}
      faqs={faqs}
      related={[
        { to: "/oferta-furaje", label: "Ofertă tărâțe și furaj combinat" },
        { to: "/hrana-prepelite", label: "Hrană prepelițe" },
        { to: "/furaje-vaci-de-lapte", label: "Furaje vaci de lapte" },
      ]}
    />
  ),
});
