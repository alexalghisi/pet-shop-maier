import { createFileRoute } from "@tanstack/react-router";
import { GuidePage, guideHead } from "@/components/site";
import { KW } from "@/lib/keywords";
import { GALLERY, byTag, photoSrc } from "@/lib/gallery";

const faqs = [
  {
    q: "Unde este PetShop Maier?",
    a: "În Gilău, Str. Eroilor 1, județul Cluj, pe drumul dintre Cluj-Napoca și Huedin.",
  },
  {
    q: "Care e programul pet shop-ului?",
    a: "Luni–Vineri 09:00–19:00, Sâmbătă–Duminică 09:00–17:00 – deschis 7 zile din 7.",
  },
  {
    q: "Este deschis pet shop-ul duminica?",
    a: "Da. Sâmbăta și duminica suntem deschiși între 09:00 și 17:00, iar de luni până vineri între 09:00 și 19:00.",
  },
  {
    q: "Livrați în Cluj-Napoca și Florești?",
    a: "Da, transportăm la domiciliu în Gilău, Florești, Cluj-Napoca și împrejurimi. Scrie-ne pe WhatsApp la 0758 639 799 ce îți trebuie.",
  },
  {
    q: "Ce hrană pentru câini și pisici aveți?",
    a: "Pentru câini: Monge Artù cu pui și cu vită la sac de 20 kg, Kudo și Wildfull. Pentru pisici: Versele-Laga Cat Classic la sac de 4 kg și nisip de mai multe tipuri.",
  },
  {
    q: "Aveți furaje pentru animale de curte?",
    a: "Da – furaje pentru găini, porumbei, iepuri, plus porumb boabe și cereale.",
  },
];

const TITLE = "Pet shop Cluj – deschis zilnic, și duminica | Gilău";
const DESC =
  "Pet shop lângă Cluj-Napoca, deschis 7 zile din 7, inclusiv duminica: hrană câini și pisici la sac, nisip, furaje, accesorii. Gilău, Str. Eroilor 1, parcare ușoară. WhatsApp 0758 639 799.";

export const Route = createFileRoute("/pet-shop-cluj")({
  head: () =>
    guideHead(TITLE, DESC, "/pet-shop-cluj", faqs, {
      crumb: "Pet shop Cluj",
      keywords: KW["/pet-shop-cluj"],
    }),
  component: () => (
    <GuidePage
      eyebrow="Pet shop · Cluj"
      crumb="Pet shop Cluj"
      waInterest="un produs din pet shop (sunt din zona Cluj)."
      title="Pet shop Cluj: deschis zilnic, la 20 de minute de oraș"
      intro="PetShop Maier din Gilău e petshop-ul de lângă casă pentru cei din Gilău, Florești, Luna de Sus, Căpușu Mare, Someșu Rece și Cluj-Napoca."
      image={photoSrc("hrana-premium-caini-kudo-wildfull-pet-shop-maier", true)}
      imageAlt="Hrană premium pentru câini Kudo și Wildfull la PET SHOP MAIER, pet shop lângă Cluj"
      sections={[
        {
          h: "Ce găsești la noi",
          p: "Tot ce le trebuie animalelor tale, într-un singur loc:",
          list: [
            "Hrană uscată și umedă pentru câini și pisici",
            "Nisip pentru pisici",
            "Furaje pentru găini, porumbei și iepuri",
            "Accesorii, jucării și antiparazitare",
          ],
        },
        {
          h: "Deschis și duminica",
          p: "Multe pet shop-uri din Cluj sunt închise duminica sau au program scurt. La noi găsești deschis în fiecare zi a săptămânii: luni–vineri 09:00–19:00, sâmbătă și duminică 09:00–17:00.",
        },
        {
          h: "Hrană la sac mare, nu doar la pungă",
          p: "Dacă ai câine de talie mare sau mai multe animale, sacul mare e alegerea practică.",
          list: [
            "Monge Artù pentru câini – sac 20 kg, cu pui sau vită",
            "Versele-Laga Cat Classic pentru pisici – sac 4 kg",
            "Versele-Laga Classic Allround pentru porumbei – sac 20 kg",
            "Tărâțe 40 lei / 20 kg și furaj combinat 60 lei / 30 kg",
          ],
        },
        {
          h: "Cum ajungi",
          p: "Suntem pe Str. Eroilor 1, în centrul comunei Gilău, pe DN1 – la aproximativ 15 minute de Florești și 20 de minute de Cluj-Napoca. Parcarea e ușoară.",
        },
        {
          h: "Program",
          p: "Luni–Vineri 09:00–19:00, Sâmbătă–Duminică 09:00–17:00 – deschis 7 zile din 7.",
        },
        {
          h: "Întreabă înainte să vii",
          p: "Scrie-ne pe WhatsApp sau sună la +40 758 639 799 și îți spunem imediat dacă produsul dorit e pe stoc.",
        },
      ]}
      faqs={faqs}
      photos={GALLERY.slice(0, 9)}
      related={[
        { to: "/nisip-pisici", label: "Nisip pisici" },
        { to: "/accesorii-caini", label: "Accesorii câini" },
        { to: "/furaje-floresti", label: "Furaje Florești" },
        { to: "/hrana-animale", label: "Hrană animale" },
        { to: "/pui-brahma", label: "Pui Brahma" },
        { to: "/furaje-man", label: "Furaje MAN" },
        { to: "/hrana-caini", label: "Hrană pentru câini" },
        { to: "/hrana-pisici", label: "Hrană pentru pisici" },
        { to: "/furaje-animale", label: "Furaje pentru animale" },
      ]}
    />
  ),
});
