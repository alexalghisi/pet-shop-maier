import { readFileSync } from "node:fs";
import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { ARTICLES, GUIDES, LEGAL_LINKS } from "@/components/site";
import { routeTree } from "@/routeTree.gen";
import { Route as CatFuraj } from "@/routes/cat-furaj-pe-luna";
import { Route as Contact } from "@/routes/contact";
import { Route as Cookies } from "@/routes/politica-cookies";
import { Route as CresterePui } from "@/routes/crestere-pui-de-o-zi";
import { Route as Depozitare } from "@/routes/depozitare-furaje";
import { Route as Despre } from "@/routes/despre-noi";
import { Route as FurajareIarna } from "@/routes/furajare-iarna";
import { Route as Ghiduri } from "@/routes/ghiduri";
import { Route as HranaCaini } from "@/routes/cum-alegi-hrana-caini";
import { Route as HranireGaini } from "@/routes/hranire-gaini-ouatoare";
import { Route as Termeni } from "@/routes/termeni-si-conditii";

type Head = {
  meta: { title?: string; name?: string; content?: string }[];
  links: { rel: string; href: string }[];
  scripts: { type: string; children: string }[];
};
const headOf = (route: { options: { head?: unknown } }) => (route.options.head as () => Head)();
const titleOf = (head: Head) => head.meta.find((m) => m.title)?.title ?? "";
const contentOf = (head: Head, name: string) =>
  head.meta.find((m) => m.name === name)?.content ?? "";
const canonicalOf = (head: Head) => head.links.find((l) => l.rel === "canonical")?.href;
const ldTypes = (head: Head) =>
  head.scripts.flatMap((s) => (JSON.parse(s.children) as Record<string, unknown>)["@type"]);

const TRUST = [
  { path: "/despre-noi", route: Despre },
  { path: "/contact", route: Contact },
  { path: "/termeni-si-conditii", route: Termeni },
  { path: "/politica-cookies", route: Cookies },
  { path: "/ghiduri", route: Ghiduri },
] as const;

const ARTICLE_ROUTES = [
  { path: "/hranire-gaini-ouatoare", route: HranireGaini },
  { path: "/crestere-pui-de-o-zi", route: CresterePui },
  { path: "/cum-alegi-hrana-caini", route: HranaCaini },
  { path: "/depozitare-furaje", route: Depozitare },
  { path: "/furajare-iarna", route: FurajareIarna },
  { path: "/cat-furaj-pe-luna", route: CatFuraj },
] as const;

const ALL = [...TRUST, ...ARTICLE_ROUTES];

describe("AdSense readiness: trust pages and guides", () => {
  it.each(ALL)("routes $path to its own indexable page", ({ path, route }) => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    const head = headOf(route);

    expect(router.matchRoutes(path).at(-1)?.routeId).toBe(path);
    expect(canonicalOf(head)).toBe(`https://pethopmaier.shop${path}`);
    expect(contentOf(head, "robots")).toContain("index, follow");
    expect(contentOf(head, "description").length).toBeGreaterThan(80);
  });

  it.each(ALL)("$path keeps its title within 60 characters", ({ route }) => {
    const title = titleOf(headOf(route));

    expect(title.length).toBeGreaterThan(20);
    expect(title.length).toBeLessThanOrEqual(60);
  });

  it.each(ARTICLE_ROUTES)("$path carries FAQ and breadcrumb data", ({ route }) => {
    expect(ldTypes(headOf(route))).toEqual(expect.arrayContaining(["FAQPage", "BreadcrumbList"]));
  });

  it("registers every article exactly once, apart from the product guides", () => {
    const articles = ARTICLES.map((a) => a.to);
    const guides: string[] = GUIDES.map((g) => g.to);

    expect([...articles].sort()).toEqual(ARTICLE_ROUTES.map((a) => a.path).sort());
    expect(articles.filter((a) => guides.includes(a))).toEqual([]);
  });

  it("links every legal and trust page from the footer", () => {
    expect(LEGAL_LINKS.map((l) => l.to)).toEqual(
      expect.arrayContaining([
        "/despre-noi",
        "/contact",
        "/termeni-si-conditii",
        "/confidentialitate",
        "/politica-cookies",
      ]),
    );
  });
});

describe("ads.txt", () => {
  it("authorises the AdSense publisher on a single well-formed line", () => {
    const lines = readFileSync("public/ads.txt", "utf8").trim().split("\n");

    expect(lines).toEqual(["google.com, pub-4079300108937036, DIRECT, f08c47fec0942fa0"]);
  });
});
