import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { GUIDES } from "@/components/site";
import { productOfferLd } from "@/lib/seo";
import { SORTIMENT } from "@/lib/sortiment";
import { routeTree } from "@/routeTree.gen";
import { Route as FurajCombinat } from "@/routes/furaj-combinat";
import { Route as GainiBrahma } from "@/routes/gaini-brahma";
import { Route as HranaCaini } from "@/routes/hrana-caini";
import { Route as PetShopCluj } from "@/routes/pet-shop-cluj";
import { Route as Tarate } from "@/routes/tarate";

type Head = {
  meta: { title?: string; name?: string; content?: string }[];
  links: { rel: string; href: string }[];
  scripts: { type: string; children: string }[];
};

const headOf = (route: { options: { head?: unknown } }) => (route.options.head as () => Head)();
const titleOf = (head: Head) => head.meta.find((m) => m.title)?.title ?? "";
const descriptionOf = (head: Head) =>
  head.meta.find((m) => m.name === "description")?.content ?? "";
const canonicalOf = (head: Head) => head.links.find((l) => l.rel === "canonical")?.href;
const ldOf = (head: Head) =>
  head.scripts.map((s) => JSON.parse(s.children) as Record<string, unknown>);
const ldTypes = (head: Head) => ldOf(head).flatMap((d) => d["@type"]);

const PAGES = [
  { path: "/tarate", route: Tarate, keyword: "Tărâțe" },
  { path: "/furaj-combinat", route: FurajCombinat, keyword: "Furaj combinat" },
  { path: "/gaini-brahma", route: GainiBrahma, keyword: "Găini Brahma" },
  { path: "/pet-shop-cluj", route: PetShopCluj, keyword: "Pet shop Cluj" },
  { path: "/hrana-caini", route: HranaCaini, keyword: "Hrană câini" },
] as const;

describe("SEO landing pages", () => {
  it.each(PAGES)("routes $path to its own page", ({ path }) => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    expect(router.matchRoutes(path).at(-1)?.routeId).toBe(path);
  });

  it.each(PAGES)(
    "$path leads its title with the keyword, within 60 characters",
    ({ route, keyword }) => {
      const title = titleOf(headOf(route));

      expect(title.startsWith(keyword)).toBe(true);
      expect(title.length).toBeLessThanOrEqual(60);
    },
  );

  it.each(PAGES)(
    "$path has a description, a canonical URL, FAQ and breadcrumb data",
    ({ path, route }) => {
      const head = headOf(route);

      expect(descriptionOf(head).length).toBeGreaterThan(80);
      expect(canonicalOf(head)).toBe(`https://pethopmaier.shop${path}`);
      expect(ldTypes(head)).toEqual(
        expect.arrayContaining(["FAQPage", "BreadcrumbList", "PetStore"]),
      );
    },
  );

  it.each([
    { route: Tarate, price: "40" },
    { route: FurajCombinat, price: "60" },
  ])("publishes the confirmed price of $price lei as a product offer", ({ route, price }) => {
    const product = ldOf(headOf(route)).find((d) => d["@type"] === "Product");

    expect(product?.["offers"]).toMatchObject({ price, priceCurrency: "RON" });
  });

  it("does not publish a product offer where no price is confirmed", () => {
    expect(ldTypes(headOf(GainiBrahma))).not.toContain("Product");
    expect(ldTypes(headOf(HranaCaini))).not.toContain("Product");
  });
});

describe("productOfferLd", () => {
  it("builds absolute URLs and ties the offer to the shop", () => {
    const ld = productOfferLd({
      name: "Tărâțe – sac 20 kg",
      description: "Tărâțe la sac.",
      path: "/tarate",
      image: "/galerie/x.webp",
      price: "40",
    });

    expect(ld.image).toEqual(["https://pethopmaier.shop/galerie/x.webp"]);
    expect(ld.offers.url).toBe("https://pethopmaier.shop/tarate");
    expect(ld.offers.seller).toEqual({ "@id": "https://pethopmaier.shop/#store" });
  });
});

describe("internal linking", () => {
  it("lists every guide once, including the new pages", () => {
    const paths = GUIDES.map((g) => g.to);

    expect(new Set(paths).size).toBe(paths.length);
    expect(paths).toEqual(expect.arrayContaining(["/tarate", "/furaj-combinat", "/gaini-brahma"]));
  });

  it("links priced products to their own pages", () => {
    const items = SORTIMENT.flatMap((group) => group.items);

    expect(items.find((i) => i.name === "Tărâțe")?.to).toBe("/tarate");
    expect(items.find((i) => i.name.startsWith("Furaj combinat"))?.to).toBe("/furaj-combinat");
  });
});
