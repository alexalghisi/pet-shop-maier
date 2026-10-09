export type MediaItem = { path: string; type: "image" | "video" };
export type Product = {
  id: string;
  slug: string;
  name: string;
  seo_title: string | null;
  description: string;
  price: number;
  category: string;
  in_stock: boolean;
  media: MediaItem[];
};

export const CATEGORIES = [
  { id: "caini", label: "Câini" },
  { id: "pisici", label: "Pisici" },
  { id: "furaje", label: "Furaje și păsări" },
  { id: "rozatoare", label: "Rozătoare" },
  { id: "accesorii", label: "Accesorii" },
] as const;

export const categoryLabel = (id: string) => CATEGORIES.find((c) => c.id === id)?.label ?? id;

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("ro-RO", { style: "currency", currency: "RON" }).format(n);

export const mediaUrl = (path: string) => `/media/${path}`;

export const WHATSAPP = "40758639799";
export const whatsappLink = (text?: string) =>
  `https://wa.me/${WHATSAPP}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const SITE_URL = "https://pethopmaier.shop";

export function slugify(s: string) {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
