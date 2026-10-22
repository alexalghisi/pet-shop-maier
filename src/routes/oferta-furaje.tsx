import { createFileRoute } from "@tanstack/react-router";
import { GuidePage, guideHead } from "@/components/site";
import { photoSrc, GALLERY } from "@/lib/gallery";

const faqs = [
  {
    q: "Cât costă un sac de tărâțe?",
    a: "La PET SHOP MAIER, tărâțele sunt 40 lei sacul de 20 kg (2 lei/kg).",
  },
  {
    q: "Cât costă furajul combinat măcinat universal?",
    a: "60 lei sacul de 30 kg (2 lei/kg). Este un amestec de cereale, proteine, vitamine și minerale pentru găini, curcani, rațe, gâște, porci și iepuri.",
  },
  {
    q: "La ce animale se dau tărâțele?",
    a: "Găini (ouătoare și de carne), porci, iepuri, viței și alte animale de fermă. Sunt o sursă bună de fibre, dar se dau în amestec, nu ca hrană unică.",
  },
  {
    q: "Pot rezerva saci?",
    a: "Da, trimite-ne pe WhatsApp câți saci vrei și îi pregătim pentru ridicare din Gilău.",
  },
];

const TITLE =
  "Tărâțe 40 lei/20 kg și furaj combinat 60 lei/30 kg – ofertă furaje Gilău | PET SHOP MAIER";
const DESC =
  "Ofertă furaje în Gilău, Cluj: tărâțe 40 lei sacul de 20 kg și furaj combinat măcinat universal 60 lei sacul de 30 kg, pentru găini, curcani, rațe, porci și iepuri.";

export const Route = createFileRoute("/oferta-furaje")({
  head: () =>
    guideHead(TITLE, DESC, "/oferta-furaje", faqs, {
      crumb: "Ofertă furaje",
      image: photoSrc("oferta-tarate-furaj-combinat-gilau"),
      keywords:
        "tarate pret, sac tarate, furaj combinat pret, furaj macinat, furaje ieftine cluj, furaje gilau, pret furaje",
    }),
  component: () => (
    <GuidePage
      eyebrow="Ofertă la furaje"
      crumb="Ofertă furaje"
      title="Ofertă: tărâțe și furaj combinat măcinat universal"
      intro="Două furaje de bază pentru orice gospodărie, la prețuri corecte: tărâțe pentru o digestie bună și furaj combinat măcinat universal pentru o creștere sănătoasă."
      image={photoSrc("oferta-tarate-furaj-combinat-gilau", true)}
      imageAlt="Afiș ofertă furaje PET SHOP MAIER: tărâțe 40 lei / 20 kg, furaj combinat 60 lei / 30 kg"
      waInterest="oferta la tărâțe / furaj combinat. Aș vrea ... saci."
      priceBox={[
        { label: "Tărâțe", price: "40 lei", unit: "sac de 20 kg · 2 lei/kg" },
        {
          label: "Furaj combinat măcinat universal",
          price: "60 lei",
          unit: "sac de 30 kg · 2 lei/kg",
        },
        { label: "Porumb boabe", price: "Întreabă", unit: "sac de 30 kg · calitate superioară" },
      ]}
      sections={[
        {
          h: "Tărâțe – fibre pentru digestie",
          p: "Tărâțele sunt o sursă excelentă de fibre și ajută la buna funcționare a organismului.",
          list: ["Găini ouătoare și de carne", "Porci", "Iepuri", "Viței și alte animale de fermă"],
        },
        {
          h: "Furaj combinat măcinat universal",
          p: "Un amestec echilibrat de cereale, proteine, vitamine și minerale, pentru creștere sănătoasă și productivitate ridicată.",
          list: ["Găini (ouătoare și carne)", "Curcani", "Rațe și gâște", "Porci", "Iepuri"],
        },
      ]}
      photos={GALLERY.filter((p) =>
        [
          "oferta-tarate-furaj-combinat-gilau",
          "porumb-boabe-30kg-calitate-superioara",
          "furaje-man-sac-mare",
        ].includes(p.slug),
      )}
      faqs={faqs}
      related={[
        { to: "/calculator-furaje", label: "Calculator furaje" },
        { to: "/furaje-man", label: "Furaje MAN" },
        { to: "/furaje-animale", label: "Furaje animale" },
      ]}
    />
  ),
});
