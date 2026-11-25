import { createFileRoute } from "@tanstack/react-router";
import { GuidePage, guideHead } from "@/components/site";
import { GALLERY, photoSrc } from "@/lib/gallery";

const faqs = [
  {
    q: "Trebuie să dau mai multă mâncare iarna?",
    a: "Da. Animalele ținute afară sau în adăposturi neîncălzite consumă mai multă energie ca să își țină temperatura. La găini, socotește cu 10–15% mai mult furaj în perioadele de ger.",
  },
  {
    q: "Ce dau găinilor seara, când e ger?",
    a: "O mână de porumb boabe sau spart, cu o oră înainte de culcare. Se digeră încet și produce căldură peste noapte. Nu înlocuiește furajul de peste zi.",
  },
  {
    q: "Trebuie încălzit cotețul?",
    a: "De regulă nu. Găinile adulte suportă bine frigul dacă stau la uscat, fără curent, pe stinghii. Mai periculoase decât gerul sunt umezeala și aerul închis.",
  },
  {
    q: "Cum fac să nu înghețe apa?",
    a: "Du apă călduță dimineața și seara, folosește vase de cauciuc din care gheața iese ușor sau o adăpătoare încălzită. Nu pune sare sau alte substanțe în apă.",
  },
  {
    q: "Pot da zăpadă în loc de apă?",
    a: "Nu. Ca să topească zăpada, animalul consumă exact energia pe care încerci să i-o dai prin hrană și tot nu bea destul.",
  },
  {
    q: "Ce mănâncă iepurii iarna?",
    a: "Fân bun la discreție, granule sau cereale, rădăcinoase (morcov, sfeclă furajeră) în cantități mici și apă neînghețată. Legumele degerate nu se dau.",
  },
];

const TITLE = "Furajarea iarna: găini, iepuri și animale de curte";
const DESC =
  "Cum hrănești iarna găinile, iepurii, porumbeii și câinii de curte: cu cât mărești rația, ce dai seara, cum ții apa neînghețată și cum arată un adăpost uscat, fără curent.";
const IMG = "gaini-brahma-crescute-liber-gilau";

export const Route = createFileRoute("/furajare-iarna")({
  head: () =>
    guideHead(TITLE, DESC, "/furajare-iarna", faqs, {
      crumb: "Furajarea iarna",
      image: photoSrc(IMG),
      keywords:
        "furajare iarna, hrana gaini iarna, ce mananca gainile iarna, de ce nu oua gainile iarna, apa inghetata gaini, iepuri iarna hrana, caine de curte iarna",
    }),
  component: () => (
    <GuidePage
      eyebrow="Ghid · Iarnă"
      crumb="Furajarea iarna"
      title="Furajarea animalelor de curte iarna"
      intro="Iernile din zona Gilăului, la poalele Apusenilor, aduc nopți cu ger și săptămâni cu zăpadă. Animalele le trec fără probleme dacă au trei lucruri: mai multă energie în hrană, apă pe care o pot bea și un adăpost uscat."
      image={photoSrc(IMG, true)}
      imageAlt="Găini Brahma crescute liber în curte, în Gilău"
      waInterest="furaje pentru iarnă."
      sections={[
        {
          h: "De ce cresc porțiile când e frig",
          p: "Un animal își ține corpul cald arzând hrană. Cu cât e mai frig, mai umed și mai mult vânt, cu atât arde mai mult doar ca să se încălzească, iar ce rămâne pentru ouă, lapte sau creștere scade. Dacă rația rămâne cea din vară, animalul slăbește întâi și se îmbolnăvește apoi.",
          more: [
            "Mărește porțiile treptat, odată cu frigul, și urmărește starea animalelor: pipăie pieptul găinilor, spinarea iepurilor, coastele câinelui. Blana și penele de iarnă ascund ușor un animal slăbit.",
          ],
        },
        {
          h: "Găinile",
          p: "Furajul combinat rămâne baza și iarna; schimbi doar cantitatea și programul:",
          list: [
            "Cu 10–15% mai mult furaj în perioadele de ger",
            "Porumb boabe sau spart seara, înainte de culcare",
            "Dimineața, un amestec umed cald (furaj sau tărâțe opărite), cât mănâncă în 20–30 de minute, ca să nu înghețe în vas",
            "Verdeață uscată sau lucernă, varză ori sfeclă atârnată, ca să aibă ce ciuguli",
            "Calciu separat, la fel ca vara",
          ],
          more: [
            "Ouatul scade iarna mai ales din cauza zilei scurte. Un bec cu temporizator, aprins dimineața devreme astfel încât găinile să aibă aproximativ 14 ore de lumină, ajută mai mult decât orice supliment. Seara lasă întunericul să vină firesc, ca să apuce să urce pe stinghii.",
          ],
        },
        {
          h: "Apa este jumătate din hrană",
          p: "Un animal care nu bea nu mănâncă. Iarna, adăpătorile îngheață peste noapte, iar o găină sau un iepure rămas fără apă până la prânz mănâncă mai puțin toată ziua.",
          list: [
            "Apă călduță dimineața și din nou după-amiaza",
            "Vase de cauciuc sau de plastic moale, din care gheața se scoate cu o lovitură",
            "Adăpătoarea ținută în adăpost, ridicată de la sol",
            "La iepuri, boluri grele în locul biberoanelor, al căror vârf îngheață primul",
          ],
        },
        {
          h: "Adăpost: uscat și fără curent, nu neapărat cald",
          p: "Penele și blana țin de cald doar cât sunt uscate. Greșeala cea mai frecventă este cotețul închis ermetic: respirația și găinațul umplu aerul de umezeală și amoniac, iar crestele degeră mai ușor în aer umed decât în ger uscat.",
          more: [
            "Lasă aerisiri sus, deasupra nivelului la care dorm păsările, și astupă crăpăturile de la nivelul lor. Pune așternut gros de paie sau talaș și completează-l când se umezește. Stinghiile late, pe care găina își acoperă degetele cu pieptul, le feresc de degerături. La rasele cu creastă mare, în nopțile cele mai reci ajută un strat subțire de vaselină pe creastă.",
          ],
        },
        {
          h: "Iepurii",
          p: "Iepurii suportă frigul mai bine decât căldura, dacă au cușca ferită de vânt, de ploaie și de zăpadă și un culcuș cu multe paie. Fânul la discreție este esențial: digestia lui produce căldură. Mărește puțin porția de granule sau de cereale și dă rădăcinoase în cantități mici, niciodată înghețate.",
        },
        {
          h: "Porumbeii și prepelițele",
          p: "La porumbei, amestecul de iarnă are de obicei mai mult porumb și mai puține leguminoase decât cel din sezonul de reproducție. Prepelițele sunt sensibile la frig: sub 10–15 °C mănâncă mult și ouă puțin, deci au nevoie de un spațiu închis și de lumină suplimentară dacă vrei ouă și iarna.",
        },
        {
          h: "Câinele de curte",
          p: "Un câine care doarme afară consumă iarna vizibil mai multă energie. Mărește porția de hrană uscată cu 10–20%, în funcție de cât de frig este și de cum arată câinele, sau treci pe o hrană cu mai multă grăsime. Cușca trebuie ridicată de la pământ, cu intrarea ferită de vânt și cu paie uscate, nu pături care se udă și îngheață. Apa se schimbă de două ori pe zi.",
        },
        {
          h: "Fă-ți stocul înainte de ger",
          p: "Când vine zăpada, drumul până la magazin devine mai greu, iar consumul crește. Socotește necesarul pe o lună cu rația de iarnă și păstrează sacii la loc uscat, ridicați de la sol. Nu cumpăra însă furaj măcinat pentru toată iarna: se păstrează bine patru-șase săptămâni, nu patru luni.",
        },
      ]}
      photos={GALLERY.filter((p) =>
        [
          "gaini-brahma-crescute-liber-gilau",
          "gaina-brahma-columbia-in-aer-liber",
          "porumb-boabe-30kg-calitate-superioara",
          "oferta-tarate-furaj-combinat-gilau",
        ].includes(p.slug),
      )}
      faqs={faqs}
      related={[
        { to: "/hranire-gaini-ouatoare", label: "Hrănirea găinilor ouătoare" },
        { to: "/porumb-boabe", label: "Porumb boabe" },
        { to: "/tarate", label: "Tărâțe" },
        { to: "/hrana-iepuri", label: "Hrană pentru iepuri" },
        { to: "/depozitare-furaje", label: "Cum păstrezi furajele" },
        { to: "/ghiduri", label: "Toate ghidurile" },
      ]}
    />
  ),
});
