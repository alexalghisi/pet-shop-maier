import { createFileRoute, Link } from "@tanstack/react-router";
import { PHONE, PHONE_HREF, FACEBOOK_URL, WhatsAppButton } from "@/components/site";
import { A, InfoPage, Li, Section } from "@/components/legal";
import { BUSINESS, MAPS_URL, seoHead, breadcrumbLd, localBusinessLd } from "@/lib/seo";

const TITLE = "Contact PET SHOP MAIER – Gilău, Str. Eroilor 1";
const DESC =
  "Contact PET SHOP MAIER: Strada Eroilor 1, Gilău, județul Cluj. Telefon și WhatsApp 0758 639 799. Program: luni–vineri 09–19, sâmbătă–duminică 09–17. Cum ajungi și cum comanzi.";

const L = "font-semibold text-primary underline";

export const Route = createFileRoute("/contact")({
  head: () =>
    seoHead({
      title: TITLE,
      description: DESC,
      path: "/contact",
      ld: [
        breadcrumbLd([{ name: "Contact", path: "/contact" }]),
        {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: TITLE,
          about: { "@id": "https://pethopmaier.shop/#store" },
        },
        localBusinessLd(),
      ],
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <InfoPage
      crumb="Contact"
      eyebrow="Contact"
      title="Contact și program"
      intro={
        <>
          Cel mai repede ne găsești pe WhatsApp sau la telefon. Magazinul este deschis în fiecare
          zi, inclusiv duminica.
        </>
      }
    >
      <Section h="Date de contact">
        <address className="not-italic">
          <ul className="space-y-2">
            <Li>
              <strong>Adresă:</strong> {BUSINESS.street}, {BUSINESS.city} {BUSINESS.postal}, județul{" "}
              {BUSINESS.region}, România
            </Li>
            <Li>
              <strong>Telefon:</strong>{" "}
              <a href={PHONE_HREF} className={L}>
                {PHONE}
              </a>
            </Li>
            <Li>
              <strong>WhatsApp:</strong> același număr, {PHONE}
            </Li>
            <Li>
              <strong>Facebook:</strong> <A href={FACEBOOK_URL}>PET SHOP MAIER</A>
            </Li>
            <Li>
              <strong>Hartă:</strong> <A href={MAPS_URL}>deschide în Google Maps</A>
            </Li>
          </ul>
        </address>
        <div className="flex flex-wrap gap-3 pt-2">
          <WhatsAppButton>Scrie-ne pe WhatsApp</WhatsAppButton>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center rounded-full border-2 border-primary px-6 py-3 font-bold text-primary transition hover:bg-primary hover:text-primary-foreground"
          >
            Sună: {PHONE}
          </a>
        </div>
      </Section>

      <Section h="Program">
        <ul className="space-y-2">
          {BUSINESS.hoursText.map((h) => (
            <Li key={h}>{h}</Li>
          ))}
        </ul>
        <p>
          În zilele de sărbătoare legală programul se poate schimba; îl anunțăm pe pagina de
          Facebook. Dacă vii de la distanță pentru mai mulți saci, scrie-ne înainte, ca să îi ai
          pregătiți.
        </p>
      </Section>

      <Section h="Cum ajungi">
        <p>
          Suntem în centrul comunei Gilău, pe {BUSINESS.street}, cu parcare ușoară. Din Florești
          faci aproximativ 15 minute cu mașina, iar din Cluj-Napoca aproximativ 20 de minute, pe
          drumul spre Huedin și Oradea.
        </p>
        <p>
          Venim în întâmpinarea clienților din {BUSINESS.areaServed.slice(0, -1).join(", ")} și din
          restul județului Cluj.
        </p>
      </Section>

      <Section h="Cum comanzi">
        <ol className="space-y-2">
          <Li>
            Ne scrii pe WhatsApp sau ne suni și ne spui ce produs și ce cantitate vrei. Dacă nu știi
            câți saci îți trebuie, folosește{" "}
            <Link to="/calculator-furaje" className={L}>
              calculatorul de furaje
            </Link>
            .
          </Li>
          <Li>Îți confirmăm stocul și prețul.</Li>
          <Li>
            Ridici comanda din magazin sau stabilim transportul în Gilău, Florești, Cluj-Napoca și
            împrejurimi.
          </Li>
        </ol>
        <p>
          Site-ul este unul de prezentare: nu are coș de cumpărături și nu se plătește online.
          Detalii în{" "}
          <Link to="/termeni-si-conditii" className={L}>
            Termeni și condiții
          </Link>
          .
        </p>
      </Section>

      <Section h="Întrebări despre datele tale sau despre site">
        <p>
          Pentru orice solicitare legată de datele personale, de conținutul site-ului sau de
          reclamele afișate, folosește aceleași date de contact. Vezi și{" "}
          <Link to="/confidentialitate" className={L}>
            Politica de confidențialitate
          </Link>{" "}
          și{" "}
          <Link to="/politica-cookies" className={L}>
            Politica de cookie-uri
          </Link>
          .
        </p>
      </Section>
    </InfoPage>
  );
}
