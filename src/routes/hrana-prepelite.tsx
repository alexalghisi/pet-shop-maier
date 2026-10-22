import { createFileRoute } from "@tanstack/react-router";
import { GuidePage, guideHead } from "@/components/site";
import { GALLERY, photoSrc } from "@/lib/gallery";

const faqs = [
  {
    q: "Cât mănâncă o prepeliță pe zi?",
    a: "O prepeliță adultă ouătoare consumă în jur de 25–35 g de nutreț combinat pe zi. Calculează necesarul pentru tot efectivul cu calculatorul de furaje de pe site.",
  },
  {
    q: "Ce furaj e bun pentru prepelițe ouătoare?",
    a: "Un nutreț combinat cu 20–24% proteină și calciu pentru coajă – de exemplu Furaje MAN pentru prepelițe, în saci de 10 kg.",
  },
  {
    q: "Pot da prepelițelor furaj de găini?",
    a: "Pe termen scurt da, dar prepelițele au nevoie de mai multă proteină și de o granulație mai fină. Pentru ouat constant, folosește furaj dedicat.",
  },
  {
    q: "Unde cumpăr hrană pentru prepelițe lângă Cluj?",
    a: "La PET SHOP MAIER în Gilău, la 15 minute de Cluj-Napoca. Scrie-ne pe WhatsApp să-ți păstrăm saci.",
  },
];

const TITLE = "Hrană pentru prepelițe – furaj prepelițe ouătoare Cluj | PET SHOP MAIER Gilău";
const DESC =
  "Furaj pentru prepelițe ouătoare și pui de prepeliță (Furaje MAN, saci de 10 kg) în Gilău, jud. Cluj. Cât mănâncă o prepeliță pe zi și cum o hrănești corect.";

export const Route = createFileRoute("/hrana-prepelite")({
  head: () =>
    guideHead(TITLE, DESC, "/hrana-prepelite", faqs, {
      crumb: "Hrană prepelițe",
      image: photoSrc("furaje-man-10kg-prepelite"),
      keywords:
        "hrana prepelite, furaj prepelite, nutret prepelite ouatoare, cat mananca o prepelita, furaje prepelite cluj",
    }),
  component: () => (
    <GuidePage
      eyebrow="Furaje pentru prepelițe"
      crumb="Hrană prepelițe"
      title="Hrană pentru prepelițe: ce, cât și cum"
      intro="Prepelițele ouă aproape zilnic, așa că au nevoie de un furaj bogat în proteină și calciu. Iată ce să le dai ca să ouă constant."
      image={photoSrc("furaje-man-10kg-prepelite", true)}
      imageAlt="Saci Furaje MAN de 10 kg pentru prepelițe, în crescătorie"
      waInterest="furajul pentru prepelițe."
      sections={[
        {
          h: "Etapele de hrănire",
          p: "Nevoile se schimbă rapid – prepelițele încep ouatul la doar 6–7 săptămâni.",
          list: [
            "0–3 săptămâni: starter fin, 24–28% proteină",
            "3–6 săptămâni: creștere, ~22% proteină",
            "De la ouat: furaj prepelițe ouătoare, 20–24% proteină + calciu",
          ],
        },
        {
          h: "Sfaturi practice",
          p: "Ține furajul în hrănitori care nu permit risipa, schimbă apa zilnic și asigură 14–16 ore de lumină pentru ouat constant.",
        },
      ]}
      photos={GALLERY.filter((p) =>
        ["furaje-man-10kg-prepelite", "furaje-man-saci-5kg", "furaje-man-10kg-pui"].includes(
          p.slug,
        ),
      )}
      faqs={faqs}
      related={[
        { to: "/furaje-man", label: "Furaje MAN" },
        { to: "/furaje-gaini", label: "Furaje găini" },
        { to: "/calculator-furaje", label: "Calculator furaje" },
      ]}
    />
  ),
});
