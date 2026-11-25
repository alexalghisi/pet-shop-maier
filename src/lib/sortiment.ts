/**
 * Products the shop has announced on its Facebook page (posts of 5–6 Oct 2026),
 * plus brands already shown on the site. The site is a presentation site: no
 * prices except confirmed ones, stock is checked on WhatsApp. Update from new
 * Facebook posts.
 */
export type SortimentItem = { name: string; detail: string; to: string };

export const SORTIMENT: { title: string; items: SortimentItem[] }[] = [
  {
    title: "Câini",
    items: [
      {
        name: "Monge Artù cu pui",
        detail: "Sac 20 kg · hrană completă pentru câini adulți, 21% proteină, produsă în Italia",
        to: "/hrana-caini",
      },
      {
        name: "Monge Artù cu vită",
        detail: "Sac 20 kg · hrană completă pentru câini adulți de toate taliile",
        to: "/hrana-caini",
      },
      { name: "Kudo și Wildfull", detail: "Hrană premium uscată pentru câini", to: "/hrana-caini" },
      {
        name: "Ulei de somon Omega 3",
        detail: "250 ml · pentru blană frumoasă, câini și pisici",
        to: "/hrana-caini",
      },
      { name: "Accesorii câini", detail: "Lese, zgărzi, boluri", to: "/accesorii-caini" },
    ],
  },
  {
    title: "Pisici",
    items: [
      {
        name: "Versele-Laga Cat Classic Oke Variety",
        detail: "Sac 4 kg · hrană uscată pentru pisici adulte",
        to: "/hrana-pisici",
      },
      {
        name: "Ulei de somon Omega 3",
        detail: "250 ml · supliment pentru blană",
        to: "/hrana-pisici",
      },
      { name: "Nisip pentru pisici", detail: "Mai multe tipuri", to: "/nisip-pisici" },
    ],
  },
  {
    title: "Porumbei",
    items: [
      {
        name: "Versele-Laga Classic Allround Eco",
        detail: "Sac 20 kg · amestec de semințe pentru hrana zilnică",
        to: "/hrana-porumbei",
      },
      {
        name: "Versele-Laga Colombine Vita",
        detail: "4 kg · supliment pentru condiție și vitalitate",
        to: "/hrana-porumbei",
      },
      {
        name: "Adăpătoare porumbei 2 L",
        detail: "Apă proaspătă mereu la dispoziție",
        to: "/hrana-porumbei",
      },
    ],
  },
  {
    title: "Găini și păsări de curte",
    items: [
      {
        name: "Furaje MAN",
        detail: "Ouătoare, pui, curcani, prepelițe · saci de 5 kg, 10 kg și mari",
        to: "/furaje-man",
      },
      {
        name: "Stimulator de ouat cu oregano",
        detail: "6 kg · pentru găini în perioada de ouat",
        to: "/furaje-gaini",
      },
      {
        name: "Calciu furajer vitaminizat Promark",
        detail: "6 kg · calciu și vitamine pentru păsările ouătoare",
        to: "/furaje-gaini",
      },
      { name: "Tărâțe", detail: "40 lei · sac 20 kg", to: "/tarate" },
      {
        name: "Furaj combinat măcinat universal",
        detail: "60 lei · sac 30 kg",
        to: "/furaj-combinat",
      },
      { name: "Porumb boabe", detail: "Sac 30 kg · calitate superioară", to: "/porumb-boabe" },
      {
        name: "Pui și ouă Brahma",
        detail: "Pui vaccinați de 2–3 luni, ouă de incubat",
        to: "/pui-brahma",
      },
    ],
  },
  {
    title: "Cai și animale mari",
    items: [
      { name: "Deli Nature HippoX", detail: "Hrană pentru cai", to: "/hrana-cai" },
      { name: "Furaj granulat vaci de lapte", detail: "22% proteină", to: "/furaje-vaci-de-lapte" },
    ],
  },
];
