import { createFileRoute } from "@tanstack/react-router";
import { GuidePage, guideHead } from "@/components/site";
import { GALLERY, photoSrc } from "@/lib/gallery";

const faqs = [
  {
    q: "Cât costă porumbul boabe?",
    a: "Prețul se schimbă după recoltă, așa că îl confirmăm pe loc: sună sau scrie-ne pe WhatsApp la 0758 639 799. Avem porumb boabe de calitate superioară în saci de 30 kg.",
  },
  {
    q: "La ce animale dau porumb boabe?",
    a: "Găini și cocoși adulți, curcani, rațe, gâște, porumbei, porci. Porumbul dă energie, dar are puțină proteină, așa că se dă alături de un furaj combinat, nu ca singură hrană.",
  },
  {
    q: "Găinile ouă mai bine dacă primesc doar porumb?",
    a: "Nu. Doar cu porumb, găinile se îngrașă și ouă mai puțin. Pentru ouat ai nevoie de furaj combinat pentru ouătoare, iar porumbul rămâne completare, mai ales iarna și seara.",
  },
  {
    q: "Cum păstrez porumbul?",
    a: "În loc uscat și aerisit, ferit de umezeală și de rozătoare, de preferat ridicat de pe pământ. Porumbul umed face mucegai, iar mucegaiul e periculos pentru animale.",
  },
];

const TITLE = "Porumb boabe la sac de 30 kg | Gilău, Cluj";
const DESC =
  "Porumb boabe de calitate superioară, sac de 30 kg, pentru găini, curcani, rațe, porumbei și porci. La PET SHOP MAIER Gilău, la 15 minute de Cluj-Napoca.";

export const Route = createFileRoute("/porumb-boabe")({
  head: () =>
    guideHead(TITLE, DESC, "/porumb-boabe", faqs, {
      crumb: "Porumb boabe",
      image: photoSrc("porumb-boabe-30kg-calitate-superioara"),
      keywords:
        "porumb boabe, porumb boabe sac, porumb boabe pret, porumb boabe 30 kg, porumb pentru gaini, porumb boabe cluj, porumb boabe gilau, porumb furajer, cumpar porumb boabe",
    }),
  component: () => (
    <GuidePage
      eyebrow="Furaje · Cereale"
      crumb="Porumb boabe"
      title="Porumb boabe la sac de 30 kg"
      intro="Porumb boabe curat, de calitate superioară, în saci de 30 kg, gata de ridicat din Gilău. Prețul îl confirmăm pe telefon sau WhatsApp, pentru că se schimbă după recoltă."
      image={photoSrc("porumb-boabe-30kg-calitate-superioara", true)}
      imageAlt="Saci de 30 kg cu porumb boabe de calitate superioară la PET SHOP MAIER Gilău"
      waInterest="porumb boabe la sac de 30 kg. Aș vrea ... saci."
      priceBox={[
        { label: "Porumb boabe", price: "Întreabă", unit: "sac de 30 kg · calitate superioară" },
        { label: "Tărâțe", price: "40 lei", unit: "sac de 20 kg · 2 lei/kg" },
        { label: "Furaj combinat măcinat universal", price: "60 lei", unit: "sac de 30 kg · 2 lei/kg" },
      ]}
      sections={[
        {
          h: "Pentru ce animale",
          p: "Porumbul e cea mai folosită cereală din gospodărie, pentru că dă multă energie.",
          list: [
            "Găini și cocoși adulți, mai ales iarna",
            "Curcani, rațe și gâște, la îngrășat",
            "Porumbei, în amestec cu alte semințe",
            "Porci, alături de un furaj cu proteină",
          ],
        },
        {
          h: "Completare, nu hrană unică",
          p: "Porumbul are multă energie, dar puțină proteină și puțin calciu. Dat singur, păsările se îngrașă și ouă mai puțin, iar tineretul crește încet. Folosește-l alături de furajul combinat potrivit: pentru ouătoare, pentru pui sau universal.",
        },
        {
          h: "Iarna, seara",
          p: "Mulți crescători dau o mână de porumb seara, iarna: se digeră încet și ajută păsările să-și păstreze căldura peste noapte. Dimineața rămâne pentru furajul combinat.",
        },
        {
          h: "Pentru puii mici",
          p: "Boabele întregi sunt prea mari pentru pui. Până cresc, folosește furaj starter pentru pui, nu porumb.",
        },
      ]}
      photos={GALLERY.filter((p) => ["porumb-boabe-30kg-calitate-superioara", "oferta-tarate-furaj-combinat-gilau", "gaini-brahma-crescute-liber-gilau"].includes(p.slug))}
      faqs={faqs}
      related={[
        { to: "/oferta-furaje", label: "Ofertă tărâțe și furaj combinat" },
        { to: "/furaje-gaini", label: "Furaje găini ouătoare" },
        { to: "/furaje-curcani", label: "Furaje curcani" },
        { to: "/calculator-furaje", label: "Calculator furaje" },
      ]}
    />
  ),
});
