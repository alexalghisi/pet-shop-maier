import { createFileRoute } from "@tanstack/react-router";
import { GuidePage, guideHead } from "@/components/site";
import img from "@/assets/hero.jpg";

const faqs = [
  { q: "Unde este PetShop Maier?", a: "În Gilău, Str. Eroilor 1, județul Cluj, pe drumul dintre Cluj-Napoca și Huedin." },
  { q: "Care e programul pet shop-ului?", a: "L–V 09:00–19:00, Sâmbătă 09:00–17:00, Duminică închis." },
  { q: "Aveți furaje pentru animale de curte?", a: "Da – furaje pentru găini, porumbei, iepuri, plus porumb boabe și cereale." },
];

const TITLE = "Pet shop lângă Cluj-Napoca și Florești – PetShop Maier Gilău";
const DESC = "Pet shop în Gilău, la 15 minute de Cluj-Napoca și Florești: hrană câini și pisici, nisip, furaje, accesorii. Str. Eroilor 1. Tel/WhatsApp +40 758 639 799.";

export const Route = createFileRoute("/pet-shop-cluj")({
  head: () => guideHead(TITLE, DESC, "/pet-shop-cluj", faqs),
  component: () => (
    <GuidePage
      eyebrow="Pet shop · Cluj"
      title="Pet shop aproape de Cluj-Napoca și Florești"
      intro="PetShop Maier din Gilău e petshop-ul de lângă casă pentru cei din Gilău, Florești, Luna de Sus, Căpușu Mare, Someșu Rece și Cluj-Napoca."
      image={img}
      imageAlt="Interiorul pet shop-ului PetShop Maier din Gilău, lângă Cluj"
      sections={[
        { h: "Ce găsești la noi", p: "Tot ce le trebuie animalelor tale, într-un singur loc:", list: ["Hrană uscată și umedă pentru câini și pisici", "Nisip pentru pisici", "Furaje pentru găini, porumbei și iepuri", "Accesorii, jucării și antiparazitare"] },
        { h: "Cum ajungi", p: "Suntem pe Str. Eroilor 1, în centrul comunei Gilău, pe DN1 – la aproximativ 15 minute de Florești și 20 de minute de Cluj-Napoca. Parcarea e ușoară." },
        { h: "Program", p: "Luni–Vineri 09:00–19:00, Sâmbătă 09:00–17:00, Duminică închis." },
        { h: "Întreabă înainte să vii", p: "Scrie-ne pe WhatsApp sau sună la +40 758 639 799 și îți spunem imediat dacă produsul dorit e pe stoc." },
      ]}
      faqs={faqs}
      related={[{ to: "/hrana-caini", label: "Hrană pentru câini" }, { to: "/hrana-pisici", label: "Hrană pentru pisici" }, { to: "/furaje-animale", label: "Furaje pentru animale" }]}
    />
  ),
});
