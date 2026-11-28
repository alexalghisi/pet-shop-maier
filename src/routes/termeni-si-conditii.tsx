import { createFileRoute, Link } from "@tanstack/react-router";
import { PHONE, PHONE_HREF } from "@/components/site";
import { A, InfoPage, Li, Section } from "@/components/legal";
import { BUSINESS, seoHead, breadcrumbLd } from "@/lib/seo";
import { SITE_URL } from "@/lib/products";

const TITLE = "Termeni și condiții | PET SHOP MAIER Gilău";
const DESC =
  "Termenii și condițiile de utilizare a site-ului pethopmaier.shop: site de prezentare, prețuri și stocuri, comenzi prin WhatsApp, conținutul ghidurilor, publicitate, drepturile consumatorului.";
const UPDATED = "26 noiembrie 2026";
const HOST = SITE_URL.replace("https://", "");
const L = "font-semibold text-primary underline";

export const Route = createFileRoute("/termeni-si-conditii")({
  head: () =>
    seoHead({
      title: TITLE,
      description: DESC,
      path: "/termeni-si-conditii",
      ld: [breadcrumbLd([{ name: "Termeni și condiții", path: "/termeni-si-conditii" }])],
    }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <InfoPage
      crumb="Termeni și condiții"
      eyebrow="Informații legale"
      title="Termeni și condiții"
      updated={UPDATED}
      intro={
        <>
          Acești termeni descriu regulile de folosire a site-ului {HOST}. Folosind site-ul, ești de
          acord cu ei. Dacă nu ești de acord, te rugăm să nu folosești site-ul.
        </>
      }
    >
      <Section h="1. Cine operează site-ul">
        <p>
          Site-ul {HOST} este operat de {BUSINESS.name}, pet shop și magazin de furaje din{" "}
          {BUSINESS.street}, {BUSINESS.city} {BUSINESS.postal}, județul {BUSINESS.region}, România.
          Ne poți contacta la{" "}
          <a href={PHONE_HREF} className={L}>
            {PHONE}
          </a>{" "}
          (telefon și WhatsApp) sau prin pagina de{" "}
          <Link to="/contact" className={L}>
            contact
          </Link>
          .
        </p>
      </Section>

      <Section h="2. Ce este acest site">
        <p>
          {HOST} este un site de prezentare a magazinului și a produselor lui, cu ghiduri despre
          hrănirea și îngrijirea animalelor. Site-ul nu este un magazin online: nu are coș de
          cumpărături, cont de client sau plată online, iar prin simpla lui folosire nu se încheie
          un contract de vânzare.
        </p>
      </Section>

      <Section h="3. Prețuri, stocuri și comenzi">
        <ul className="space-y-2">
          <Li>
            Prețurile afișate pe site sunt cele confirmate de magazin la data publicării și pot fi
            modificate. Prețul valabil este cel confirmat de noi la comandă sau cel afișat în
            magazin.
          </Li>
          <Li>
            Disponibilitatea produselor se confirmă telefonic sau pe WhatsApp. Fotografiile au rol
            de prezentare; ambalajul se poate schimba de la un lot la altul.
          </Li>
          <Li>
            O comandă făcută pe WhatsApp sau la telefon devine fermă după ce o confirmăm. Plata se
            face la ridicare sau la livrare, conform celor stabilite la comandă.
          </Li>
          <Li>
            Transportul în Gilău, Florești, Cluj-Napoca și împrejurimi se stabilește la fiecare
            comandă, în funcție de cantitate și adresă.
          </Li>
        </ul>
      </Section>

      <Section h="4. Drepturile consumatorului">
        <p>
          Produselor cumpărate din magazin li se aplică legislația română privind protecția
          consumatorilor, inclusiv garanția legală de conformitate. Dacă un produs are o problemă
          (ambalaj deteriorat, termen depășit, altceva decât ai cerut), anunță-ne cât mai repede, cu
          bonul de casă, ca să găsim împreună soluția prevăzută de lege.
        </p>
        <p>
          Dacă nu reușim să rezolvăm o reclamație pe cale amiabilă, te poți adresa Autorității
          Naționale pentru Protecția Consumatorilor: <A href="https://anpc.ro">anpc.ro</A>, inclusiv
          prin procedura de soluționare alternativă a litigiilor (
          <A href="https://anpc.ro/ce-este-sal/">SAL</A>).
        </p>
      </Section>

      <Section h="5. Ghidurile și calculatorul de furaje">
        <p>
          Ghidurile, răspunsurile la întrebări frecvente și{" "}
          <Link to="/calculator-furaje" className={L}>
            calculatorul de furaje
          </Link>{" "}
          oferă informații generale și valori orientative. Ele nu sunt sfat veterinar sau zootehnic
          personalizat și nu înlocuiesc consultul unui medic veterinar. Rațiile reale depind de
          rasă, vârstă, sezon și starea animalului; respectă întotdeauna instrucțiunile de pe
          eticheta producătorului.
        </p>
        <p>
          Ne străduim ca informațiile să fie corecte și la zi, dar nu putem garanta că sunt complete
          sau potrivite fiecărei situații. Folosirea lor se face pe propria răspundere.
        </p>
      </Section>

      <Section h="6. Proprietate intelectuală">
        <p>
          Textele, fotografiile din magazin și din crescătorie, materialele video și elementele
          grafice de pe site aparțin {BUSINESS.name} sau sunt folosite cu acordul titularilor.
          Mărcile producătorilor menționați (de exemplu Furaje MAN, Monge, Versele-Laga, Deli
          Nature) aparțin deținătorilor lor și sunt folosite doar pentru a identifica produsele.
        </p>
        <p>
          Poți distribui linkuri către paginile site-ului și poți cita fragmente scurte cu
          menționarea sursei. Copierea integrală a ghidurilor sau a fotografiilor pe alte site-uri,
          fără acordul nostru, nu este permisă.
        </p>
      </Section>

      <Section h="7. Publicitate și linkuri externe">
        <p>
          Site-ul afișează reclame furnizate de terți (Google AdSense), marcate „Publicitate”. Nu
          alegem noi fiecare reclamă și nu răspundem de conținutul site-urilor către care trimit
          reclamele sau alte linkuri externe (Facebook, WhatsApp, Google Maps). Modul în care
          partenerii de publicitate folosesc cookie-uri este descris în{" "}
          <Link to="/politica-cookies" className={L}>
            Politica de cookie-uri
          </Link>{" "}
          și în{" "}
          <Link to="/confidentialitate" className={L}>
            Politica de confidențialitate
          </Link>
          .
        </p>
      </Section>

      <Section h="8. Folosirea corectă a site-ului">
        <p>
          Te rugăm să nu încerci să accesezi zona de administrare, să nu perturbi funcționarea
          site-ului și să nu extragi automat conținutul în scop comercial. Putem restricționa
          accesul în cazul unor astfel de folosiri.
        </p>
      </Section>

      <Section h="9. Legea aplicabilă și modificări">
        <p>
          Acești termeni sunt guvernați de legea română. Eventualele neînțelegeri se rezolvă pe cale
          amiabilă, iar în lipsa unei înțelegeri, de instanțele competente din România.
        </p>
        <p>
          Putem actualiza termenii când se schimbă site-ul sau legislația. Versiunea curentă este
          publicată mereu pe această pagină. Ultima actualizare: {UPDATED}.
        </p>
      </Section>
    </InfoPage>
  );
}
