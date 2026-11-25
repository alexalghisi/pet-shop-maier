import { createFileRoute } from "@tanstack/react-router";
import { GuidePage, guideHead } from "@/components/site";
import { GALLERY, photoSrc } from "@/lib/gallery";

const faqs = [
  {
    q: "Ce temperatură le trebuie puilor de o zi?",
    a: "32–35 °C la nivelul puilor în prima săptămână, apoi cu aproximativ 3 °C mai puțin în fiecare săptămână, până ajungi la temperatura camerei, pe la 5–6 săptămâni.",
  },
  {
    q: "Ce mănâncă puii de o zi?",
    a: "Furaj starter pentru pui, mărunt, cu 20–22% proteină, la discreție, și apă la temperatura camerei. Nu au nevoie de mămăligă, ou fiert sau pâine dacă primesc starter.",
  },
  {
    q: "Cât timp țin puii la bec?",
    a: "Până sunt complet îmbrăcați în pene, de obicei 5–6 săptămâni; vara se poate mai puțin, iarna mai mult. Semnul sigur este comportamentul: dacă noaptea nu se mai strâng sub sursa de căldură, nu mai au nevoie de ea.",
  },
  {
    q: "Când pot scoate puii afară?",
    a: "La plimbare, în zile calde și fără vânt, de la 2–3 săptămâni, pentru o oră-două. Definitiv, după ce au penele crescute și nopțile nu mai coboară sub 10–12 °C.",
  },
  {
    q: "De ce mor puii în primele zile?",
    a: "Cel mai des de frig sau de curent, de sete (nu au găsit apa) ori striviți la îngrămădeală. Bolile apar de obicei mai târziu, după prima săptămână.",
  },
  {
    q: "Pot ține puii mici împreună cu găinile mari?",
    a: "Nu până la 8–10 săptămâni. Adultele îi ciugulesc, iar puii nu au încă imunitate la microbii cu care găinile bătrâne s-au obișnuit.",
  },
];

const TITLE = "Creșterea puilor de o zi: temperatură și hrană";
const DESC =
  "Ghid pas cu pas pentru puii de o zi: cum pregătești locul, ce temperatură ții în fiecare săptămână, ce furaj starter dai, când îi scoți afară și ce semne arată că ceva nu merge.";
const IMG = "closca-brahma-cu-pui";

export const Route = createFileRoute("/crestere-pui-de-o-zi")({
  head: () =>
    guideHead(TITLE, DESC, "/crestere-pui-de-o-zi", faqs, {
      crumb: "Creșterea puilor de o zi",
      image: photoSrc(IMG),
      keywords:
        "pui de o zi, crestere pui de o zi, temperatura pui de o zi, ce mananca puii de o zi, furaj starter pui, cat tin puii la bec",
    }),
  component: () => (
    <GuidePage
      eyebrow="Ghid · Pui"
      crumb="Creșterea puilor de o zi"
      title="Creșterea puilor de o zi, săptămână cu săptămână"
      intro="Primele trei săptămâni hotărăsc aproape tot: un pui care a stat la cald, a găsit repede apa și a mâncat starter crește fără probleme. Iată ce pregătești înainte să îi aduci și ce urmărești după aceea."
      image={photoSrc(IMG, true)}
      imageAlt="Cloșcă Brahma cu pui în curte, la crescătoria PET SHOP MAIER din Gilău"
      waInterest="furaj starter pentru pui de o zi."
      sections={[
        {
          h: "Pregătește locul cu o zi înainte",
          p: "Puii trebuie să intre într-un loc deja cald, nu într-unul care se încălzește cu ei înăuntru. Ai nevoie de:",
          list: [
            "O cutie mare, un țarc din carton sau un colț închis, fără curent, cu pereți de 40–50 cm",
            "O sursă de căldură (bec cu infraroșu sau placă încălzitoare) pornită cu câteva ore înainte",
            "Așternut uscat de 5–8 cm: talaș de lemn sau paie tocate",
            "Adăpătoare pentru pui, în care nu pot intra cu totul, și o hrănitoare joasă",
            "Un termometru așezat la înălțimea puilor",
          ],
        },
        {
          h: "Temperatura, pe săptămâni",
          p: "Puiul de o zi nu își poate ține singur căldura. Măsoară la nivelul lui, sub sursa de căldură, și lasă mereu o zonă mai răcoroasă în care să se poată retrage.",
          list: [
            "Săptămâna 1: 32–35 °C",
            "Săptămâna 2: 29–32 °C",
            "Săptămâna 3: 26–29 °C",
            "Săptămâna 4: 23–26 °C",
            "Săptămânile 5–6: 20–23 °C, apoi fără încălzire dacă sunt îmbrăcați în pene",
          ],
        },
        {
          h: "Puii îți spun singuri dacă e bine",
          p: "Termometrul ajută, dar comportamentul puilor este mai precis. Dacă stau grămadă sub bec și piuie ascuțit, le e frig. Dacă stau lipiți de margini, cu ciocul deschis și aripile depărtate, le e prea cald. Dacă se strâng toți într-o parte, undeva trage curent. Când e bine, sunt împrăștiați peste tot, mănâncă, beau și dorm întinși.",
        },
        {
          h: "Apa întâi, apoi mâncarea",
          p: "Când îi aduci, înmoaie ciocul câtorva pui în apă; ceilalți învață de la ei. Apa să fie la temperatura camerei, nu rece de la fântână. Schimb-o de două ori pe zi: puii calcă în ea și o murdăresc repede. Pune pietricele curate sau bile de sticlă în tava adăpătorii în primele zile, ca să nu se ude și să nu se înece.",
        },
        {
          h: "Ce furaj dai și până când",
          p: "Hrana se schimbă odată cu vârsta. Trecerea de la un furaj la altul se face amestecându-le câteva zile.",
          list: [
            "0–6 (până la 8) săptămâni: starter pentru pui, 20–22% proteină, mărunt, la discreție",
            "8–18 săptămâni: furaj de creștere, 15–17% proteină",
            "De la 18 săptămâni sau de la primul ou: furaj pentru ouătoare, cu calciu",
            "Pui de carne: starter, apoi furaj de creștere și finisare, după schema producătorului",
          ],
          more: [
            "În primele două zile presară furaj și pe o hârtie groasă sau pe un carton, ca să îl găsească ușor. Dacă le dai și altceva decât furaj (verdeață tocată, grăunțe sparte), pune-le și nisip grosier sau pietriș fin, pentru pipotă.",
          ],
        },
        {
          h: "Așternut și spațiu",
          p: "Nu folosi ziare sau carton lucios direct sub pui: alunecă, iar picioarele li se desfac în lateral și rămân așa. Talașul de lemn este cel mai practic; rumegușul fin nu, pentru că îl mănâncă. Scoate zilnic așternutul ud din jurul adăpătorii.",
          more: [
            "La spațiu, socotește în primele două săptămâni cam 20–25 de pui pe metru pătrat, apoi dublează suprafața la fiecare două-trei săptămâni. Înghesuiala aduce ciugulit, umezeală și boli.",
          ],
        },
        {
          h: "Probleme frecvente în primele săptămâni",
          p: "Cele mai multe se rezolvă dacă le prinzi din prima zi:",
          list: [
            "Fund lipit cu găinaț uscat – înmoaie cu apă călduță și curăță ușor; apare după frig sau stres de transport",
            "Pui moleșiți, zbârliți, cu găinaț cu sânge după 2–3 săptămâni – semn de coccidioză; sună imediat la veterinar",
            "Picioare desfăcute – așternut alunecos; schimbă-l și leagă lejer picioarele puiului pentru câteva zile",
            "Ciugulit între ei – prea cald, prea multă lumină sau prea puțin loc",
          ],
        },
        {
          h: "Mutarea afară",
          p: "Obișnuiește-i treptat: întâi ieșiri scurte în zile calde, apoi zile întregi, apoi și nopțile. Țarcul de afară trebuie acoperit și închis seara; puii sunt pradă ușoară pentru pisici, ciori, dihori și șobolani. Ține-i separat de păsările adulte până pe la 8–10 săptămâni.",
        },
      ]}
      photos={GALLERY.filter((p) =>
        [
          "closca-brahma-cu-pui",
          "pui-brahma-2-3-luni-vaccinati",
          "furaje-man-10kg-pui",
          "furaje-man-curcani-boboci",
        ].includes(p.slug),
      )}
      faqs={faqs}
      related={[
        { to: "/furaje-pui", label: "Furaje pentru pui" },
        { to: "/pui-brahma", label: "Pui Brahma vaccinați" },
        { to: "/oua-brahma-incubat", label: "Ouă Brahma de incubat" },
        { to: "/hranire-gaini-ouatoare", label: "Hrănirea găinilor ouătoare" },
        { to: "/depozitare-furaje", label: "Cum păstrezi furajele" },
        { to: "/ghiduri", label: "Toate ghidurile" },
      ]}
    />
  ),
});
