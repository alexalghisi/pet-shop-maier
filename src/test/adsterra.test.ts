import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { bannerConfig, slotDocument } from "@/lib/adsterra";

describe("Adsterra rules", () => {
  it("uses 320x50 only below 400px", () => {
    expect(bannerConfig(399)).toEqual({
      key: "79ebcae2d7c54504ff46daa6f586ca08",
      width: 320,
      height: 50,
    });
    expect(bannerConfig(400)).toEqual({
      key: "1852596c667e84526d84e4746f35be9f",
      width: 300,
      height: 250,
    });
  });
  it("loads the supplied banner endpoint", () => {
    expect(slotDocument("banner", 1280)).toContain(
      'src="https://bauval.org/22/1852596c667e84526d84e4746f35be9f"',
    );
  });
  it("loads the supplied native endpoint", () => {
    expect(slotDocument("native", 1280)).toContain(
      'src="https://bauval.org/21/295af5bb4bb21bdbb9a3dd1905d16419"',
    );
  });
  it("never loads the overlay Social Bar format (Google abusive-experience rules)", () => {
    const sources = ["src/routes/__root.tsx", "src/components/ads.tsx", "src/lib/adsterra.ts"]
      .map((f) => readFileSync(f, "utf8"))
      .join("\n");

    expect(sources).not.toContain("bauval.org/14/");
    expect(sources).not.toContain("SocialBar");
  });
});
