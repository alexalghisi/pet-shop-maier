import { SITE_URL } from "./products";
import { OG_IMAGE } from "./gallery";

export const BUSINESS = {
  name: "PET SHOP MAIER",
  phone: "+40758639799",
  street: "Strada Eroilor 1",
  city: "Gilău",
  postal: "407310",
  region: "Cluj",
  lat: 46.7553,
  lng: 23.3833,
  facebook: "https://www.facebook.com/p/PET-SHOP-MAIER-61574444792704/",
  hours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    { days: ["Saturday", "Sunday"], opens: "09:00", closes: "17:00" },
  ],
  hoursText: ["Luni–Vineri 09:00–19:00", "Sâmbătă–Duminică 09:00–17:00"],
  areaServed: [
    "Gilău",
    "Florești",
    "Cluj-Napoca",
    "Huedin",
    "Căpușu Mare",
    "Luna de Sus",
    "Someșu Rece",
    "Săvădisla",
    "Baciu",
    "județul Cluj",
  ],
};

export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=PET+SHOP+MAIER+Strada+Eroilor+1+Gil%C4%83u+Cluj";

export const abs = (path: string) =>
  path.startsWith("http") ? path : `${SITE_URL}${path === "/" ? "/" : path}`;

export const localBusinessLd = () => ({
  "@context": "https://schema.org",
  "@type": ["PetStore", "LocalBusiness"],
  "@id": `${SITE_URL}/#store`,
  name: BUSINESS.name,
  alternateName: ["PetShop Maier", "Pet Shop Maier Gilău", "Furaje Gilău"],
  url: `${SITE_URL}/`,
  image: [OG_IMAGE],
  logo: `${SITE_URL}/favicon.png`,
  telephone: BUSINESS.phone,
  priceRange: "$",
  currenciesAccepted: "RON",
  paymentAccepted: "Numerar, Card",
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.street,
    addressLocality: BUSINESS.city,
    postalCode: BUSINESS.postal,
    addressRegion: BUSINESS.region,
    addressCountry: "RO",
  },
  geo: { "@type": "GeoCoordinates", latitude: BUSINESS.lat, longitude: BUSINESS.lng },
  hasMap: MAPS_URL,
  areaServed: BUSINESS.areaServed.map((name) => ({ "@type": "Place", name })),
  openingHoursSpecification: BUSINESS.hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.days,
    opens: h.opens,
    closes: h.closes,
  })),
  sameAs: [BUSINESS.facebook],
  makesOffer: [
    { "@type": "Offer", name: "Tărâțe – sac 20 kg", price: "40", priceCurrency: "RON" },
    {
      "@type": "Offer",
      name: "Furaj combinat măcinat universal – sac 30 kg",
      price: "60",
      priceCurrency: "RON",
    },
  ],
});

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ name: "Acasă", path: "/" }, ...items].map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: abs(it.path),
  })),
});

export const faqLd = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

type HeadOpts = {
  title: string;
  description: string;
  path: string;
  image?: string | undefined;
  type?: "website" | "article" | "product";
  keywords?: string | undefined;
  noindex?: boolean;
  ld?: object[];
};

/** Head complet: canonical și og:url absolute, og:image peste tot, JSON-LD. */
export function seoHead(o: HeadOpts) {
  const url = abs(o.path);
  const image = o.image ? abs(o.image) : OG_IMAGE;
  return {
    meta: [
      { title: o.title },
      { name: "description", content: o.description },
      ...(o.keywords ? [{ name: "keywords", content: o.keywords }] : []),
      {
        name: "robots",
        content: o.noindex
          ? "noindex, follow"
          : "index, follow, max-image-preview:large, max-snippet:-1",
      },
      { property: "og:title", content: o.title },
      { property: "og:description", content: o.description },
      { property: "og:type", content: o.type ?? "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:locale", content: "ro_RO" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: o.title },
      { name: "twitter:description", content: o.description },
      { name: "twitter:image", content: image },
      { name: "geo.region", content: "RO-CJ" },
      { name: "geo.placename", content: "Gilău" },
      { name: "geo.position", content: `${BUSINESS.lat};${BUSINESS.lng}` },
      { name: "ICBM", content: `${BUSINESS.lat}, ${BUSINESS.lng}` },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "ro-RO", href: url },
    ],
    scripts: (o.ld ?? []).map((d) => ({
      type: "application/ld+json",
      children: JSON.stringify(d),
    })),
  };
}
