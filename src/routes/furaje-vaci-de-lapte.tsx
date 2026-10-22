import { createFileRoute } from "@tanstack/react-router";
import { GuidePage, guideHead } from "@/components/site";
import { GALLERY, photoSrc } from "@/lib/gallery";

const faqs = [
  {
    q: "Ce furaj recomandați pentru vacile de lapte?",
    a: "Furajul granulat MAN pentru vaci de lapte cu 22% proteină – o rețetă completă cu vitamine și minerale, pentru producție mai mare de lapte și sănătate optimă.",
  },
  {
    q: "Cât concentrat dau unei vaci de lapte?",
    a: "Ca regulă practică, aproximativ 1 kg de concentrat la 2–2,5 litri de lapte produși peste ce acoperă fânul și siloz, împărțit în 2 tainuri. Ajustează după starea corporală.",
  },
  {
    q: "Pot da și tărâțe vacilor?",
    a: "Da, tărâțele sunt o sursă bună de fibre și se folosesc des în amestec la vaci și viței. Le avem la 40 lei sacul de 20 kg.",
  },
  {
    q: "Livrați saci mari în zona Gilău?",
    a: "Scrie-ne pe WhatsApp cantitatea și localitatea, iar noi îți spunem cum putem rezolva ridicarea sau transportul.",
  },
];

const TITLE = "Furaj vaci de lapte 22% proteină – Furaje MAN Cluj | PET SHOP MAIER Gilău";
const DESC =
  "Furaj granulat pentru vaci de lapte cu 22% proteină (Furaje MAN), tărâțe și porumb boabe în Gilău, jud. Cluj. Mai mult lapte, vaci sănătoase.";

export const Route = createFileRoute("/furaje-vaci-de-lapte")({
  head: () =>
    guideHead(TITLE, DESC, "/furaje-vaci-de-lapte", faqs, {
      crumb: "Furaje vaci de lapte",
      image: photoSrc("furaj-granulat-vaci-de-lapte-22-proteina"),
      keywords:
        "furaj vaci de lapte, furaj granulat vaci, concentrat vaci, nutret vaci lapte, furaje cluj",
    }),
  component: () => (
    <GuidePage
      eyebrow="Furaje pentru bovine"
      crumb="Furaje vaci de lapte"
      title="Furaj granulat pentru vaci de lapte – 22% proteină"
      intro="Nutriție completă pentru producția de lapte de calitate: proteină ridicată, rețetă cu vitamine și minerale și digestie bună."
      image={photoSrc("furaj-granulat-vaci-de-lapte-22-proteina", true)}
      imageAlt="Furaj granulat MAN pentru vaci de lapte cu 22% proteină"
      waInterest="furajul granulat pentru vaci de lapte 22%."
      sections={[
        {
          h: "De ce 22% proteină",
          p: "Proteina este nutrientul care limitează cel mai des producția de lapte când rația se bazează pe fân. Un concentrat de 22% echilibrează rația și susține lactația.",
          list: [
            "Producție de lapte mai mare și constantă",
            "Rețetă completă: energie, vitamine, minerale",
            "Sănătate și fertilitate mai bune",
          ],
        },
        {
          h: "Cum îl introduci în rație",
          p: "Crește cantitatea treptat, timp de o săptămână, și împarte concentratul în cel puțin două tainuri. Asigură apă din belșug – o vacă de lapte bea 60–100 de litri pe zi.",
        },
      ]}
      photos={GALLERY.filter((p) =>
        [
          "furaj-granulat-vaci-de-lapte-22-proteina",
          "furaje-man-vaci-de-lapte",
          "furaje-man-sac-mare",
        ].includes(p.slug),
      )}
      faqs={faqs}
      related={[
        { to: "/furaje-man", label: "Furaje MAN" },
        { to: "/oferta-furaje", label: "Ofertă tărâțe" },
        { to: "/hrana-cai", label: "Hrană cai" },
      ]}
    />
  ),
});
