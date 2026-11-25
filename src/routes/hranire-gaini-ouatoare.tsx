import { createFileRoute } from "@tanstack/react-router";
import { GuidePage, guideHead } from "@/components/site";
import { GALLERY, photoSrc } from "@/lib/gallery";

const faqs = [
  {
    q: "Cât furaj mănâncă o găină ouătoare pe zi?",
    a: "În medie 110–130 g de furaj combinat pe zi, adică în jur de 3,6 kg pe lună. Rasele grele, cum e Brahma, ajung la 140–170 g pe zi, iar iarna consumul crește la toate.",
  },
  {
    q: "De ce fac găinile ouă cu coaja moale?",
    a: "Cel mai des din lipsă de calciu sau de vitamina D3. Dă furaj pentru ouătoare, nu doar cereale, și pune separat calciu furajer sau scoici măcinate. Dacă problema apare la o singură găină bătrână sau după o sperietură, poate fi trecătoare.",
  },
  {
    q: "Pot hrăni găinile doar cu porumb și grâu?",
    a: "Supraviețuiesc, dar ouă puțin. Cerealele au 8–12% proteină și aproape deloc calciu, iar o ouătoare are nevoie de 16–17% proteină și de circa 4 g de calciu pe zi. Cerealele sunt bune ca supliment, seara.",
  },
  {
    q: "De la ce vârstă dau furaj de ouătoare?",
    a: "De la 17–18 săptămâni sau de la primul ou. Mai devreme nu e indicat: calciul mult din furajul de ouătoare încarcă rinichii puicuțelor care nu ouă încă.",
  },
  {
    q: "De ce nu mai ouă găinile iarna?",
    a: "Din cauza zilei scurte, a frigului și a năpârlirii de toamnă. Ajută o rație mai bogată, apă neînghețată și lumină dimineața, astfel încât ziua să aibă 14 ore.",
  },
  {
    q: "Câtă apă bea o găină?",
    a: "Cam 200–300 ml pe zi la vreme normală și de două ori mai mult pe caniculă. O găină rămasă fără apă câteva ore poate opri ouatul pentru zile întregi.",
  },
];

const TITLE = "Hrănirea găinilor ouătoare: rație, calciu, apă";
const DESC =
  "Cum hrănești găinile ouătoare ca să ouă constant: câte grame pe zi, cât calciu și câtă proteină, ce schimbi iarna, la năpârlire și pe caniculă. Ghid practic de la crescători din Gilău.";
const IMG = "furaje-man-10kg-gaini-ouatoare";

export const Route = createFileRoute("/hranire-gaini-ouatoare")({
  head: () =>
    guideHead(TITLE, DESC, "/hranire-gaini-ouatoare", faqs, {
      crumb: "Hrănirea găinilor ouătoare",
      image: photoSrc(IMG),
      keywords:
        "hranire gaini ouatoare, ce mananca gainile ouatoare, ratie gaini ouatoare, calciu gaini, cat mananca o gaina pe zi, de ce nu oua gainile",
    }),
  component: () => (
    <GuidePage
      eyebrow="Ghid · Găini ouătoare"
      crumb="Hrănirea găinilor ouătoare"
      title="Cum hrănești găinile ouătoare ca să ouă constant"
      intro="Un ou are în jur de 6 g de proteină și 2 g de calciu în coajă. Tot ce pune găina în ou trebuie să primească din hrană, în fiecare zi. Mai jos este rația pe care o folosim și noi, cu ce se schimbă de la un anotimp la altul."
      image={photoSrc(IMG, true)}
      imageAlt="Sac de Furaje MAN de 10 kg pentru găini ouătoare la PET SHOP MAIER Gilău"
      waInterest="furaj pentru găini ouătoare."
      sections={[
        {
          h: "Rația de bază, pe scurt",
          p: "Pentru o găină adultă de talie obișnuită, punctul de plecare este acesta:",
          list: [
            "110–130 g de furaj combinat pentru ouătoare pe zi (140–170 g la rasele grele)",
            "16–17% proteină brută în furaj",
            "3,5–4% calciu în furaj, plus calciu la discreție, separat",
            "200–300 ml de apă curată pe zi, dublu vara",
            "Cereale, verdețuri și resturi: cel mult o zecime din ce mănâncă",
          ],
        },
        {
          h: "De ce nu ajung cerealele",
          p: "Porumbul și grâul sunt hrană de energie: îngrașă găina, dar nu îi dau din ce să facă oul. Au 8–12% proteină și sub 0,1% calciu. O găină ținută doar pe grăunțe ouă la început din rezervele corpului, apoi rărește ouatul, face ouă mici sau cu coaja subțire și începe să își ciugulească penele ori ouăle.",
          more: [
            "Furajul combinat pentru ouătoare este făcut tocmai ca să acopere diferența: proteină din șroturi, calciu, fosfor, sare, vitamine și aminoacizi (metionină, lizină) care lipsesc din cereale. Dacă vrei să faci economie, păstrează furajul ca bază și dă cerealele seara, ca supliment, nu invers.",
          ],
        },
        {
          h: "Calciul se dă separat",
          p: "O găină care ouă zilnic scoate din corp aproximativ 2 g de calciu cu fiecare coajă și are nevoie de circa 4 g pe zi din hrană, pentru că nu îl absoarbe pe tot. Furajul acoperă cea mai mare parte, dar nevoia diferă de la o găină la alta. De aceea se pune într-un vas separat calciu furajer sau scoici măcinate: găinile care ouă iau cât le trebuie, iar cocoșii și puicuțele îl ocolesc.",
          more: [
            "Coaja se formează noaptea, așa că particulele mai mari de calciu, care se dizolvă încet, ajută mai mult decât praful fin. Cojile de ou se pot da înapoi doar uscate și bine mărunțite, ca să nu le recunoască drept ouă.",
          ],
        },
        {
          h: "Apa contează mai mult decât pare",
          p: "Oul este în proporție de aproximativ trei sferturi apă. O adăpătoare goală sau înghețată o jumătate de zi se vede în cuibar zile întregi. Vara pune apa la umbră și schimb-o zilnic; iarna du apă călduță dimineața și seara. Adăpătoarea se spală săptămânal, pentru că mâzga de pe fund este sursă de boli.",
        },
        {
          h: "Ce schimbi în funcție de anotimp",
          p: "Aceeași rație nu merge tot anul la fel de bine:",
          list: [
            "Iarna – găina arde mai mult ca să se încălzească; mărește porția cu 10–15% și dă o mână de porumb seara, care ține de cald peste noapte",
            "La năpârlire (toamna) – penele sunt aproape numai proteină; ține furajul la discreție și taie din cereale, chiar dacă ouatul se oprește câteva săptămâni",
            "Pe caniculă – găinile mănâncă mai puțin; hrănește dimineața devreme și seara, ține apa rece și la umbră",
            "Primăvara, la vârf de ouat – nu schimba brusc furajul; orice schimbare se face treptat, în 5–7 zile",
          ],
        },
        {
          h: "Pietriș, verdeață și resturi de bucătărie",
          p: "Găinile nu au dinți: macină boabele în pipotă, cu pietricele. Cele crescute liber le găsesc singure; celor ținute în țarc sau pe așternut pune-le pietriș mărunt într-un vas. Verdeața (lucernă, urzici opărite, iarbă tăiată) îngălbenește gălbenușul și le ține ocupate.",
          more: [
            "Dintre resturi, merg legumele fierte, pâinea uscată în cantitate mică și cojile de legume. Nu da mâncare sărată sau mucegăită, cartofi cruzi ori încolțiți, coji de avocado, ciocolată sau fasole crudă.",
          ],
        },
        {
          h: "Cum îți dai seama că rația e bună",
          p: "Nu ai nevoie de cântar de laborator, doar de puțină atenție:",
          list: [
            "Coaja este tare și netedă, iar ouăle au mărime constantă",
            "Găinile au penaj lucios și nu se ciugulesc între ele",
            "Hrănitoarea se golește până seara, dar nu rămâne goală cu orele",
            "Găinătul este format, cu vârf alb, nu apos",
            "La pipăit, pieptul este plin, fără ca osul să iasă ca o lamă și fără strat gros de grăsime pe burtă",
          ],
        },
        {
          h: "Greșeli pe care le vedem des",
          p: "Cele mai multe probleme cu ouatul pornesc de la câteva obiceiuri: furaj de ouătoare amestecat pe jumătate cu porumb „ca să ajungă”, furaj ținut în saci desfăcuți până prinde miros de mucegai, hrănitoare în care intră ploaia, lipsa calciului separat și schimbarea furajului de la o zi la alta. Înainte să cauți boli, verifică hrana, apa și lumina.",
        },
      ]}
      photos={GALLERY.filter((p) =>
        [
          "furaje-man-10kg-gaini-ouatoare",
          "gaini-brahma-crescute-liber-gilau",
          "oferta-tarate-furaj-combinat-gilau",
          "porumb-boabe-30kg-calitate-superioara",
        ].includes(p.slug),
      )}
      faqs={faqs}
      related={[
        { to: "/furaje-gaini", label: "Furaje pentru găini" },
        { to: "/furaj-combinat", label: "Furaj combinat la sac 30 kg" },
        { to: "/tarate", label: "Tărâțe" },
        { to: "/furajare-iarna", label: "Furajarea iarna" },
        { to: "/cat-furaj-pe-luna", label: "Cât furaj îți trebuie pe lună" },
        { to: "/ghiduri", label: "Toate ghidurile" },
      ]}
    />
  ),
});
