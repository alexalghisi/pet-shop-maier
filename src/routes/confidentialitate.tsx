import { createFileRoute, Link } from "@tanstack/react-router";
import { PHONE, PHONE_HREF, FACEBOOK_URL } from "@/components/site";
import { A, InfoPage, Li, Section } from "@/components/legal";
import { BUSINESS, seoHead, breadcrumbLd } from "@/lib/seo";
import { SITE_URL } from "@/lib/products";

const TITLE = "Politica de confidențialitate | PET SHOP MAIER Gilău";
const DESC =
  "Politica de confidențialitate și cookie-uri PET SHOP MAIER (pethopmaier.shop): ce date prelucrăm, Google AdSense, drepturile tale conform GDPR.";
const UPDATED = "26 noiembrie 2026";
const HOST = SITE_URL.replace("https://", "");

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
    <InfoPage
      crumb="Politica de confidențialitate"
      eyebrow="GDPR · Cookie-uri"
      title="Politica de confidențialitate"
      updated={UPDATED}
      intro={
        <>
          Această pagină explică ce date personale prelucrează site-ul {HOST}, în ce scop, cu ce
          parteneri și ce drepturi ai conform Regulamentului (UE) 2016/679 (GDPR).
        </>
      }
    >
      <Section h="1. Cine suntem">
        <p>
          Site-ul{" "}
          <Link to="/" className="font-semibold text-primary underline">
            {HOST}
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
            <strong>Date de contact pe care ni le trimiți tu</strong> – când ne suni sau ne scrii pe
            WhatsApp ori Facebook pentru o comandă sau o întrebare: numele, numărul de telefon,
            mesajul și, dacă e cazul, adresa de livrare. Site-ul nu are formular de comandă sau cont
            de client; butoanele „WhatsApp” doar deschid aplicația WhatsApp cu un mesaj
            precompletat.
          </Li>
          <Li>
            <strong>Date tehnice și cookie-uri</strong> – adresa IP, tipul de browser și dispozitiv,
            paginile vizitate și identificatori de cookie, colectate de partenerii de publicitate
            descriși mai jos și de serverul care găzduiește site-ul (jurnale tehnice, pentru
            securitate).
          </Li>
          <Li>
            <strong>Zona de administrare</strong> – pagina /admin este folosită doar de proprietarul
            magazinului; pentru autentificare se păstrează în browser (localStorage) o sesiune de
            login. Vizitatorii obișnuiți nu își creează cont.
          </Li>
        </ul>
        <p>Nu colectăm date sensibile și nu vindem datele tale.</p>
      </Section>

      <Section h="3. Scopuri și temeiuri legale (art. 6 GDPR)">
        <ul className="space-y-2">
          <Li>
            Răspunsul la întrebări, preluarea și livrarea comenzilor – executarea unui contract sau
            demersuri înainte de încheierea lui (art. 6 alin. 1 lit. b).
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
            Păstrarea documentelor contabile pentru vânzări – obligație legală (art. 6 alin. 1 lit.
            c).
          </Li>
        </ul>
      </Section>

      <Section h="4. Cookie-uri și parteneri terți">
        <p>
          <strong>Google AdSense.</strong> Afișăm reclame prin Google AdSense (Google Ireland
          Limited). Google și partenerii săi folosesc cookie-uri și identificatori pentru a afișa
          reclame, inclusiv reclame personalizate pe baza vizitelor tale pe acest site și pe alte
          site-uri, și pentru a măsura performanța lor. Vizitatorilor din Spațiul Economic European,
          Regatul Unit și Elveția li se afișează mesajul de consimțământ al Google, certificat
          conform cadrului IAB Transparency &amp; Consent Framework (TCF), prin care poți accepta,
          refuza sau personaliza opțiunile. Dacă refuzi, pot fi afișate reclame nepersonalizate.
          Detalii despre cum folosește Google datele:{" "}
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
          <strong>Cookie-ul DoubleClick.</strong> Google, ca furnizor terț, folosește cookie-uri de
          publicitate (inclusiv cookie-ul DoubleClick, de pe domeniul doubleclick.net) pentru a
          difuza reclame în funcție de vizitele tale anterioare pe acest site sau pe alte site-uri.
          Poți renunța la publicitatea personalizată a furnizorilor terți și pe{" "}
          <A href="https://www.youronlinechoices.eu/ro/">youronlinechoices.eu</A> sau{" "}
          <A href="https://www.aboutads.info/choices/">aboutads.info</A>. Lista completă a
          cookie-urilor este în{" "}
          <Link to="/politica-cookies" className="font-semibold text-primary underline">
            Politica de cookie-uri
          </Link>
          .
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
          Unii parteneri (de exemplu Google) pot prelucra date și în afara Spațiului Economic
          European. Aceste transferuri se fac pe baza garanțiilor prevăzute de GDPR, cum ar fi
          Cadrul UE-SUA privind confidențialitatea datelor sau clauzele contractuale standard ale
          Comisiei Europene.
        </p>
      </Section>

      <Section h="6. Cât timp păstrăm datele">
        <ul className="space-y-2">
          <Li>
            Conversațiile și datele de comandă: cât este necesar pentru comandă și relația cu tine,
            apoi le ștergem.
          </Li>
          <Li>Documentele contabile: perioada impusă de legislația fiscală (de regulă 10 ani).</Li>
          <Li>
            Cookie-urile partenerilor: conform duratei stabilite de fiecare partener (de regulă până
            la 13 luni).
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
          Site-ul folosește conexiune criptată (HTTPS). Site-ul nu se adresează copiilor sub 16 ani
          și nu colectăm intenționat date despre aceștia.
        </p>
      </Section>

      <Section h="9. Modificări">
        <p>
          Putem actualiza această politică atunci când se schimbă serviciile sau legislația.
          Versiunea curentă este mereu publicată la{" "}
          <Link to="/confidentialitate" className="font-semibold text-primary underline">
            {HOST}/confidentialitate
          </Link>
          . Ultima actualizare: {UPDATED}.
        </p>
      </Section>
    </InfoPage>
  );
}
