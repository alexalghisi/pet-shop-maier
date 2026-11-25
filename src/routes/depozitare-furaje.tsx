import { createFileRoute } from "@tanstack/react-router";
import { GuidePage, guideHead } from "@/components/site";
import { GALLERY, photoSrc } from "@/lib/gallery";

const faqs = [
  {
    q: "Cât timp ține un sac de furaj combinat?",
    a: "Furajul măcinat se folosește, ideal, în 4–8 săptămâni de la cumpărare, iar vara mai repede. Pe sacii de fabrică este trecută data de valabilitate; după deschidere, socotește cel mult câteva săptămâni.",
  },
  {
    q: "Pot da animalelor furaj mucegăit dacă îl cern sau îl usuc?",
    a: "Nu. Toxinele produse de mucegai rămân în furaj și după ce mucegaiul nu se mai vede, și nu dispar prin uscare, cernere sau fierbere. Furajul mucegăit se aruncă.",
  },
  {
    q: "Cum scap de gărgărițe din cereale?",
    a: "Separă sacul atacat, golește și mătură locul, spală recipientele și lasă-le la uscat. Cantitățile mici se pot ține câteva zile la congelator. Pe viitor, cumpără cât consumi în una-două luni și ține cerealele în recipiente închise.",
  },
  {
    q: "E bine să țin furajul în butoi de plastic?",
    a: "Da, dacă are capac și stă la umbră, într-un loc răcoros. Șobolanii rod plasticul, așa că acolo unde sunt rozătoare este mai sigur un butoi de tablă cu capac.",
  },
  {
    q: "Cât țin porumbul boabe și grâul?",
    a: "Boabele întregi, uscate și ferite de umezeală și dăunători se păstrează bine de la o recoltă la alta. Odată măcinate, se strică mult mai repede, de aceea se macină cât pentru două-trei săptămâni.",
  },
];

const TITLE = "Depozitarea furajelor: fără mucegai și rozătoare";
const DESC =
  "Cum păstrezi furajul combinat, tărâțele, porumbul și hrana uscată pentru câini și pisici: umezeală, temperatură, mucegai, gărgărițe, rozătoare și cât ține un sac desfăcut.";
const IMG = "furaje-man-sac-mare";

export const Route = createFileRoute("/depozitare-furaje")({
  head: () =>
    guideHead(TITLE, DESC, "/depozitare-furaje", faqs, {
      crumb: "Depozitarea furajelor",
      image: photoSrc(IMG),
      keywords:
        "depozitare furaje, cum pastrez furajele, cat tine un sac de furaj, furaj mucegait, gargarite in cereale, pastrare porumb boabe, pastrare tarate",
    }),
  component: () => (
    <GuidePage
      eyebrow="Ghid · Depozitare"
      crumb="Depozitarea furajelor"
      title="Cum păstrezi furajele și cerealele ca să nu le pierzi"
      intro="Un sac de furaj ținut prost pierde vitamine, prinde mucegai sau ajunge hrană pentru șoareci. Regulile sunt puține și simple, dar fac diferența dintre un furaj bun până la ultimul kilogram și un sac aruncat pe jumătate."
      image={photoSrc(IMG, true)}
      imageAlt="Sac mare de Furaje MAN la PET SHOP MAIER Gilău"
      waInterest="furaje la sac."
      sections={[
        {
          h: "Cei patru dușmani ai furajului",
          p: "Aproape orice furaj stricat a avut de-a face cu unul dintre aceștia:",
          list: [
            "Umezeala – duce la mucegai și la încingerea furajului",
            "Căldura și soarele – distrug vitaminele și râncezesc grăsimile",
            "Rozătoarele și păsările sălbatice – mănâncă, murdăresc și aduc boli",
            "Insectele – gărgărițe și molii, care se înmulțesc repede la căldură",
          ],
        },
        {
          h: "Unde și cum așezi sacii",
          p: "Alege o încăpere uscată, răcoroasă și aerisită: o magazie, o cămară sau un colț de garaj fără igrasie. Nu pune sacii direct pe beton sau pe pământ, pentru că pardoseala trage umezeală în ei; așază-i pe un palet sau pe câteva scânduri și lasă o palmă distanță față de perete.",
          more: [
            "Nu ține furajul lângă motorină, vopsele, îngrășăminte sau substanțe de stropit. Sacii prind miros, iar o scurgere poate otrăvi animalele.",
          ],
        },
        {
          h: "Sacul desfăcut",
          p: "După ce ai deschis sacul, cel mai bine este să îl pui cu totul într-un butoi sau într-o ladă cu capac. Rămâi astfel cu eticheta, lotul și data de valabilitate la îndemână. Dacă torni furajul direct în recipient, golește-l și șterge-l înainte de fiecare sac nou, ca resturile vechi de pe fund să nu ajungă mereu dedesubt.",
          more: [
            "Scoate furajul cu o cană sau cu un făraș uscat și închide capacul de fiecare dată. O cană udă lăsată în butoi este de ajuns ca să pornească mucegaiul.",
          ],
        },
        {
          h: "Cumpără cât consumi",
          p: "Furajul măcinat are suprafață mare de contact cu aerul, iar vitaminele și grăsimile din el se degradează în săptămâni, nu în luni. Regula practică: ia cât consumi în 4–6 săptămâni, mai ales vara. Tărâțele trag umezeala foarte ușor, deci nu merită stocate pe termen lung. Boabele întregi, în schimb, se păstrează mult mai bine.",
          more: [
            "Folosește întâi sacul cel mai vechi. Dacă ai mai mulți saci, scrie data cumpărării pe ei cu markerul.",
          ],
        },
        {
          h: "Cum recunoști un furaj stricat",
          p: "Verifică de fiecare dată când deschizi butoiul:",
          list: [
            "Miros de mucegai, de acru sau de rânced, în loc de miros curat de cereale",
            "Bulgări, cocoloașe ori furaj cald la mijlocul sacului",
            "Puncte sau fire albe, verzui ori negre",
            "Pânze fine și boabe găurite, semn de insecte",
            "Excremente de șoarece sau saci roși",
          ],
          more: [
            "Furajul mucegăit nu se dă nici „doar la porci” sau „doar puțin”. Toxinele mucegaiurilor provoacă scăderea ouatului, diaree, avorturi și îmbolnăviri ale ficatului, iar păsările tinere și iepurii sunt foarte sensibili.",
          ],
        },
        {
          h: "Rozătoare și insecte",
          p: "Șoarecii și șobolanii vin acolo unde găsesc mâncare ușor. Ține furajul în recipiente închise, mătură boabele căzute și nu lăsa hrănitoarele pline peste noapte în locuri deschise. Verifică periodic colțurile magaziei și astupă găurile. Dacă folosești momeli, pune-le doar în stații închise, unde nu ajung câinii, pisicile și păsările.",
          more: [
            "Pentru gărgărițe, cea mai bună apărare este rotația rapidă a stocului și curățenia între loturi. Un sac atacat se ține departe de ceilalți.",
          ],
        },
        {
          h: "Hrana uscată pentru câini și pisici",
          p: "Se aplică aceleași reguli, cu o grijă în plus: boabele conțin grăsimi care râncezesc la aer și la căldură. Ține hrana în sacul original, strâns la gură, pus într-un recipient cu capac, nu pe balcon și nu lângă calorifer. Un sac desfăcut este cel mai bun în primele 4–6 săptămâni.",
        },
        {
          h: "Vara și iarna",
          p: "Vara, căldura și umezeala scurtează mult viața furajului, așa că ia saci mai mici și mai des. Iarna, problema este condensul: un butoi mutat de la frig la cald „transpiră” pe interior. Ține recipientele într-un loc cu temperatură cât mai constantă și nu le lipi de un perete exterior rece.",
        },
      ]}
      photos={GALLERY.filter((p) =>
        [
          "furaje-man-sac-mare",
          "furaje-man-saci-5kg",
          "porumb-boabe-30kg-calitate-superioara",
          "oferta-tarate-furaj-combinat-gilau",
        ].includes(p.slug),
      )}
      faqs={faqs}
      related={[
        { to: "/furaj-combinat", label: "Furaj combinat la sac" },
        { to: "/tarate", label: "Tărâțe la sac" },
        { to: "/porumb-boabe", label: "Porumb boabe" },
        { to: "/cat-furaj-pe-luna", label: "Cât furaj îți trebuie pe lună" },
        { to: "/furaje-man", label: "Furaje MAN" },
        { to: "/ghiduri", label: "Toate ghidurile" },
      ]}
    />
  ),
});
