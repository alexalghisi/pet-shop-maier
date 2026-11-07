import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Header, Footer, Breadcrumbs, PHONE, PHONE_HREF, FACEBOOK_URL } from "@/components/site";
import { BUSINESS, seoHead, breadcrumbLd } from "@/lib/seo";
import { SITE_URL } from "@/lib/products";

const TITLE = "Politica de confidențialitate | PET SHOP MAIER Gilău";
const DESC =
  "Politica de confidențialitate și cookie-uri PET SHOP MAIER (pethopmaier.shop): ce date prelucrăm, Google AdSense, Adsterra, drepturile tale conform GDPR.";
const UPDATED = "7 noiembrie 2026";

const A = ({ href, children }: { href: string; children: ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold text-primary underline"
  >
    {children}
  </a>
);

const Section = ({ h, children }: { h: string; children: ReactNode }) => (
  <section className="mb-10">
    <h2 className="text-2xl md:text-3xl">{h}</h2>
    <div className="mt-4 space-y-3 leading-relaxed text-muted-foreground">{children}</div>
  </section>
);

const Li = ({ children }: { children: ReactNode }) => (
  <li className="border-l-4 border-gold pl-4">{children}</li>
);

export const Route = createFileRoute("/confidentialitate")({
  head: () =>
    seoHead({
      title: TITLE,
      description: DESC,
      path: "/confidentialitate",
      ld: [breadcrumbLd([{ name: "Politica de confidențialitate", path: "/confidentialitate" }])],
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main>
      <Header />
      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
          <Breadcrumbs items={[{ name: "Politica de confidențialitate" }]} />
          <p className="eyebrow mt-6">GDPR · Cookie-uri</p>
          <h1 className="mt-3 text-4xl leading-tight md:text-5xl">Politica de confidențialitate</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Această pagină explică ce date personale prelucrează site-ul{" "}
            {SITE_URL.replace("https://", "")}, în ce scop, cu ce parteneri și ce drepturi ai
            conform Regulamentului (UE) 2016/679 (GDPR).
          </p>
          <p className="mt-4 text-sm font-semibold">Ultima actualizare: {UPDATED}</p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-14 md:py-16">
        <Section h="1. Cine suntem">
          <p>
            Site-ul{" "}
            <Link to="/" className="font-semibold text-primary underline">
              {SITE_URL.replace("https://", "")}
            </Link>{" "}
            este operat de {BUSINESS.name}, pet shop și magazin de furaje, cu sediul în{" "}
            {BUSINESS.street}, {BUSINESS.city} {BUSINESS.postal}, jud. {BUSINESS.region}, România.{" "}
            {BUSINESS.name} este operatorul datelor personale descrise mai jos.
          </p>
          <p>
            Contact pentru orice întrebare legată de datele tale: telefon / WhatsApp{" "}
            <a href={PHONE_HREF} className="font-semibold text-primary underline">
              {PHONE}
            </a>{" "}
            sau pagina noastră de <A href={FACEBOOK_URL}>Facebook</A>.
          </p>
        </Section>

        <Section h="2. Ce date colectăm">
          <ul className="space-y-2">
            <Li>
              <strong>Date de contact pe care ni le trimiți tu</strong> – când ne suni sau ne scrii
              pe WhatsApp ori Facebook pentru o comandă sau o întrebare: numele, numărul de telefon,
              mesajul și, dacă e cazul, adresa de livrare. Site-ul nu are formular de comandă sau
              cont de client; butoanele „WhatsApp” doar deschid aplicația WhatsApp cu un mesaj
              precompletat.
            </Li>
            <Li>
              <strong>Date tehnice și cookie-uri</strong> – adresa IP, tipul de browser și
              dispozitiv, paginile vizitate și identificatori de cookie, colectate de partenerii de
              publicitate descriși mai jos și de serverul care găzduiește site-ul (jurnale tehnice,
              pentru securitate).
            </Li>
            <Li>
              <strong>Zona de administrare</strong> – pagina /admin este folosită doar de
              proprietarul magazinului; pentru autentificare se păstrează în browser (localStorage)
              o sesiune de login. Vizitatorii obișnuiți nu își creează cont.
            </Li>
          </ul>
          <p>Nu colectăm date sensibile și nu vindem datele tale.</p>
        </Section>

        <Section h="3. Scopuri și temeiuri legale (art. 6 GDPR)">
          <ul className="space-y-2">
            <Li>
              Răspunsul la întrebări, preluarea și livrarea comenzilor – executarea unui contract
              sau demersuri înainte de încheierea lui (art. 6 alin. 1 lit. b).
            </Li>
            <Li>
              Afișarea de reclame personalizate și cookie-uri de publicitate – consimțământul tău
              (art. 6 alin. 1 lit. a), cerut prin mesajul de consimțământ Google.
            </Li>
            <Li>
              Reclame nepersonalizate, securitatea și funcționarea site-ului – interesul nostru
              legitim (art. 6 alin. 1 lit. f).
            </Li>
            <Li>
              Păstrarea documentelor contabile pentru vânzări – obligație legală (art. 6 alin. 1
              lit. c).
            </Li>
          </ul>
        </Section>

        <Section h="4. Cookie-uri și parteneri terți">
          <p>
            <strong>Google AdSense.</strong> Afișăm reclame prin Google AdSense (Google Ireland
            Limited). Google și partenerii săi folosesc cookie-uri și identificatori pentru a afișa
            reclame, inclusiv reclame personalizate pe baza vizitelor tale pe acest site și pe alte
            site-uri, și pentru a măsura performanța lor. Vizitatorilor din Spațiul Economic
            European, Regatul Unit și Elveția li se afișează mesajul de consimțământ al Google,
            certificat conform cadrului IAB Transparency &amp; Consent Framework (TCF), prin care
            poți accepta, refuza sau personaliza opțiunile. Dacă refuzi, pot fi afișate reclame
            nepersonalizate. Detalii despre cum folosește Google datele:{" "}
            <A href="https://policies.google.com/technologies/ads">
              policies.google.com/technologies/ads
            </A>{" "}
            și{" "}
            <A href="https://policies.google.com/technologies/partner-sites">
              policies.google.com/technologies/partner-sites
            </A>
            . Poți dezactiva reclamele personalizate din{" "}
            <A href="https://adssettings.google.com">Setările pentru reclame Google</A>.
          </p>
          <p>
            <strong>Adsterra.</strong> Unele spații publicitare sunt furnizate de rețeaua Adsterra,
            care încarcă reclame în cadre izolate (iframe) și poate folosi cookie-uri și date
            tehnice (IP, browser, dispozitiv) pentru afișarea și măsurarea reclamelor și prevenirea
            fraudei. Detalii:{" "}
            <A href="https://adsterra.com/privacy-policy/">adsterra.com/privacy-policy</A>.
          </p>
          <p>
            <strong>Google Maps.</strong> Pe pagina principală este inclusă o hartă Google Maps cu
            locația magazinului; la încărcarea ei Google poate primi adresa IP și poate seta
            cookie-uri, conform{" "}
            <A href="https://policies.google.com/privacy">Politicii de confidențialitate Google</A>.
          </p>
          <p>
            <strong>WhatsApp și Facebook.</strong> Când folosești linkurile către WhatsApp sau
            Facebook, părăsești site-ul și se aplică politicile Meta Platforms Ireland Ltd.
          </p>
          <p>
            Poți șterge sau bloca oricând cookie-urile din setările browserului; unele reclame pot
            deveni mai puțin relevante.
          </p>
        </Section>

        <Section h="5. Transferuri în afara UE">
          <p>
            Unii parteneri (de exemplu Google sau Adsterra) pot prelucra date și în afara Spațiului
            Economic European. Aceste transferuri se fac pe baza garanțiilor prevăzute de GDPR, cum
            ar fi Cadrul UE-SUA privind confidențialitatea datelor sau clauzele contractuale
            standard ale Comisiei Europene.
          </p>
        </Section>

        <Section h="6. Cât timp păstrăm datele">
          <ul className="space-y-2">
            <Li>
              Conversațiile și datele de comandă: cât este necesar pentru comandă și relația cu
              tine, apoi le ștergem.
            </Li>
            <Li>
              Documentele contabile: perioada impusă de legislația fiscală (de regulă 10 ani).
            </Li>
            <Li>
              Cookie-urile partenerilor: conform duratei stabilite de fiecare partener (de regulă
              până la 13 luni).
            </Li>
          </ul>
        </Section>

        <Section h="7. Drepturile tale">
          <p>Conform GDPR (art. 15–22) ai dreptul:</p>
          <ul className="space-y-2">
            <Li>de acces la datele tale;</Li>
            <Li>la rectificarea datelor inexacte;</Li>
            <Li>la ștergerea datelor („dreptul de a fi uitat”);</Li>
            <Li>la restricționarea prelucrării;</Li>
            <Li>de opoziție, inclusiv față de marketingul direct;</Li>
            <Li>la portabilitatea datelor;</Li>
            <Li>
              să îți retragi oricând consimțământul (de exemplu din mesajul de confidențialitate
              Google sau prin ștergerea cookie-urilor), fără a afecta prelucrarea făcută înainte;
            </Li>
            <Li>
              să depui o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu
              Caracter Personal (ANSPDCP),{" "}
              <A href="https://www.dataprotection.ro">www.dataprotection.ro</A>.
            </Li>
          </ul>
          <p>
            Pentru exercitarea drepturilor, contactează-ne la{" "}
            <a href={PHONE_HREF} className="font-semibold text-primary underline">
              {PHONE}
            </a>{" "}
            (telefon / WhatsApp). Îți răspundem în cel mult o lună.
          </p>
        </Section>

        <Section h="8. Securitate și minori">
          <p>
            Site-ul folosește conexiune criptată (HTTPS). Site-ul nu se adresează copiilor sub 16
            ani și nu colectăm intenționat date despre aceștia.
          </p>
        </Section>

        <Section h="9. Modificări">
          <p>
            Putem actualiza această politică atunci când se schimbă serviciile sau legislația.
            Versiunea curentă este mereu publicată la{" "}
            <Link to="/confidentialitate" className="font-semibold text-primary underline">
              {SITE_URL.replace("https://", "")}/confidentialitate
            </Link>
            . Ultima actualizare: {UPDATED}.
          </p>
        </Section>
      </article>
      <Footer />
    </main>
  );
}
