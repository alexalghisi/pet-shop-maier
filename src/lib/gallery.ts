import { SITE_URL } from "./products";

export type GalleryTag = "brahma" | "furaje" | "cai" | "caini";
export type GalleryPhoto = { slug: string; w: number; h: number; alt: string; tags: GalleryTag[] };

// Poze originale de pe pagina de Facebook PET SHOP MAIER — afișate întregi, fără crop.
export const GALLERY: GalleryPhoto[] = [
  {
    slug: "pui-si-oua-brahma-columbia-galben-negru-de-vanzare",
    w: 1024,
    h: 1536,
    alt: "Pui și ouă de vânzare din găini Brahma Columbia galben-negru, campioni la expoziții – PET SHOP MAIER Gilău",
    tags: ["brahma"],
  },
  {
    slug: "crescator-brahma-gilau-expozitie",
    w: 1200,
    h: 1600,
    alt: "Crescătorul PET SHOP MAIER cu certificatul găinilor Brahma la expoziția avicolă",
    tags: ["brahma"],
  },
  {
    slug: "pui-brahma-2-3-luni-vaccinati",
    w: 960,
    h: 720,
    alt: "Pui Brahma de 2–3 luni, vaccinați, crescuți liber pe iarbă în Gilău",
    tags: ["brahma"],
  },
  {
    slug: "brahma-diploma-expozitie-avicola",
    w: 1200,
    h: 1600,
    alt: "Găină Brahma premiată cu diplomă la expoziția avicolă Cluj-Napoca",
    tags: ["brahma"],
  },
  {
    slug: "cocos-brahma-premiat-diploma",
    w: 1200,
    h: 1600,
    alt: "Cocoș Brahma premiat, ținut în brațe, cu diplomă și trofeu",
    tags: ["brahma"],
  },
  {
    slug: "gaini-brahma-potarniche-in-curte",
    w: 960,
    h: 720,
    alt: "Găini Brahma potârniche în curte, crescute natural",
    tags: ["brahma"],
  },
  {
    slug: "closca-brahma-cu-pui",
    w: 1200,
    h: 1600,
    alt: "Cloșcă Brahma cu pui pe pășune",
    tags: ["brahma"],
  },
  {
    slug: "pui-si-oua-brahma-potarniche-de-vanzare",
    w: 1024,
    h: 1536,
    alt: "Pui și ouă fertile Brahma potârniche de vânzare pentru incubație",
    tags: ["brahma"],
  },
  {
    slug: "gaina-brahma-columbia-in-aer-liber",
    w: 1600,
    h: 1200,
    alt: "Găină Brahma Columbia crescută în aer liber",
    tags: ["brahma"],
  },
  {
    slug: "expozitie-pasari-brahma-premiate-pet-shop-maier",
    w: 1200,
    h: 1600,
    alt: "Păsări Brahma premiate la expoziție, crescătoria PET SHOP MAIER",
    tags: ["brahma"],
  },
  {
    slug: "gaini-brahma-crescute-liber-gilau",
    w: 896,
    h: 1600,
    alt: "Găini și cocoși Brahma crescuți liber în Gilău, județul Cluj",
    tags: ["brahma"],
  },
  {
    slug: "furaje-man-5kg-peste-iaz",
    w: 1448,
    h: 1086,
    alt: "Furaje MAN pentru pești, saci de 5 kg, lângă iaz",
    tags: ["furaje"],
  },
  {
    slug: "furaje-man-saci-5kg",
    w: 720,
    h: 960,
    alt: "Furaje MAN în saci de 5 kg la PET SHOP MAIER Gilău",
    tags: ["furaje"],
  },
  {
    slug: "porumb-boabe-30kg-calitate-superioara",
    w: 1402,
    h: 1122,
    alt: "Porumb boabe sac de 30 kg, calitate superioară, pentru păsări, porci și iepuri",
    tags: ["furaje"],
  },
  {
    slug: "deli-nature-hippox-hrana-cai",
    w: 1200,
    h: 1600,
    alt: "Hrană pentru cai Deli Nature HippoX la PET SHOP MAIER",
    tags: ["cai"],
  },
  {
    slug: "hippox-deli-nature-grajd-cai",
    w: 1402,
    h: 1122,
    alt: "Sac Deli Nature HippoX în grajd de cai",
    tags: ["cai"],
  },
  {
    slug: "furaje-man-10kg-prepelite",
    w: 1448,
    h: 1086,
    alt: "Furaje MAN 10 kg pentru prepelițe",
    tags: ["furaje"],
  },
  {
    slug: "furaje-man-10kg-gaini-ouatoare",
    w: 720,
    h: 960,
    alt: "Furaje MAN 10 kg pentru găini ouătoare",
    tags: ["furaje"],
  },
  {
    slug: "furaje-man-10kg-pui",
    w: 720,
    h: 960,
    alt: "Furaje MAN 10 kg pentru pui",
    tags: ["furaje"],
  },
  {
    slug: "furaje-man-curcani-boboci",
    w: 1448,
    h: 1086,
    alt: "Furaje MAN pentru curcani și boboci de curcă",
    tags: ["furaje"],
  },
  {
    slug: "furaj-granulat-vaci-de-lapte-22-proteina",
    w: 1054,
    h: 1344,
    alt: "Furaj granulat MAN pentru vaci de lapte cu 22% proteină",
    tags: ["furaje"],
  },
  {
    slug: "furaje-man-vaci-de-lapte",
    w: 1086,
    h: 1448,
    alt: "Sac Furaje MAN pentru vaci de lapte la fermă",
    tags: ["furaje"],
  },
  {
    slug: "furaje-man-sac-mare",
    w: 1200,
    h: 1600,
    alt: "Sac mare Furaje MAN pentru animale de fermă",
    tags: ["furaje"],
  },
  {
    slug: "oferta-tarate-furaj-combinat-gilau",
    w: 900,
    h: 1600,
    alt: "Ofertă furaje: tărâțe 40 lei sacul de 20 kg și furaj combinat măcinat universal 60 lei sacul de 30 kg",
    tags: ["furaje"],
  },
  {
    slug: "hrana-premium-caini-kudo-wildfull-pet-shop-maier",
    w: 1254,
    h: 1254,
    alt: "Hrană premium pentru câini Kudo și Wildfull la PET SHOP MAIER",
    tags: ["caini"],
  },
  {
    slug: "hrana-pasari-ola-pet-shop-maier-gilau",
    w: 1200,
    h: 1600,
    alt: "Hrană pentru păsări OLA în magazinul PET SHOP MAIER Gilău",
    tags: ["furaje"],
  },
];

export const photoSrc = (slug: string, small = false) =>
  `/galerie/${slug}${small ? "-640" : ""}.webp`;
/** Variantă de 320px lățime (miniaturi), aceeași poză întreagă, fără crop. */
export const photoThumb = (slug: string) => `/galerie/${slug}-320.webp`;
export const photoSrcSet = (slug: string) =>
  `${photoThumb(slug)} 320w, ${photoSrc(slug, true)} 640w`;
export const photoAbs = (slug: string) => `${SITE_URL}${photoSrc(slug)}`;
export const byTag = (t: GalleryTag) => GALLERY.filter((p) => p.tags.includes(t));
export const OG_IMAGE = `${SITE_URL}/og-pet-shop-maier.jpg`;
