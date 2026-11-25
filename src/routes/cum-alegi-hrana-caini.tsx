import { createFileRoute } from "@tanstack/react-router";
import { GuidePage, guideHead } from "@/components/site";
import { photoSrc } from "@/lib/gallery";

const faqs = [
  {
    q: "Câte grame de hrană uscată dau câinelui pe zi?",
    a: "Pornește de la tabelul de pe sac, care dă gramele după greutatea câinelui. Ca ordin de mărime, un câine adult de 10 kg mănâncă 150–200 g pe zi, unul de 20 kg 250–330 g, iar unul de 30 kg 330–450 g, în funcție de hrană și de cât se mișcă.",
  },
  {
    q: "Cât ține un sac de 20 kg?",
    a: "Împarte 20.000 g la porția zilnică. La 300 g pe zi, sacul ajunge aproximativ 66 de zile; la 450 g pe zi, cam 44 de zile.",
  },
  {
    q: "De câte ori pe zi hrănesc câinele?",
    a: "Câinii adulți, de două ori pe zi. Puii de până la 3–4 luni, de 3–4 ori, apoi de 3 ori până la 6 luni. La rasele mari, două mese mai mici sunt mai sigure decât una mare.",
  },
  {
    q: "Cum schimb hrana fără să îi stric stomacul?",
    a: "În 7 zile: două zile un sfert hrană nouă, două zile jumătate, două zile trei sferturi, apoi doar hrana nouă. La câinii sensibili, întinde trecerea pe 10–14 zile.",
  },
  {
    q: "Ce înseamnă hrană completă?",
    a: "Că poate fi dată singură, zi de zi, și acoperă tot ce îi trebuie câinelui. Hrana complementară (recompense, multe conserve, suplimente) se dă doar pe lângă.",
  },
  {
    q: "Pot da câinelui mâncare gătită în casă pe lângă boabe?",
    a: "Ocazional, da, simplă și nesărată, dar scade din porția de boabe. Nu da niciodată ciocolată, struguri sau stafide, ceapă, usturoi, dulciuri cu xilitol ori oase gătite.",
  },
];

const TITLE = "Cum alegi hrana uscată pentru câini: ghid";
const DESC =
  "Cum citești eticheta unei hrane uscate pentru câini, câte grame dai pe zi, cât ține un sac de 20 kg, cum schimbi hrana și ce alimente sunt periculoase..";
const IMG = "hrana-premium-caini-kudo-wildfull-pet-shop-maier";

export const Route = createFileRoute("/cum-alegi-hrana-caini")({
  head: () =>
    guideHead(TITLE, DESC, "/cum-alegi-hrana-caini", faqs, {
      crumb: "Cum alegi hrana pentru câini",
      image: photoSrc(IMG),
      keywords:
        "cum aleg hrana pentru caini, hrana uscata caini, cate grame de boabe pe zi caine, cat tine un sac de 20 kg hrana caini, schimbare hrana caine, eticheta hrana caini",
    }),
  component: () => (
    <GuidePage
      eyebrow="Ghid · Câini"
      crumb="Cum alegi hrana pentru câini"
      title="Cum alegi hrana uscată pentru câini și câtă dai"
      intro="Pe raft toți sacii arată bine. Diferența se vede pe spatele sacului, în lista de ingrediente și în tabelul de porții. În zece minute înveți să le citești și să socotești cât te costă, de fapt, hrana pe zi."
      image={photoSrc(IMG, true)}
      imageAlt="Saci de hrană uscată pentru câini Kudo și Wildfull la PET SHOP MAIER Gilău"
      waInterest="hrană uscată pentru câini. Câinele meu are ... kg."
      sections={[
        {
          h: "Pornește de la câine, nu de la sac",
          p: "Aceeași hrană nu se potrivește oricărui câine. Înainte să compari mărci, lămurește trei lucruri:",
          list: [
            "Vârsta – pui (junior), adult sau senior; puii au nevoie de mai multă proteină și energie",
            "Talia – la rasele mari, hrana de pui are calciul dozat ca să nu crească prea repede; la rasele mici, boabele sunt mai mărunte",
            "Activitatea – un câine de curte care aleargă toată ziua consumă mult mai mult decât unul de apartament",
            "Sensibilități – mâncărimi, scaun moale sau alergii cunoscute la o anumită proteină",
          ],
        },
        {
          h: "Cum citești lista de ingrediente",
          p: "Ingredientele sunt trecute în ordinea descrescătoare a greutății, deci primele trei-patru spun cel mai mult. Caută o sursă de proteină animală numită clar (pui, vită, somon, făină de pui) printre primele locuri. Formulările vagi, de tipul „carne și subproduse de origine animală”, nu sunt neapărat rele, dar nu îți spun ce primești și se pot schimba de la un lot la altul.",
          more: [
            "Atenție la un detaliu: carnea proaspătă conține multă apă. „Pui proaspăt 25%” cântărește mult înainte de uscare, dar după uscare poate ajunge în urma cerealelor. O făină de carne trecută pe primul loc înseamnă, de regulă, mai multă proteină animală în bob.",
          ],
        },
        {
          h: "Ce spun procentele de pe etichetă",
          p: "Tabelul cu „constituenți analitici” este obligatoriu și te ajută să compari:",
          list: [
            "Proteină brută – 20–26% este obișnuit la hrana pentru adulți; mai mult la pui și la câinii foarte activi",
            "Grăsime brută – 8–15%; mai multă grăsime înseamnă mai multă energie în aceeași porție",
            "Fibră brută – 2–4%; mai multă la hrana „light”",
            "Cenușă brută – mineralele rămase după ardere, de obicei 6–9%",
            "Umiditate – în jur de 10% la hrana uscată",
          ],
          more: [
            "Mai verifică mențiunea „hrană completă”, vârsta și talia pentru care e făcută, data de expirare și numărul lotului.",
          ],
        },
        {
          h: "Câtă hrană dai",
          p: "Tabelul de pe sac este punctul de plecare, nu o regulă fixă. Dă cantitatea recomandată pentru greutatea câinelui timp de două-trei săptămâni, apoi uită-te la el: coastele trebuie să se simtă ușor la pipăit, fără să se vadă, iar de sus să se observe talia. Dacă se rotunjește, scade porția cu 10%; dacă slăbește, mărește-o la fel.",
          more: [
            "Cântărește porția măcar o dată cu cântarul de bucătărie și fă un semn pe cană. „O cană” poate însemna 80 g sau 130 g, în funcție de cană și de mărimea boabelor. Recompensele se scad din porție.",
          ],
        },
        {
          h: "Socotește prețul pe zi, nu pe sac",
          p: "O hrană mai concentrată se dă în porții mai mici, așa că sacul mai scump poate ieși la fel sau mai ieftin pe zi. Calculul este simplu: prețul sacului împărțit la numărul de zile cât ține.",
          list: [
            "Câine de 10 kg, 170 g/zi – un sac de 20 kg ține aproximativ 117 zile",
            "Câine de 20 kg, 300 g/zi – aproximativ 66 de zile",
            "Câine de 30 kg, 400 g/zi – 50 de zile",
            "Câine de 40 kg, 500 g/zi – 40 de zile",
          ],
          more: [
            "Dacă ai un singur câine mic, un sac de 20 kg stă desfăcut aproape patru luni și își pierde din gust; mai bine iei un sac mai mic sau îl păstrezi într-un recipient închis etanș.",
          ],
        },
        {
          h: "Cum schimbi hrana",
          p: "Stomacul câinelui se adaptează la o rețetă, iar schimbarea bruscă duce la scaun moale. Amestecă hrana veche cu cea nouă timp de o săptămână, crescând treptat partea nouă: un sfert, jumătate, trei sferturi, apoi tot. Judecă o hrană abia după trei-patru săptămâni: scaun format, blană lucioasă, poftă de mâncare și energie constantă.",
        },
        {
          h: "Alimente pe care nu le dai niciodată",
          p: "Unele mâncăruri obișnuite pentru oameni sunt toxice pentru câini, chiar în cantități mici:",
          list: [
            "Ciocolată și cacao",
            "Struguri și stafide",
            "Ceapă, usturoi, praz",
            "Dulciuri și gumă cu xilitol",
            "Nuci macadamia, aluat crud cu drojdie, alcool",
            "Oase gătite, care se sparg în așchii",
          ],
          more: [
            "Dacă a mâncat din ele, nu aștepta să apară simptomele: sună la medicul veterinar și spune-i ce și cât a mâncat.",
          ],
        },
        {
          h: "Păstrarea sacului desfăcut",
          p: "Ține hrana în sacul original, strâns la gură, pus într-un recipient cu capac, la loc uscat și răcoros. Sacul are un strat interior care protejează grăsimile de râncezire și păstrează data de expirare și lotul la îndemână. Nu turna boabe noi peste resturile vechi din recipient și spală bolul des.",
        },
      ]}
      faqs={faqs}
      related={[
        { to: "/hrana-caini", label: "Hrană pentru câini în magazin" },
        { to: "/accesorii-caini", label: "Accesorii pentru câini" },
        { to: "/hrana-pisici", label: "Hrană pentru pisici" },
        { to: "/depozitare-furaje", label: "Cum păstrezi hrana și furajele" },
        { to: "/pet-shop-cluj", label: "Pet shop lângă Cluj" },
        { to: "/ghiduri", label: "Toate ghidurile" },
      ]}
    />
  ),
});
