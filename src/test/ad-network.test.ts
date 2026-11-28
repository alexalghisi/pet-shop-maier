import { describe, expect, it } from "vitest";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

function sourceFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) return sourceFiles(full);
    return /\.(ts|tsx)$/.test(name) && !/\.test\.tsx?$/.test(name) ? [full] : [];
  });
}

describe("ad network", () => {
  it("serves ads only through Google AdSense", () => {
    const offenders = sourceFiles("src").filter((file) =>
      /adsterra|bauval\.org|effectivecpm/i.test(readFileSync(file, "utf8")),
    );
    expect(offenders).toEqual([]);
  });

  it("lists only Google in ads.txt", () => {
    const lines = readFileSync("public/ads.txt", "utf8").trim().split("\n");
    expect(lines.every((line) => line.startsWith("google.com,"))).toBe(true);
  });
});

describe("homepage metadata", () => {
  it("keeps the meta description within the length Google shows", () => {
    const source = readFileSync("src/routes/index.tsx", "utf8");
    const description = source.match(/const DESC =\s*"([^"]+)"/)?.[1] ?? "";
    expect(description.length).toBeGreaterThanOrEqual(120);
    expect(description.length).toBeLessThanOrEqual(160);
  });
});

describe("favicon package", () => {
  it.each([
    "favicon.ico",
    "favicon-16x16.png",
    "favicon-32x32.png",
    "apple-touch-icon.png",
    "icon-192.png",
    "icon-512.png",
    "site.webmanifest",
  ])("ships %s", (file) => {
    expect(existsSync(path.join("public", file))).toBe(true);
  });

  it("declares every manifest icon that exists on disk", () => {
    const manifest = JSON.parse(readFileSync("public/site.webmanifest", "utf8"));
    for (const icon of manifest.icons) {
      expect(existsSync(path.join("public", icon.src))).toBe(true);
    }
  });
});
