import { createFileRoute } from "@tanstack/react-router";
import { GuidePage, guideHead } from "@/components/site";
import { byTag, photoSrc } from "@/lib/gallery";

const faqs = [
  {
    q: "Ce este Deli Nature HippoX?",
    a: "HippoX este gama de hrană pentru cai de la Deli Nature (Belgia): amestecuri și granule cu cereale, fibre, vitamine și minerale, pentru cai de agrement, de muncă sau de sport.",
  },
  {
    q: "Unde găsesc hrană pentru cai în Cluj?",
    a: "La PET SHOP MAIER în Gilău, județul Cluj – avem Deli Nature HippoX, porumb boabe și tărâțe.",
  },
  {
    q: "Cât concentrat îi dau unui cal?",
    a: "Baza rației rămâne fânul (aproximativ 1,5–2% din greutatea calului pe zi). Concentratul se dozează după efort, conform tabelului de pe sac; pentru un cal de agrement de obicei 1–3 kg/zi, împărțit în mai multe tainuri.",
  },
  {
    q: "Pot schimba brusc hrana calului?",
    a: "Nu. Orice schimbare de concentrat se face treptat, în 7–10 zile, pentru a evita colicile.",
  },
];

const TITLE = "Hrană pentru cai Deli Nature HippoX – Cluj, Gilău | PET SHOP MAIER";
const DESC =
  "Hrană pentru cai Deli Nature HippoX, porumb boabe și tărâțe la PET SHOP MAIER din Gilău, județul Cluj. Sfaturi de hrănire și rezervare pe WhatsApp.";

export const Route = createFileRoute("/hrana-cai")({
  head: () =>
    guideHead(TITLE, DESC, "/hrana-cai", faqs, {
      crumb: "Hrană cai",
      image: photoSrc("deli-nature-hippox-hrana-cai"),
      keywords: "hrana cai, deli nature hippox, furaje cai, concentrat cai, hrana cai cluj",
    }),
  component: () => (
    <GuidePage
      eyebrow="Hrană pentru cai"
      crumb="Hrană cai"
      title="Hrană pentru cai: Deli Nature HippoX"
      intro="Pentru caii de agrement, de muncă sau de sport, HippoX completează fânul cu energia, vitaminele și mineralele de care au nevoie."
      image={photoSrc("deli-nature-hippox-hrana-cai", true)}
      imageAlt="Sac Deli Nature HippoX – hrană pentru cai la PET SHOP MAIER Gilău"
      waInterest="hrana pentru cai Deli Nature HippoX."
      sections={[
        {
          h: "Fânul e baza, concentratul completează",
          p: "Calul este un erbivor care pășunează aproape toată ziua. Concentratul (HippoX, ovăz, porumb) se adaugă doar cât cere efortul depus.",
          list: [
            "Fân de calitate: 1,5–2% din greutatea corporală pe zi",
            "Concentrat împărțit în 2–3 tainuri",
            "Apă proaspătă permanent și bloc de sare",
          ],
        },
        {
          h: "Semne că rația nu e potrivită",
          p: "Slăbire, blană fără luciu, oboseală rapidă sau, din contră, exces de energie și îngrășare. Ajustează treptat și cere-ne sfatul în magazin.",
        },
      ]}
      photos={byTag("cai")}
      faqs={faqs}
      related={[
        { to: "/oferta-furaje", label: "Tărâțe și furaj combinat" },
        { to: "/furaje-vaci-de-lapte", label: "Furaje vaci de lapte" },
        { to: "/furaje-animale", label: "Furaje animale" },
      ]}
    />
  ),
});
