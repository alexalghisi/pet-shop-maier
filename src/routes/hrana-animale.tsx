import { createFileRoute } from "@tanstack/react-router";
import { GuidePage, guideHead } from "@/components/site";
import { KW, ANIMAL_FOOD_KEYWORDS } from "@/lib/keywords";
import { byTag, photoSrc } from "@/lib/gallery";

const faqs = [
  { q: "Unde găsesc hrană pentru animale în Gilău și Cluj?", a: "La PET SHOP MAIER, Strada Eroilor 1, Gilău – la 15 minute de Cluj-Napoca și 10 minute de Florești. Avem mâncare pentru câini, pisici, păsări, iepuri, cai și animale de fermă." },
  { q: "Ce mâncare pentru animale de companie aveți?", a: "Hrană uscată și umedă pentru câini și pisici (Kudo, Wildfull și alte branduri), nisip pentru pisici, semințe pentru păsări de colivie, fân și granule pentru iepuri și rozătoare." },
  { q: "Aveți hrană pentru animale de fermă?", a: "Da: tărâțe (40 lei/20 kg), furaj combinat (60 lei/30 kg), porumb boabe, Furaje MAN pentru găini, pui, curcani, prepelițe și vaci de lapte, plus hrană pentru cai Deli Nature HippoX." },
  { q: "Pot comanda mâncare pentru animale pe WhatsApp?", a: "Da. Scrie-ne la 0758 639 799 ce îți trebuie și îți pregătim comanda pentru ridicare din Gilău." },
  { q: "Care e programul magazinului?", a: "Luni–Vineri 09:00–19:00, Sâmbătă–Duminică 09:00–17:00 – deschis 7 zile din 7." },
];

const TITLE = "Hrană animale și mâncare pentru animale în Gilău, Cluj | PET SHOP MAIER";
const DESC =
  "Hrană pentru animale de companie și de fermă: mâncare câini și pisici, furaje găini, porci, iepuri, porumbei, cai, tărâțe și porumb. PET SHOP MAIER Gilău, lângă Cluj-Napoca și Florești.";

export const Route = createFileRoute("/hrana-animale")({
  head: () => guideHead(TITLE, DESC, "/hrana-animale", faqs, { crumb: "Hrană animale", keywords: KW["/hrana-animale"] }),
  component: () => (
    <GuidePage
      eyebrow="Hrană animale · Gilău, Cluj"
      crumb="Hrană animale"
      title="Hrană și mâncare pentru animale în Gilău, lângă Cluj"
      intro="Tot ce mănâncă animalele tale, într-un singur magazin: hrană pentru câini și pisici, furaje pentru curte și fermă, semințe pentru păsări și fân pentru iepuri. Sfaturi sincere și prețuri bune, la 15 minute de Cluj-Napoca."
      image={photoSrc("porumb-boabe-30kg-calitate-superioara", true)}
      imageAlt="Hrană pentru animale – porumb boabe și furaje la PET SHOP MAIER Gilău, Cluj"
      waInterest="hrana pentru animale."
      sections={[
        {
          h: "Mâncare pentru animale de companie",
          p: "Pentru câini și pisici avem hrană uscată și umedă pentru toate vârstele și taliile, plus recompense și nisip pentru litieră.",
          list: [
            "Hrană câini – junior, adult, senior, talie mică și mare",
            "Hrană pisici – inclusiv pentru pisici sterilizate",
            "Nisip pentru pisici și accesorii",
            "Semințe pentru peruși, canari și papagali",
            "Fân, granule și cereale pentru iepuri și rozătoare",
          ],
        },
        {
          h: "Hrană pentru animale de fermă și de curte",
          p: "Furaje la sac pentru gospodari, la prețuri corecte:",
          list: [
            "Furaje pentru găini ouătoare, pui, curcani și rațe",
            "Hrană pentru prepelițe și porumbei",
            "Furaje pentru porci și vaci de lapte",
            "Hrană pentru cai – Deli Nature HippoX",
            "Tărâțe 40 lei/20 kg, furaj combinat 60 lei/30 kg, porumb boabe",
          ],
        },
        {
          h: "Cum alegi hrana potrivită",
          p: "Fiecare specie are nevoi diferite de proteină, fibre și minerale. Spune-ne ce animale ai și câte sunt, iar noi îți recomandăm hrana potrivită și cantitatea – sau folosește calculatorul nostru de furaje.",
        },
        {
          h: "Livrare și ridicare din Gilău",
          p: "Ne găsești pe Strada Eroilor 1, Gilău, pe drumul dintre Cluj-Napoca și Huedin. Clienți din Florești, Cluj-Napoca, Luna de Sus, Căpușu Mare și Someșu Rece vin la noi pentru prețuri mai bune la sac.",
        },
      ]}
      faqs={faqs}
      photos={[...byTag("furaje").slice(0, 6), ...byTag("caini").slice(0, 3)]}
      searches={ANIMAL_FOOD_KEYWORDS.slice(0, 24)}
      related={[
        { to: "/hrana-caini", label: "Hrană câini" },
        { to: "/hrana-pisici", label: "Hrană pisici" },
        { to: "/furaje-gaini", label: "Furaje găini" },
        { to: "/furaje-man", label: "Furaje MAN" },
        { to: "/hrana-iepuri", label: "Hrană iepuri" },
        { to: "/hrana-cai", label: "Hrană cai" },
        { to: "/oferta-furaje", label: "Ofertă tărâțe" },
        { to: "/pet-shop-cluj", label: "Pet shop Cluj" },
      ]}
    />
  ),
});
