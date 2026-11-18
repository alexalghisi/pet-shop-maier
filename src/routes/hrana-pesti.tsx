import { createFileRoute } from "@tanstack/react-router";
import { GuidePage, guideHead } from "@/components/site";
import { GALLERY, photoSrc } from "@/lib/gallery";

const faqs = [
  {
    q: "Ce hrană aveți pentru pești de iaz?",
    a: "Furaje MAN pentru pești, granule pentru iazuri și heleșteie, în saci de 5 kg. Întreabă-ne pe WhatsApp ce sortiment avem pe stoc.",
  },
  {
    q: "Când hrănesc peștii din iaz?",
    a: "Peștii mănâncă cel mai mult când apa e caldă, de la primăvară până toamna. Când apa se răcește, metabolismul lor încetinește: reduce mult hrana, iar iarna, cu apă rece, nu îi mai hrăni.",
  },
  {
    q: "Cât furaj dau peștilor?",
    a: "Cât mănâncă în câteva minute. Dacă după 10–15 minute rămân granule pe apă sau pe fund, ai dat prea mult: resturile strică apa.",
  },
  {
    q: "Unde cumpăr hrană pentru pești în Cluj?",
    a: "La PET SHOP MAIER, Strada Eroilor 1, Gilău, la 15 minute de Cluj-Napoca. Sună sau scrie-ne la 0758 639 799.",
  },
];

const TITLE = "Hrană pentru pești de iaz – Furaje MAN | Gilău, Cluj";
const DESC =
  "Furaj granulat pentru pești de iaz și heleșteu, Furaje MAN în saci de 5 kg. La PET SHOP MAIER Gilău, la 15 minute de Cluj-Napoca. Sfaturi de hrănire.";

export const Route = createFileRoute("/hrana-pesti")({
  head: () =>
    guideHead(TITLE, DESC, "/hrana-pesti", faqs, {
      crumb: "Hrană pești",
      image: photoSrc("furaje-man-5kg-peste-iaz"),
      keywords:
        "hrana pesti, hrana pesti iaz, furaj pesti, furaje pesti, mancare pesti iaz, granule pesti, hrana crap, hrana pesti helesteu, hrana pesti cluj, furaje man pesti",
    }),
  component: () => (
    <GuidePage
      eyebrow="Furaje · Pești"
      crumb="Hrană pești"
      title="Hrană pentru pești de iaz și heleșteu"
      intro="Ai un iaz în curte sau un heleșteu? Furajul granulat face peștii să crească mai repede decât numai cu ce găsesc singuri în apă. La noi găsești Furaje MAN pentru pești, în saci de 5 kg, ușor de păstrat."
      image={photoSrc("furaje-man-5kg-peste-iaz", true)}
      imageAlt="Sac de 5 kg Furaje MAN pentru pești de iaz la PET SHOP MAIER Gilău"
      waInterest="hrană pentru pești de iaz."
      sections={[
        {
          h: "Hrănește după temperatura apei",
          p: "Peștii nu-și reglează temperatura corpului, așa că mănâncă după cât de caldă e apa.",
          list: [
            "Vara, cu apă caldă: hrănire zilnică",
            "Primăvara și toamna: porții mai mici",
            "Iarna, cu apă rece: fără hrană",
            "După o zi foarte caldă sau furtună, hrănește mai puțin",
          ],
        },
        {
          h: "Cât și cum dai",
          p: "Dă puțin și des, mereu în același loc și cam la aceeași oră. Peștii învață locul și vin la hrană, iar tu vezi cât mănâncă. Ce rămâne nemâncat se strică și consumă oxigenul din apă, așa că e mai bine să dai prea puțin decât prea mult.",
        },
        {
          h: "De ce granule și nu doar cereale",
          p: "Porumbul și grâul sunt sărace în proteină și se digeră greu. Granulele pentru pești au proteina, vitaminele și mineralele de care au nevoie peștii ca să crească, iar cerealele pot rămâne doar o completare.",
        },
      ]}
      photos={GALLERY.filter((p) => ["furaje-man-5kg-peste-iaz", "furaje-man-saci-5kg"].includes(p.slug))}
      faqs={faqs}
      related={[
        { to: "/furaje-man", label: "Furaje MAN" },
        { to: "/furaje-animale", label: "Furaje pentru animale" },
        { to: "/hrana-animale", label: "Hrană animale" },
      ]}
    />
  ),
});
