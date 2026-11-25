import { createFileRoute, Link } from "@tanstack/react-router";
import { A, InfoPage, Li, Section } from "@/components/legal";
import { seoHead, breadcrumbLd } from "@/lib/seo";
import { SITE_URL } from "@/lib/products";

const TITLE = "Politica de cookie-uri | PET SHOP MAIER Gilău";
const DESC =
  "Ce cookie-uri folosește pethopmaier.shop: cookie-uri necesare, cookie-uri de publicitate Google AdSense și DoubleClick, Adsterra, Google Maps. Cum îți dai sau retragi acordul.";
const UPDATED = "26 noiembrie 2026";
const HOST = SITE_URL.replace("https://", "");
const L = "font-semibold text-primary underline";

const COOKIES = [
  {
    who: "Site (găzduire)",
    names: "__cf_bm",
    why: "Deosebește vizitatorii reali de roboți și protejează site-ul. Strict necesar.",
    life: "30 de minute",
  },
  {
    who: "Site (zona /admin)",
    names: "sesiune de autentificare în localStorage",
    why: "Ține logat doar proprietarul magazinului. Nu se aplică vizitatorilor.",
    life: "până la delogare",
  },
  {
    who: "Google AdSense",
    names: "__gads, __gpi, __eoi, FCCDCF, FCNEC",
    why: "Afișarea și măsurarea reclamelor, limitarea repetării lor, memorarea alegerii tale de consimțământ.",
    life: "până la 13 luni",
  },
  {
    who: "Google DoubleClick (doubleclick.net)",
    names: "IDE, DSID, test_cookie",
    why: "Reclame personalizate pe baza vizitelor pe acest site și pe alte site-uri; măsurarea conversiilor.",
    life: "de la 15 minute la 13 luni",
  },
  {
    who: "Adsterra",
    names: "identificatori ai rețelei de publicitate",
    why: "Afișarea reclamelor în cadre izolate, măsurare și prevenirea fraudei.",
    life: "stabilită de Adsterra",
  },
  {
    who: "Google Maps",
    names: "NID și alte cookie-uri Google",
    why: "Harta cu locația magazinului de pe pagina principală; preferințe și securitate.",
    life: "până la 6 luni",
  },
];

export const Route = createFileRoute("/politica-cookies")({
  head: () =>
    seoHead({
      title: TITLE,
      description: DESC,
      path: "/politica-cookies",
      ld: [breadcrumbLd([{ name: "Politica de cookie-uri", path: "/politica-cookies" }])],
    }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <InfoPage
      crumb="Politica de cookie-uri"
      eyebrow="Cookie-uri · Publicitate"
      title="Politica de cookie-uri"
      updated={UPDATED}
      intro={
        <>
          Pagina aceasta explică ce cookie-uri și tehnologii similare se folosesc pe {HOST}, cine le
          plasează și cum le poți accepta, refuza sau șterge.
        </>
      }
    >
      <Section h="1. Ce sunt cookie-urile">
        <p>
          Cookie-urile sunt fișiere mici pe care un site le salvează în browserul tău. Unele sunt
          necesare ca site-ul să funcționeze, altele ajută la afișarea și măsurarea reclamelor.
          Tehnologii asemănătoare (localStorage, identificatori de dispozitiv) sunt tratate la fel
          în această politică.
        </p>
      </Section>

      <Section h="2. Ce cookie-uri se folosesc pe acest site">
        <p>
          Site-ul nu are cont de client, coș de cumpărături sau formulare, așa că noi înșine nu
          plasăm cookie-uri de urmărire. Cookie-urile de mai jos vin de la găzduire și de la
          partenerii de publicitate și hărți.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b-2 border-gold text-foreground">
                <th className="py-2 pr-4">Cine îl plasează</th>
                <th className="py-2 pr-4">Cookie-uri</th>
                <th className="py-2 pr-4">Scop</th>
                <th className="py-2">Durată</th>
              </tr>
            </thead>
            <tbody>
              {COOKIES.map((c) => (
                <tr key={c.who} className="border-b align-top">
                  <td className="py-2 pr-4 font-semibold text-foreground">{c.who}</td>
                  <td className="py-2 pr-4">{c.names}</td>
                  <td className="py-2 pr-4">{c.why}</td>
                  <td className="py-2">{c.life}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Numele și duratele cookie-urilor terților sunt stabilite de aceștia și se pot schimba;
          lista este orientativă.
        </p>
      </Section>

      <Section h="3. Publicitatea Google și cookie-ul DoubleClick">
        <ul className="space-y-2">
          <Li>
            Furnizori terți, inclusiv Google, folosesc cookie-uri pentru a difuza reclame pe baza
            vizitelor tale anterioare pe acest site sau pe alte site-uri.
          </Li>
          <Li>
            Cookie-urile de publicitate (inclusiv cookie-ul DoubleClick) le permit Google și
            partenerilor săi să îți afișeze reclame în funcție de vizitele tale pe acest site și/sau
            pe alte site-uri de pe internet.
          </Li>
          <Li>
            Poți dezactiva publicitatea personalizată din{" "}
            <A href="https://adssettings.google.com">Setările pentru reclame Google</A>. Pentru alți
            furnizori terți, poți renunța pe{" "}
            <A href="https://www.youronlinechoices.eu/ro/">youronlinechoices.eu</A> sau{" "}
            <A href="https://www.aboutads.info/choices/">aboutads.info</A>.
          </Li>
          <Li>
            Cum folosește Google datele de pe site-urile partenere:{" "}
            <A href="https://policies.google.com/technologies/partner-sites">
              policies.google.com/technologies/partner-sites
            </A>
            .
          </Li>
        </ul>
      </Section>

      <Section h="4. Acordul tău">
        <p>
          Vizitatorilor din Spațiul Economic European, Regatul Unit și Elveția li se afișează
          mesajul de consimțământ al Google (platformă de gestionare a consimțământului certificată
          conform IAB TCF). De acolo poți accepta, refuza sau alege în detaliu scopurile și
          partenerii. Cookie-urile de publicitate personalizată se folosesc doar dacă îți dai
          acordul; dacă refuzi, pot fi afișate reclame nepersonalizate, care folosesc cookie-uri
          doar pentru limitarea frecvenței, măsurare și combaterea fraudei.
        </p>
        <p>
          Îți poți schimba oricând alegerea din linkul de confidențialitate afișat de mesajul Google
          în partea de jos a paginii sau ștergând cookie-urile din browser, caz în care mesajul
          apare din nou.
        </p>
      </Section>

      <Section h="5. Cum blochezi sau ștergi cookie-urile din browser">
        <ul className="space-y-2">
          <Li>
            <A href="https://support.google.com/chrome/answer/95647?hl=ro">Google Chrome</A>
          </Li>
          <Li>
            <A href="https://support.mozilla.org/ro/kb/protectie-imbunatatita-impotriva-urmaririi-firefox-desktop">
              Mozilla Firefox
            </A>
          </Li>
          <Li>
            <A href="https://support.apple.com/ro-ro/guide/safari/sfri11471/mac">Safari</A>
          </Li>
          <Li>
            <A href="https://support.microsoft.com/ro-ro/microsoft-edge">Microsoft Edge</A>
          </Li>
        </ul>
        <p>
          Blocarea cookie-urilor necesare poate afecta încărcarea site-ului; blocarea celor de
          publicitate nu îți limitează accesul la conținut.
        </p>
      </Section>

      <Section h="6. Mai multe informații">
        <p>
          Ce date personale se prelucrează, temeiurile legale și drepturile tale sunt descrise în{" "}
          <Link to="/confidentialitate" className={L}>
            Politica de confidențialitate
          </Link>
          . Pentru întrebări, vezi pagina de{" "}
          <Link to="/contact" className={L}>
            contact
          </Link>
          . Ultima actualizare: {UPDATED}.
        </p>
      </Section>
    </InfoPage>
  );
}
