import { createFileRoute } from "@tanstack/react-router";
import { GuidePage, guideHead } from "@/components/site";
import { KW } from "@/lib/keywords";
import { GALLERY, byTag, photoSrc } from "@/lib/gallery";

const faqs = [
  { q: "Ce furaj e cel mai bun pentru găini ouătoare?", a: "Un nutreț combinat pentru ouătoare, cu 16–17% proteină și calciu adăugat. În magazin avem furaje de la producători cunoscuți." },
  { q: "De ce nu mai ouă găinile?", a: "Cauze frecvente: lumină puțină iarna, năpârlire, hrană fără calciu sau stres. O rație echilibrată ajută mult." },
  { q: "Vindeți furaje la sac în Gilău?", a: "Da, la PetShop Maier găsești furaje la sac și porumb boabe. Sună la +40 758 639 799 pentru stoc." },
  { q: "Aveți supliment de calciu pentru găini?", a: "Da, calciu furajer vitaminizat Promark, în ambalaj de 6 kg, util mai ales pentru găinile care ouă. Avem și stimulator de ouat cu oregano, tot de 6 kg." },
];

const TITLE = "Furaj găini ouătoare la sac | Gilău, Cluj | PET SHOP MAIER";
const DESC = "Furaj pentru găini ouătoare la sac de 5 și 10 kg, calciu furajer și stimulator de ouat, plus tărâțe și porumb. Ghid de hrănire pe etape. PET SHOP MAIER, Gilău, Cluj.";

export const Route = createFileRoute("/furaje-gaini")({
  head: () => guideHead(TITLE, DESC, "/furaje-gaini", faqs, { keywords: KW["/furaje-gaini"] }),
  component: () => (
    <GuidePage
      eyebrow="Ghid · Furaje găini"
      title="Furaj pentru găini ouătoare și pui"
      intro="Găinile hrănite corect fac mai multe ouă, cu coaja tare. Iată ce furaje să alegi pentru fiecare etapă."
      image={photoSrc("furaje-man-10kg-gaini-ouatoare", true)}
      imageAlt="Saci Furaje MAN de 10 kg pentru găini ouătoare la PET SHOP MAIER Gilău"
      sections={[
        { h: "Suplimente pentru ouat, la noi în magazin", p: "Pe lângă furajele combinate, avem și suplimente care ajută găinile în perioada de ouat. Se dau alături de furaj, nu în locul lui.", list: ["Stimulator de ouat cu oregano – 6 kg", "Calciu furajer vitaminizat Promark – 6 kg, pentru coajă tare", "Furaje MAN pentru găini ouătoare, în saci de 5 și 10 kg", "Tărâțe, furaj combinat și porumb boabe la sac"] },
        { h: "Furaje pe etape", p: "Fiecare vârstă are nevoile ei.", list: ["Pui (0–8 săptămâni): starter cu multă proteină", "Tineret (8–18 săptămâni): furaj de creștere", "Găini ouătoare: nutreț combinat cu calciu și vitamine"] },
        { h: "Nutreț combinat sau porumb?", p: "Porumbul singur îngrașă și dă puține ouă. Nutrețul combinat pentru ouătoare are proteinele, calciul și vitaminele necesare; porumbul și grâul pot completa rația." },
        { h: "Cât mănâncă o găină pe zi?", p: "În jur de 110–130 g de furaj pe zi, plus apă proaspătă mereu. Iarna rația crește puțin." },
        { h: "Pentru coajă tare", p: "Adaugă scoici măcinate sau grit calcaros la discreție, separat de furaj." },
      ]}
      faqs={faqs}
      photos={GALLERY.filter((p) => ["furaje-man-10kg-gaini-ouatoare", "furaje-man-10kg-pui", "porumb-boabe-30kg-calitate-superioara", "oferta-tarate-furaj-combinat-gilau", "closca-brahma-cu-pui", "pui-brahma-2-3-luni-vaccinati"].includes(p.slug))}
      related={[{ to: "/tarate", label: "Tărâțe la sac" }, { to: "/furaj-combinat", label: "Furaj combinat" }, { to: "/gaini-brahma", label: "Găini Brahma" }, { to: "/hrana-animale", label: "Hrană animale" }, { to: "/pui-brahma", label: "Pui Brahma de vânzare" }, { to: "/furaje-pui", label: "Furaje pentru pui" }, { to: "/porumb-boabe", label: "Porumb boabe" }, { to: "/calculator-furaje", label: "Calculator furaje" }, { to: "/furaje-animale", label: "Furaje pentru animale" }, { to: "/hrana-porumbei", label: "Hrană pentru porumbei" }]}
    />
  ),
});
