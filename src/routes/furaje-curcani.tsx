import { createFileRoute } from "@tanstack/react-router";
import { GuidePage, guideHead } from "@/components/site";
import { GALLERY, photoSrc } from "@/lib/gallery";

const faqs = [
  {
    q: "Ce furaj dau bobocilor de curcă?",
    a: "Un furaj combinat pentru curcani, cu proteină mai mare decât cel pentru puii de găină. Bobocii de curcă cresc foarte repede și au nevoie de mai multă proteină în primele săptămâni. La noi găsești Furaje MAN pentru curcani și boboci de curcă.",
  },
  {
    q: "Pot hrăni curcanii cu furaj de găini?",
    a: "Nu e recomandat, mai ales la boboci. Furajul de găini are prea puțină proteină pentru curcani, iar cel de ouătoare are și prea mult calciu. Rezultatul e o creștere lentă și picioare slabe.",
  },
  {
    q: "Pot da curcanilor porumb?",
    a: "La curcanii mari, porumbul poate completa rația, mai ales spre final, dar nu înlocuiește furajul combinat. La boboci, baza trebuie să fie furajul pentru curcani.",
  },
  {
    q: "Unde găsesc furaje pentru curcani în Cluj?",
    a: "La PET SHOP MAIER, Strada Eroilor 1, Gilău, la 15 minute de Cluj-Napoca și Florești. Scrie-ne pe WhatsApp la 0758 639 799 și pregătim sacii pentru ridicare.",
  },
];

const TITLE = "Furaje pentru curcani și boboci de curcă | Gilău, Cluj";
const DESC =
  "Furaje MAN pentru curcani și boboci de curcă: proteină mare pentru creștere rapidă. Le găsești la PET SHOP MAIER Gilău, la 15 minute de Cluj-Napoca.";

export const Route = createFileRoute("/furaje-curcani")({
  head: () =>
    guideHead(TITLE, DESC, "/furaje-curcani", faqs, {
      crumb: "Furaje curcani",
      image: photoSrc("furaje-man-curcani-boboci"),
      keywords:
        "furaje curcani, furaj curcani, hrana curcani, mancare curcani, furaj boboci curca, hrana boboci curca, nutret combinat curcani, furaje curcani cluj, furaje curcani gilau",
    }),
  component: () => (
    <GuidePage
      eyebrow="Furaje · Curcani"
      crumb="Furaje curcani"
      title="Furaje pentru curcani și boboci de curcă"
      intro="Curcanii cresc mai repede decât găinile și au nevoie de mai multă proteină, mai ales în primele săptămâni. Un furaj făcut pentru curcani înseamnă boboci care se țin pe picioare și curcani care ajung la greutate fără luni în plus."
      image={photoSrc("furaje-man-curcani-boboci", true)}
      imageAlt="Saci Furaje MAN pentru curcani și boboci de curcă la PET SHOP MAIER Gilău"
      waInterest="furaj pentru curcani / boboci de curcă. Am ... păsări."
      sections={[
        {
          h: "De ce nu merge furajul de găini",
          p: "Bobocii de curcă au nevoie de mai multă proteină decât puii de găină. Cu furaj de găini cresc încet și fac mai des probleme la picioare.",
          list: [
            "Proteină mai mare pentru creștere rapidă",
            "Granulație potrivită pentru boboci",
            "Vitamine și minerale pentru oase și picioare",
            "Fără exces de calciu, ca la furajul de ouătoare",
          ],
        },
        {
          h: "Primele săptămâni sunt cele mai sensibile",
          p: "Bobocii de curcă sunt mai pretențioși decât puii de găină. Ține-i la cald și uscat, cu furaj și apă la îndemână de la început. Unii boboci nu găsesc singuri hrana în primele zile: presară furaj pe o suprafață deschisă și ciocănește ușor cu degetul lângă el, ca să-i atragi.",
        },
        {
          h: "Curcani mari: furaj plus completări",
          p: "Pe măsură ce cresc, curcanii pot primi și porumb, iarbă sau verdețuri, dar furajul combinat rămâne baza rației. Porumbul singur îngrașă, dar nu construiește carne.",
        },
        {
          h: "Saci mici sau mari",
          p: "Pentru câțiva curcani de curte, sacii mici rămân proaspeți până îi termini. Pentru un lot mai mare, sacii mari sunt mai avantajoși. Întreabă-ne ce avem pe stoc.",
        },
      ]}
      photos={GALLERY.filter((p) => ["furaje-man-curcani-boboci", "furaje-man-sac-mare", "porumb-boabe-30kg-calitate-superioara"].includes(p.slug))}
      faqs={faqs}
      related={[
        { to: "/furaje-pui", label: "Furaje pentru pui" },
        { to: "/furaje-man", label: "Furaje MAN" },
        { to: "/porumb-boabe", label: "Porumb boabe la sac" },
        { to: "/calculator-furaje", label: "Calculator furaje" },
      ]}
    />
  ),
});
