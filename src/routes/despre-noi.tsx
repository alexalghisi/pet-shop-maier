import { createFileRoute, Link } from "@tanstack/react-router";
import { PHONE, PHONE_HREF, FACEBOOK_URL, WhatsAppButton } from "@/components/site";
import { A, InfoPage, Li, Section } from "@/components/legal";
import { Gallery } from "@/components/Gallery";
import { BUSINESS, MAPS_URL, seoHead, breadcrumbLd, localBusinessLd } from "@/lib/seo";
import { byTag } from "@/lib/gallery";

const TITLE = "Despre noi – PET SHOP MAIER, pet shop în Gilău";
const DESC =
  "Cine suntem: PET SHOP MAIER, magazin de hrană pentru animale și furaje din Gilău, județul Cluj, și crescători de găini Brahma premiate la expoziții. Cum lucrăm și cum scriem ghidurile.";

const L = "font-semibold text-primary underline";

export const Route = createFileRoute("/despre-noi")({
  head: () =>
    seoHead({
      title: TITLE,
      description: DESC,
      path: "/despre-noi",
      ld: [
        breadcrumbLd([{ name: "Despre noi", path: "/despre-noi" }]),
        {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: TITLE,
          about: { "@id": "https://pethopmaier.shop/#store" },
        },
        localBusinessLd(),
      ],
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <InfoPage
      crumb="Despre noi"
      eyebrow="Despre noi"
      title="Magazinul de cartier pentru gospodari și iubitori de animale"
      intro={
        <>
          {BUSINESS.name} este un pet shop și magazin de furaje din centrul comunei Gilău, județul
          Cluj. Vindem hrană pentru animale de companie și de curte și creștem noi înșine găini
          Brahma, așa că sfaturile pe care le dăm vin din ce facem zi de zi.
        </>
      }
    >
      <Section h="Ce facem">
        <p>
          La tejghea vin în aceeași zi oameni cu un cățel abia adus acasă, gospodari care iau saci
          de furaj pentru găini și crescători de porumbei. De aceea ținem în același loc două lumi
          care de obicei stau în magazine diferite:
        </p>
        <ul className="space-y-2">
          <Li>
            <strong>Pet shop</strong> –{" "}
            <Link to="/hrana-caini" className={L}>
              hrană pentru câini
            </Link>{" "}
            și{" "}
            <Link to="/hrana-pisici" className={L}>
              pisici
            </Link>
            , la sac mare și la pungă,{" "}
            <Link to="/nisip-pisici" className={L}>
              nisip
            </Link>
            ,{" "}
            <Link to="/accesorii-caini" className={L}>
              accesorii
            </Link>
            .
          </Li>
          <Li>
            <strong>Furaje</strong> –{" "}
            <Link to="/furaje-man" className={L}>
              Furaje MAN
            </Link>{" "}
            pentru găini, pui, curcani și prepelițe,{" "}
            <Link to="/tarate" className={L}>
              tărâțe
            </Link>
            ,{" "}
            <Link to="/furaj-combinat" className={L}>
              furaj combinat
            </Link>
            ,{" "}
            <Link to="/porumb-boabe" className={L}>
              porumb boabe
            </Link>
            , hrană pentru{" "}
            <Link to="/hrana-cai" className={L}>
              cai
            </Link>{" "}
            și{" "}
            <Link to="/hrana-porumbei" className={L}>
              porumbei
            </Link>
            .
          </Li>
          <Li>
            <strong>Păsări de rasă</strong> –{" "}
            <Link to="/pui-brahma" className={L}>
              pui Brahma vaccinați
            </Link>{" "}
            și{" "}
            <Link to="/oua-brahma-incubat" className={L}>
              ouă de incubat
            </Link>
            , din crescătoria proprie.
          </Li>
        </ul>
      </Section>

      <Section h="Crescători, nu doar vânzători">
        <p>
          Creștem găini Brahma Columbia galben-negru și Brahma potârniche, în aer liber, în Gilău.
          Părinții puilor noștri au obținut diplome la expozițiile avicole din Cluj-Napoca. Asta
          înseamnă că furajele de pe raft sunt aceleași pe care le folosim și noi: știm cum arată un
          pui care crește bine pe un starter și ce se întâmplă cu ouatul când rația e prea săracă.
        </p>
        <div className="pt-2">
          <Gallery photos={byTag("brahma").slice(0, 6)} columns="columns-2 sm:columns-3" />
        </div>
      </Section>

      <Section h="Cum lucrăm">
        <ul className="space-y-2">
          <Li>
            <strong>Deschis 7 zile din 7</strong> – {BUSINESS.hoursText.join(", ")}.
          </Li>
          <Li>
            <strong>Comenzi pe WhatsApp</strong> – ne scrii ce îți trebuie, îți confirmăm stocul și
            prețul și îți pregătim sacii pentru ridicare.
          </Li>
          <Li>
            <strong>Transport în zonă</strong> – Gilău, Florești, Cluj-Napoca și împrejurimi, după
            cum stabilim la comandă.
          </Li>
          <Li>
            <strong>Prețuri spuse deschis</strong> – pe site afișăm doar prețurile confirmate de
            magazin; pentru restul produselor întrebi și primești răspunsul pe loc.
          </Li>
        </ul>
      </Section>

      <Section h="Cum scriem ghidurile de pe site">
        <p>
          <Link to="/ghiduri" className={L}>
            Ghidurile
          </Link>{" "}
          de pe pethopmaier.shop sunt scrise pentru gospodăria obișnuită din Ardeal, nu pentru ferme
          industriale. Pornim de la întrebările pe care le primim la tejghea și pe WhatsApp, folosim
          cantitățile de pe etichetele producătorilor și valorile uzuale din practica zootehnică și
          spunem clar când un număr este doar orientativ.
        </p>
        <p>
          Ghidurile nu înlocuiesc medicul veterinar. Dacă un animal este apatic, nu mănâncă sau are
          simptome de boală, sună întâi la veterinar.
        </p>
      </Section>

      <Section h="Unde ne găsești">
        <p>
          {BUSINESS.street}, {BUSINESS.city} {BUSINESS.postal}, județul {BUSINESS.region} – pe
          drumul dintre Cluj-Napoca și Huedin, la aproximativ 15 minute de Florești și 20 de minute
          de Cluj-Napoca. <A href={MAPS_URL}>Vezi magazinul pe Google Maps</A>, urmărește-ne pe{" "}
          <A href={FACEBOOK_URL}>Facebook</A> sau sună la{" "}
          <a href={PHONE_HREF} className={L}>
            {PHONE}
          </a>
          . Toate datele sunt și pe pagina de{" "}
          <Link to="/contact" className={L}>
            contact
          </Link>
          .
        </p>
        <WhatsAppButton>Scrie-ne pe WhatsApp</WhatsAppButton>
      </Section>
    </InfoPage>
  );
}
