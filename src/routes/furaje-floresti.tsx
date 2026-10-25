import { createFileRoute } from "@tanstack/react-router";
import { GuidePage, guideHead } from "@/components/site";
import { GALLERY, photoSrc } from "@/lib/gallery";

const faqs = [
  { q: "Cât de departe e PET SHOP MAIER de Florești?", a: "Magazinul e în Gilău, pe Strada Eroilor 1 – la aproximativ 10 minute de mașină de Florești, pe DN1 spre Huedin." },
  { q: "Ce furaje găsesc la voi?", a: "Tărâțe (40 lei sacul de 20 kg), furaj combinat măcinat universal (60 lei sacul de 30 kg), porumb boabe și Furaje MAN pentru găini ouătoare, pui, curcani, prepelițe, pești și vaci de lapte." },
  { q: "Pot comanda din Florești înainte să vin?", a: "Da. Scrie-ne pe WhatsApp la 0758 639 799 ce îți trebuie, iar comanda te așteaptă pregătită la magazin." },
  { q: "Care e programul?", a: "Luni–Vineri 09:00–19:00, Sâmbătă–Duminică 09:00–17:00 – deschis 7 zile din 7." },
];

const TITLE = "Furaje Florești – tărâțe, furaj combinat, Furaje MAN | PET SHOP MAIER Gilău";
const DESC =
  "Furaje pentru cei din Florești, la 10 minute în Gilău: tărâțe 40 lei/20 kg, furaj combinat 60 lei/30 kg, Furaje MAN, porumb, hrană câini, pisici și cai, pui Brahma. Comandă pe WhatsApp 0758 639 799.";

export const Route = createFileRoute("/furaje-floresti")({
  head: () => guideHead(TITLE, DESC, "/furaje-floresti", faqs, { crumb: "Furaje Florești", keywords: "furaje floresti, tarate floresti, furaj combinat floresti, furaje man floresti, porumb floresti, pet shop floresti, furaje gilau" }),
  component: () => (
    <GuidePage
      eyebrow="Furaje · Florești"
      crumb="Furaje Florești"
      title="Furaje și pet shop pentru Florești, la 10 minute în Gilău"
      intro="Locuiești în Florești, Tăuți sau Luna de Sus și cauți furaje la sac la preț corect? PET SHOP MAIER din Gilău are tot ce trebuie pentru curte și pentru animalele de companie – iar comanda o faci din timp, pe WhatsApp."
      image={photoSrc("porumb-boabe-30kg-calitate-superioara", true)}
      imageAlt="Saci de porumb boabe și furaje la PET SHOP MAIER Gilău, aproape de Florești"
      waInterest="furaje (sunt din Florești)."
      priceBox={[
        { label: "Tărâțe", price: "40 lei", unit: "sac 20 kg" },
        { label: "Furaj combinat universal", price: "60 lei", unit: "sac 30 kg" },
      ]}
      sections={[
        { h: "Furaje pentru toată curtea", p: "Pentru găini, curcani, rațe, porci și iepuri găsești la noi:", list: ["Tărâțe și furaj combinat măcinat universal, la sac", "Porumb boabe", "Furaje MAN pentru găini ouătoare, pui, curcani, prepelițe și pești", "Furaj granulat pentru vaci de lapte, cu 22% proteină", "Hrană pentru cai Deli Nature HippoX"] },
        { h: "Și pentru câini și pisici", p: "Hrană premium Kudo, Wildfull și alte branduri, nisip pentru pisici și accesorii – fără să mai mergi până în Cluj-Napoca." },
        { h: "Pui și ouă Brahma de rasă", p: "Creștem noi pui Brahma Columbia galben-negru și potârniche, vaccinați complet, premiați la expoziții – plus ouă fertile pentru incubat." },
        { h: "Câți saci îți trebuie?", p: "Folosește calculatorul gratuit de furaje de pe site: alegi animalul și numărul, afli kilogramele pe zi, sacii necesari și costul, apoi trimiți comanda direct pe WhatsApp." },
        { h: "Cum ajungi din Florești", p: "Ieși din Florești pe DN1 spre Huedin; în aproximativ 10 minute ajungi în centrul comunei Gilău, pe Strada Eroilor 1. Parcarea e ușoară." },
      ]}
      faqs={faqs}
      photos={GALLERY.slice(0, 9)}
      related={[{ to: "/oferta-furaje", label: "Ofertă tărâțe și furaj combinat" }, { to: "/furaje-man", label: "Furaje MAN" }, { to: "/calculator-furaje", label: "Calculator furaje" }, { to: "/pui-brahma", label: "Pui Brahma" }, { to: "/pet-shop-cluj", label: "Pet shop Cluj" }]}
    />
  ),
});
