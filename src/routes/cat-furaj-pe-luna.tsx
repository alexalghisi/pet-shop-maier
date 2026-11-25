import { createFileRoute } from "@tanstack/react-router";
import { GuidePage, guideHead } from "@/components/site";
import { GALLERY, photoSrc } from "@/lib/gallery";

const faqs = [
  {
    q: "Câți saci de furaj îmi trebuie pentru 10 găini pe lună?",
    a: "Aproximativ 36 kg: 10 găini × 120 g × 30 de zile. Adică un sac de 30 kg și încă puțin, sau patru saci de 10 kg.",
  },
  {
    q: "Cât furaj mănâncă 20 de găini pe lună?",
    a: "În jur de 72 kg pe lună, adică doi saci de 30 kg și jumătate. Iarna, socotește spre 80 kg.",
  },
  {
    q: "Cât furaj consumă un pui de carne până la tăiere?",
    a: "Un pui de carne crescut 6–7 săptămâni consumă în total aproximativ 4–5 kg de furaj. Pentru 20 de pui, înseamnă 80–100 kg pe toată perioada.",
  },
  {
    q: "Cât mănâncă un porc la îngrășat pe zi?",
    a: "Între 2 și 3 kg de furaj concentrat pe zi, în funcție de greutate: mai puțin la început, mai mult spre final. Pe lună, 60–90 kg de porc.",
  },
  {
    q: "Cât costă hrana unei găini pe lună?",
    a: "Cu furaj combinat la 60 lei sacul de 30 kg (2 lei/kg), o găină care mănâncă 3,6 kg pe lună costă aproximativ 7 lei pe lună.",
  },
  {
    q: "Există un calculator pentru asta?",
    a: "Da. Calculatorul de furaje de pe site socotește kilogramele și numărul de saci pentru numărul tău de animale și pentru perioada aleasă.",
  },
];

const TITLE = "Cât furaj îți trebuie pe lună: tabel și exemple";
const DESC =
  "Consumul zilnic și lunar de furaj pentru găini, pui de carne, curcani, rațe, prepelițe, iepuri și porci, cu exemple calculate în saci pentru gospodării obișnuite.";
const IMG = "oferta-tarate-furaj-combinat-gilau";

export const Route = createFileRoute("/cat-furaj-pe-luna")({
  head: () =>
    guideHead(TITLE, DESC, "/cat-furaj-pe-luna", faqs, {
      crumb: "Cât furaj pe lună",
      image: photoSrc(IMG),
      keywords:
        "cat furaj pe luna, cat mananca o gaina pe luna, cati saci de furaj, consum furaj gaini, consum furaj pui de carne, cat mananca un porc pe zi, necesar furaje",
    }),
  component: () => (
    <GuidePage
      eyebrow="Ghid · Necesar de furaje"
      crumb="Cât furaj pe lună"
      title="Cât furaj îți trebuie pe lună pentru animalele din curte"
      intro="Înainte să încarci saci în portbagaj, merită un calcul de două minute: câte animale ai, cât mănâncă fiecare pe zi și câte zile vrei să acoperi. Mai jos sunt valorile medii și câteva exemple gata socotite."
      image={photoSrc(IMG, true)}
      imageAlt="Ofertă de tărâțe și furaj combinat la sac la PET SHOP MAIER Gilău"
      waInterest="furaje la sac. Am ... animale."
      priceBox={[
        {
          label: "Furaj combinat măcinat universal",
          price: "60 lei",
          unit: "sac de 30 kg · 2 lei/kg",
        },
        { label: "Tărâțe", price: "40 lei", unit: "sac de 20 kg · 2 lei/kg" },
      ]}
      sections={[
        {
          h: "Formula",
          p: "Număr de animale × grame pe zi × număr de zile, împărțit la 1000, îți dă kilogramele. Kilogramele împărțite la greutatea sacului îți dau numărul de saci, pe care îl rotunjești în sus. Adaugă 5–10% pentru risipă: furaj împrăștiat, udat sau mâncat de vrăbii.",
        },
        {
          h: "Consumul mediu pe cap de animal",
          p: "Valorile sunt medii pentru animale adulte hrănite în principal cu furaj concentrat. Rasa, vârsta, sezonul și accesul la pășune le pot schimba simțitor.",
          list: [
            "Găină ouătoare – 110–130 g/zi, aproximativ 3,6 kg/lună",
            "Găină de rasă grea (Brahma) – 140–170 g/zi, aproximativ 4,5 kg/lună",
            "Pui de carne – de la 20 g la 200 g/zi; în total 4–5 kg până la 6–7 săptămâni",
            "Curcan adult – 250–350 g/zi, aproximativ 8,5 kg/lună",
            "Rață – 150–200 g/zi, aproximativ 5 kg/lună",
            "Gâscă – în jur de 250 g/zi, plus pășune",
            "Prepeliță – 25–35 g/zi, sub 1 kg/lună",
            "Porumbel – 35–50 g/zi de amestec de semințe",
            "Iepure adult – aproximativ 130 g/zi de concentrate, plus fân la discreție",
            "Porc la îngrășat – 2–3 kg/zi, adică 60–90 kg/lună",
          ],
        },
        {
          h: "Exemplul 1: 15 găini ouătoare",
          p: "15 × 120 g × 30 de zile = 54 kg pe lună. În saci de 30 kg, înseamnă doi saci, din care îți rămân câteva kilograme pentru luna următoare. La 2 lei/kg, hrana celor 15 găini costă aproximativ 108 lei pe lună, adică în jur de 7 lei de găină.",
          more: [
            "Dacă înlocuiești o zecime din rație cu tărâțe sau cu porumb dat seara, cantitatea totală rămâne aproape aceeași; se schimbă doar împărțirea pe saci.",
          ],
        },
        {
          h: "Exemplul 2: 20 de pui de carne",
          p: "Puii de carne mănâncă puțin la început și foarte mult spre final, deci se socotește pe toată perioada, nu pe zi: 20 de pui × 4,5 kg = 90 kg în 6–7 săptămâni. Din aceștia, cam un sfert este starter în primele două-trei săptămâni, iar restul furaj de creștere și finisare.",
        },
        {
          h: "Exemplul 3: curte mixtă",
          p: "10 găini, 5 rațe și 6 iepuri, pe 30 de zile:",
          list: [
            "Găini: 10 × 120 g × 30 = 36 kg",
            "Rațe: 5 × 170 g × 30 = 25,5 kg",
            "Iepuri: 6 × 130 g × 30 = 23,4 kg de concentrate, plus fân",
            "Total: aproximativ 85 kg, adică trei saci de 30 kg",
          ],
        },
        {
          h: "Exemplul 4: doi porci la îngrășat",
          p: "2 porci × 2,5 kg × 30 de zile = 150 kg pe lună. La porci, o parte din rație vine de obicei din producția gospodăriei (porumb, cartofi fierți, dovleac), iar furajul combinat și tărâțele o completează. Întreabă-ne și te ajutăm să împarți rația.",
        },
        {
          h: "Când cifrele nu se potrivesc",
          p: "Dacă furajul se termină mult mai repede decât ai socotit, verifică pe rând:",
          list: [
            "Risipa – hrănitoare prea pline sau prea joase, din care păsările scot furajul cu ciocul",
            "Musafirii – vrăbii, porumbei sălbatici, șoareci și șobolani",
            "Frigul – iarna, consumul crește cu 10–15%",
            "Rasa și vârsta – tineretul în creștere și rasele grele mănâncă peste medie",
            "Calitatea – dintr-un furaj sărac animalele mănâncă mai mult ca să își acopere nevoile",
          ],
        },
        {
          h: "Cât stoc merită să ții",
          p: "Furajul măcinat se păstrează bine patru-șase săptămâni, așa că cel mai practic este să cumperi pentru o lună. Boabele întregi (porumb, grâu) pot fi luate pe o perioadă mai lungă, dacă ai unde să le ții la uscat și ferite de rozătoare.",
        },
      ]}
      photos={GALLERY.filter((p) =>
        [
          "oferta-tarate-furaj-combinat-gilau",
          "furaje-man-sac-mare",
          "furaje-man-10kg-gaini-ouatoare",
          "porumb-boabe-30kg-calitate-superioara",
        ].includes(p.slug),
      )}
      faqs={faqs}
      related={[
        { to: "/calculator-furaje", label: "Calculator furaje" },
        { to: "/furaj-combinat", label: "Furaj combinat – 60 lei sacul" },
        { to: "/tarate", label: "Tărâțe – 40 lei sacul" },
        { to: "/depozitare-furaje", label: "Cum păstrezi furajele" },
        { to: "/hranire-gaini-ouatoare", label: "Hrănirea găinilor ouătoare" },
        { to: "/ghiduri", label: "Toate ghidurile" },
      ]}
    />
  ),
});
